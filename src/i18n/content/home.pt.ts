// Home (ARQUIVO Nº 0001) — PT. Sprint D3.
const SITE = 'https://outromanifesto.space';

export const home = {
  title: 'ARQUIVO Nº 0001 — VOCÊ',
  description:
    'Você deixou de ser cidadão. Virou usuário. O Outro Manifesto Cypherpunk — por que a tecnologia que prometia libertar virou o braço mais eficiente de controle. Em breve na Amazon; livre (CC BY-SA 4.0) em 22/05/2028.',
  h1: 'ARQUIVO Nº 0001 — ',
  you: 'VOCÊ',
  docsub: 'O Outro Manifesto Cypherpunk — por que a tecnologia que prometia libertar virou braço do controle.',
  subjectTag: 'Ficha do sujeito',
  thesisA: 'Você deixou de ser cidadão. ',
  thesisB: 'Virou usuário.',
  sloganA: 'A tecnologia que prometia libertar virou o braço mais eficiente de controle que já existiu. ',
  sloganB: 'E ainda transformou isso numa palestra de inovação.',
  hintA: 'abra os anexos · ',
  hintB: 'desclassifique o que puder',
  jsonLd: [
    { '@context': 'https://schema.org', '@type': 'WebSite', name: 'O Outro Manifesto Cypherpunk', url: SITE, inLanguage: 'pt-BR' },
    {
      '@context': 'https://schema.org', '@type': 'Book', name: 'O Outro Manifesto Cypherpunk',
      alternativeHeadline: 'por que a tecnologia que prometia libertar virou braço do controle',
      author: { '@type': 'Person', name: 'Lucas Lopes Galvão' }, inLanguage: 'pt-BR',
      about: 'privacidade, vigilância, criptografia, blockchain, inteligência artificial',
      isAccessibleForFree: false,
      url: SITE,
    },
  ] as Record<string, unknown>[],
};

export type HomeContent = typeof home;
