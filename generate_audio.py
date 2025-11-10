#!/usr/bin/env python3
"""
医療面接対策用の音声ファイル生成スクリプト
note.mdから質問文を抽出し、OpenAI TTS APIで音声ファイルを生成します。
"""
import re
import os
import json
from hashlib import md5
from pathlib import Path
from openai import OpenAI

def get_openai_client() -> OpenAI:
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise RuntimeError("OPENAI_API_KEY env var is required for this script")
    return OpenAI(api_key=api_key)


def extract_questions_from_markdown(md_file_path: str) -> list[str]:
    """Markdownファイルから質問文を抽出"""
    with open(md_file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 引用符で囲まれた質問文を抽出
    pattern = r'"([^"]+)"'
    questions = re.findall(pattern, content)

    return questions


def generate_sound(client: OpenAI, text: str, output_dir: str = "audio", voice: str = "alloy", overwrite: bool = False) -> tuple[str, str]:
    """OpenAI TTS APIで音声ファイルを生成
    Returns: (filepath, filename) のタプル
    """
    # 出力ディレクトリを作成
    os.makedirs(output_dir, exist_ok=True)

    # ファイル名を生成（テキストのハッシュ値を使用）
    filename = md5(text.encode("utf-8")).hexdigest() + ".mp3"
    filepath = os.path.join(output_dir, filename)

    # 既にファイルが存在する場合の処理
    if os.path.exists(filepath) and not overwrite:
        print(f"  Skipping (already exists): {text[:50]}...")
        return filepath, filename

    try:
        response = client.audio.speech.create(
            model="tts-1-hd",  # 高品質なHDモデルを使用
            voice=voice,  # alloy, echo, fable, onyx, nova, shimmer
            input=text
        )
        response.stream_to_file(filepath)
        print(f"  Generated: {text[:50]}...")
        return filepath, filename
    except Exception as e:
        print(f"  Error generating sound for '{text[:50]}...': {e}")
        return "", ""


def generate_audio_files(md_file_path: str, output_dir: str = "audio", voice: str = "alloy", overwrite: bool = False):
    """note.mdから質問を抽出して音声ファイルを生成"""
    client = get_openai_client()
    questions = extract_questions_from_markdown(md_file_path)

    print(f"Found {len(questions)} questions")
    print(f"Generating audio files to '{output_dir}' directory...")
    if overwrite:
        print("Overwrite mode: Existing files will be regenerated")
    print()

    generated_count = 0
    skipped_count = 0
    audio_map = {}  # テキストとファイル名のマッピング

    for i, question in enumerate(questions, 1):
        print(f"[{i}/{len(questions)}] Processing: {question[:50]}...")
        filepath, filename = generate_sound(client, question, output_dir, voice, overwrite)
        if filepath:
            generated_count += 1
            audio_map[question] = filename
        else:
            skipped_count += 1
        print()

    # マッピングJSONファイルを保存
    map_file = os.path.join(output_dir, "audio_map.json")
    with open(map_file, 'w', encoding='utf-8') as f:
        json.dump(audio_map, f, ensure_ascii=False, indent=2)
    print(f"Audio mapping saved to: {map_file}")

    print(f"Completed!")
    print(f"  Generated: {generated_count} files")
    print(f"  Skipped: {skipped_count} files")
    print(f"  Output directory: {os.path.abspath(output_dir)}")


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Generate audio files for medical interview questions")
    parser.add_argument(
        "--md-file",
        default="note.md",
        help="Path to markdown file (default: note.md)"
    )
    parser.add_argument(
        "--output-dir",
        default="audio",
        help="Output directory for audio files (default: audio)"
    )
    parser.add_argument(
        "--voice",
        default="alloy",
        choices=["alloy", "echo", "fable", "onyx", "nova", "shimmer"],
        help="Voice to use for TTS (default: alloy)"
    )
    parser.add_argument(
        "--overwrite",
        action="store_true",
        help="Overwrite existing audio files"
    )

    args = parser.parse_args()

    generate_audio_files(args.md_file, args.output_dir, args.voice, args.overwrite)
