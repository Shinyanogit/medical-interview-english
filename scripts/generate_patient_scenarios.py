#!/usr/bin/env python3
"""Parse the PDF casebook and produce structured scenario data for the React app."""
from __future__ import annotations

import json
import re
import unicodedata
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import Dict, List, Optional, Tuple

import time

from googletrans import Translator
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
PDF_PATH = ROOT / "local" / "症例ロールプレイ資料.pdf"
OUTPUT_PATH = ROOT / "react" / "src" / "data" / "generatedScenarios.json"
CACHE_PATH = ROOT / "local" / "translation_cache.json"

CATEGORY_DEFS = {
    "I": {
        "roman": "I",
        "id": "pain-by-location",
        "label_ja": "部位別の痛み",
        "label_en": "Pain by Location",
        "order": 1,
    },
    "II": {
        "roman": "II",
        "id": "consciousness",
        "label_ja": "意識に関連した症候",
        "label_en": "Consciousness-Related Symptoms",
        "order": 2,
    },
    "III": {
        "roman": "III",
        "id": "systemic",
        "label_ja": "全身症状",
        "label_en": "Systemic Symptoms",
        "order": 3,
    },
    "IV": {
        "roman": "IV",
        "id": "gastrointestinal",
        "label_ja": "消化器に関連した症候",
        "label_en": "Gastrointestinal Symptoms",
        "order": 4,
    },
    "V": {
        "roman": "V",
        "id": "cardiopulmonary",
        "label_ja": "呼吸・循環に関連した症候",
        "label_en": "Respiratory / Circulatory Symptoms",
        "order": 5,
    },
    "VI": {
        "roman": "VI",
        "id": "neuro-psych",
        "label_ja": "神経・精神に関連した症候",
        "label_en": "Neurologic / Psychiatric Symptoms",
        "order": 6,
    },
    "VII": {
        "roman": "VII",
        "id": "other-common",
        "label_ja": "その他のよくある症候",
        "label_en": "Other Common Symptoms",
        "order": 7,
    },
}

CIRCLED_MAP = {
    "①": 1,
    "②": 2,
    "③": 3,
    "④": 4,
    "⑤": 5,
    "⑥": 6,
    "⑦": 7,
    "⑧": 8,
    "⑨": 9,
    "⑩": 10,
}

LETTER_CUES = {
    "O": "symptom onset and context",
    "P": "provoking or relieving factors",
    "Q": "symptom quality or severity",
    "R": "location or radiation",
    "S": "associated symptoms",
    "T": "time course",
    "A": "additional detail",
    "B": "additional detail",
}

PERSONALITY_BY_CATEGORY = {
    "I": "Clearly uncomfortable from pain but cooperative and appreciative of clear explanations.",
    "II": "May be groggy or worried about episodes; speaks slowly but answers honestly.",
    "III": "Feverish and fatigued yet polite, answering in short sentences.",
    "IV": "Anxious about digestive symptoms but still courteous and forthcoming.",
    "V": "Short of breath or light-headed; tries to conserve energy with brief answers.",
    "VI": "Concerned about neurologic changes, occasionally pauses to find words.",
    "VII": "Mildly anxious about new symptoms but generally calm and cooperative.",
}

DEFAULT_INSTRUCTIONS = [
    "Stay fully in character as the patient; never mention simulations or AI.",
    "Respond in natural English (or provide a short Japanese sentence first only if explicitly requested).",
    "Keep answers concise (1–3 sentences) but feel free to elaborate for open-ended questions.",
    "Do not invent new medical facts beyond the scenario. If unsure, admit it as the patient would.",
    "Politely ask for clarification if the clinician's question is unclear.",
]

MALE_NAMES = [
    "Ken Tanaka",
    "Hiroshi Yamamoto",
    "Takeshi Nakamura",
    "Koji Saito",
    "Naoki Suzuki",
    "Yusuke Kobayashi",
    "Kenta Watanabe",
    "Ryohei Kondo",
    "Masato Fujii",
    "Daichi Aoki",
    "Toru Sasaki",
    "Kazuki Matsumoto",
    "Shota Kuroda",
    "Yuji Hasegawa",
    "Haruto Ono",
    "Issei Okada",
    "Sora Takahashi",
    "Taichi Kato",
    "Yuto Ando",
    "Ren Miura",
    "Hayato Nakajima",
    "Minato Murakami",
    "Ryusei Uchida",
    "Keito Mochizuki",
]
FEMALE_NAMES = [
    "Aya Nakamura",
    "Yuki Sato",
    "Mika Taniguchi",
    "Haruka Nishimura",
    "Emi Fujimoto",
    "Nozomi Takagi",
    "Aoi Matsuda",
    "Rina Yamazaki",
    "Kana Sugiyama",
    "Moe Ishikawa",
    "Sayaka Morita",
    "Chika Hoshino",
    "Misaki Adachi",
    "Nanami Ueno",
    "Risa Kawai",
    "Miyu Furutani",
    "Hina Yasuda",
    "Ayami Sakurai",
    "Mao Tokunaga",
    "Asuka Morishita",
    "Yumeka Hijikata",
    "Akari Sakamoto",
    "Nana Kiritani",
    "Marina Noguchi",
]

translator = Translator()
if CACHE_PATH.exists():
    translation_cache = json.loads(CACHE_PATH.read_text(encoding="utf-8"))
else:
    translation_cache = {}


def translate(text: str) -> str:
    text = text.strip()
    if not text:
        return ""
    cached = translation_cache.get(text)
    if cached:
        return cached
    last_error: Optional[Exception] = None
    for attempt in range(3):
        try:
            result = translator.translate(text, src="ja", dest="en").text
            translation_cache[text] = result
            return result
        except Exception as exc:  # pragma: no cover - network
            last_error = exc
            time.sleep(1 + attempt)
    raise last_error  # type: ignore[misc]


def save_cache() -> None:
    CACHE_PATH.write_text(json.dumps(translation_cache, ensure_ascii=False, indent=2), encoding="utf-8")


def circled_to_int(token: str) -> Optional[int]:
    if token in CIRCLED_MAP:
        return CIRCLED_MAP[token]
    if token.isdigit():
        return int(token)
    for char in token:
        if char in CIRCLED_MAP:
            return CIRCLED_MAP[char]
    return None


def slugify(text: str, fallback: str) -> str:
    normalized = unicodedata.normalize("NFKD", text)
    ascii_text = normalized.encode("ascii", "ignore").decode("ascii")
    ascii_text = ascii_text or fallback
    slug = re.sub(r"[^a-z0-9]+", "-", ascii_text.lower()).strip("-")
    return slug or fallback


def parse_patient_line(line: str) -> Tuple[str, str, str]:
    match = re.search(r"(?P<age>\d+)歳(?P<gender>男性|女性)[，,]\s*主訴[:：]\s*(?P<cc>.+)", line)
    if not match:
        raise ValueError(f"Cannot parse patient line: {line}")
    age = match.group("age")
    gender = match.group("gender")
    cc = match.group("cc").strip()
    return age, gender, cc


def parse_blocks(lines: List[str], start_idx: int) -> List[Dict[str, List[str]]]:
    blocks: List[Dict[str, List[str]]] = []
    current: Optional[Dict[str, List[str]]] = None
    i = start_idx
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        if line.startswith("【"):
            break
        heading = None
        content = None
        if re.fullmatch(r"[A-Z]{1,3}", line):
            heading = line
        else:
            # try heading with colon or whitespace
            if "：" in line:
                heading, content = line.split("：", 1)
            elif " " in line:
                candidate, rest = line.split(" ", 1)
                if len(candidate) <= 6 and all(
                    "\u3040" <= c <= "\u30ff"
                    or "\u4e00" <= c <= "\u9fff"
                    or c.isalpha()
                    for c in candidate
                ):
                    heading, content = candidate, rest
        if heading:
            current = {"label": heading, "content": []}
            blocks.append(current)
            if content:
                current["content"].append(content.strip())
        else:
            if current is None:
                current = {"label": "misc", "content": []}
                blocks.append(current)
            current["content"].append(line)
        i += 1
    return blocks


def extract_patient_answers(lines: List[str]) -> Tuple[List[Dict[str, List[str]]], int]:
    try:
        idx = lines.index("患者さんの回答")
    except ValueError:
        return [], -1
    blocks = parse_blocks(lines, idx + 1)
    return blocks, idx


def extract_presentation(lines: List[str]) -> Dict[str, str]:
    try:
        idx = lines.index("【プレゼンテーション】")
    except ValueError:
        return {}
    blocks = parse_blocks(lines, idx + 1)
    summary: Dict[str, str] = {}
    for block in blocks:
        label = block["label"].strip()
        text = " ".join(block["content"]).strip()
        if text:
            summary[label] = text
    return summary


def categorize_history(blocks: List[Dict[str, List[str]]]) -> Tuple[List[Tuple[str, str]], Dict[str, List[str]]]:
    opqrst: List[Tuple[str, str]] = []
    history_sections = {
        "pastMedicalHistory": [],
        "medications": [],
        "allergies": [],
        "familyHistory": [],
        "socialHistory": [],
        "other": [],
    }
    for block in blocks:
        label = block["label"].strip()
        text = " ".join(block["content"]).strip()
        if not text:
            continue
        if re.fullmatch(r"[A-Z]{1,3}", label):
            opqrst.append((label, text))
            continue
        target = None
        if "既往" in label:
            target = "pastMedicalHistory"
        elif "服薬" in label or "内服" in label:
            target = "medications"
        elif "アレルギー" in label:
            target = "allergies"
        elif "家族" in label:
            target = "familyHistory"
        elif any(key in label for key in ["嗜好", "生活", "食事", "飲酒", "喫煙", "習慣", "職業", "備考", "排尿", "排便", "睡眠", "周り", "渡航", "妊", "月経", "性" ]):
            target = "socialHistory"
        else:
            target = "other"
        history_sections[target].append(f"{label} {text}" if label not in text else text)
    return opqrst, history_sections


def assign_name(gender: str, index: int) -> str:
    if gender == "女性":
        names = FEMALE_NAMES
    else:
        names = MALE_NAMES
    return names[index % len(names)]


def main() -> None:
    reader = PdfReader(str(PDF_PATH))
    generated_cases = []
    page_index = 0
    male_index = 0
    female_index = 0

    for idx, page in enumerate(reader.pages):
        text = page.extract_text() or ""
        if "主訴" not in text:
            continue
        lines = [line.strip() for line in text.splitlines() if line.strip()]
        patient_line = next((line for line in lines if "主訴" in line and "歳" in line), None)
        if not patient_line:
            continue
        vitals_line = next((line for line in lines if line.startswith("バイタル")), "")
        title_match = re.search(r"第\s*(\d+)夜\s*([^\n#]+)", text)
        category_line = next((line for line in lines if re.match(r"^[IVX]+\.", line)), None)
        category_match = (
            re.match(r"([IVX]+)\.\s*([^\d①-⑩\n]+)([0-9①-⑩]*)", category_line) if category_line else None
        )
        if not title_match or not category_match:
            continue
        night_num = int(title_match.group(1))
        symptom_raw = title_match.group(2).strip()
        category_roman = category_match.group(1)
        category_index = circled_to_int(category_match.group(3)) or 0
        category_def = CATEGORY_DEFS.get(category_roman)
        if not category_def:
            continue

        age_str, gender_ja, chief_ja = parse_patient_line(patient_line)
        age = int(age_str)
        gender_en = "female" if gender_ja == "女性" else "male"
        if gender_en == "female":
            name = assign_name(gender_ja, female_index)
            female_index += 1
        else:
            name = assign_name(gender_ja, male_index)
            male_index += 1

        symptom_variant = circled_to_int(symptom_raw[-1]) if symptom_raw and symptom_raw[-1] in CIRCLED_MAP else None
        symptom_label_ja = symptom_raw
        if symptom_variant:
            symptom_label_ja = symptom_raw[:-1]
        symptom_label_ja = symptom_label_ja.strip()
        symptom_label_en = translate(symptom_label_ja)
        title_en = translate(symptom_raw)

        demo_ja = f"{age}歳{'男性' if gender_en == 'male' else '女性'}"
        demo_en = f"{age}-year-old {'male' if gender_en == 'male' else 'female'}"

        chief_en = translate(chief_ja)
        vitals_en = translate(vitals_line.replace("バイタル：", "")) if vitals_line else ""

        answer_blocks, _ = extract_patient_answers(lines)
        opqrst, history_sections = categorize_history(answer_blocks)
        present_blocks = []
        for label, text in opqrst:
            translated = translate(text)
            present_blocks.append(
                {
                    "label": label,
                    "cue": LETTER_CUES.get(label, "detail"),
                    "textJa": text,
                    "textEn": translated,
                }
            )
        present_illness = [block["textEn"] for block in present_blocks]

        history_translated = {
            key: [translate(item) for item in values]
            for key, values in history_sections.items()
            if key != "other"
        }
        other_history = [translate(item) for item in history_sections.get("other", [])]
        presentation = extract_presentation(lines)
        summary_en = translate(presentation.get("S", "")) if presentation.get("S") else f"{demo_en} with {chief_en}."
        objective_en = translate(presentation.get("O", "")) if presentation.get("O") else ""
        plan_en = translate(presentation.get("A&P", "")) if presentation.get("A&P") else ""

        if not present_illness:
            present_illness = [summary_en]

        scenario_id = slugify(f"{symptom_label_en}-{symptom_variant or ''}-{night_num}", f"case-{night_num}")
        scenario = {
            "id": scenario_id,
            "nightNumber": night_num,
            "titleJa": symptom_raw,
            "titleEn": title_en,
            "categoryId": category_def["id"],
            "categoryRoman": category_roman,
            "categoryOrder": category_def["order"],
            "symptomOrder": category_index or night_num,
            "symptomLabelJa": symptom_label_ja,
            "symptomLabelEn": symptom_label_en,
            "symptomVariant": symptom_variant,
            "patient": {
                "name": name,
                "age": age,
                "gender": gender_en,
                "demographicsJa": demo_ja,
                "demographicsEn": demo_en,
                "chiefComplaintJa": chief_ja,
                "chiefComplaintEn": chief_en,
                "vitalsJa": vitals_line,
                "vitalsEn": vitals_en,
            },
            "caseNotes": {
                "summaryEn": summary_en,
                "objectiveEn": objective_en,
                "planEn": plan_en,
            },
            "presentIllness": present_blocks,
            "history": history_translated,
            "otherHistory": other_history,
        }
        generated_cases.append(scenario)
        page_index += 1

    output_data = {
        "categories": list(CATEGORY_DEFS.values()),
        "scenarios": generated_cases,
        "instructions": DEFAULT_INSTRUCTIONS,
        "personalities": PERSONALITY_BY_CATEGORY,
    }
    OUTPUT_PATH.write_text(json.dumps(output_data, ensure_ascii=False, indent=2), encoding="utf-8")
    save_cache()


if __name__ == "__main__":
    main()
