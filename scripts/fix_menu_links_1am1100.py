#!/usr/bin/env python3
"""
1AM1100のメニューページのリンクをローカルファイルパスに変換するスクリプト
"""
import os
import re
from pathlib import Path
from typing import Dict, Optional

BASE_DIR = Path("/Users/shinyyama/Documents/プログラミング/medical-interview-english/local/restored/1AM1100/S1")

def find_id_in_files(id_pattern: str) -> Optional[tuple]:
    """
    IDを含むHTMLファイルを検索し、ファイルパスとアンカーを返す
    """
    # IDパターンからセクションを特定（例: S1A00100M00000 -> A）
    # S1Zで始まるIDは0セクション（introduction）を指す
    if id_pattern.startswith('S1Z') and len(id_pattern) > 3:
        # S1Z10100M00000 -> 0セクション
        section = '0'
    else:
        match = re.match(r'S1([A-Z0-9])(\d+)M\d+', id_pattern)
        if not match:
            return None
        section = match.group(1)

    # セクションディレクトリを特定
    section_dir = BASE_DIR / section
    if not section_dir.exists():
        return None

    # セクション内のすべてのHTMLファイルを検索
    for html_file in sorted(section_dir.glob("*.html")):
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
                # IDが含まれているかチェック
                if id_pattern in content:
                    # 相対パスを計算（menu/から見た相対パス）
                    relative_path = f"../{section}/{html_file.name}#{id_pattern}"
                    return (relative_path, html_file)
        except Exception as e:
            print(f"Error reading {html_file}: {e}")
            continue

    return None

def fix_menu_file(menu_file: Path):
    """
    メニューファイルのリンクを修正
    """
    with open(menu_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 外部URLのパターンを検索
    pattern = r'href="http://medilink-study\.com/medilink_app/nmref\?id=([^"]+)"'

    def replace_link(match):
        id_value = match.group(1)
        result = find_id_in_files(id_value)
        if result:
            relative_path, _ = result
            return f'href="{relative_path}"'
        else:
            # 見つからない場合は元のリンクを保持
            print(f"Warning: Could not find file for ID {id_value}")
            return match.group(0)

    new_content = re.sub(pattern, replace_link, content)

    if new_content != content:
        with open(menu_file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {menu_file.name}")
        return True
    else:
        print(f"No changes needed: {menu_file.name}")
        return False

def main():
    """メイン処理"""
    menu_dir = BASE_DIR / "menu"
    if not menu_dir.exists():
        print(f"Menu directory not found: {menu_dir}")
        return

    menu_files = list(menu_dir.glob("*.html"))
    print(f"Found {len(menu_files)} menu files")

    for menu_file in menu_files:
        fix_menu_file(menu_file)

    print("Done!")

if __name__ == '__main__':
    main()
