#!/usr/bin/env python3
"""
YouTube文字起こしデータの文体を整えるスクリプト
字幕形式の短い行を結合し、読みやすい段落に整形します。
"""

import os
import re
from pathlib import Path

# パス設定
BASE_DIR = Path(__file__).parent
INPUT_DIR = BASE_DIR / "サンプル資料" / "Data" / "Wisconsin" / "身体診察"
OUTPUT_DIR = BASE_DIR / "サンプル資料" / "Data" / "Wisconsin" / "身体診察_整形済み"

def extract_header_and_content(filepath: Path) -> tuple[str, str]:
    """ファイルからヘッダーと本文を分離"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # "=" の区切り線を探す
    separator = "=" * 80
    if separator in content:
        parts = content.split(separator, 1)
        header = parts[0] + separator + "\n"
        body = parts[1].strip() if len(parts) > 1 else ""
    else:
        # 区切り線がない場合は最初の6行をヘッダーとみなす
        lines = content.split('\n')
        header = '\n'.join(lines[:7]) + '\n'
        body = '\n'.join(lines[7:])

    return header, body

def format_text(text: str) -> str:
    """文字起こしテキストを整形"""
    # 空行を削除し、1行のテキストに結合
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    single_line = ' '.join(lines)

    # 複数のスペースを1つに統一
    single_line = re.sub(r'\s+', ' ', single_line)

    # um, uh などのフィラーワードの前後のスペースを調整
    single_line = re.sub(r'\s+(um|uh|ah|er)\s+', r' \1 ', single_line, flags=re.IGNORECASE)

    # 文末記号の後に改行を挿入
    formatted = re.sub(r'([.!?])\s+([A-Z])', r'\1\n\n\2', single_line)

    # 一般的な省略形の後のピリオドでは改行しない
    abbreviations = ['Dr', 'Mr', 'Mrs', 'Ms', 'Prof', 'etc', 'e.g', 'i.e', 'vs']
    for abbr in abbreviations:
        formatted = re.sub(rf'{abbr}\.\n\n', f'{abbr}. ', formatted)

    # 文末記号がない場合も、一定の長さで区切る
    # 特定のフレーズの前で改行（新しい話題の開始）
    topic_starters = [
        r'\bI will\b', r'\bI would\b', r'\bI\'m going to\b',
        r'\bnow we\'ll\b', r'\bnext we\b', r'\bso we\b',
        r'\bthe first\b', r'\bthe second\b', r'\bthe next\b',
        r'\bto do this\b', r'\bin order to\b',
        r'\bfor example\b', r'\bfor instance\b',
        r'\banother\b', r'\balso\b'
    ]

    for starter in topic_starters:
        formatted = re.sub(rf'([a-z])\s+({starter})', r'\1.\n\n\2', formatted, flags=re.IGNORECASE)

    # 段落を再分割し、適度な長さに調整
    paragraphs = [p.strip() for p in formatted.split('\n\n') if p.strip()]
    final_paragraphs = []

    for para in paragraphs:
        # 段落が長すぎる場合（300文字以上）、強制的に分割
        if len(para) > 350:
            # 単語単位で分割
            words = para.split()
            current_para = ""

            for word in words:
                if len(current_para) + len(word) + 1 > 300 and current_para:
                    # 文の途中で切らないように、文末記号を探す
                    if current_para.rstrip()[-1] in '.!?':
                        final_paragraphs.append(current_para.strip())
                        current_para = word + " "
                    elif '.' in current_para or '?' in current_para or '!' in current_para:
                        # 最後の文末記号の位置を探す
                        last_period = max(
                            current_para.rfind('.'),
                            current_para.rfind('?'),
                            current_para.rfind('!')
                        )
                        if last_period > len(current_para) * 0.5:  # 少なくとも半分以上進んでいる
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

def format_transcript_file(input_path: Path, output_path: Path):
    """1つのファイルを整形"""
    try:
        # ヘッダーと本文を分離
        header, body = extract_header_and_content(input_path)

        # 本文を整形
        formatted_body = format_text(body)

        # ヘッダーと整形済み本文を結合
        formatted_content = header + "\n" + formatted_body + "\n"

        # 出力ディレクトリを作成
        output_path.parent.mkdir(parents=True, exist_ok=True)

        # ファイルに保存
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(formatted_content)

        return True
    except Exception as e:
        print(f"  ✗ エラー: {str(e)}")
        return False

def main():
    """メイン処理"""
    print("=" * 60)
    print("YouTube文字起こしデータ整形スクリプト")
    print("=" * 60)

    # 入力ディレクトリの確認
    if not INPUT_DIR.exists():
        print(f"エラー: 入力ディレクトリが見つかりません: {INPUT_DIR}")
        return

    # ファイルリストを取得
    input_files = sorted([f for f in INPUT_DIR.glob("*.txt") if not f.name.endswith("_ERROR.txt")])

    if not input_files:
        print(f"エラー: 処理対象のファイルが見つかりません: {INPUT_DIR}")
        return

    print(f"\n入力ディレクトリ: {INPUT_DIR}")
    print(f"出力ディレクトリ: {OUTPUT_DIR}")
    print(f"処理対象ファイル数: {len(input_files)}個")
    print("\n処理を開始します...")
    print("-" * 60)

    success_count = 0
    error_count = 0

    for i, input_file in enumerate(input_files, 1):
        output_file = OUTPUT_DIR / input_file.name

        print(f"\n[{i}/{len(input_files)}] {input_file.name}")

        if format_transcript_file(input_file, output_file):
            print(f"  ✓ 整形完了")
            success_count += 1
        else:
            error_count += 1

    # 結果を表示
    print("\n" + "=" * 60)
    print("完了")
    print("=" * 60)
    print(f"成功: {success_count}個")
    print(f"失敗: {error_count}個")
    print(f"合計: {len(input_files)}個")
    print(f"\n出力先: {OUTPUT_DIR}")

    # サンプルファイルの内容を表示
    if success_count > 0:
        print("\n" + "-" * 60)
        print("サンプル（最初のファイルの一部）:")
        print("-" * 60)
        first_output = OUTPUT_DIR / input_files[0].name
        with open(first_output, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            # ヘッダー以降の最初の200文字を表示
            content = ''.join(lines)
            separator_idx = content.find("=" * 80)
            if separator_idx != -1:
                body_start = separator_idx + 80
                preview = content[body_start:body_start + 300].strip()
                print(preview + "...")

if __name__ == "__main__":
    main()
