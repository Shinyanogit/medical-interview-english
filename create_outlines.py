#!/usr/bin/env python3
"""
restoredフォルダのHTMLファイルから、腹部・胸部・神経診察のアウトラインを抽出して
各HTMLファイルに追加するスクリプト
"""
from pathlib import Path
from bs4 import BeautifulSoup

BASE_DIR = Path("/Users/shinyyama/Documents/医学/臨床実習/エレクラ/野口医学研究所/医療面接対策")
RESTORED_DIR = BASE_DIR / "サンプル資料" / "restored" / "1AM1100" / "S1"

def extract_section_outline(html_file_path: Path):
    """HTMLファイルからセクションのアウトラインを抽出"""
    with open(html_file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')

    # h1タグを抽出（メインタイトル）
    h1_tags = soup.find_all('h1')
    main_title = None
    for h1 in h1_tags:
        text = h1.get_text(strip=True)
        if text and text not in ['', '手順', '基本事項', '全体像']:
            main_title = text
            break

    # h2タグを抽出（サブセクション）
    h2_tags = soup.find_all('h2')
    subsections = []
    for h2 in h2_tags:
        text = h2.get_text(strip=True)
        if text and text not in ['', '手順', '基本事項', '全体像']:
            subsections.append(text)

    return main_title, subsections

def get_abdomen_outline():
    """腹部診察のアウトラインを取得"""
    abdomen_files = [
        ("B/S1BP030.html", "腹部診察"),
        ("B/S1BP031.html", "腹部の視診"),
        ("B/S1BP032.html", "腹部の聴診"),
        ("B/S1BP033.html", "腹部の打診"),
        ("B/S1BP034.html", "腹部の叩打診"),
        ("B/S1BP035.html", "腹部全体の触診"),
        ("B/S1BP036.html", "肝臓の触診"),
        ("B/S1BP037.html", "脾臓の触診"),
        ("B/S1BP038.html", "腎臓の触診"),
        ("B/S1BP039.html", "腹水の評価"),
        ("B/S1BP040.html", "腹膜刺激徴候の評価"),
    ]

    outline = []
    for file_path, default_title in abdomen_files:
        full_path = RESTORED_DIR / file_path
        if full_path.exists():
            main_title, subsections = extract_section_outline(full_path)
            title = main_title if main_title else default_title
            outline.append({
                'title': title,
                'subsections': subsections[:3] if subsections else []  # 最初の3つまで
            })

    return outline

def get_chest_outline():
    """胸部診察のアウトラインを取得"""
    chest_files = [
        ("B/S1BP012.html", "胸部診察（総論）"),
        ("B/S1BP013.html", "前胸部・背部の視診"),
        ("B/S1BP014.html", "胸部診察（頸部血管）"),
        ("B/S1BP015.html", "頸静脈の視診"),
        ("B/S1BP016.html", "頸動脈の聴診・触診"),
        ("B/S1BP017.html", "胸部診察（心臓）"),
        ("B/S1BP018.html", "心臓の視診・触診"),
        ("B/S1BP020.html", "心音"),
        ("B/S1BP022.html", "心雑音"),
        ("B/S1BP025.html", "呼吸器の診察"),
    ]

    outline = []
    for file_path, default_title in chest_files:
        full_path = RESTORED_DIR / file_path
        if full_path.exists():
            main_title, subsections = extract_section_outline(full_path)
            title = main_title if main_title else default_title
            outline.append({
                'title': title,
                'subsections': subsections[:3] if subsections else []
            })

    return outline

def get_neurological_outline():
    """神経診察のアウトラインを取得"""
    neurological_files = [
        ("C/S1CP001.html", "神経診察"),
        ("C/S1CP002.html", "意識レベル"),
        ("C/S1CP003.html", "脳神経"),
        ("C/S1CP004.html", "運動系"),
        ("C/S1CP005.html", "感覚系"),
        ("C/S1CP006.html", "反射"),
        ("C/S1CP007.html", "協調運動"),
        ("C/S1CP008.html", "歩行"),
    ]

    outline = []
    for file_path, default_title in neurological_files:
        full_path = RESTORED_DIR / file_path
        if full_path.exists():
            main_title, subsections = extract_section_outline(full_path)
            title = main_title if main_title else default_title
            outline.append({
                'title': title,
                'subsections': subsections[:3] if subsections else []
            })

    return outline

if __name__ == "__main__":
    print("腹部診察のアウトライン:")
    abdomen_outline = get_abdomen_outline()
    for item in abdomen_outline:
        print(f"  - {item['title']}")
        for sub in item['subsections']:
            print(f"    - {sub}")

    print("\n胸部診察のアウトライン:")
    chest_outline = get_chest_outline()
    for item in chest_outline:
        print(f"  - {item['title']}")
        for sub in item['subsections']:
            print(f"    - {sub}")

    print("\n神経診察のアウトライン:")
    neurological_outline = get_neurological_outline()
    for item in neurological_outline:
        print(f"  - {item['title']}")
        for sub in item['subsections']:
            print(f"    - {sub}")
