#!/usr/bin/env python3
"""
head-neck.htmlからAI生成の例文を抽出して音声ファイルを生成するスクリプト
"""
import re
import os
import json
from hashlib import md5
from pathlib import Path
from openai import OpenAI
from bs4 import BeautifulSoup

def get_openai_client() -> OpenAI:
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise RuntimeError("OPENAI_API_KEY env var is required for this script")
    return OpenAI(api_key=api_key)


def extract_ai_questions_from_html(html_file_path: str) -> list[str]:
    """head-neck.htmlからAI生成の質問文を抽出"""
    with open(html_file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')

    # data-text属性に(ai)を含む要素を抽出
    questions = []
    for item in soup.find_all('li', class_='question-item'):
        data_text = item.get('data-text', '')
        if '(ai)' in data_text:
            # (ai)マークを削除してテキストを取得
            text = data_text.replace(' (ai)', '').strip()
            if text:
                questions.append(text)

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


def generate_audio_files(html_file_path: str, output_dir: str = "audio", voice: str = "alloy", overwrite: bool = False):
    """head-neck.htmlからAI生成の質問を抽出して音声ファイルを生成"""
    client = get_openai_client()
    questions = extract_ai_questions_from_html(html_file_path)

    print(f"Found {len(questions)} AI-generated questions")
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

    # 既存のaudio_map.jsonを読み込んでマージ
    map_file = os.path.join(output_dir, "audio_map.json")
    existing_map = {}
    if os.path.exists(map_file):
        with open(map_file, 'r', encoding='utf-8') as f:
            existing_map = json.load(f)

    # 新しいマッピングを追加
    existing_map.update(audio_map)

    # マッピングJSONファイルを保存
    with open(map_file, 'w', encoding='utf-8') as f:
        json.dump(existing_map, f, ensure_ascii=False, indent=2)
    print(f"Audio mapping saved to: {map_file}")

    print(f"Completed!")
    print(f"  Generated: {generated_count} files")
    print(f"  Skipped: {skipped_count} files")
    print(f"  Output directory: {os.path.abspath(output_dir)}")


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Generate audio files for AI-generated questions in head-neck.html")
    parser.add_argument(
        "--html-file",
        default="head-neck.html",
        help="Path to HTML file (default: head-neck.html)"
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

    generate_audio_files(args.html_file, args.output_dir, args.voice, args.overwrite)
