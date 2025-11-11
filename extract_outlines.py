#!/usr/bin/env python3
"""
restoredフォルダのHTMLファイルから、胸部・腹部・神経診察のアウトラインを抽出するスクリプト
"""
from pathlib import Path
from bs4 import BeautifulSoup
import re

BASE_DIR = Path("/Users/shinyyama/Documents/医学/臨床実習/エレクラ/野口医学研究所/医療面接対策")
RESTORED_DIR = BASE_DIR / "サンプル資料" / "restored" / "1AM1100" / "S1"

def extract_outline_from_html(html_file_path: Path):
    """HTMLファイルからアウトラインを抽出"""
    with open(html_file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')

    # h1タグを抽出
    h1_tags = soup.find_all('h1')
    h2_tags = soup.find_all('h2')

    outline = []

    for h1 in h1_tags:
        h1_text = h1.get_text(strip=True)
        if h1_text:
            outline.append(('h1', h1_text))

    for h2 in h2_tags:
        h2_text = h2.get_text(strip=True)
        if h2_text:
            outline.append(('h2', h2_text))

    return outline

def extract_chest_outline():
    """胸部診察のアウトラインを抽出"""
    chest_files = [
        "B/S1BP012.html",  # 胸部診察（総論）
        "B/S1BP013.html",  # 前胸部・背部の視診
        "B/S1BP014.html",  # 胸部診察（頸部血管）
        "B/S1BP015.html",  # 頸静脈の視診
        "B/S1BP016.html",  # 頸動脈の聴診・触診
    ]

    print("=" * 80)
    print("胸部診察のアウトライン")
    print("=" * 80)

    for file_path in chest_files:
        full_path = RESTORED_DIR / file_path
        if full_path.exists():
            print(f"\n【{file_path}】")
            outline = extract_outline_from_html(full_path)
            for level, text in outline:
                indent = "  " if level == 'h1' else "    "
                print(f"{indent}{text}")

def extract_abdomen_outline():
    """腹部診察のアウトラインを抽出"""
    # まず「腹部」を含むファイルを探す
    abdomen_files = []
    b_dir = RESTORED_DIR / "B"

    if b_dir.exists():
        for html_file in sorted(b_dir.glob("S1BP*.html")):
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
                if '腹部' in content or 'abdomen' in content.lower():
                    abdomen_files.append(html_file.name)

    print("\n" + "=" * 80)
    print("腹部診察のアウトライン")
    print("=" * 80)

    if abdomen_files:
        for file_name in abdomen_files[:10]:  # 最初の10ファイル
            full_path = RESTORED_DIR / "B" / file_name
            print(f"\n【{file_name}】")
            outline = extract_outline_from_html(full_path)
            for level, text in outline:
                indent = "  " if level == 'h1' else "    "
                print(f"{indent}{text}")
    else:
        print("腹部診察のファイルが見つかりませんでした。")

def extract_neurological_outline():
    """神経診察のアウトラインを抽出"""
    neurological_files = [
        "C/S1CP001.html",  # 神経診察（総論）
        "C/S1CP002.html",
        "C/S1CP003.html",
    ]

    print("\n" + "=" * 80)
    print("神経診察のアウトライン")
    print("=" * 80)

    for file_path in neurological_files:
        full_path = RESTORED_DIR / file_path
        if full_path.exists():
            print(f"\n【{file_path}】")
            outline = extract_outline_from_html(full_path)
            for level, text in outline:
                indent = "  " if level == 'h1' else "    "
                print(f"{indent}{text}")

if __name__ == "__main__":
    extract_chest_outline()
    extract_abdomen_outline()
    extract_neurological_outline()
