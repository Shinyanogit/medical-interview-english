#!/usr/bin/env python3
"""audio_map.jsonをHTMLファイルに埋め込むスクリプト"""

import json
import re
from pathlib import Path

HTML_FILES = [
    "head-neck.html",
    "abdomen.html",
    "chest.html",
    "neurological.html"
]

def escape_js_string(s):
    """JavaScript文字列用にエスケープ"""
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').replace('\r', '\\r')

def generate_audio_map_js(audio_map):
    """audio_mapをJavaScriptオブジェクトリテラル形式に変換"""
    lines = ['        // 音声マッピングを直接定義（CORSエラーを回避するため）']
    lines.append('        const audioMap = {')

    items = []
    for key, value in sorted(audio_map.items()):
        escaped_key = escape_js_string(key)
        items.append(f'          "{escaped_key}": "{value}"')

    lines.append(',\n'.join(items))
    lines.append('        };')

    return '\n'.join(lines)

def embed_audio_map(html_file, audio_map_js):
    """HTMLファイルにaudioMapを埋め込む"""
    html_path = Path(html_file)
    if not html_path.exists():
        print(f"警告: {html_file} が見つかりません")
        return False

    content = html_path.read_text(encoding='utf-8')

    # 既存のaudioMap読み込みコードを探して置換
    # fetch('audio/audio_map.json')... のパターンを探す
    pattern = r'// 音声マッピングを読み込む.*?loadAudioMap\(\);'

    if re.search(pattern, content, re.DOTALL):
        # 既存のコードを置換
        new_content = re.sub(
            pattern,
            audio_map_js + '\n\n        // ページ読み込み時にaudio_map.jsonを読み込む（既に埋め込まれている）\n        let audioMapLoaded = true;',
            content,
            flags=re.DOTALL
        )
    else:
        # スクリプトタグ内の適切な場所に挿入
        # <script>タグの直後に挿入
        script_pattern = r'(<script>\s*)'
        if re.search(script_pattern, content):
            new_content = re.sub(
                script_pattern,
                r'\1' + audio_map_js + '\n\n        ',
                content,
                count=1
            )
        else:
            print(f"警告: {html_file} に適切な挿入場所が見つかりません")
            return False

    html_path.write_text(new_content, encoding='utf-8')
    print(f"✓ {html_file} を更新しました")
    return True

def main():
    # audio_map.jsonを読み込む
    audio_map_path = Path('audio/audio_map.json')
    if not audio_map_path.exists():
        print(f"エラー: {audio_map_path} が見つかりません")
        return

    with open(audio_map_path, 'r', encoding='utf-8') as f:
        audio_map = json.load(f)

    print(f"audio_map.jsonを読み込みました ({len(audio_map)}エントリ)")

    # JavaScriptコードを生成
    audio_map_js = generate_audio_map_js(audio_map)

    # 各HTMLファイルに埋め込む
    for html_file in HTML_FILES:
        embed_audio_map(html_file, audio_map_js)

    print("\n完了しました！")

if __name__ == '__main__':
    main()
