#!/usr/bin/env python3
"""
文字起こしデータから患者への呼びかけ（指示・質問）を抽出するスクリプト
視聴者への説明と患者への呼びかけを区別します。
"""

import os
import re
from pathlib import Path

# パス設定
BASE_DIR = Path(__file__).parent
INPUT_DIR = BASE_DIR / "サンプル資料" / "Data" / "Wisconsin" / "身体診察_整形済み"
OUTPUT_DIR = BASE_DIR / "サンプル資料" / "Data" / "Wisconsin" / "患者への指示"

def is_patient_instruction(sentence: str) -> bool:
    """文が患者への指示かどうかを判定"""
    sentence_lower = sentence.lower().strip()

    # 患者への呼びかけのパターン
    patient_patterns = [
        # 質問形式
        r'^(can|could|would|will|may|shall)\s+you\b',
        r'^(do|does|did|are|is|were|was)\s+you\b',
        r'^(how|what|where|when)\s+(do|does|did|are|is)\s+you\b',
        r'\b(do you|does it|can you|could you)\s+(feel|see|hear|smell|taste)\b',

        # 命令形・依頼形（文頭が重要）
        r'^(please|just)\s+\w+',
        r'^(take|hold|close|open|look|turn|move|relax|breathe|lift|lower|raise|bend|straighten|put|keep|follow|watch|read|cover|block|tell me)\b',
        r'^(let\'s|let me)\b',

        # 患者の名前への呼びかけ
        r'\b(mary|patient),\s+(may|can|could|would|will|please)\b',
        r'^(mary|patient),?\s+',

        # "I'm going to" + 患者への動作（視聴者への説明を除く）
        r'(i\'m|im)\s+going to\s+(ask|have|place|touch|examine|check|feel|listen|look at|bring|put)\s+you\b',
        r'i\'m going to\s+\w+\s+your\b',

        # 直接的な指示・依頼
        r'(i\'ll|i will)\s+(ask|have)\s+you\b',
        r'i\'d like\s+you to\b',
        r'i\'d like to\s+(ask|have)\s+you\b',
        r'(may|can)\s+i\s+(examine|check|touch|look at|feel|listen to|palpate|inspect)\b',

        # 確認・同意を求める
        r'^(is that|does that|how does that feel)\b',
        r'(okay|alright|good)\??\s*$',  # 文末の確認
    ]

    for pattern in patient_patterns:
        if re.search(pattern, sentence_lower):
            return True

    # 視聴者への説明のパターン（除外）
    viewer_patterns = [
        r'^(now we\'ll|next we|then we|first we|so we|we\'re going to|we will)\b',
        r'^(you want to|you need to|you should|you may|you can)\s+(make sure|check|assess|observe|look for|palpate|inspect|test|examine|use|perform|do)\b',
        r'^(this is|these are|that is|those are|here is|there is)\b',
        r'^(the|a|an)\s+\w+\s+(is|are|will|should|can|may)\b',
        r'\bthe patient\b',
        r'^(in order to|to do this|for this|the next step is|the first step is)\b',
        r'^(we are|we\'re|we will|we\'ll|we can)\b',
        r'^(it\'s important|it is important|you always)\b',
        r'I\'m looking (at|for)\b',
        r'I\'m listening (to|for)\b',
        r'I\'ll (often|sometimes|usually)\b',
        r'^and the\b',
        r'^and then (we|you want to|I\'m looking)\b',
        r'allows (us|you) to\b',
    ]

    for pattern in viewer_patterns:
        if re.search(pattern, sentence_lower):
            return False

    # 二人称（you）が含まれ、かつ命令的な動詞がある
    if 'you' in sentence_lower:
        action_verbs = [
            'close', 'open', 'look', 'turn', 'move', 'hold', 'take',
            'put', 'place', 'keep', 'relax', 'breathe', 'lift', 'lower',
            'raise', 'bend', 'straighten', 'follow', 'watch', 'tell', 'show'
        ]
        for verb in action_verbs:
            if re.search(rf'\b{verb}\b', sentence_lower):
                # "you want to [verb]" は視聴者への説明
                if not re.search(r'you (want|need) to', sentence_lower):
                    return True

    return False

def extract_patient_instructions(text: str) -> list[str]:
    """テキストから患者への指示を抽出"""
    # 段落に分割
    paragraphs = text.split('\n\n')

    instructions = []

    for para in paragraphs:
        # 文に分割
        sentences = re.split(r'([.!?]+)\s+', para)

        current_sentence = ""
        for i, part in enumerate(sentences):
            if re.match(r'^[.!?]+$', part):
                current_sentence += part
                # 文が完成したので判定
                if current_sentence.strip() and is_patient_instruction(current_sentence):
                    # クリーンアップ
                    cleaned = current_sentence.strip()

                    # 長すぎる文は "and then" や "and" で区切る
                    if len(cleaned) > 250:
                        # "and then" や "and" で分割
                        parts = re.split(r'\s+(and then|and)\s+', cleaned, flags=re.IGNORECASE)
                        for j, part in enumerate(parts):
                            if part.lower() not in ['and then', 'and']:
                                # 各部分が患者への指示かどうか再判定
                                if is_patient_instruction(part) and len(part) > 20:
                                    instructions.append(part.strip())
                    else:
                        # 短すぎる文は除外（uh, um などの単独のフィラーワード）
                        if len(cleaned) > 20:
                            instructions.append(cleaned)
                current_sentence = ""
            else:
                current_sentence += part + " "

        # 段落の最後に文末記号がない場合
        if current_sentence.strip() and is_patient_instruction(current_sentence):
            cleaned = current_sentence.strip()
            if len(cleaned) > 250:
                parts = re.split(r'\s+(and then|and)\s+', cleaned, flags=re.IGNORECASE)
                for j, part in enumerate(parts):
                    if part.lower() not in ['and then', 'and']:
                        if is_patient_instruction(part) and len(part) > 20:
                            instructions.append(part.strip())
            elif len(cleaned) > 20:
                instructions.append(cleaned)

    return instructions

def process_file(input_path: Path, output_path: Path) -> int:
    """1つのファイルを処理"""
    try:
        # ファイルを読み込み
        with open(input_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # ヘッダーと本文を分離
        separator = "=" * 80
        if separator in content:
            parts = content.split(separator, 1)
            header = parts[0] + separator + "\n"
            body = parts[1].strip() if len(parts) > 1 else ""
        else:
            header = ""
            body = content

        # 患者への指示を抽出
        instructions = extract_patient_instructions(body)

        if not instructions:
            return 0

        # 出力ディレクトリを作成
        output_path.parent.mkdir(parents=True, exist_ok=True)

        # ファイルに保存
        with open(output_path, 'w', encoding='utf-8') as f:
            if header:
                f.write(header)
                f.write("\n")

            f.write(f"抽出された患者への指示: {len(instructions)}個\n")
            f.write("=" * 80 + "\n\n")

            for i, instruction in enumerate(instructions, 1):
                f.write(f"{i}. {instruction}\n\n")

        return len(instructions)

    except Exception as e:
        print(f"  ✗ エラー: {str(e)}")
        return 0

def main():
    """メイン処理"""
    print("=" * 60)
    print("患者への指示抽出スクリプト")
    print("=" * 60)

    # 入力ディレクトリの確認
    if not INPUT_DIR.exists():
        print(f"エラー: 入力ディレクトリが見つかりません: {INPUT_DIR}")
        return

    # ファイルリストを取得
    input_files = sorted(INPUT_DIR.glob("*.txt"))

    if not input_files:
        print(f"エラー: 処理対象のファイルが見つかりません: {INPUT_DIR}")
        return

    print(f"\n入力ディレクトリ: {INPUT_DIR}")
    print(f"出力ディレクトリ: {OUTPUT_DIR}")
    print(f"処理対象ファイル数: {len(input_files)}個")
    print("\n処理を開始します...")
    print("-" * 60)

    total_instructions = 0
    success_count = 0

    for i, input_file in enumerate(input_files, 1):
        output_file = OUTPUT_DIR / input_file.name

        print(f"\n[{i}/{len(input_files)}] {input_file.name}")

        count = process_file(input_file, output_file)
        if count > 0:
            print(f"  ✓ {count}個の指示を抽出")
            total_instructions += count
            success_count += 1
        else:
            print(f"  - 指示が見つかりませんでした")

    # 結果を表示
    print("\n" + "=" * 60)
    print("完了")
    print("=" * 60)
    print(f"処理ファイル数: {success_count}個")
    print(f"抽出された指示の合計: {total_instructions}個")
    print(f"\n出力先: {OUTPUT_DIR}")

    # サンプルファイルの内容を表示
    if success_count > 0:
        print("\n" + "-" * 60)
        print("サンプル（最初のファイルの一部）:")
        print("-" * 60)
        first_output = None
        for input_file in input_files:
            output_file = OUTPUT_DIR / input_file.name
            if output_file.exists():
                first_output = output_file
                break

        if first_output:
            with open(first_output, 'r', encoding='utf-8') as f:
                lines = f.readlines()
                # 最初の10行を表示
                for line in lines[:15]:
                    print(line.rstrip())

if __name__ == "__main__":
    main()
