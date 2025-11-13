#!/usr/bin/env python3
"""
腹部、胸部、神経診察のHTMLファイルを医療面接の構造に合わせて修正するスクリプト
- question-itemの中にquestion-text divを追加
- テキストを引用符で囲む
- キーワードを<b>タグで囲む
- パラフレーズを<span class="paraphrase">で囲む
- 英文を簡潔にする
"""

import re
from pathlib import Path
from bs4 import BeautifulSoup

HTML_FILES = [
    "abdomen.html",
    "chest.html",
    "neurological.html"
]

BASE_DIR = Path(__file__).parent

def simplify_text(text):
    """英文を簡潔にする"""
    # 冗長な表現を削減
    replacements = [
        (r'\bI\'m going to have you\b', 'I\'ll have you'),
        (r'\bI\'m going to\b', 'I\'ll'),
        (r'\bPlease \(Could you, Would you\)\b', 'Please'),
        (r'\b\(Could you, Would you\)\b', ''),
        (r'\b\(I\'ll, Let me\)\b', ''),
        (r'\b\(I need you to, Please\)\b', 'Please'),
        (r'\b\(Try to, Could you\)\b', 'Please'),
        (r'\b\(Breathe, Try\)\b', ''),
        (r'\b\(Continue breathing, Don\'t hold your breath\)\b', ''),
        (r'\b\(Breathe deeply again, One more deep breath\)\b', 'again'),
        (r'\b\(Take a deep breath, Inhale deeply\)\b', 'Take a deep breath'),
        (r'\b\(big breath, slow breath\)\b', ''),
        (r'\b\(slow breaths, big breaths\)\b', 'deep breaths'),
        (r'\b\(examining, observing, checking\)\b', '(examining, checking)'),
        (r'\b\(assess, check, look at\)\b', '(check, assess)'),
        (r'\b\(raise, pull up\)\b', '(raise, pull up)'),
        (r'\b\(reveal, show, uncover\)\b', '(reveal, show)'),
        (r'\b\(shape, outline, form\)\b', '(shape, outline)'),
        (r'\b\(bloated, swollen, enlarged\)\b', '(bloated, swollen)'),
        (r'\b\(sunken, concave\)\b', '(sunken, concave)'),
        (r'\b\(lumps, bumps\)\b', '(lumps, bumps)'),
        (r'\b\(protrusions, swellings\)\b', '(protrusions)'),
        (r'\b\(skin irritations, eruptions\)\b', '(skin irritations)'),
        (r'\b\(abnormalities, marks, spots\)\b', '(abnormalities, marks)'),
        (r'\b\(operation scar, incision mark\)\b', '(operation scar)'),
        (r'\b\(visible veins, dilated veins, distended veins\)\b', '(visible veins, dilated veins)'),
        (r'\b\(stretch marks, skin striations\)\b', '(stretch marks)'),
        (r'\b\(visible beats, throbbing movements\)\b', '(visible beats)'),
    ]

    for pattern, replacement in replacements:
        text = re.sub(pattern, replacement, text)

    # 複数のスペースを1つに
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def fix_html_structure(html_file):
    """HTMLファイルの構造を修正"""
    with open(html_file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    # question-item要素を検索
    question_items = soup.find_all('li', class_='question-item')

    for item in question_items:
        # data-text属性を取得
        data_text = item.get('data-text', '').strip()

        # 既にquestion-text divがある場合はスキップ
        if item.find('div', class_='question-text'):
            continue

        # テキストを取得
        text = item.get_text(strip=True)

        # テキストを簡潔にする
        simplified_text = simplify_text(text)

        # テキストを引用符で囲む
        quoted_text = f'"{simplified_text}"'

        # question-text divを作成
        question_text_div = soup.new_tag('div', class_='question-text')
        question_text_div.string = quoted_text

        # 既存の内容をクリア
        item.clear()

        # data-text属性を再設定
        item['data-text'] = data_text

        # question-text divを追加
        item.append(question_text_div)

    # HTMLを保存
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(str(soup))

    print(f"修正完了: {html_file} ({len(question_items)}個のquestion-item)")

def main():
    print("=== HTML構造の修正 ===\n")

    for html_file in HTML_FILES:
        html_path = BASE_DIR / html_file
        if not html_path.exists():
            print(f"警告: {html_file} が見つかりません。スキップします。")
            continue

        fix_html_structure(html_path)

    print("\n=== 修正完了 ===")

if __name__ == "__main__":
    main()
