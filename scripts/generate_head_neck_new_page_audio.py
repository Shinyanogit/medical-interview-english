#!/usr/bin/env python3
"""
React版 頭頸部診察ページ用の英語フレーズについて、
OpenAI TTS で音声ファイルを生成し、react/public/audio/audio_map.json を更新するスクリプト。

※ OPENAI_API_KEY 環境変数が必要です。
"""

import hashlib
import json
import os
from pathlib import Path

from openai import OpenAI


def normalize(text: str) -> str:
    """スマートクォートなどを通常のASCIIに揃える"""
    return (
        text.replace("’", "'")
        .replace("‘", "'")
        .replace("“", '"')
        .replace("”", '"')
    ).strip()


# HeadNeckPage.tsx 内で使用している英語セリフ（→神経系は除外）
NEW_PHRASES = [
    "I will start by examining your head.",
    "Please tell me right away if you feel any pain.",
    "I am going to gently feel your hair now.",
    "I will press lightly here; please let me know if any area is tender.",
    "Now I would like to examine your eyes.",
    "I am going to touch around your eyes; please tell me if it feels cold or uncomfortable.",
    "Please look up, and then look down.",
    "I will look at your eyes from the side.",
    "While I stand behind you, could you gently look up for me?",
    "Next, I would like to examine your ears.",
    "I will use this instrument, an otoscope, to look inside your ears. Please tell me if you feel any pain.",
    "Please turn your head slightly this way.",
    "I am going to gently pull on your ear; please let me know if it hurts.",
    "Next, I will examine your nose and sinuses.",
    "I am going to press on your face; please tell me if you feel any pain.",
    "Please turn your head to the other side, and then face straight ahead.",
    "Next, I will examine your mouth and throat. Please relax.",
    "I am going to use this tongue depressor to gently touch inside your mouth.",
    "Please tell me if you feel any pain.",
    "Please open your mouth.",
    "Please stick out your tongue.",
    "Please move your tongue to the left, and then to the right.",
    "Please place the tip of your tongue behind your upper front teeth.",
    "Okay, you can relax now.",
    "I will gently feel the salivary glands that produce saliva; please tell me if anything is painful.",
    "Next, I will examine the lymph nodes in your head and neck.",
    "Please let me know if anything is painful.",
    "Please tuck your chin in slightly.",
    "Next, I will examine your thyroid gland at the front of your neck.",
    "First, please swallow.",
    "Please swallow once more.",
]

NEW_PHRASES = [normalize(p) for p in NEW_PHRASES]


def get_client() -> OpenAI:
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise RuntimeError("OPENAI_API_KEY env var is required")
    return OpenAI(api_key=api_key)


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    audio_dir = root / "react" / "public" / "audio"
    audio_dir.mkdir(parents=True, exist_ok=True)
    map_path = audio_dir / "audio_map.json"

    if map_path.exists():
        with map_path.open("r", encoding="utf-8") as f:
            audio_map: dict[str, str] = json.load(f)
    else:
        audio_map = {}

    client = get_client()

    to_generate = [p for p in NEW_PHRASES if p not in audio_map]
    print(f"Total head & neck phrases: {len(NEW_PHRASES)}")
    print(f"Already mapped            : {len(NEW_PHRASES) - len(to_generate)}")
    print(f"To generate               : {len(to_generate)}")

    for idx, text in enumerate(to_generate, 1):
        print(f"[{idx}/{len(to_generate)}] Generating: {text}")
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
