// Gera public/og.png (1200x630) com satori + resvg. Rodar: npm run og
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const here = dirname(fileURLToPath(import.meta.url));
const oswald = readFileSync(join(here, 'fonts/Oswald-700.ttf'));
const special = readFileSync(join(here, 'fonts/SpecialElite-400.ttf'));

// capa: lê e extrai dimensões reais do IHDR do PNG (bytes 16..24) p/ não distorcer
const capaBuf = readFileSync(join(here, '../../../capa/capa.png'));
const capaW = capaBuf.readUInt32BE(16);
const capaH = capaBuf.readUInt32BE(20);
const boxH = 500;
const boxW = Math.round((capaW / capaH) * boxH);
const capaDataUrl = `data:image/png;base64,${capaBuf.toString('base64')}`;

const T = (text, style) => ({ type: 'div', props: { style: { display: 'flex', ...style }, children: text } });

const tree = {
  type: 'div',
  props: {
    style: {
      width: '1200px', height: '630px', display: 'flex', flexDirection: 'row',
      background: 'linear-gradient(135deg,#0A0B0D 60%,#15171a)', color: '#D9D2C5',
      padding: '64px', alignItems: 'center', justifyContent: 'space-between',
      border: '8px solid #C8521E', fontFamily: 'Oswald',
    },
    children: [
      {
        type: 'div',
        props: {
          style: { display: 'flex', flexDirection: 'column', width: '700px' },
          children: [
            T('CLASSIFICADO · ARQUIVO Nº 0001 — VOCÊ', { fontSize: 20, color: '#5B7C92', letterSpacing: 3, marginBottom: 18 }),
            T('VOCÊ DEIXOU DE SER CIDADÃO.', { fontSize: 60, lineHeight: 1.02, color: '#D9D2C5' }),
            T('VIROU USUÁRIO.', { fontSize: 60, lineHeight: 1.02, color: '#E0731F', marginBottom: 26 }),
            T('O Outro Manifesto Cypherpunk', { fontSize: 30, fontFamily: 'Special Elite', color: '#D9D2C5', marginBottom: 10 }),
            T('outromanifesto.space · livro grátis · CC BY-SA', { fontSize: 22, color: '#7A8088', letterSpacing: 2 }),
          ],
        },
      },
      {
        type: 'img',
        props: { src: capaDataUrl, width: boxW, height: boxH, style: { borderRadius: 6, border: '1px solid #3E5A6E' } },
      },
    ],
  },
};

const svg = await satori(tree, {
  width: 1200, height: 630,
  fonts: [
    { name: 'Oswald', data: oswald, weight: 700, style: 'normal' },
    { name: 'Special Elite', data: special, weight: 400, style: 'normal' },
  ],
});

const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
const out = join(here, '../public/og.png');
writeFileSync(out, png);
console.log(`OG gerada: ${out} (capa ${capaW}x${capaH} -> box ${boxW}x${boxH})`);
