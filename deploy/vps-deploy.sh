#!/usr/bin/env bash
set -euo pipefail
IMAGE_REF="${1:-ghcr.io/lglucas/outromanifestocypherpunk:latest}"
cd /opt/livro
echo "${GHCR_PAT:-}" | docker login ghcr.io -u lglucas --password-stdin 2>/dev/null || true
IMAGE_REF="$IMAGE_REF" docker compose pull
IMAGE_REF="$IMAGE_REF" docker compose up -d
echo "deploy ok: $IMAGE_REF"