#!/usr/bin/env python3
"""
React版 胸部診察ページ (ChestPage.tsx) で実際に使われている
handlePlay(\"...\") のキーを元に、足りない音声を生成して
react/public/audio/audio_map.json を補完するスクリプト。

音声モデル: tts-1-hd / voice=nova

使い方:
  OPENAI_API_KEY=... python scripts/generate_chest_react_audio_from_page.py
"""

from __future__ import annotations

import hashlib
import json
import os
import re
from pathlib import Path

from openai import OpenAI


def get_client() -> OpenAI:
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise RuntimeError("OPENAI_API_KEY env var is required")
    return OpenAI(api_key=api_key)


def extract_keys_from_chest_page(chest_path: Path) -> list[str]:
    text = chest_path.read_text(encoding="utf-8")
    # handlePlay("...") に渡しているリテラルを全て拾う（改行をまたぐパターンに対応）
    keys = re.findall(r'handlePlay\(\s*"([^"]+)"', text)
    # 順番を保ったまま重複除去
    seen: set[str] = set()
    ordered: list[str] = []
    for k in keys:
        if k not in seen:
            seen.add(k)
            ordered.append(k)
    return ordered


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    chest_page = root / "react" / "src" / "pages" / "ChestPage.tsx"
    if not chest_page.exists():
        raise SystemExit(f"ChestPage not found: {chest_page}")

    keys = extract_keys_from_chest_page(chest_page)
    print(f"Found {len(keys)} handlePlay keys in ChestPage.tsx")

    audio_dir = root / "react" / "public" / "audio"
    audio_dir.mkdir(parents=True, exist_ok=True)
    map_path = audio_dir / "audio_map.json"

    if map_path.exists():
        with map_path.open("r", encoding="utf-8") as f:
            audio_map: dict[str, str] = json.load(f)
    else:
        audio_map = {}

    client = get_client()

    missing = [k for k in keys if k not in audio_map]
    print(f"Already mapped : {len(keys) - len(missing)}")
    print(f"To generate    : {len(missing)}")

    for idx, text in enumerate(missing, 1):
        print(f"[{idx}/{len(missing)}] Generating: {text}")
        h = hashlib.md5(text.encode("utf-8")).hexdigest()
        filename = f"{h}.mp3"
        filepath = audio_dir / filename

        if filepath.exists():
            print(f"  File already exists, reusing: {filename}")
            audio_map[text] = filename
            continue

        try:
            resp = client.audio.speech.create(
                model="tts-1-hd",
                voice="nova",
                input=text,
            )
            # NOTE: SDKの警告は出るが、現状の stream_to_file で十分
            resp.stream_to_file(str(filepath))
            audio_map[text] = filename
            print(f"  -> saved as {filename}")
        except Exception as e:  # noqa: BLE001
            print(f"  ERROR generating audio: {e}")

    with map_path.open("w", encoding="utf-8") as f:
        json.dump(audio_map, f, ensure_ascii=False, indent=2)
    print(f"\nUpdated audio_map: {len(audio_map)} entries -> {map_path}")


if __name__ == "__main__":
    main()
