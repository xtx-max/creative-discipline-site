#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

remote_url="${1:-}"

if [[ -z "$remote_url" ]]; then
  cat <<'USAGE'
Usage:
  ./push-to-github.sh <github-repository-url>

Example:
  ./push-to-github.sh https://github.com/xtx-max/creative-discipline-site.git
USAGE
  exit 2
fi

if [[ "$remote_url" != https://github.com/* && "$remote_url" != git@github.com:* ]]; then
  echo "Refusing to push: remote must be a GitHub URL." >&2
  exit 2
fi

./verify.sh

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$remote_url"
else
  git remote add origin "$remote_url"
fi

git push -u origin main
