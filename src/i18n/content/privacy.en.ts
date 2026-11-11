// Privacy policy — EN. Sprint D3 (license D-034/D-035 + language cookie). Items are inline HTML.
import type { PrivacyContent } from './privacy.pt';

export const privacy: PrivacyContent = {
  title: 'ANNEX · LEGAL DUTY',
  description:
    'Privacy policy for The Other Cypherpunk Manifesto site: what we collect (email and anonymous analytics), why, and how to have it deleted. We honor "Do Not Track".',
  tag: 'Annex · legal duty',
  h2a: 'PRIVACY ',
  h2b: '(for real)',
  docsub:
    'A book about surveillance can’t be careless with your data. So here it is, minus the decorative legalese: exactly what we collect, why, and how to get out.',
  sections: [
    {
      h: 'What we collect',
      items: [
        '<strong>Your email and name</strong>, if you give them in the terminal or the notification form. Stored in our <strong>Listmonk</strong> (our own server), with your explicit consent and the language you signed up in (pt/en).',
        '<strong>Anonymous traffic stats</strong>, via <strong>self-hosted Umami</strong> (on our server) — no cookies, nothing that identifies you, no raw IP or User-Agent kept. Aggregate numbers only (page views, country, referrer).',
        '<strong>What the "hacker" shows you in the terminal</strong> (IP, device, etc.) <strong>is not stored on the server</strong> — it lives only in your browser session and disappears when you close the tab. The demonstration is the point; the collection isn’t.',
        '<strong>Two functional cookies</strong>, no tracking: <code>livro_entered</code> (remembers you already went through the terminal) and <code>lang</code> (remembers the language you picked in the switcher). Your browser’s language is read only to choose the PT or EN version of the page — it isn’t stored.',
      ],
    },
    {
      h: 'Why',
      items: [
        'Email: to let you know when the book launches on Amazon and when it’s released for free (PDF/EPUB, CC BY-SA 4.0) on 22 May 2028.',
        'Stats: to see how many people show up and from where — nothing more.',
      ],
    },
    {
      h: 'Retention and your rights',
      items: [
        'Your email stays until you <strong>unsubscribe</strong> (link in every email we send).',
        'Want to see, correct or <strong>delete</strong> your data? Write to <a href="mailto:contato@lucasgalvao.com.br">contato@lucasgalvao.com.br</a> — we’ll sort it out.',
        'We don’t sell, rent or hand your data to anyone. (Yes, the irony of a book about this promising this has not escaped us.)',
      ],
    },
  ],
  dntH: '"Do Not Track"',
  dntHtml:
    'If your browser sends the <em>Do Not Track</em> signal, our analytics <strong>honors it</strong> and doesn’t count you. Here, it works. The book is about why that little checkbox almost never protects you anywhere else on the internet.',
  foot: 'Book license: © all rights reserved; CC BY-SA 4.0 from 22 May 2028. Last updated: November 2026.',
  hintA: "don't trust, ",
  hintB: 'verify',
};
