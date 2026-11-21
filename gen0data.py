#!/usr/bin/env python3
"""Regenerate the /0 novel index.

Run after adding or removing a novel:

    python3 gen0data.py

Writes static/0/assets/data.json and refreshes the inline copy in
static/0/index.html so the /0 home screen has no data-fetch delay.
"""
import datetime
import json
import os
import re
import tomllib

ROOT = "content"
OUT_JSON = "static/0/assets/data.json"
OUT_HTML = "static/0/index.html"

TOOLS = [
    {"title": "Dictionary", "path": "/dictionary/", "desc": "Word lookup — 23 Wiktionary editions & fuzzy matching", "kicker": "Lexicon"},
    {"title": "Studio", "path": "/studio/", "desc": "Compress, convert & resize images, PDFs and documents — all in-tab", "kicker": "Documents"},
    {"title": "Walldiff", "path": "/walldiff/", "desc": "Wallpaper recolor — gowall engine, 35 palettes", "kicker": "Palettes"},
    {"title": "Typing", "path": "/typing/", "desc": "Typing test — time/word modes, live WPM & accuracy", "kicker": "Speed Test"},
    {"title": "Abeyant", "path": "/abeyant/", "desc": "New tab, clock, search & shortcuts", "kicker": "Extension"},
    {"title": "Desktop", "path": "https://viyoga.github.io/web-startpages/startpage/jobkitty/", "desc": "Desktop startpage — jobkitty", "kicker": "Startpage", "external": True},
    {"title": "Mobile", "path": "https://viyoga.github.io/mobile-startpages/", "desc": "Mobile startpage", "kicker": "Mobile App", "external": True},
    {"title": "Source", "path": "https://github.com/viyoga", "desc": "Open-source repository, dotfiles & site code", "kicker": "GitHub", "external": True},
]


def read_front_matter(path):
    text = open(path, encoding="utf-8").read()
    m = re.match(r"\+\+\+\s*\n(.*?)\n\+\+\+", text, re.S)
    if not m:
        return {}
    try:
        return tomllib.loads(m.group(1))
    except Exception:
        return {}


def main():
    novels = []
    for name in sorted(os.listdir(ROOT)):
        idx = os.path.join(ROOT, name, "_index.md")
        if not os.path.isfile(idx):
            continue
        fm = read_front_matter(idx)
        ex = fm.get("extra", {})
        if "book_number" not in ex:
            continue
        count = sum(
            1
            for _, _, files in os.walk(os.path.join(ROOT, name))
            for f in files
            if f.endswith(".md") and f != "_index.md"
        )
        novels.append({
            "slug": name,
            "path": f"/{name}/",
            "title": fm.get("title", name),
            "author": ex.get("author", ""),
            "chapters": ex.get("chapters", f"{count} ch"),
            "count": count,
            "summary": ex.get("summary", ""),
            "book": ex.get("book_number", 999),
        })

    novels.sort(key=lambda x: (x["book"], x["title"].lower()))
    data = {
        "generated": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "novels": novels,
        "tools": TOOLS,
    }

    payload = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    payload = payload.replace("</", "<\\/")
    os.makedirs(os.path.dirname(OUT_JSON), exist_ok=True)
    open(OUT_JSON, "w", encoding="utf-8").write(json.dumps(data, ensure_ascii=False, indent=1))

    html = open(OUT_HTML, encoding="utf-8").read()
    tag = f'<script id="v0-data" type="application/json">{payload}</script>'
    html, n = re.subn(
        r'<script id="v0-data" type="application/json">.*?</script>',
        tag,
        html,
        flags=re.S,
    )
    if n == 0:
        raise SystemExit("inline data script not found in " + OUT_HTML)
    open(OUT_HTML, "w", encoding="utf-8").write(html)

    print(f"wrote {len(novels)} novels + {len(TOOLS)} tools")


if __name__ == "__main__":
    main()
