#!/usr/bin/env python3
"""
1AM1100のHTML文書を復元するスクリプト
元の構造を保ちながら、プロジェクト内に復元します。
"""

import os
import shutil
from pathlib import Path
import glob

# パス設定
BASE_DIR = Path(__file__).parent
SOURCE_DIR = BASE_DIR / "サンプル資料" / "Data" / "Documents" / "1AM1100" / "3.1.12" / "S1"
TARGET_DIR = BASE_DIR / "サンプル資料" / "restored" / "1AM1100" / "S1"

# コピーするフォルダとファイル
COPY_ITEMS = [
    # 各セクション
    "0",   # 導入 (S10)
    "A",   # 身体診察総論 (S1A)
    "B",   # 頭頸部・胸部・腹部の身体診察 (S1B)
    "C",   # 神経系の身体診察 (S1C)
    "D",   # 筋・骨格系の身体診察 (S1D)
    "E",   # 心肺蘇生法 (S1E)
    "Z",   # 資料 (S1Z)
    # CSSファイル
    "css",
    # JavaScriptファイル
    "js",
    # アイコンファイル
    "icon",
    # 画像ファイル（imageフォルダ）
    "image",
    # メニューファイル
    "menu",
]

# セクション情報
SECTION_INFO = {
    "0": {"name": "導入 (Introduction)", "prefix": "S10P", "count": 4},
    "A": {"name": "身体診察総論 (General Physical Examination)", "prefix": "S1AP", "count": 10},
    "B": {"name": "頭頸部・胸部・腹部の身体診察 (Head, Neck, Chest, and Abdomen)", "prefix": "S1BP", "count": 42},
    "C": {"name": "神経系の身体診察 (Neurological Examination)", "prefix": "S1CP", "count": 47},
    "D": {"name": "筋・骨格系の身体診察 (Musculoskeletal Examination)", "prefix": "S1DP", "count": 19},
    "E": {"name": "心肺蘇生法 (Cardiopulmonary Resuscitation)", "prefix": "S1EP", "count": 10},
    "Z": {"name": "資料 (Reference)", "prefix": "S1ZP", "count": 1},
}

def copy_directory(src: Path, dst: Path, overwrite: bool = False):
    """ディレクトリを再帰的にコピー"""
    if not src.exists():
        print(f"警告: {src} が存在しません")
        return False

    if dst.exists():
        if overwrite:
            shutil.rmtree(dst)
            print(f"上書き: {dst} を削除しました")
        else:
            print(f"既に存在: {dst} (スキップ)")
            return False

    shutil.copytree(src, dst)
    print(f"コピー完了: {src.name} -> {dst}")
    return True

def get_html_files(section_dir: Path, prefix: str):
    """セクション内のHTMLファイルを取得"""
    html_files = []
    if section_dir.exists():
        pattern = str(section_dir / f"{prefix}*.html")
        html_files = sorted(glob.glob(pattern))
        html_files = [Path(f).name for f in html_files]
    return html_files

def create_index_html(target_dir: Path):
    """インデックスページを作成"""

    # 各セクションのHTMLファイルリストを生成
    sections_html = []

    for section_key, info in SECTION_INFO.items():
        section_dir = target_dir / section_key
        html_files = get_html_files(section_dir, info["prefix"])

        if html_files:
            file_list_items = []
            for html_file in html_files:
                file_list_items.append(f'            <li><a href="{section_key}/{html_file}">{html_file}</a></li>')

            sections_html.append(f"""    <div class="section">
        <h2>{info["name"]} (Section {section_key})</h2>
        <p class="info">{len(html_files)}個のHTMLファイル</p>
        <ul class="file-list">
{chr(10).join(file_list_items)}
        </ul>
    </div>""")

    index_content = f"""<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1AM1100 復元文書 - インデックス</title>
    <style>
        body {{
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            line-height: 1.6;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }}
        h1 {{
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
        }}
        .back-link {{
            display: inline-block;
            margin-bottom: 20px;
            color: #3498db;
            text-decoration: none;
        }}
        .back-link:hover {{
            opacity: 0.7;
        }}
        .section {{
            background: white;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }}
        .section h2 {{
            color: #34495e;
            margin-top: 0;
        }}
        .file-list {{
            list-style: none;
            padding: 0;
            max-height: 400px;
            overflow-y: auto;
        }}
        .file-list li {{
            padding: 8px 0;
            border-bottom: 1px solid #eee;
        }}
        .file-list li:last-child {{
            border-bottom: none;
        }}
        .file-list a {{
            color: #2980b9;
            text-decoration: none;
        }}
        .file-list a:hover {{
            text-decoration: underline;
        }}
        .info {{
            color: #7f8c8d;
            font-size: 0.9em;
            margin-top: 10px;
        }}
        .summary {{
            background: #e8f4f8;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }}
        .summary h2 {{
            margin-top: 0;
            color: #2c3e50;
        }}
        .summary ul {{
            margin: 10px 0;
            padding-left: 20px;
        }}
    </style>
</head>
<body>
    <a href="../../../index.html" class="back-link">← プロジェクトトップに戻る</a>
    <h1>1AM1100 復元文書 - インデックス</h1>

    <div class="summary">
        <h2>復元内容の概要</h2>
        <ul>
{chr(10).join([f'            <li><strong>Section {key}:</strong> {info["name"]} ({info["count"]}ファイル)' for key, info in SECTION_INFO.items()])}
        </ul>
        <p><strong>合計:</strong> {sum(info["count"] for info in SECTION_INFO.values())}個のHTMLファイル</p>
    </div>

{chr(10).join(sections_html)}

    <div class="section">
        <h2>復元情報</h2>
        <p>このフォルダには、1AM1100の元のHTML文書が復元されています。</p>
        <p>元の構造を保ったまま、プロジェクト内で閲覧できるようにしています。</p>
        <p><strong>注意:</strong> 元のHTMLファイルは相対パス（../css/, ../js/, ../icon/）を使用しているため、この構造を維持する必要があります。</p>
    </div>
</body>
</html>
"""

    index_path = target_dir / "index.html"
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(index_content)
    print(f"インデックスページ作成: {index_path}")

def main():
    """メイン処理"""
    print("=" * 60)
    print("1AM1100 HTML文書復元スクリプト（全セクション対応）")
    print("=" * 60)

    # ソースディレクトリの確認
    if not SOURCE_DIR.exists():
        print(f"エラー: ソースディレクトリが存在しません: {SOURCE_DIR}")
        return

    # ターゲットディレクトリの作成
    TARGET_DIR.mkdir(parents=True, exist_ok=True)
    print(f"ターゲットディレクトリ: {TARGET_DIR}")

    # 各アイテムをコピー
    copied_count = 0
    skipped_count = 0
    overwrite_mode = True  # 既存ファイルを上書きする

    for item in COPY_ITEMS:
        src = SOURCE_DIR / item
        dst = TARGET_DIR / item

        if src.exists():
            if copy_directory(src, dst, overwrite=overwrite_mode):
                copied_count += 1
            else:
                skipped_count += 1
        else:
            print(f"警告: {src} が存在しません")
            skipped_count += 1

    # インデックスページを作成
    create_index_html(TARGET_DIR)

    # 結果表示
    print("\n" + "=" * 60)
    print("復元完了")
    print("=" * 60)
    print(f"コピー成功: {copied_count} アイテム")
    print(f"スキップ: {skipped_count} アイテム")
    print(f"\n復元先: {TARGET_DIR}")
    print(f"インデックスページ: {TARGET_DIR / 'index.html'}")

    # 各セクションのファイル数を表示
    print("\n各セクションのファイル数:")
    for section_key, info in SECTION_INFO.items():
        section_dir = TARGET_DIR / section_key
        html_files = get_html_files(section_dir, info["prefix"])
        print(f"  Section {section_key} ({info['name']}): {len(html_files)}ファイル")

if __name__ == "__main__":
    main()
