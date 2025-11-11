#!/usr/bin/env python3
"""
腹部、胸部、神経診察のHTMLファイルを医療面接の構造に合わせて修正するスクリプト
- question-itemの中にquestion-text divを追加
- テキストを引用符で囲む
- 既存の<b>と<span class="paraphrase">タグを保持
"""

from pathlib import Path
from bs4 import BeautifulSoup

HTML_FILES = [
    "abdomen.html",
    "chest.html",
    "neurological.html"
]

BASE_DIR = Path(__file__).parent

def fix_html_structure(html_file):
    """HTMLファイルの構造を修正"""
    with open(html_file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    # question-item要素を検索
    question_items = soup.find_all('li', class_='question-item')

    fixed_count = 0
    for item in question_items:
        # 既にquestion-text divがある場合はスキップ
        if item.find('div', class_='question-text'):
            continue

        # data-text属性を取得
        data_text = item.get('data-text', '').strip()

        # 既存の内容を取得（HTMLタグを含む）
        content = ''.join(str(child) for child in item.children)

        # question-text divを作成
        question_text_div = soup.new_tag('div', class_='question-text')

        # テキストが引用符で囲まれていない場合は追加
        if not content.strip().startswith('"'):
            content = f'"{content.strip()}"'

        # HTMLを解析してdivに追加
        temp_soup = BeautifulSoup(content, 'html.parser')
        question_text_div.append(temp_soup)

        # 既存の内容をクリア
        item.clear()

        # data-text属性を再設定
        item['data-text'] = data_text

        # question-text divを追加
        item.append(question_text_div)

        fixed_count += 1

    # HTMLを保存
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(str(soup))

    print(f"修正完了: {html_file} ({fixed_count}個のquestion-itemを修正)")

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
