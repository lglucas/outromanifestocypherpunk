// Annex A (the book) — EN. Sprint D3. Chapter titles from manuscrito-en/_toc.en.md;
// intercepted excerpts quoted from the EN edition (manuscrito-en/*.en.md), not re-translated.
import type { BookContent } from './book.pt';

export const book: BookContent = {
  title: 'ANNEX A · THE DOCUMENT',
  description:
    'The document: 7 chapters + conclusion + manifesto on how cryptography, blockchain and AI turned into surveillance. Read the intercepted excerpts. Coming to Amazon; free (CC BY-SA 4.0) on 22 May 2028.',
  tag: 'Annex A · seized evidence',
  h2a: 'THE ',
  h2b: 'DOCUMENT',
  docsub:
    'Non-fiction. 7 chapters. The thesis: the technology that promised to set us free — cryptography, blockchain, AI — was captured by States and corporations and became the most efficient arm of control that ever existed. The pattern is structural, not an accident.',
  meta: '≈ 170 pages · 7 chapters + conclusion + manifesto · © all rights reserved · CC BY-SA 4.0 on 22 May 2028',
  indexTag: 'Evidence index',
  chapters: [
    ['CH 01', 'The internet that was never ours again'],
    ['CH 02', 'Privacy: the thing they tried to codify as a right'],
    ['CH 03', 'Bitcoin: the first serious attempt to give it back'],
    ['CH 04', 'Boom and hangover: crypto from 2020 to 2024'],
    ['CH 05', 'GDPR, LGPD and the tension of immutability'],
    ['CH 06', 'AI changes everything (again)'],
    ['CH 07', 'x402 and the agent economy'],
    ['CLOSE', 'Conclusion · back to the beginning'],
    ['CLOSE', 'Manifesto · one more cypherpunk manifesto'],
  ],
  interceptTag: 'Intercepts · scroll to declassify',
  excerpts: [
    {
      tilt: 1, freq: '1.404 MHz', cap: 'CHAPTER 1',
      text: 'Surveillance used to be uniforms, file cabinets, authorized wiretaps. Whoever does the dirty work now has a pretty interface, gentle microcopy, and asks permission before rummaging through your life. You don’t care, because you don’t think this has anything to do with you. But it does.',
    },
    {
      tilt: 2, freq: '0.953 MHz', cap: 'CHAPTER 6',
      text: 'Artificial intelligence doesn’t break any of this. It accelerates it. It doesn’t just see what you did. It infers what you are. It’s your phone, right now, knowing what you are before you do.',
    },
    {
      tilt: 3, freq: '2.110 MHz', cap: 'CHAPTER 2',
      text: 'Privacy isn’t the right to hide something ugly. It’s the right to fuck up in peace, to be wrong, to change — and, for millions of people, it’s the right that comes before all the others: the right to go on existing.',
    },
  ],
  sampleTag: 'Seized sample',
  dropcap: 'T',
  folds: [
    {
      title: 'Page I · Opening', seal: 'SEAL BROKEN',
      paras: [
        'here was a time when the promise was simple: cryptography would give back to the individual what the State and the corporation had taken. Code would be the weapon of the weak. Privacy, a default — not a favor you ask for.',
        'This book is about what happened to that promise. About the day the tool of liberation learned to smile before it frisked you.',
      ],
    },
    {
      title: 'Page II · The turn', seal: 'SEALED',
      paras: [
        'Convenience was the Trojan horse. Every permission granted unread, every "accept all", every gentle interface — bricks in a prison that apologizes before it locks the door.',
        '[ next excerpt available in the full edition ]',
      ],
    },
    {
      title: 'Page III · The refusal', seal: 'CLASSIFIED',
      paras: [
        'Refusing is possible. Not as nostalgia, but as engineering: cryptography, sovereignty over your own keys, the right to exist without being inferred. The other manifesto starts here.',
        '[ to be continued... ]',
      ],
    },
  ],
  epigraph: '"Wer sich nicht selbst befiehlt, / Bleibt immer ein Knecht."',
  epigraphCredit: '— Johann Wolfgang von Goethe · he who does not command himself remains forever a servant.',
  hintA: 'the full document goes free on 22 May 2028 · ',
  hintLink: 'get notified',
};
