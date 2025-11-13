#!/usr/bin/env python3
"""
腹部、胸部、神経診察のHTML(ファイルから英語表現を抽出し、
OpenAI TTS APIを使用して音声ファイルを生成するスクリプト
"""

import os
import hashlib
import json
import re
from pathlib import Path
from openai import OpenAI
from bs4 import BeautifulSoup

# 環境変数からAPIキーを取得
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise RuntimeError("環境変数OPENAI_API_KEYが設定されていません。設定してください。")

client = OpenAI(api_key=api_key)

BASE_DIR = Path(__file__).parent
AUDIO_DIR = BASE_DIR / "audio"
AUDIO_DIR.mkdir(exist_ok=True)

HTML_FILES = [
    "abdomen.html",
    "chest.html",
    "neurological.html"
]

def extract_questions_from_html(html_file):
    """HTMLファイルから.question-itemのdata-text属性を抽出"""
    questions = []

    with open(html_file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    # .question-item要素を検索
    question_items = soup.find_all('li', class_='question-item')

    for item in question_items:
        # data-text属性を取得
        data_text = item.get('data-text', '').strip()
        if data_text:
            # (ai)タグを削除
            clean_text = data_text.replace('(ai)', '').strip()
            # ()内のパラフレーズを削除
            clean_text = re.sub(r'\([^)]*\)', '', clean_text)
            # 複数のスペースを1つに
            clean_text = ' '.join(clean_text.split())
            # 末尾のピリオドやスペースを整理
            clean_text = clean_text.strip()

            if clean_text:
                questions.append(clean_text)

    return questions

def generate_sound(text, filename):
    """OpenAI TTS APIを使用して音声ファイルを生成"""
    try:
        response = client.audio.speech.create(
            model="tts-1-hd",  # 高品質モデルを使用
            voice="nova",
            input=text
        )

        speech_file_path = AUDIO_DIR / filename
        response.stream_to_file(speech_file_path)

        return True
    except Exception as e:
        print(f"音声生成エラー ({text}): {e}")
        return False

def generate_audio_files(questions, audio_map, overwrite=False):
    """複数の質問に対して音声ファイルを生成"""
    success_count = 0
    skip_count = 0
    error_count = 0

    for i, question in enumerate(questions, 1):
        # MD5ハッシュからファイル名を生成
        hash_object = hashlib.md5(question.encode())
        filename = f"{hash_object.hexdigest()}.mp3"
        filepath = AUDIO_DIR / filename

        # 既存ファイルの処理
        if filepath.exists() and not overwrite:
            print(f"[{i}/{len(questions)}] スキップ: {question[:50]}...")
            skip_count += 1
            # audio_mapに追加（既存のマッピング）
            audio_map[question] = filename
            continue

        # 音声生成
        print(f"[{i}/{len(questions)}] 生成中: {question[:50]}...")
        if generate_sound(question, filename):
            audio_map[question] = filename
            success_count += 1
        else:
            error_count += 1

    print(f"\n=== 音声生成完了 ===")
    print(f"成功: {success_count}件")
    print(f"スキップ: {skip_count}件")
    print(f"エラー: {error_count}件")
    print(f"合計: {len(questions)}件")

    return audio_map

def main():
    print("=== 身体診察（腹部・胸部・神経）の音声ファイル生成 ===\n")

    # 既存のaudio_map.jsonを読み込み
    audio_map_file = AUDIO_DIR / "audio_map.json"
    if audio_map_file.exists():
        with open(audio_map_file, 'r', encoding='utf-8') as f:
            audio_map = json.load(f)
        print(f"既存のマッピング: {len(audio_map)}件\n")
    else:
        audio_map = {}

    # 各HTMLファイルから質問を抽出
    all_questions = []
    for html_file in HTML_FILES:
        html_path = BASE_DIR / html_file
        if not html_path.exists():
            print(f"警告: {html_file} が見つかりません。スキップします。")
            continue

        print(f"処理中: {html_file}")
        questions = extract_questions_from_html(html_path)
        print(f"  → {len(questions)}個の質問を抽出\n")
        all_questions.extend(questions)

    # 重複を削除
    unique_questions = list(dict.fromkeys(all_questions))
    print(f"重複を除いた総質問数: {len(unique_questions)}件\n")

    # 音声ファイルを生成
    audio_map = generate_audio_files(unique_questions, audio_map, overwrite=False)

    # audio_map.jsonに保存
    with open(audio_map_file, 'w', encoding='utf-8') as f:
        json.dump(audio_map, f, ensure_ascii=False, indent=2)

    print(f"\naudio_map.jsonを更新しました（総マッピング: {len(audio_map)}件）")

if __name__ == "__main__":
    main()
