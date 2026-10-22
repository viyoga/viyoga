#!/usr/bin/env bash
# Build the site and push it to Cloudflare Pages.
#
# Cloudflare's project is a "Direct Uploads" project, so it is deployed from
# here rather than from Git. One-time setup on a new machine:
#
#   npx wrangler login
#
# Usage: ./deploy.sh
set -euo pipefail
cd "$(dirname "$0")"

zola build

npx -y wrangler@latest pages deploy public \
  --project-name viyoga \
  --branch main \
  --commit-dirty=true
