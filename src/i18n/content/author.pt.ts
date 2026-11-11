// Anexo B (o autor/informante) — PT. Sprint D3. Campos "Html" aceitam HTML inline simples.
export const author = {
  title: 'ANEXO B · O INFORMANTE',
  description:
    'O informante: o advogado-programador que construiu máquinas de compliance e vigilância — e agora entrega o dossiê. Mais um manifesto cypherpunk, de quem esteve dos dois lados.',
  jsonLd: {
    '@context': 'https://schema.org', '@type': 'Person', name: 'Lucas Lopes Galvão',
    jobTitle: 'Advogado e programador', nationality: 'BR',
    description: 'Advogado (Direito Europeu e Alemão, UFRGS/PUCRS) e programador; autor de "O Outro Manifesto Cypherpunk".',
    url: 'https://outromanifesto.space/autor',
  } as Record<string, unknown>,
  tag: 'Anexo B · fonte do vazamento',
  h2a: 'O ',
  h2b: 'INFORMANTE',
  docsub:
    'Quem te vigiou nos primeiros segundos não é um personagem inventado. É alguém que fez isso para viver — e cansou. As provas deste arquivo vêm dele.',
  mugCap: 'desertor · cooperando',
  fields: [
    { k: 'Identidade', vHtml: 'Lucas Lopes Galvão', big: true },
    { k: 'Credenciais', vHtml: 'advogado · 10+ anos de advocacia · 30 anos escrevendo código · mestre em Direito Europeu e Alemão (UFRGS / PUCRS)', big: false },
    { k: 'Tese de mestrado (2017–2019)', vHtml: '"Privacidade na Blockchain" — defendeu a privacidade como direito fundamental.', big: false },
  ],
  afterK: 'Depois',
  afterHtml:
    'Fundou um oráculo de compliance que faz screening de um bilhão de transações por semana. Veredito por carteira: <strong>CLEAN · FLAGGED · UNAVAILABLE</strong>.',
  confessionTag: 'Confissão · role para desclassificar',
  confession:
    'Escrevi a tese sobre o seu direito à privacidade. Depois vendi a máquina que o revoga. Entendo de código, entendo de contratos — e sei fazer os dois conversarem. Foi assim que ajudei a te vigiar. O oráculo já está rodando. Eu liguei. E é por isso que eu sei exatamente do que estou falando.',
  testimonyTag: 'Testemunho · Anexo B-2',
  witnessCap: 'testemunha · espontânea',
  quoteA:
    '"Uma máquina que tudo vê, como se fosse um Deus no prédio. O meu direito acabou. Quanto mais estudo seu livro, mais tô me sentindo oprimida no meu direito de ',
  quoteRedacted: 'fazer merda em paz',
  quoteB: '."',
  signature: 'Marícia Ullmann',
  sigMeta: 'Leitora e mãe do autor · depoimento espontâneo · assinado de próprio punho',
  hintA: 'a fonte entregou tudo · ',
  hintLink: 'ver o documento',
};

export type AuthorContent = typeof author;
