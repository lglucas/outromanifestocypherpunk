// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://outromanifesto.space',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [mdx()],
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});