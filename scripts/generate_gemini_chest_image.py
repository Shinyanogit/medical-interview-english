#!/usr/bin/env python3
"""
1) ターゲット画像を短く説明（医師/患者の容姿は記述しない）
2) sample.pngの医師・患者・診察室を使って、その説明どおりの構図で生成
生成結果: react/public/images/chest/gen-{target}.png
"""

from pathlib import Path
import os
from google import genai
from google.genai import types

ROOT = Path(__file__).resolve().parents[1]
REF = ROOT / "react/public/images/sample.png"
TARGETS = [
    "chest-01-neck.jpg",
    "chest-02-anterior.jpg",
    "chest-03-heart-palpation.jpg",
    "chest-04-heart-auscultation.jpg",
    "chest-05-lung-percussion-anterior.jpg",
    "chest-06-lung-auscultation-anterior.jpg",
    "chest-07-back-inspection.jpg",
    "chest-08-lung-percussion-posterior.jpg",
    "chest-09-lung-auscultation-posterior.jpg",
]

# 失敗時に使う簡易なデフォルト描写（人物の容姿を含めない）
FALLBACK_DESCRIPTIONS = {
    "chest-01-neck.jpg": "Close-up upper-body, doctor at side, patient seated, looking slightly away, chest and neck exposed, neutral clinic background.",
    "chest-02-anterior.jpg": "Frontal upper-body of patient seated, chest exposed, neutral background, doctor just out of frame.",
    "chest-03-heart-palpation.jpg": "Doctor’s hand gently palpating anterior chest, patient seated, upper-body frame, neutral background.",
    "chest-04-heart-auscultation.jpg": "Doctor placing stethoscope on anterior chest, patient seated, upper-body frame, neutral background.",
    "chest-05-lung-percussion-anterior.jpg": "Doctor percussing anterior chest with fingers, patient seated, upper-body frame, neutral background.",
    "chest-06-lung-auscultation-anterior.jpg": "Doctor listening to anterior chest with stethoscope, patient seated, upper-body frame, neutral background.",
    "chest-07-back-inspection.jpg": "Patient sitting or standing with back toward camera, upper-body frame, neutral background.",
    "chest-08-lung-percussion-posterior.jpg": "Doctor percussing posterior chest with fingers, patient facing away, upper-body frame, neutral background.",
    "chest-09-lung-auscultation-posterior.jpg": "Doctor listening with stethoscope on posterior chest, patient facing away, upper-body frame, neutral background.",
}

def to_part(path: Path) -> types.Part:
    mime = "image/png" if path.suffix.lower() == ".png" else "image/jpeg"
    return types.Part.from_bytes(data=path.read_bytes(), mime_type=mime)

def main():
    api_key = os.getenv("GOOGLE_API_KEY")
    if not api_key:
        raise SystemExit("環境変数 GOOGLE_API_KEY を設定してください。")
    client = genai.Client(api_key=api_key)
    ref_part = to_part(REF)

    out_dir = ROOT / "react/public/images/chest"
    out_dir.mkdir(parents=True, exist_ok=True)

    describe_prompt = (
        "Describe the scene/composition of this medical chest-exam photo in 1-2 sentences: "
        "camera angle, pose/gesture, body orientation, framing, background, equipment. "
        "Do NOT describe doctor/patient appearance (no gender, face, hair, clothing)."
    )

    for name in TARGETS:
        target_path = out_dir / name
        if not target_path.exists():
            print(f"[warn] ターゲット画像が見つかりません: {target_path}")
            continue
        target_part = to_part(target_path)

        # 1) 描写テキストを取得（最大3回リトライ）
        description = None
        for attempt in range(1, 4):
            try:
                desc_res = client.models.generate_content(
                    model="gemini-1.5-pro",
                    contents=[types.Part.from_text(text=describe_prompt), target_part],
                )
                for p in desc_res.parts:
                    if p.text:
                        description = p.text.strip()
                        break
                if description:
                    break
            except Exception as e:
                print(f"[warn] {name}: describe failed (try {attempt}/3): {e}")
        if not description:
            fallback = FALLBACK_DESCRIPTIONS.get(name)
            if fallback:
                description = fallback
                print(f"[warn] {name}: 描写テキスト取得失敗 -> fallback適用")
            else:
                print(f"[warn] {name}: 描写テキスト取得失敗（fallbackなし）")
                continue

        gen_prompt = (
            "Use ONLY the doctor, patient, and exam room from the reference image. "
            "Recreate the scene according to this description: "
            f"{description} "
            "Keep realistic lighting and medical context. Do not change who the people are."
        )

        # 2) 画像生成（最大3回リトライ）
        res = None
        for attempt in range(1, 4):
            try:
                res = client.models.generate_content(
                    model="gemini-2.5-flash-image",
                    contents=[
                        types.Part.from_text(text=gen_prompt),
                        ref_part,
                    ],
                )
                break
            except Exception as e:
                print(f"[warn] {name}: generation failed (try {attempt}/3): {e}")
        if res is None:
            continue

        saved = False
        for part in res.parts:
            if part.inline_data:
                img = part.as_image()
                out_file = out_dir / f"gen-{name.replace('.jpg', '.png')}"
                img.save(out_file)
                print(f"Saved: {out_file}")
                saved = True
                break
        if not saved:
            print(f"[warn] 画像を取り出せませんでした: {name}")

if __name__ == "__main__":
    main()
