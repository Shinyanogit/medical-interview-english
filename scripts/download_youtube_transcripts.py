#!/usr/bin/env python3
"""
YouTube再生リストから文字起こしデータを取得するスクリプト
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
OUTPUT_DIR = BASE_DIR / "サンプル資料" / "Data" / "Wisconsin" / "身体診察"

def extract_playlist_id(url: str) -> str:
    """URLから再生リストIDを抽出"""
    # 再生リストURLの形式: https://www.youtube.com/playlist?list=PLxxxxx
    # または: https://www.youtube.com/watch?v=xxxxx&list=PLxxxxx

    parsed = urlparse(url)
    query_params = parse_qs(parsed.query)

    if 'list' in query_params:
        return query_params['list'][0]
    else:
        raise ValueError("URLから再生リストIDを取得できませんでした")

def get_videos_from_playlist(playlist_id: str):
    """再生リストから動画IDのリストを取得"""
    ydl_opts = {
        'quiet': True,
        'no_warnings': True,
        'extract_flat': True,
    }

    playlist_url = f"https://www.youtube.com/playlist?list={playlist_id}"

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(playlist_url, download=False)
            videos = []

            if 'entries' in info:
                for entry in info['entries']:
                    if entry:
                        video_id = entry.get('id')
                        title = entry.get('title', 'Unknown')
                        if video_id:
                            videos.append({
                                'id': video_id,
                                'title': title,
                                'url': f"https://www.youtube.com/watch?v={video_id}"
                            })

            return videos
    except Exception as e:
        print(f"エラー: 再生リストの取得に失敗しました: {e}")
        return []

def get_transcript(video_id: str, languages: list = ['en', 'ja']):
    """動画の文字起こしを取得"""
    try:
        # YouTubeTranscriptApiのインスタンスを作成
        api = YouTubeTranscriptApi()

        # まずfetchメソッドで直接取得を試みる（推奨方法）
        try:
            fetched_transcript = api.fetch(video_id, languages=languages)
            formatter = TextFormatter()
            text = formatter.format_transcript(fetched_transcript)

            # 利用可能な言語を取得
            transcript_list = api.list(video_id)
            available_languages = [t.language_code for t in transcript_list]

            return {
                'success': True,
                'language': fetched_transcript.language_code if hasattr(fetched_transcript, 'language_code') else languages[0],
                'text': text,
                'available_languages': available_languages
            }
        except:
            # fetchが失敗した場合、listから取得を試みる
            transcript_list = api.list(video_id)
            available_languages = [t.language_code for t in transcript_list]

            if not available_languages:
                return {
                    'success': False,
                    'error': '字幕が利用できません',
                    'available_languages': []
                }

            # 利用可能な最初の字幕を取得
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

def sanitize_filename(filename: str) -> str:
    """ファイル名として使用できない文字を置換"""
    # Windows/Mac/Linuxで使用できない文字を置換
    invalid_chars = '<>:"/\\|?*'
    for char in invalid_chars:
        filename = filename.replace(char, '_')
    # 長すぎるファイル名を短縮
    if len(filename) > 200:
        filename = filename[:200]
    return filename.strip()

def save_transcript(video_id: str, title: str, transcript_data: dict, output_dir: Path):
    """文字起こしデータを保存"""
    output_dir.mkdir(parents=True, exist_ok=True)

    # ファイル名を生成
    safe_title = sanitize_filename(title)
    filename = f"{video_id}_{safe_title}.txt"
    filepath = output_dir / filename

    # 既にファイルが存在する場合はスキップ
    if filepath.exists():
        print(f"  ⊙ 既に存在: {filename} (スキップ)")
        return True

    # テキストファイルとして保存
    if transcript_data['success']:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(f"動画ID: {video_id}\n")
            f.write(f"タイトル: {title}\n")
            f.write(f"言語: {transcript_data.get('language', 'Unknown')}\n")
            f.write(f"自動生成: {transcript_data.get('is_generated', False)}\n")
            f.write(f"利用可能な言語: {', '.join(transcript_data.get('available_languages', []))}\n")
            f.write("=" * 80 + "\n\n")
            f.write(transcript_data['text'])

        print(f"  ✓ 保存完了: {filename}")
        return True
    else:
        error_file = output_dir / f"{video_id}_ERROR.txt"
        # エラーファイルも既に存在する場合はスキップ
        if error_file.exists():
            print(f"  ⊙ エラー（既存）: {transcript_data.get('error', 'Unknown error')[:50]}...")
            return False

        with open(error_file, 'w', encoding='utf-8') as f:
            f.write(f"動画ID: {video_id}\n")
            f.write(f"タイトル: {title}\n")
            f.write(f"エラー: {transcript_data.get('error', 'Unknown error')}\n")
            f.write(f"利用可能な言語: {', '.join(transcript_data.get('available_languages', []))}\n")

        print(f"  ✗ エラー: {transcript_data.get('error', 'Unknown error')[:80]}")
        return False

def main():
    """メイン処理"""
    print("=" * 60)
    print("YouTube再生リスト文字起こし取得スクリプト")
    print("=" * 60)

    # 再生リストURL
    playlist_url = "https://www.youtube.com/watch?v=REJrguhSig4&list=PL58EB7187C918A367&index=2"

    print(f"\n再生リストURL: {playlist_url}")

    # 再生リストIDを抽出
    try:
        playlist_id = extract_playlist_id(playlist_url)
        print(f"再生リストID: {playlist_id}")
    except Exception as e:
        print(f"エラー: {e}")
        return

    # 再生リストから動画リストを取得
    print("\n再生リストから動画を取得中...")
    videos = get_videos_from_playlist(playlist_id)

    if not videos:
        print("動画が見つかりませんでした。")
        return

    print(f"動画数: {len(videos)}個")

    # 出力ディレクトリを作成
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"\n出力先: {OUTPUT_DIR}")

    # 各動画の文字起こしを取得
    success_count = 0
    error_count = 0

    print("\n文字起こしを取得中...")
    print("-" * 60)

    for i, video in enumerate(videos, 1):
        video_id = video['id']
        title = video['title']

        print(f"\n[{i}/{len(videos)}] {title}")
        print(f"  Video ID: {video_id}")

        # 文字起こしを取得
        transcript_data = get_transcript(video_id, languages=['ja', 'en'])

        # 保存
        if save_transcript(video_id, title, transcript_data, OUTPUT_DIR):
            success_count += 1
        else:
            error_count += 1

        # API制限を避けるために待機（YouTubeのレート制限対策）
        time.sleep(3)  # 3秒待機してIPブロックを回避

    # 結果を表示
    print("\n" + "=" * 60)
    print("完了")
    print("=" * 60)
    print(f"成功: {success_count}個")
    print(f"失敗: {error_count}個")
    print(f"合計: {len(videos)}個")
    print(f"\n出力先: {OUTPUT_DIR}")

if __name__ == "__main__":
    main()
