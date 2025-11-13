#!/usr/bin/env python3
"""
追加のYouTube動画から文字起こしデータを取得し、患者への指示を抽出するスクリプト
動画ごとにファイルを作成し、動画リンクも含める
"""

import os
import re
import json
from pathlib import Path
from urllib.parse import urlparse, parse_qs
import time

try:
    from youtube_transcript_api import YouTubeTranscriptApi
    from youtube_transcript_api.formatters import TextFormatter
except ImportError:
    print("youtube-transcript-apiがインストールされていません。")
    print("インストール: pip install youtube-transcript-api")
    exit(1)

try:
    import yt_dlp
except ImportError:
    print("yt-dlpがインストールされていません。")
    print("インストール: pip install yt-dlp")
    exit(1)

# パス設定
BASE_DIR = Path(__file__).parent
TRANSCRIPT_DIR = BASE_DIR / "サンプル資料" / "Data" / "Wisconsin" / "身体診察_追加"
INSTRUCTION_DIR = BASE_DIR / "サンプル資料" / "Data" / "Wisconsin" / "患者への指示_追加"

# 対象動画URL（動画IDまたは再生リストURL）
TARGET_VIDEOS = [
    {
        'url': 'https://www.youtube.com/watch?v=iUCHCTOKiA8&list=PL7BA2576027185DF3',
        'name': 'Additional_Head_Neck_1'
    },
    {
        'url': 'https://www.youtube.com/watch?v=2umCjR2vRhU&list=PLC7C8F7FBEC35295D',
        'name': 'Additional_Head_Neck_2'
    },
    {
        'url': 'https://www.youtube.com/playlist?list=PLi9o6OEHhWUgfQ86kx5mKkRdaSJJfgFI1',
        'name': 'Additional_Head_Neck_3'
    }
]

def extract_video_id(url: str) -> tuple[str, str]:
    """URLから動画IDと再生リストIDを抽出"""
    parsed = urlparse(url)
    query_params = parse_qs(parsed.query)

    video_id = query_params.get('v', [''])[0]
    playlist_id = query_params.get('list', [''])[0]

    return video_id, playlist_id

def get_videos_from_url(url: str, name: str):
    """URLから動画情報を取得（単一動画または再生リスト）"""
    video_id, playlist_id = extract_video_id(url)

    videos = []

    if playlist_id:
        # 再生リストの場合
        ydl_opts = {
            'quiet': True,
            'no_warnings': True,
            'extract_flat': True,
        }

        playlist_url = f"https://www.youtube.com/playlist?list={playlist_id}"

        try:
            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                info = ydl.extract_info(playlist_url, download=False)

                if 'entries' in info:
                    for entry in info['entries']:
                        if entry:
                            videos.append({
                                'id': entry.get('id'),
                                'title': entry.get('title', 'Unknown'),
                                'url': f"https://www.youtube.com/watch?v={entry.get('id')}",
                                'source_name': name
                            })
        except Exception as e:
            print(f"エラー: 再生リストの取得に失敗しました: {e}")

    elif video_id:
        # 単一動画の場合
        try:
            ydl_opts = {
                'quiet': True,
                'no_warnings': True,
            }

            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                info = ydl.extract_info(f"https://www.youtube.com/watch?v={video_id}", download=False)
                videos.append({
                    'id': video_id,
                    'title': info.get('title', 'Unknown'),
                    'url': f"https://www.youtube.com/watch?v={video_id}",
                    'source_name': name
                })
        except Exception as e:
            print(f"エラー: 動画情報の取得に失敗しました: {e}")

    return videos

def get_transcript(video_id: str, languages: list = ['en', 'ja']):
    """動画の文字起こしを取得"""
    try:
        api = YouTubeTranscriptApi()

        try:
            fetched_transcript = api.fetch(video_id, languages=languages)
            formatter = TextFormatter()
            text = formatter.format_transcript(fetched_transcript)

            transcript_list = api.list(video_id)
            available_languages = [t.language_code for t in transcript_list]

            return {
                'success': True,
                'language': fetched_transcript.language_code if hasattr(fetched_transcript, 'language_code') else languages[0],
                'text': text,
                'available_languages': available_languages
            }
        except:
            transcript_list = api.list(video_id)
            available_languages = [t.language_code for t in transcript_list]

            if not available_languages:
                return {
                    'success': False,
                    'error': '字幕が利用できません',
                    'available_languages': []
                }

            try:
                transcript = transcript_list.find_transcript([available_languages[0]]).fetch()
                formatter = TextFormatter()
                text = formatter.format_transcript(transcript)
                return {
                    'success': True,
                    'language': available_languages[0],
                    'text': text,
                    'available_languages': available_languages
                }
            except Exception as e:
                return {
                    'success': False,
                    'error': f'字幕の取得に失敗しました: {str(e)}',
                    'available_languages': available_languages
                }
    except Exception as e:
        return {
            'success': False,
            'error': str(e),
            'available_languages': []
        }

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

def save_transcript(video: dict, transcript_data: dict, output_dir: Path):
    """文字起こしデータを保存（動画リンクを含む）"""
    output_dir.mkdir(parents=True, exist_ok=True)

    safe_title = sanitize_filename(video['title'])
    filename = f"{video['id']}_{safe_title}.txt"
    filepath = output_dir / filename

    if filepath.exists():
        print(f"  ⊙ 既に存在: {filename} (スキップ)")
        return True

    if transcript_data['success']:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(f"動画ID: {video['id']}\n")
            f.write(f"タイトル: {video['title']}\n")
            f.write(f"動画URL: {video['url']}\n")
            f.write(f"ソース名: {video['source_name']}\n")
            f.write(f"言語: {transcript_data.get('language', 'Unknown')}\n")
            f.write(f"自動生成: {transcript_data.get('is_generated', False)}\n")
            f.write(f"利用可能な言語: {', '.join(transcript_data.get('available_languages', []))}\n")
            f.write("=" * 80 + "\n\n")
            f.write(transcript_data['text'])

        print(f"  ✓ 保存完了: {filename}")
        return True
    else:
        error_file = output_dir / f"{video['id']}_ERROR.txt"
        if error_file.exists():
            print(f"  ⊙ エラー（既存）: {transcript_data.get('error', 'Unknown error')[:50]}...")
            return False

        with open(error_file, 'w', encoding='utf-8') as f:
            f.write(f"動画ID: {video['id']}\n")
            f.write(f"タイトル: {video['title']}\n")
            f.write(f"動画URL: {video['url']}\n")
            f.write(f"エラー: {transcript_data.get('error', 'Unknown error')}\n")
            f.write(f"利用可能な言語: {', '.join(transcript_data.get('available_languages', []))}\n")

        print(f"  ✗ エラー: {transcript_data.get('error', 'Unknown error')[:80]}")
        return False

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
    print("追加動画の文字起こし取得スクリプト")
    print("=" * 60)

    TRANSCRIPT_DIR.mkdir(parents=True, exist_ok=True)

    all_videos = []

    # 各URLから動画を取得
    for target in TARGET_VIDEOS:
        print(f"\n処理中: {target['name']}")
        print(f"URL: {target['url']}")
        videos = get_videos_from_url(target['url'], target['name'])
        all_videos.extend(videos)
        print(f"  動画数: {len(videos)}個")

    if not all_videos:
        print("\nエラー: 動画が見つかりませんでした。")
        return

    print(f"\n合計動画数: {len(all_videos)}個")
    print(f"出力先: {TRANSCRIPT_DIR}")
    print("\n文字起こしを取得中...")
    print("-" * 60)

    success_count = 0
    error_count = 0

    for i, video in enumerate(all_videos, 1):
        video_id = video['id']
        title = video['title']

        print(f"\n[{i}/{len(all_videos)}] {title}")
        print(f"  Video ID: {video_id}")
        print(f"  URL: {video['url']}")

        transcript_data = get_transcript(video_id, languages=['en', 'ja'])

        if transcript_data['success']:
            # 整形して保存
            formatted_text = format_text(transcript_data['text'])
            transcript_data['text'] = formatted_text

        if save_transcript(video, transcript_data, TRANSCRIPT_DIR):
            success_count += 1
        else:
            error_count += 1

        time.sleep(5)  # 待機時間を5秒に延長（IPブロック対策）

    print("\n" + "=" * 60)
    print("完了")
    print("=" * 60)
    print(f"成功: {success_count}個")
    print(f"失敗: {error_count}個")
    print(f"合計: {len(all_videos)}個")
    print(f"\n出力先: {TRANSCRIPT_DIR}")

if __name__ == "__main__":
    main()
