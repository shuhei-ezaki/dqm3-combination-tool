#!/usr/bin/env bash
# 静的サイトを出力ディレクトリに組み立てる。
# 使い方: scripts/build-site.sh [出力先(既定: _site)]
# 依存なし。CDN から読む Mermaid / Google Fonts 以外はそのままコピーするだけ。
set -euo pipefail

out="${1:-_site}"

rm -rf "$out"
mkdir -p "$out/assets" "$out/routes"

cp index.html "$out/"
cp -r assets/. "$out/assets/"
cp routes/*.html "$out/routes/"

# 開発用の雛形は公開しない
rm -f "$out/routes/_template.html"

# _ 始まりのパスを Jekyll に無視させない
touch "$out/.nojekyll"

echo "built site -> $out"
find "$out" -type f | sort
