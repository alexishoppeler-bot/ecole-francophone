#!/bin/bash
# Génère toutes les pages HTML d'unités depuis scripts/template-unite.html.
# Usage : bash scripts/build-units.sh
# Les pages existantes sont écrasées — toute modification manuelle sera perdue.
# Pour changer le HTML commun : modifier scripts/template-unite.html puis relancer.

set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TEMPLATE="$ROOT/scripts/template-unite.html"

generate() {
  local dest="$1"    # chemin relatif depuis ROOT (ex: cours/a2/a2-unite-1.html)
  local depth="$2"   # profondeur sous ROOT (1 = cours/, 2 = cours/a2/)
  local back="$3"    # href du lien retour cours (ex: ../index.html)
  local level="$4"   # identifiant de niveau (a1, a2, b1, b2, c1c2)

  # Calculer le chemin vers les assets selon la profondeur
  local asset=""
  for _ in $(seq 1 "$depth"); do asset="../${asset}"; done

  local out="$ROOT/$dest"
  mkdir -p "$(dirname "$out")"
  sed \
    -e "s|{{ASSET_BASE}}|${asset}|g" \
    -e "s|{{COURS_INDEX}}|${back}|g" \
    -e "s|{{LEVEL}}|${level}|g" \
    "$TEMPLATE" > "$out"
}

# ── Unités A1 (cours/a1/) ──────────────────────────────────────────
for i in 0 1 2 3 4 5 6 7 8; do
  generate "cours/a1/unite-${i}.html" 2 "../index.html" "a1"
done

# ── Unités A2 (cours/a2/) ─────────────────────────────────────────
for i in 1 2 3 4 5 6 7 8 9 10 11 12; do
  generate "cours/a2/a2-unite-${i}.html" 2 "../index.html" "a2"
done

# ── Unités B1 (cours/b1/) ─────────────────────────────────────────
for i in 1 2 3 4 5 6 7 8 9 10 11 12; do
  generate "cours/b1/b1-unite-${i}.html" 2 "../index.html" "b1"
done

# ── Unités B2 (cours/b2/) ─────────────────────────────────────────
for i in 1 2 3 4 5 6 7 8 9; do
  generate "cours/b2/b2-unite-${i}.html" 2 "../index.html" "b2"
done

# ── Unités C1/C2 (cours/c1c2/) ────────────────────────────────────
for i in 1 2 3 4 5 6 7 8 9 10 11 12; do
  generate "cours/c1c2/c1c2-unite-${i}.html" 2 "../index.html" "c1c2"
done

echo "✓ $(find "$ROOT/cours/a1" "$ROOT/cours/a2" "$ROOT/cours/b1" "$ROOT/cours/b2" "$ROOT/cours/c1c2" -name '*.html' 2>/dev/null | wc -l) pages générées depuis le template."
