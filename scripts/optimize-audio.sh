#!/bin/bash
# Recompresse les MP3 à 64 kbps mono (largement suffisant pour voix française).
# Requiert : ffmpeg (brew install ffmpeg ou apt install ffmpeg)
# Usage   : bash scripts/optimize-audio.sh

set -e
ASSETS="$(dirname "$0")/../assets/audio"

for f in "$ASSETS"/*.mp3 "$ASSETS"/*.wav; do
  [ -f "$f" ] || continue
  out="${f%.*}.mp3"
  tmp="${out}.tmp.mp3"
  ffmpeg -i "$f" -ac 1 -b:a 64k -codec:a libmp3lame "$tmp" -y -loglevel error
  mv "$tmp" "$out"
  # Supprime le .wav source si converti
  [ "${f##*.}" = "wav" ] && [ "$f" != "$out" ] && rm "$f"
  echo "OK : $out"
done
echo "Audio optimisé."
