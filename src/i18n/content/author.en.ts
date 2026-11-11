// Annex B (the author/informant) — EN. Sprint D3. Credentials per manuscrito-en/sobre-o-autor.en.md.
import type { AuthorContent } from './author.pt';

export const author: AuthorContent = {
  title: 'ANNEX B · THE INFORMANT',
  description:
    'The informant: the lawyer-programmer who built compliance and surveillance machines — and is now handing over the dossier. One more cypherpunk manifesto, from someone who has worked both sides.',
  jsonLd: {
    '@context': 'https://schema.org', '@type': 'Person', name: 'Lucas Lopes Galvão',
    jobTitle: 'Lawyer and programmer', nationality: 'BR',
    description:
      'Lawyer (European and German Law, UFRGS/PUCRS) and programmer; author of "The Other Cypherpunk Manifesto".',
    url: 'https://outromanifesto.space/en/author',
  },
  tag: 'Annex B · source of the leak',
  h2a: 'THE ',
  h2b: 'INFORMANT',
  docsub:
    'Whoever was watching you in those first few seconds is not a made-up character. It’s someone who did this for a living — and got sick of it. The evidence in this file comes from him.',
  mugCap: 'defector · cooperating',
  fields: [
    { k: 'Identity', vHtml: 'Lucas Lopes Galvão', big: true },
    { k: 'Credentials', vHtml: 'lawyer · 10+ years in practice · 30 years writing code · master’s in European and German Law (UFRGS / PUCRS)', big: false },
    { k: 'Master’s thesis (2017–2019)', vHtml: '"Privacy on the Blockchain" — made the case for privacy as a fundamental right.', big: false },
  ],
  afterK: 'Then',
  afterHtml:
    'Founded a compliance oracle that screens a billion transactions a week. Verdict per wallet: <strong>CLEAN · FLAGGED · UNAVAILABLE</strong>.',
  confessionTag: 'Confession · scroll to declassify',
  confession:
    'I wrote the thesis on your right to privacy. Then I sold the machine that revokes it. I know code, I know contracts — and I know how to make them talk to each other. That’s how I helped watch you. The oracle is already running. I switched it on. Which is exactly why I know what I’m talking about.',
  testimonyTag: 'Testimony · Annex B-2',
  witnessCap: 'witness · unprompted',
  quoteA:
    '"A machine that sees everything, like a God in the building. My right is gone. The more I study your book, the more I feel oppressed in my right to ',
  quoteRedacted: 'fuck up in peace',
  quoteB: '."',
  signature: 'Marícia Ullmann',
  sigMeta: 'Reader and the author’s mother · unprompted statement · signed in her own hand · translated from Portuguese',
  hintA: 'the source handed over everything · ',
  hintLink: 'see the document',
};
