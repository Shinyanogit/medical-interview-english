#!/usr/bin/env python3
"""
1AM1100のHTML文書を統合して1つのページで閲覧できるようにするスクリプト
"""

import os
import re
from pathlib import Path
from bs4 import BeautifulSoup
import glob

# パス設定
BASE_DIR = Path(__file__).parent
RESTORED_DIR = BASE_DIR / "サンプル資料" / "restored" / "1AM1100" / "S1"
OUTPUT_FILE = RESTORED_DIR / "integrated.html"

# セクション情報
SECTION_INFO = {
    "0": {"name": "導入", "prefix": "S10P", "dir": "0"},
    "A": {"name": "身体診察総論", "prefix": "S1AP", "dir": "A"},
    "B": {"name": "頭頸部・胸部・腹部の身体診察", "prefix": "S1BP", "dir": "B"},
    "C": {"name": "神経系の身体診察", "prefix": "S1CP", "dir": "C"},
    "D": {"name": "筋・骨格系の身体診察", "prefix": "S1DP", "dir": "D"},
    "E": {"name": "心肺蘇生法", "prefix": "S1EP", "dir": "E"},
    "Z": {"name": "資料", "prefix": "S1ZP", "dir": "Z"},
}

def extract_content_from_html(html_file: Path):
    """HTMLファイルからコンテンツを抽出"""
    try:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()

        # BeautifulSoupでパース
        soup = BeautifulSoup(content, 'html.parser')

        # body内のdocdataを取得
        docdata = soup.find('div', class_='docdata')
        if docdata:
            # articleタグをすべて取得
            articles = docdata.find_all('article')
            return articles
        return []
    except Exception as e:
        print(f"エラー: {html_file} の読み込みに失敗: {e}")
        return []

def get_html_files(section_dir: Path, prefix: str):
    """セクション内のHTMLファイルを取得"""
    html_files = []
    if section_dir.exists():
        pattern = str(section_dir / f"{prefix}*.html")
        html_files = sorted(glob.glob(pattern))
    return [Path(f) for f in html_files]

def create_integrated_html():
    """統合HTMLファイルを作成"""

    # HTMLの基本構造
    html_template = """<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1AM1100 統合ビューアー</title>
    <link rel="stylesheet" href="css/sd_main.css" type="text/css">
    <link rel="stylesheet" href="css/tooltipster.css" type="text/css">
    <script src="js/jquery-1.11.2.min.js"></script>
    <script src="js/jquery.textHighlighter.js"></script>
    <script src="js/medilink.js"></script>
    <script src="js/jquery.tooltipster.js"></script>
    <style>
        /* ナビゲーション用のスタイル */
        #navigation {
            position: fixed;
            top: 0;
            left: 0;
            width: 250px;
            height: 100vh;
            overflow-y: auto;
            background: #f8f9fa;
            border-right: 1px solid #dee2e6;
            padding: 20px;
            z-index: 1000;
            box-shadow: 2px 0 5px rgba(0,0,0,0.1);
        }
        #navigation h2 {
            font-size: 18px;
            margin-top: 0;
            margin-bottom: 15px;
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 5px;
        }
        #navigation h3 {
            font-size: 14px;
            margin-top: 20px;
            margin-bottom: 10px;
            color: #34495e;
        }
        #navigation ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        #navigation li {
            margin: 5px 0;
        }
        #navigation a {
            display: block;
            padding: 8px 10px;
            color: #2980b9;
            text-decoration: none;
            border-radius: 4px;
            font-size: 13px;
        }
        #navigation a:hover {
            background: #e3f2fd;
        }
        #navigation a.active {
            background: #3498db;
            color: white;
        }
        #content {
            margin-left: 250px;
            padding: 20px;
        }
        .section-header {
            background: #e8f4f8;
            padding: 15px;
            margin: 30px 0 20px 0;
            border-left: 4px solid #3498db;
            border-radius: 4px;
        }
        .section-header h1 {
            margin: 0;
            font-size: 24px;
            color: #2c3e50;
        }
        .back-link {
            display: inline-block;
            margin-bottom: 20px;
            color: #3498db;
            text-decoration: none;
            padding: 10px 15px;
            background: #e3f2fd;
            border-radius: 4px;
        }
        .back-link:hover {
            background: #bbdefb;
        }
        @media (max-width: 768px) {
            #navigation {
                width: 100%;
                height: auto;
                position: relative;
                border-right: none;
                border-bottom: 1px solid #dee2e6;
            }
            #content {
                margin-left: 0;
            }
        }
    </style>
    <script type="text/javascript">
        $(document).ready(function() {{
            $('.tooltip').tooltipster({{
                theme: 'tooltipster-mmblack',
                contentAsHTML: true,
                trigger: 'click'
            }});

            // ナビゲーションリンクのクリック処理
            $('#navigation a').on('click', function(e) {{
                e.preventDefault();
                var target = $(this).attr('href');
                if (target.startsWith('#')) {{
                    $('html, body').animate({{
                        scrollTop: $(target).offset().top - 20
                    }}, 500);

                    // アクティブ状態を更新
                    $('#navigation a').removeClass('active');
                    $(this).addClass('active');
                }}
            }});

            // スクロール時にアクティブ状態を更新
            $(window).on('scroll', function() {{
                var scrollPos = $(window).scrollTop() + 100;
                $('#navigation a').each(function() {{
                    var currLink = $(this);
                    var refElement = $(currLink.attr('href'));
                    if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {{
                        $('#navigation a').removeClass('active');
                        currLink.addClass('active');
                    }}
                }});
            }});
        });
    </script>
</head>
<body id="bm">
    <div id="navigation">
        <a href="../../../index.html" class="back-link">← プロジェクトトップ</a>
        <h2>目次</h2>
        {navigation_content}
    </div>

    <div id="content">
        <div class="docdata">
            {content}
        </div>
    </div>
</body>
</html>"""

    navigation_items = []
    all_content = []

    # 各セクションを処理
    for section_key, info in SECTION_INFO.items():
        section_dir = RESTORED_DIR / info["dir"]
        html_files = get_html_files(section_dir, info["prefix"])

        if not html_files:
            continue

        # ナビゲーションにセクション見出しを追加
        section_id = f"section-{section_key}"
        navigation_items.append(f'<h3>{info["name"]} (Section {section_key})</h3>')
        navigation_items.append('<ul>')

        # セクションヘッダーを追加
        section_header = f'<div id="{section_id}" class="section-header"><h1>{info["name"]} (Section {section_key})</h1></div>'
        all_content.append(section_header)

        # 各HTMLファイルを処理
        for html_file in html_files:
            articles = extract_content_from_html(html_file)

            if articles:
                # ファイル名からアンカーIDを生成
                file_id = html_file.stem.lower()
                anchor_id = f"{section_key}-{file_id}"

                # ナビゲーションに追加
                nav_text = html_file.name
                navigation_items.append(f'<li><a href="#{anchor_id}">{nav_text}</a></li>')

                # コンテンツに追加
                article_wrapper = f'<div id="{anchor_id}" class="article-wrapper">'
                for article in articles:
                    # 画像パスを調整（相対パスを維持）
                    article_str = str(article)
                    # ../img/ を {section_dir}/img/ に変更
                    article_str = article_str.replace('../img/', f'{info["dir"]}/img/')
                    article_str = article_str.replace('../icon/', 'icon/')
                    article_wrapper += article_str
                article_wrapper += '</div>'
                all_content.append(article_wrapper)

        navigation_items.append('</ul>')

    # HTMLを生成（formatの代わりにreplaceを使用）
    navigation_content = '\n'.join(navigation_items)
    content_html = '\n'.join(all_content)

    final_html = html_template.replace('{navigation_content}', navigation_content)
    final_html = final_html.replace('{content}', content_html)

    # ファイルに書き込み
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(final_html)

    print(f"統合HTMLファイルを作成しました: {OUTPUT_FILE}")
    return OUTPUT_FILE

def main():
    """メイン処理"""
    print("=" * 60)
    print("1AM1100 HTML文書統合スクリプト")
    print("=" * 60)

    if not RESTORED_DIR.exists():
        print(f"エラー: 復元ディレクトリが存在しません: {RESTORED_DIR}")
        print("先に restore_1AM1100.py を実行してください。")
        return

    try:
        output_file = create_integrated_html()
        print("\n" + "=" * 60)
        print("統合完了")
        print("=" * 60)
        print(f"出力ファイル: {output_file}")
        print("\nブラウザで開いて閲覧できます。")
    except Exception as e:
        print(f"エラーが発生しました: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()
