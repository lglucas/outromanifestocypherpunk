# syntax=docker/dockerfile:1
FROM node:24-alpine AS build
WORKDIR /app

# Bancos geo-IP (DB-IP Lite, licença CC) — baixados no build (gitignored localmente).
# Camada própria p/ cache; tenta o mês corrente e cai pro anterior.
RUN apk add --no-cache curl && mkdir -p data && \
    for M in 2026-06 2026-05; do \
      if curl -fsSL -o data/dbip-city-lite.mmdb.gz "https://download.db-ip.com/free/dbip-city-lite-$M.mmdb.gz"; then \
        curl -fsSL -o data/dbip-asn-lite.mmdb.gz "https://download.db-ip.com/free/dbip-asn-lite-$M.mmdb.gz" && break; \
      fi; \
    done && gunzip -f data/*.mmdb.gz && ls -la data

COPY package.json package-lock.json* ./
RUN npm ci || npm install
COPY . .
RUN npm run build

FROM node:24-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/data ./data
EXPOSE 3000
CMD ["node", "./dist/server/entry.mjs"]
