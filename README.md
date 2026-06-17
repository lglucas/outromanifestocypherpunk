<div align="center">

# ∅ outromanifesto.space

### Site de divulgação · *O Outro Manifesto Cypherpunk*

**por que a tecnologia que prometia libertar virou braço do controle**

[![License](https://img.shields.io/badge/conteúdo-CC%20BY--SA%204.0-e0902f?style=flat-square)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Astro](https://img.shields.io/badge/Astro-5-bc52ee?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![i18n](https://img.shields.io/badge/i18n-PT%20·%20EN%20·%20DE-3E5A6E?style=flat-square)](#-internacionalização)
[![Deploy](https://img.shields.io/badge/deploy-Docker%20→%20GHCR%20→%20VPS-2b3b4a?style=flat-square&logo=docker&logoColor=white)](#-deploy)
[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-c0392b?style=flat-square)](#)

</div>

---

Site **trilíngue (PT/EN/DE)** que apresenta e distribui o livro *O Outro Manifesto Cypherpunk*, de **Lucas Lopes Galvão** — **gratuito** (CC BY-SA 4.0) e também na **Amazon**.

## ✦ Sobre

O site é a frente de **divulgação** do livro. Três objetivos, nesta ordem:

1. **Plataforma do autor** — hub de credibilidade.
2. **Download grátis** com captura de e-mail (lista de leitores).
3. **Levar à Amazon** (Kindle).

> O conteúdo do livro é distribuído sob **Creative Commons BY-SA 4.0**. Gratuito na distribuição ≠ sem licença.

## ⚙️ Stack

| Camada | Tecnologia |
|---|---|
| Framework | [Astro 5](https://astro.build) (adapter Node, `standalone`) |
| Estilo | [Tailwind CSS 4](https://tailwindcss.com) |
| Conteúdo | MDX por idioma |
| Captura de e-mail | [Listmonk](https://listmonk.app) (self-hosted) |
| Entrega | Docker → GHCR → VPS atrás de Cloudflare Tunnel |

## ▶️ Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:4321
```

## 📦 Build

```bash
npm run build
npm run preview  # node ./dist/server/entry.mjs
```

## 🌐 Internacionalização

| Idioma | Rota |
|---|---|
| 🇧🇷 Português (padrão) | `/` |
| 🇬🇧 English | `/en` |
| 🇩🇪 Deutsch | `/de` |

Dicionários em `src/i18n/`; textos longos em MDX por idioma.

## 🚀 Deploy

Disparado por **tag `v*`** → GitHub Actions builda a imagem → **GHCR** → VPS (Docker Compose) atrás de **Cloudflare Tunnel**.

```bash
npm version patch --no-git-tag-version
git commit -am "chore: bump vX.Y.Z"
git tag vX.Y.Z && git push origin main --tags
```

## 🗂️ Estrutura

```text
src/
├── pages/        rotas (PT em /, EN em /en, DE em /de)
├── i18n/         dicionários
├── layouts/      Base.astro
└── components/   LanguageSwitcher, …
deploy/           docker-compose.livro.yml · vps-deploy.sh
.github/workflows/deploy.yml
```

## 📄 Licença

- **Conteúdo do livro:** [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **Código do site:** ver `LICENSE` (a definir)

---

<div align="center"><sub>∅ <b>Lucas Lopes Galvão</b> · 2026 · <a href="https://outromanifesto.space">outromanifesto.space</a></sub></div>