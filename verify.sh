#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

port="${PORT:-8127}"
base_url="http://127.0.0.1:${port}"
log_file="/tmp/creative-discipline-site-http.log"
html_file="/tmp/creative-discipline-site-index.html"

node --check app.js

python3 -m http.server "$port" --bind 127.0.0.1 >"$log_file" 2>&1 &
server_pid=$!

cleanup() {
  kill "$server_pid" >/dev/null 2>&1 || true
}
trap cleanup EXIT

for _ in {1..30}; do
  if curl -fsS "$base_url/" >"$html_file" 2>/dev/null; then
    break
  fi
  sleep 0.2
done

curl -fsS "$base_url/app.js" >/dev/null
curl -fsS "$base_url/styles.css" >/dev/null
curl -fsS "$base_url/assets/screener-map.svg" >/dev/null

grep -q "十倍周期雷达" "$html_file"
grep -q "styles.css" "$html_file"
grep -q "app.js" "$html_file"

echo "Verified ${base_url}"
