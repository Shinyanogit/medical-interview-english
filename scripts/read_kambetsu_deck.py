"""
Utility to inspect the local Anki deck named "鑑別診断".

It reads a backup .colpkg/.apkg without touching the live Anki profile,
and prints a small sample of notes (fields) from the target deck.
"""

from __future__ import annotations

import json
import sqlite3
import tempfile
import zipfile
from pathlib import Path

# Backups folder that stores .colpkg auto-backups.
BACKUP_DIR = Path(
    "/Users/shinyyama/Library/Application Support/Anki2/User 1/backups"
)
# Deck name to look for.
TARGET_DECK_NAME = "鑑別診断"


def load_collection_from_colpkg(colpkg_path: Path) -> sqlite3.Connection:
    """
    Extract collection.anki2/anki21 from a .colpkg/.apkg into a temp dir
    and return an sqlite Connection.
    """
    if not colpkg_path.exists():
        raise FileNotFoundError(f"File not found: {colpkg_path}")

    zf = zipfile.ZipFile(colpkg_path)
    with tempfile.TemporaryDirectory() as td:
        tmpdir = Path(td)
        # Prefer collection.anki21, fall back to .anki2
        candidate = None
        for name in ("collection.anki21", "collection.anki2"):
            if name in zf.namelist():
                candidate = name
                break
        if not candidate:
            raise RuntimeError("No collection.anki2/21 found in archive")
        zf.extract(candidate, tmpdir)
        db_path = tmpdir / candidate
        con = sqlite3.connect(db_path)
        con.row_factory = sqlite3.Row
        return con  # caller must close


def decode_json_field(raw: str | bytes) -> dict:
    if isinstance(raw, bytes):
        raw = raw.decode("utf-8")
    return json.loads(raw)


def find_first_backup_with_deck() -> Path | None:
    """
    Walk backups newest-first and return the first file that contains the
    target deck name.
    """
    backups = sorted(
        BACKUP_DIR.glob("*.colpkg"), key=lambda p: p.stat().st_mtime, reverse=True
    )
    for colpkg in backups:
        try:
            con = load_collection_from_colpkg(colpkg)
            cur = con.cursor()
            decks_json = decode_json_field(cur.execute("SELECT decks FROM col").fetchone()[0])
            has_target = any(TARGET_DECK_NAME in d.get("name", "") for d in decks_json.values())
            con.close()
            if has_target:
                return colpkg
        except Exception:
            continue
    return None


def print_latest_backup_decks(limit: int = 5) -> None:
    backups = sorted(
        BACKUP_DIR.glob("*.colpkg"), key=lambda p: p.stat().st_mtime, reverse=True
    )
    if not backups:
        print("No backups found.")
        return
    newest = backups[0]
    try:
        con = load_collection_from_colpkg(newest)
        decks_json = decode_json_field(
            con.cursor().execute("SELECT decks FROM col").fetchone()[0]
        )
        con.close()
        print(f"Decks in newest backup ({newest.name}):")
        for did, meta in decks_json.items():
            print(f"  {did}: {meta.get('name')}")
    except Exception as exc:
        print(f"Failed to read decks from {newest}: {exc}")


def main() -> None:
    colpkg_path = find_first_backup_with_deck()
    if not colpkg_path:
        print(f"Target deck '{TARGET_DECK_NAME}' not found in backups under {BACKUP_DIR}")
        print_latest_backup_decks()
        return
    print("Using backup:", colpkg_path)
    con = load_collection_from_colpkg(colpkg_path)
    cur = con.cursor()

    decks_json = decode_json_field(cur.execute("SELECT decks FROM col").fetchone()[0])
    models_json = decode_json_field(cur.execute("SELECT models FROM col").fetchone()[0])

    # Find deck ids whose name contains the target label.
    target_ids = [
        int(did)
        for did, meta in decks_json.items()
        if "鑑別診断" in meta.get("name", "")
    ]
    if not target_ids:
        print("Target deck not found.")
        con.close()
        return

    print("Found deck IDs:", target_ids)
    for did in target_ids:
        print(f"- {did}: {decks_json[str(did)]['name']}")

    placeholders = ",".join("?" * len(target_ids))
    cards = cur.execute(
        f"SELECT id, nid, did FROM cards WHERE did IN ({placeholders}) LIMIT 20",
        target_ids,
    ).fetchall()
    print(f"Sample cards fetched: {len(cards)}")

    note_ids = list({row["nid"] for row in cards})
    if not note_ids:
        print("No notes found in the target deck.")
        con.close()
        return

    note_ph = ",".join("?" * len(note_ids))
    notes = cur.execute(
        f"SELECT id, mid, flds FROM notes WHERE id IN ({note_ph})", note_ids
    ).fetchall()
    note_map = {row["id"]: row for row in notes}

    for idx, card in enumerate(cards, 1):
        note = note_map[card["nid"]]
        model = models_json[str(note["mid"])]
        field_names = [f["name"] for f in model["flds"]]
        field_values = note["flds"].split("\x1f")
        print(f"\nCard {idx} (deck {card['did']}), model: {model.get('name')}")
        for name, value in zip(field_names, field_values):
            preview = value.replace("<br>", " ")[:200]
            print(f"  {name}: {preview}")

    con.close()


if __name__ == "__main__":
    main()
