// Home (FILE No. 0001) — EN. Sprint D3.
import type { HomeContent } from './home.pt';
const SITE = 'https://outromanifesto.space';

export const home: HomeContent = {
  title: 'FILE No. 0001 — YOU',
  description:
    'You stopped being a citizen. You became a user. The Other Cypherpunk Manifesto — why the technology that promised to set us free became the most efficient arm of control. Coming to Amazon; free (CC BY-SA 4.0) on 22 May 2028.',
  h1: 'FILE No. 0001 — ',
  you: 'YOU',
  docsub: 'The Other Cypherpunk Manifesto — why the technology that promised to set us free became an arm of control.',
  subjectTag: 'Subject record',
  thesisA: 'You stopped being a citizen. ',
  thesisB: 'You became a user.',
  sloganA: 'The technology that promised to set us free became the most efficient arm of control that ever existed. ',
  sloganB: 'Then it gave a keynote about innovation.',
  hintA: 'open the annexes · ',
  hintB: 'declassify what you can',
  jsonLd: [
    { '@context': 'https://schema.org', '@type': 'WebSite', name: 'The Other Cypherpunk Manifesto', url: `${SITE}/en`, inLanguage: 'en' },
    {
      '@context': 'https://schema.org', '@type': 'Book', name: 'The Other Cypherpunk Manifesto',
      alternativeHeadline: 'why the technology that promised to set us free became an arm of control',
      author: { '@type': 'Person', name: 'Lucas Lopes Galvão' }, inLanguage: 'en',
      about: 'privacy, surveillance, cryptography, blockchain, artificial intelligence',
      isAccessibleForFree: false,
      url: `${SITE}/en`,
    },
  ],
};
