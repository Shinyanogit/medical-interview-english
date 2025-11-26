#!/usr/bin/env python3
"""
React版 胸部診察ページ用の新しいフレーズについて、
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


NEW_PHRASES = [
  "First, I'm just going to have a look at your neck. Could you turn your head that way, please?",
  "Now, I'll use my stethoscope to listen to the carotid arteries on both sides of your neck.",
  "I apologize if my stethoscope is a little cold. Please let me know if it is.",
  "I'm going to place the stethoscope on your neck now. It might be slightly cool. Is that okay?",
  "Could you please take a breath in and then hold it for a few seconds?",
  "Take a breath in and then hold it.",
  "First, I'm going to look at your entire chest area.",
  "Apical impulse.",
  "Visible pulsations (heaves or lifts).",
  "I'm going to check where your heartbeat is on this side.",
  "Now I'm going to put my hand on your chest.",
  "Now, I will listen to your heart with my stethoscope.",
  "It might be slightly cool. Please let me know if it is too cold.",
  "Now I'm going to tap along your ribs on your back.",
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
  print(f"Total new phrases: {len(NEW_PHRASES)}")
  print(f"Already mapped   : {len(NEW_PHRASES) - len(to_generate)}")
  print(f"To generate      : {len(to_generate)}")

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
        voice="nova",  # 身体診察ページ用
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

