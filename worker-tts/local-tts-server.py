#!/usr/bin/env python3
"""
Viyoga TTS Server (Rock-Solid & Resilient)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Supports:
1. Microsoft Neural Voices (Aria, Christopher, Guy, Jenny, Michelle, Emma, etc.)
2. Android Google Speech Services Voice (The exact Soul Browser Android voice!)

Features:
- In-memory LRU cache (0ms instant replay)
- Connection concurrency limiter
- Automatic retry with exponential backoff
- Clean CORS headers
"""
import asyncio
import hashlib
import io
import json
import time
import urllib.parse
from aiohttp import web, ClientSession
import edge_tts

# Max 2 concurrent WebSocket connections to Microsoft
SEM = asyncio.Semaphore(2)

# In-memory LRU cache: hash -> (bytes, timestamp)
CACHE = {}
MAX_CACHE_ITEMS = 800


def get_cache_key(voice: str, rate: str, text: str) -> str:
    h = hashlib.sha256()
    h.update(voice.encode())
    h.update(rate.encode())
    h.update(text.encode())
    return h.hexdigest()


async def fetch_google_tts(text: str, tl: str = "en-us") -> bytes:
    """Fetch classic Android Google Speech Services audio."""
    # Split text into chunks if > 180 chars (Google endpoint limit)
    words = text.split()
    chunks = []
    curr = []
    curr_len = 0
    for w in words:
        if curr_len + len(w) + 1 > 170:
            chunks.append(" ".join(curr))
            curr = [w]
            curr_len = len(w)
        else:
            curr.append(w)
            curr_len += len(w) + 1
    if curr:
        chunks.append(" ".join(curr))

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "https://translate.google.com/",
    }

    buf = io.BytesIO()
    async with ClientSession(headers=headers) as session:
        for chunk in chunks:
            url = f"https://translate.google.com/translate_tts?ie=UTF-8&q={urllib.parse.quote(chunk)}&tl={tl}&client=tw-ob"
            async with session.get(url, timeout=10) as resp:
                if resp.status != 200:
                    raise RuntimeError(f"Google TTS returned status {resp.status}")
                buf.write(await resp.read())

    return buf.getvalue()


async def generate_audio_with_retry(text: str, voice: str, rate: str, max_retries: int = 3) -> bytes:
    key = get_cache_key(voice, rate, text)
    if key in CACHE:
        audio_data, _ = CACHE[key]
        CACHE[key] = (audio_data, time.time())
        return audio_data

    # Check if Google Voice (Android Soul Browser voice)
    if voice.startswith("google-"):
        tl = "en-gb" if "uk" in voice else "en-us"
        audio_bytes = await fetch_google_tts(text, tl=tl)
        if not audio_bytes:
            raise RuntimeError("Empty audio returned from Google TTS")
        if len(CACHE) >= MAX_CACHE_ITEMS:
            oldest_key = min(CACHE.keys(), key=lambda k: CACHE[k][1])
            del CACHE[oldest_key]
        CACHE[key] = (audio_bytes, time.time())
        return audio_bytes

    # Otherwise Microsoft Edge-TTS Neural Voice
    last_err = None
    for attempt in range(1, max_retries + 1):
        try:
            async with SEM:
                communicate = edge_tts.Communicate(text, voice, rate=rate)
                buf = io.BytesIO()
                async for chunk in communicate.stream():
                    if chunk["type"] == "audio":
                        buf.write(chunk["data"])
                audio_bytes = buf.getvalue()
                if not audio_bytes:
                    raise RuntimeError("Empty audio returned from edge-tts")

                if len(CACHE) >= MAX_CACHE_ITEMS:
                    oldest_key = min(CACHE.keys(), key=lambda k: CACHE[k][1])
                    del CACHE[oldest_key]
                CACHE[key] = (audio_bytes, time.time())
                return audio_bytes
        except Exception as e:
            last_err = e
            print(f"[tts] Attempt {attempt}/{max_retries} failed for '{text[:40]}...': {e}")
            if attempt < max_retries:
                await asyncio.sleep(0.35 * attempt)

    raise last_err or RuntimeError("Failed to generate audio")


async def handle_root(request):
    return web.Response(
        text=json.dumps({"ok": True, "service": "viyoga-tts", "cache_size": len(CACHE)}),
        content_type="application/json",
        headers={"Access-Control-Allow-Origin": "*"},
    )


async def handle_tts(request):
    params = request.rel_url.query
    text  = params.get("text",  "").strip()
    voice = params.get("voice", "google-us")
    rate  = params.get("rate",  "+0%")

    if not text:
        return web.Response(status=400, text="Missing text")
    if len(text) > 8000:
        return web.Response(status=413, text="Text too long")

    t0 = time.time()
    try:
        audio = await generate_audio_with_retry(text, voice, rate)
        dt = time.time() - t0
        print(f"[tts] OK ({dt:.2f}s, {len(audio)}b) | {voice} | {rate} | {text[:50]}...")
        return web.Response(
            body=audio,
            content_type="audio/mpeg",
            headers={
                "Access-Control-Allow-Origin": "*",
                "Cache-Control": "public, max-age=86400",
            },
        )
    except Exception as e:
        print(f"[tts] FATAL ERROR after retries: {e}")
        return web.Response(status=502, text=f"TTS error: {e}")


async def handle_options(request):
    return web.Response(
        status=204,
        headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    )


app = web.Application()
app.router.add_get("/",    handle_root)
app.router.add_get("/tts", handle_tts)
app.router.add_route("OPTIONS", "/{tail:.*}", handle_options)

if __name__ == "__main__":
    print("✓ Viyoga Multi-Voice TTS server running at http://127.0.0.1:8787")
    web.run_app(app, host="127.0.0.1", port=8787, access_log=None)
