// Gera public/og.png (PT) e public/og-en.png (EN), 1200x630, com satori + resvg. Rodar: npm run og
// D3: versão EN + rodapé com a licença atual (© até 22/05/2028, depois CC BY-SA 4.0).
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const here = dirname(fileURLToPath(import.meta.url));
const oswald = readFileSync(join(here, 'fonts/Oswald-700.ttf'));
const special = readFileSync(join(here, 'fonts/SpecialElite-400.ttf'));

const VARIANTS = [
  {
    out: 'og.png',
    cover: '../../../capa/capa.png',
    kicker: 'CLASSIFICADO · ARQUIVO Nº 0001 — VOCÊ',
    lineA: 'VOCÊ DEIXOU DE SER CIDADÃO.',
    lineB: 'VIROU USUÁRIO.',
    title: 'O Outro Manifesto Cypherpunk',
    foot: 'outromanifesto.space · livre (CC BY-SA) em 22/05/2028',
  },
  {
    out: 'og-en.png',
    // capa EN ainda é rascunho; cai na capa PT se o arquivo não existir
    cover: '../../../capa/en/cover-en-draft.png',
    kicker: 'CLASSIFIED · FILE No. 0001 — YOU',
    lineA: 'YOU STOPPED BEING A CITIZEN.',
    lineB: 'YOU BECAME A USER.',
    title: 'The Other Cypherpunk Manifesto',
    foot: 'outromanifesto.space/en · free (CC BY-SA) on 22 May 2028',
  },
];

const T = (text, style) => ({ type: 'div', props: { style: { display: 'flex', ...style }, children: text } });

function coverData(rel) {
  const path = existsSync(join(here, rel)) ? join(here, rel) : join(here, '../../../capa/capa.png');
  const buf = readFileSync(path);
  // dimensões reais do IHDR do PNG (bytes 16..24) p/ não distorcer
  const w = buf.readUInt32BE(16);
  const h = buf.readUInt32BE(20);
  const boxH = 500;
  return { src: `data:image/png;base64,${buf.toString('base64')}`, boxW: Math.round((w / h) * boxH), boxH };
}

for (const v of VARIANTS) {
  const c = coverData(v.cover);
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
              T(v.kicker, { fontSize: 20, color: '#5B7C92', letterSpacing: 3, marginBottom: 18 }),
              T(v.lineA, { fontSize: 60, lineHeight: 1.02, color: '#D9D2C5' }),
              T(v.lineB, { fontSize: 60, lineHeight: 1.02, color: '#E0731F', marginBottom: 26 }),
              T(v.title, { fontSize: 30, fontFamily: 'Special Elite', color: '#D9D2C5', marginBottom: 10 }),
              T(v.foot, { fontSize: 22, color: '#7A8088', letterSpacing: 2 }),
            ],
          },
        },
        {
          type: 'img',
          props: { src: c.src, width: c.boxW, height: c.boxH, style: { borderRadius: 6, border: '1px solid #3E5A6E' } },
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
  const out = join(here, '../public', v.out);
  writeFileSync(out, png);
  console.log(`OG gerada: ${out} (box ${c.boxW}x${c.boxH})`);
}
