#!/usr/bin/env python3
from argparse import ArgumentParser
from dataclasses import dataclass
import os
import re
import shutil
from hashlib import md5
from time import sleep
from typing import List, Optional, Tuple

import requests
from openai import OpenAI


def get_openai_client() -> OpenAI:
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise RuntimeError("OPENAI_API_KEY env var is required for this script")
    return OpenAI(api_key=api_key)


def extract_text_between(text: str, start_str: str, end_str: str) -> Optional[str]:
    pattern = re.compile(re.escape(start_str) + r"(.*?)" + re.escape(end_str), re.DOTALL)
    match = pattern.search(text)
    if match:
        return match.group(1).strip()
    return None


@dataclass
class Note:
    index: int
    front: str
    back: str
    sound1: str
    sound2: str
    sound3: str
    description: str
    etymology: str
    additional_information: str


class Anki:
    def __init__(self):
        self.media_path = (
            "/Users/shinyyama/Library/Application Support/Anki2/User 1/collection.media"
        )
        self.url = "http://localhost:8765"

    def fetch_notes(self, deck_name: str) -> List[Note]:
        res = requests.post(
            self.url,
            json={
                "action": "findNotes",
                "version": 6,
                "params": {"query": f"deck:{deck_name}"},
            },
        ).json()
        assert res["error"] is None
        indexes = res["result"]
        return [self._fetch_note(index) for index in indexes]

    def update_field(self, note: Note, field: str, value: str):
        res = requests.post(
            self.url,
            json={
                "action": "updateNoteFields",
                "version": 6,
                "params": {"note": {"id": note.index, "fields": {field: value}}},
            },
        )
        assert res.json()["error"] is None
        return res.json()["result"]

    def add_sound_field(self, note: Note, field: str, file_path: str):
        target = os.path.join(self.media_path, file_path)
        if os.path.abspath(file_path) != os.path.abspath(target):
            shutil.move(file_path, target)
        self.update_field(note, field, f"[sound:{file_path}]")

    def _fetch_note(self, note_id: int) -> Note:
        res = requests.post(
            self.url,
            json={"action": "notesInfo", "version": 6, "params": {"notes": [note_id]}},
        ).json()
        assert res["error"] is None
        note_info = res["result"][0]
        return Note(
            index=note_info["noteId"],
            front=note_info["fields"]["Front"]["value"],
            back=note_info["fields"]["Back"]["value"],
            sound1=note_info["fields"]["sound1"]["value"],
            sound2=note_info["fields"]["sound2"]["value"],
            sound3=note_info["fields"]["sound3"]["value"],
            description=note_info["fields"]["description"]["value"],
            etymology=note_info["fields"].get("Etymology", {}).get("value", ""),
            additional_information=note_info["fields"].get("Additional_information", {}).get("value", ""),
        )

    def _note_ids_from_card_query(self, query: str) -> set:
        res_cards = requests.post(
            self.url,
            json={"action": "findCards", "version": 6, "params": {"query": query}},
        ).json()
        assert res_cards["error"] is None
        card_ids = res_cards["result"] or []
        if not card_ids:
            return set()
        res_info = requests.post(
            self.url,
            json={"action": "cardsInfo", "version": 6, "params": {"cards": card_ids}},
        ).json()
        assert res_info["error"] is None
        return {card["note"] for card in res_info["result"]}

    def get_due_or_new_note_ids(self, deck_name: str) -> set:
        """Return set of note IDs that have at least one due or new card in the deck."""
        due_set = self._note_ids_from_card_query(f"deck:{deck_name} is:due")
        new_set = self._note_ids_from_card_query(f"deck:{deck_name} is:new")
        return due_set | new_set

    def get_suspended_note_ids(self, deck_name: str) -> set:
        """Return set of note IDs that have at least one suspended card in the deck."""
        return self._note_ids_from_card_query(f"deck:{deck_name} is:suspended")


def translate_to_japanese(client: OpenAI, text: str) -> str:
    try:
        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {
                    "role": "user",
                    "content": f"次の医学英単語を日本語の単語一言に翻訳してください。返信は一言で結構です。: {text}",
                }
            ],
        )
        return (response.choices[0].message.content or "").strip()
    except Exception as e:
        print(f"Error during translation for '{text}': {e}")
        return ""


def generate_sound(client: OpenAI, text: str) -> str:
    filename = md5(text.encode("utf-8")).hexdigest() + ".mp3"
    try:
        response = client.audio.speech.create(model="tts-1", voice="alloy", input=text)
        response.stream_to_file(filename)
        return filename
    except Exception as e:
        print(f"Error generating sound for text '{text}': {e}")
        return ""


def generate_reply(client: OpenAI, text: str) -> Tuple[Optional[str], List[str]]:
    try:
        reply = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "user",
                    "content": (
                        f"医学のコンテクストで用いられる単語である{text}の語源を説明してください(意味とのつながりを意識)適度に簡潔に。"
                        "例文を2つほど英語で作成し、その日本語訳も教えて下さい。要するに、以下の形式の返答です。"
                        "語源：〜〜（箇条書きでの説明。適宜改行）〜〜（2行改行）例文1：~~(改行)訳：~~(改行)例文2(改行)訳：~~"
                    ),
                }
            ],
        )
        reply_text = (reply.choices[0].message.content or "").replace("\n", "<br>")
        example_sentences = [
            extract_text_between(reply_text, "例文1：", "<br>") or "",
            extract_text_between(reply_text, "例文2：", "<br>") or "",
        ]
        # Do not prepend links; keep reply HTML minimal for downstream splitting
        return reply_text, example_sentences
    except Exception as e:
        print(f"Error generating reply for '{text}': {e}")
        return None, []


def generate_reply_with_retries(client: OpenAI, text: str, attempts: int = 3, delay: float = 0.8) -> Tuple[Optional[str], List[str]]:
    reply: Optional[str] = None
    examples: List[str] = []
    for i in range(attempts):
        reply, examples = generate_reply(client, text)
        # Consider success if reply exists OR we have at least one non-empty example sentence
        if reply is not None and any(examples):
            return reply, examples
        sleep(delay)
    return reply, examples


def generate_sound_with_retries(client: OpenAI, text: str, attempts: int = 3, delay: float = 0.8) -> str:
    for i in range(attempts):
        file_path = generate_sound(client, text)
        if file_path:
            return file_path
        sleep(delay)
    return ""


def classify_front(client: OpenAI, text: str, attempts: int = 2) -> str:
    """
    Returns one of: 'disease', 'test_treatment', 'finding_symptom', 'other'
    """
    for _ in range(attempts):
        try:
            resp = client.chat.completions.create(
                model="gpt-4.1-mini",
                messages=[
                    {"role": "system", "content": "Return ONLY one token: disease | test_treatment | finding_symptom | other"},
                    {"role": "user", "content": f"カテゴリを判定: '{text}' は疾患名か検査・治療か、所見/症状か、それ以外か。"},
                ],
            )
            label = (resp.choices[0].message.content or "").strip().lower()
            if label in ("disease", "test_treatment", "finding_symptom", "other"):
                return label
        except Exception:
            pass
    return "other"


def generate_supplement_content(client: OpenAI, text: str, label: str, attempts: int = 3, delay: float = 0.8) -> str:
    for i in range(attempts):
        try:
            if label == "disease":
                prompt = (
                    f"疾患名『{text}』について、因果関係が一目でわかるように日本語で簡潔に箇条書き(3〜6項目)。"
                    "'→'を用いて、原因→病態→症状/所見→検査→治療 の流れが分かるようにまとめてください。"
                )
            elif label == "test_treatment":
                prompt = (
                    f"検査/治療『{text}』の適応と禁忌を日本語で簡潔にまとめてください。"
                    "見出し:『適応』『禁忌』を置き、それぞれ箇条書きで3〜5項目。"
                )
            else:
                return ""

            resp = client.chat.completions.create(
                model="gpt-4.1-mini",
                messages=[
                    {"role": "system", "content": "出力は日本語。無駄を省き、正確で簡潔に。"},
                    {"role": "user", "content": prompt},
                ],
            )
            content = (resp.choices[0].message.content or "").strip()
            if content:
                return content
        except Exception:
            pass
        sleep(delay)
    return ""


def to_html_breaks(text: str) -> str:
    return text.replace("\n", "<br>")


def wrap_collapsible(title: str, inner_html: str) -> str:
    return f"<details><summary>{title}</summary>" + inner_html + "</details>"


def strip_br_ends(html: str) -> str:
    html = re.sub(r'^(?:\s|<br\s*/?>)+', '', html, flags=re.IGNORECASE)
    html = re.sub(r'(?:\s|<br\s*/?>)+$', '', html, flags=re.IGNORECASE)
    return html


def split_etymology_and_description_from_reply(reply_html: str) -> Tuple[str, str]:
    """
    Split reply HTML into (etymology_html, description_html) at the first occurrence of 例文1：.
    - Remove leading '語源：' and immediate break from etymology part
    - Ensure no trailing/leading <br> at etymology end or description start
    If split marker is not found, return ("", cleaned_reply_html) so entire content goes to description.
    """
    m = re.search(r"例文[1１]\s*[:：]", reply_html)
    if not m:
        return "", strip_br_ends(reply_html)
    left = reply_html[: m.start()]
    right = reply_html[m.start():]
    # Remove leading '語源：'
    mg = re.search(r"語源：", left)
    if mg:
        left = left[mg.end():]
    ety = strip_br_ends(left)
    desc = strip_br_ends(right)
    return ety, desc


def generate_additional_information_content(client: OpenAI, term: str, label: str, attempts: int = 3, delay: float = 0.8) -> str:
    for _ in range(attempts):
        try:
            if label == "disease":
                prompt = (
                    "以下の要件に厳密に従って作成してください。\n"
                    f"対象疾患: 『{term}』\n"
                    "- 出力は巨大な1本の因果フローチャート。箇条書き・番号は使わない。\n"
                    "- 行ごとに時系列/因果の重要キーワードを配置し、行と行の間は必ず改行、各行の内部は『→』で接続。\n"
                    "- 例: リスク要因・病態形成・機能低下・症状/所見・検査所見・進行像・転帰 などを可能な範囲で順に。\n"
                    "- 記号は『→』『↓』のみ使用可。余計な説明文は入れず、専門語の列挙に徹する。\n"
                    "- 先頭や末尾に余計な空行や前置きは入れない。\n"
                    "- 出力は日本語。\n"
                    "例（ASO）：\n"
                    "糖尿病・高血圧・高脂血症・喫煙などの動脈硬化リスク↑\n"
                    "↓\n"
                    "中〜大動脈（主に下肢動脈）で動脈硬化性プラーク形成（脂質核＋線維性被膜）\n"
                    "↓\n"
                    "管腔狭窄 → 安静時は血流保たれるが、運動時は需要＞供給に\n"
                    "↓\n"
                    "下肢の間欠性跛行（claudication）、さらには安静時痛へと進行\n"
                    "↓\n"
                    "血流不足が高度化 → 末梢潰瘍（足趾先端など）・皮膚萎縮・壊疽\n"
                    "↓\n"
                    "夜間や足挙上時に血流がさらに低下 → 安静時痛が悪化 → 足を垂らして寝ると楽になる\n"
                )
            elif label == "test_treatment":
                prompt = (
                    "以下の要件に従って『適応』と『禁忌』を日本語で簡潔にまとめてください。\n"
                    f"対象: 『{term}』\n"
                    "- 見出し『適応』『禁忌』を置き、それぞれ3〜6項目の箇条書き。\n"
                    "- 各項目は10〜25字程度のフレーズで、具体的な特性・条件から導出。\n"
                    "- 先頭や末尾に余計な空行を入れない。出力は日本語。"
                    "例（腹腔鏡手術）：\n"
                    "腹腔鏡手術の基本構造\n"
                    "↓\n"
                    "小切開で鉗子・カメラを挿入 ＋ 炭酸ガスで気腹\n"
                    "↓\n"
                    "【物理的影響】\n"
                    "・開腹創が小さい → 出血↓・疼痛↓・感染リスク↓\n"
                    "・一方で腹腔が密閉 → 視野・操作空間は限定的\n"
                    "・気腹圧↑ → 横隔膜挙上 → 換気量↓\n"
                    "＋ 静脈還流↓ → 心拍出量↓\n"
                    "↓\n"
                    "【生理学的帰結】\n"
                    "・低侵襲だが、呼吸循環に一定の負荷を与える\n"
                    "・操作性は病変の位置・癒着・出血量に大きく依存\n"
                    "↓\n"
                    "【臨床的効果】\n"
                    "◎ 組織損傷が少ない → 回復早期・整容性↑・疼痛管理容易\n"
                    "× 重度癒着・進行癌では視野確保困難 → 安全性↓\n"
                    "× 全身予備力低下例では気腹負荷が危険 → 循環虚脱リスク↑"
                )
            elif label == "finding_symptom":
                prompt = (
                    "以下の要件に厳密に従って、所見/症状の原因鑑別を機序から体系化して提示してください。\n"
                    f"対象所見/症状: 『{term}』\n"
                    "- 出力は複数行の因果フロー。各行は『原因/病因（カテゴリ）』→『機序/病態』→『所見/症状』の順で『→』接続。\n"
                    "- 必要に応じて行間に『↓』で進展/増悪を挿入可。行同士は独立した鑑別候補として列挙。\n"
                    "- 各行は簡潔な専門語の列挙に徹し、余計な前置き/解説文は入れない。\n"
                    "- 先頭や末尾に余計な空行は入れない。出力は日本語。\n"
                    "外的刺激（乾燥・異物・コンタクト）／アレルギー（花粉・ダニ）／感染（ウイルス・細菌）／毒性・薬剤／血行うっ滞・自律神経失調"
                    "↓\n"
                    "角結膜上皮微損傷・抗原提示・神経反射\n"
                    "↓\n"
                    "ヒスタミン・プロスタグランジン・サイトカイン放出（＋副交感優位で血管拡張）\n"
                    "↓\n"
                    "結膜血管拡張＋透過性↑ → 結膜浮腫（chemosis）\n"
                    "↓\n"
                    "結膜充血（鮮紅色・表在血管・綿棒で可動）\n"
                    "↓\n"
                    "随伴所見で鑑別\n"
                    "・そう痒優位・両眼・季節性・糸状分泌物 → アレルギー性結膜炎\n"
                    "・水様分泌物＋耳前リンパ節腫脹＋家族内流行 → ウイルス性結膜炎（流行性角結膜炎 等）\n"
                    "・粘膿性分泌物・まつ毛痂皮 → 細菌性結膜炎\n"
                    "・異物感/CL装用＋疼痛・羞明・視力低下 → 角膜炎/角膜潰瘍（緊急）\n"
                    "・強い眼痛・羞明・視力低下・毛様充血（周辺輪状の暗赤色） → 前部ぶどう膜炎／急性閉塞隅角緑内障（緊急）\n"
                    "・局所板状の鮮紅色・痛みなし・自然軽快 → 結膜下出血\n"
                    "・深部痛＋眼球圧痛・青紫調 → 強膜炎（全身炎症性疾患合併に注意）\n"
                    "・乾燥感・VDT・瞬目減少 → ドライアイ（蒸発亢進型）\n"
                    "↓\n"
                    "赤旗（要精査/救急）：激痛／羞明／視力低下／毛様充血／角膜染色陽性 → 角膜病変・ぶどう膜炎・急性緑内障 を除外/治療へ"
                )
            else:
                return ""

            resp = client.chat.completions.create(
                model="gpt-4.1-mini",
                messages=[
                    {"role": "system", "content": "出力は日本語で厳密に指示に従う。余計な前置き/後置きは禁止。"},
                    {"role": "user", "content": prompt},
                ],
            )
            content = (resp.choices[0].message.content or "").strip()
            if content:
                return content.replace("\n", "<br>")
        except Exception:
            pass
        sleep(delay)
    return ""


def add_translation_and_description(deck_name: str, overwrite: bool, generate_audio: bool, supplement: bool):
    client = get_openai_client()
    anki = Anki()
    notes = anki.fetch_notes(deck_name)
    total_notes = len(notes)
    current_note = 1
    eligible_sound1_note_ids = anki.get_due_or_new_note_ids(deck_name)
    suspended_note_ids = anki.get_suspended_note_ids(deck_name)

    for note in notes:
        try:
            # Skip notes that have any suspended cards
            if note.index in suspended_note_ids:
                print(f"Skipping note {note.index} (has suspended cards)")
                continue
            print(f"Processing {current_note}/{total_notes}: {note.front}")
            current_note += 1
            example_sentences: List[str] = []

            # Generate Additional_information if requested (do this regardless of language)
            if supplement and (overwrite or note.additional_information.strip() == ""):
                label = classify_front(client, note.front)
                print(f"Additional_information: classified as {label}")
                addi = generate_additional_information_content(client, note.front, label)
                if not addi and label == "other":
                    # Fallback attempt as 'disease'
                    addi = generate_additional_information_content(client, note.front, "disease")
                if addi:
                    addi = strip_br_ends(addi)
                    anki.update_field(note, "Additional_information", addi)
                    print(f"Updated Additional_information for note {note.index}")
                else:
                    print(f"No Additional_information generated for note {note.index}")

            # Skip notes whose front field contains non-English words (only for translation/description/audio parts)
            if not re.match(r"^[A-Za-z]+(?: [A-Za-z]+)*$", note.front):
                print(
                    f"Skipping translation/description/audio for note {note.index} because front contains non-English characters: '{note.front}'"
                )
                # Continue to next note; Additional_information (if any) was already handled above
                continue

            # Add translation to Back if missing
            if note.back.strip() == "":
                translation = translate_to_japanese(client, note.front)
                if translation:
                    anki.update_field(note, "Back", translation)
                    print(f"Added translation: {note.front} -> {translation}")

            # Generate sound1: TTS of the Front word (only for notes with at least one DUE or NEW card)
            if generate_audio and note.index in eligible_sound1_note_ids and (note.sound1.strip() == "" or overwrite):
                sound1_file = generate_sound_with_retries(client, note.front)
                if sound1_file:
                    anki.add_sound_field(note, "sound1", sound1_file)
                    print(f"Added/Updated sound1 for note {note.index}")
            elif generate_audio and note.index not in eligible_sound1_note_ids:
                print(f"Skipped sound1 for note {note.index} (no due/new cards)")

            # Add or overwrite description (etymology + examples) with retries
            if note.description.strip() == "" or overwrite:
                reply, example_sentences = generate_reply_with_retries(client, note.front)
                if reply is None:
                    print("Skipping description due to generation error (quota, etc.)")
                elif reply:
                    # Split into Etymology and Description by '例文1：'
                    ety_html, desc_html = split_etymology_and_description_from_reply(reply)
                    # Append supplement after description if requested
                    final_description = desc_html
                    # Update fields: description always (in this branch), etymology only if empty or overwrite
                    anki.update_field(note, "description", final_description)
                    if ety_html and (overwrite or note.etymology.strip() == ""):
                        anki.update_field(note, "Etymology", ety_html)
                    print(f"Updated description/Etymology for note {note.index}")
                else:
                    print(f"No description generated for note {note.index}")
            else:
                print(
                    f"Skipping description for note {note.index} because it exists and overwrite is False"
                )

            # Generate Additional_information if requested
            if supplement and (overwrite or note.additional_information.strip() == ""):
                label = classify_front(client, note.front)
                addi = generate_additional_information_content(client, note.front, label)
                if addi:
                    addi = strip_br_ends(addi)
                    anki.update_field(note, "Additional_information", addi)
                    print(f"Updated Additional_information for note {note.index}")

            # Generate example sentence audio into sound2/sound3 automatically
            if generate_audio and example_sentences:
                for i, sentence in enumerate(example_sentences, start=2):
                    if not sentence:
                        continue
                    existing_sound_field = getattr(note, f"sound{i}")
                    if existing_sound_field and not overwrite:
                        print(
                            f"Skipping sound{i} for note {note.index} because it exists and overwrite is False"
                        )
                        continue
                    sound_file = generate_sound_with_retries(client, sentence)
                    if sound_file:
                        anki.add_sound_field(note, f"sound{i}", sound_file)
                        print(f"Added/Updated sound{i} for note {note.index}")

            # Rate limit safety
            sleep(0.1)
        except Exception as e:
            print(f"Error processing note {note.index}: {e}")
            continue


def main():
    parser = ArgumentParser()
    parser.add_argument("deck", help="Deck name")
    parser.add_argument(
        "--overwrite",
        help="Overwrite existing description and sound fields",
        action="store_true",
    )
    parser.add_argument(
        "--no-audio",
        help="Do not generate audio for example sentences",
        action="store_true",
    )
    parser.add_argument(
        "--supplement",
        help="Generate collapsible supplement based on Front category",
        action="store_true",
    )
    args = parser.parse_args()

    add_translation_and_description(
        deck_name=args.deck,
        overwrite=args.overwrite,
        generate_audio=not args.no_audio,
        supplement=args.supplement,
    )


if __name__ == "__main__":
    main()
