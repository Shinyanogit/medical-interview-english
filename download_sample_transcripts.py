#!/usr/bin/env python3
"""
最初の2つの動画のみをサンプルとして取得するスクリプト
"""

import os
import re
from pathlib import Path
import time

try:
    from youtube_transcript_api import YouTubeTranscriptApi
    from youtube_transcript_api.formatters import TextFormatter
except ImportError:
    print("youtube-transcript-apiがインストールされていません。")
    exit(1)

BASE_DIR = Path(__file__).parent
TRANSCRIPT_DIR = BASE_DIR / "サンプル資料" / "Data" / "Wisconsin" / "身体診察_追加"

# 最初の2つの動画のみ
SAMPLE_VIDEOS = [
    {
        'id': 'iUCHCTOKiA8',
        'url': 'https://www.youtube.com/watch?v=iUCHCTOKiA8',
        'title': '01.Abdomen Exam',
        'source_name': 'Additional_Head_Neck_1'
    },
    {
        'id': '2umCjR2vRhU',
        'url': 'https://www.youtube.com/watch?v=2umCjR2vRhU',
        'title': '01a.Lower Extremities Exam -part 1',
        'source_name': 'Additional_Head_Neck_2'
    }
]

def format_text(text: str) -> str:
    """文字起こしテキストを整形"""
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    single_line = ' '.join(lines)
    single_line = re.sub(r'\s+', ' ', single_line)
    single_line = re.sub(r'\s+(um|uh|ah|er)\s+', r' \1 ', single_line, flags=re.IGNORECASE)

    formatted = re.sub(r'([.!?])\s+([A-Z])', r'\1\n\n\2', single_line)

    abbreviations = ['Dr', 'Mr', 'Mrs', 'Ms', 'Prof', 'etc', 'e.g', 'i.e', 'vs']
    for abbr in abbreviations:
        formatted = re.sub(rf'{abbr}\.\n\n', f'{abbr}. ', formatted)

    paragraphs = [p.strip() for p in formatted.split('\n\n') if p.strip()]
    final_paragraphs = []

    for para in paragraphs:
        if len(para) > 350:
            words = para.split()
            current_para = ""

            for word in words:
                if len(current_para) + len(word) + 1 > 300 and current_para:
                    if current_para.rstrip()[-1] in '.!?':
                        final_paragraphs.append(current_para.strip())
                        current_para = word + " "
                    elif '.' in current_para or '?' in current_para or '!' in current_para:
                        last_period = max(
                            current_para.rfind('.'),
                            current_para.rfind('?'),
                            current_para.rfind('!')
                        )
                        if last_period > len(current_para) * 0.5:
                            final_paragraphs.append(current_para[:last_period+1].strip())
                            current_para = current_para[last_period+1:].strip() + " " + word + " "
                        else:
                            current_para += word + " "
                    else:
                        current_para += word + " "
                else:
                    current_para += word + " "

            if current_para.strip():
                final_paragraphs.append(current_para.strip())
        else:
            final_paragraphs.append(para)

    return '\n\n'.join(final_paragraphs)

def sanitize_filename(filename: str) -> str:
    """ファイル名として使用できない文字を置換"""
    invalid_chars = '<>:"/\\|?*'
    for char in invalid_chars:
        filename = filename.replace(char, '_')
    if len(filename) > 200:
        filename = filename[:200]
    return filename.strip()

def main():
    """メイン処理"""
    print("=" * 60)
    print("サンプル動画の文字起こし取得")
    print("=" * 60)

    TRANSCRIPT_DIR.mkdir(parents=True, exist_ok=True)

    print(f"\n対象動画数: {len(SAMPLE_VIDEOS)}個")
    print(f"出力先: {TRANSCRIPT_DIR}")
    print("\n文字起こしを取得中...")
    print("-" * 60)

    api = YouTubeTranscriptApi()
    success_count = 0
    error_count = 0

    for i, video in enumerate(SAMPLE_VIDEOS, 1):
        video_id = video['id']
        title = video['title']

        print(f"\n[{i}/{len(SAMPLE_VIDEOS)}] {title}")
        print(f"  Video ID: {video_id}")
        print(f"  URL: {video['url']}")

        try:
            # 字幕を取得
            transcript = api.fetch(video_id, languages=['en'])
            formatter = TextFormatter()
            text = formatter.format_transcript(transcript)

            # 整形
            formatted_text = format_text(text)

            # ファイルに保存
            safe_title = sanitize_filename(title)
            filename = f"{video_id}_{safe_title}.txt"
            filepath = TRANSCRIPT_DIR / filename

            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(f"動画ID: {video_id}\n")
                f.write(f"タイトル: {title}\n")
                f.write(f"動画URL: {video['url']}\n")
                f.write(f"ソース名: {video['source_name']}\n")
                f.write(f"言語: en\n")
                f.write("=" * 80 + "\n\n")
                f.write(formatted_text)

            print(f"  ✓ 保存完了: {filename}")
            print(f"  文字数: {len(formatted_text)}")
            success_count += 1

        except Exception as e:
            print(f"  ✗ エラー: {str(e)[:100]}")
            error_count += 1

        if i < len(SAMPLE_VIDEOS):
            time.sleep(5)

    print("\n" + "=" * 60)
    print("完了")
    print("=" * 60)
    print(f"成功: {success_count}個")
    print(f"失敗: {error_count}個")
    print(f"合計: {len(SAMPLE_VIDEOS)}個")

if __name__ == "__main__":
    main()
