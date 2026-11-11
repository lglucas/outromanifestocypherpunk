// Anexo A (o livro) — PT. Sprint D3.
export const book = {
  title: 'ANEXO A · O DOCUMENTO',
  description:
    'O documento: 7 capítulos + conclusão + manifesto sobre como criptografia, blockchain e IA viraram vigilância. Leia os trechos interceptados. Em breve na Amazon; livre (CC BY-SA 4.0) em 22/05/2028.',
  tag: 'Anexo A · evidência apreendida',
  h2a: 'O ',
  h2b: 'DOCUMENTO',
  docsub:
    'Não-ficção. 7 capítulos. A tese: a tecnologia que prometia libertar — criptografia, blockchain, IA — foi capturada por Estados e corporações e virou o braço mais eficiente de controle que já existiu. O padrão é estrutural, não acidente.',
  meta: '≈ 170 páginas · ~37 mil palavras · 7 capítulos + conclusão + manifesto · © todos os direitos reservados · CC BY-SA 4.0 em 22/05/2028',
  indexTag: 'Índice de provas',
  chapters: [
    ['CAP 01', 'A vigilância que ganhamos'],
    ['CAP 02', 'Privacidade: a coisa que tentaram codificar como direito'],
    ['CAP 03', 'Bitcoin: a primeira tentativa séria'],
    ['CAP 04', 'A explosão e a ressaca'],
    ['CAP 05', 'Quando o Estado entra: regular tarde, parcial, blindando a si'],
    ['CAP 06', 'A IA muda tudo (de novo)'],
    ['CAP 07', 'x402 e a economia dos agentes'],
    ['FECHO', 'Conclusão · voltando ao início'],
    ['FECHO', 'Manifesto · mais um manifesto cypherpunk'],
  ] as [string, string][],
  interceptTag: 'Interceptações · role para desclassificar',
  excerpts: [
    {
      tilt: 1, freq: '1.404 MHz', cap: 'CAPÍTULO 1',
      text: 'A vigilância antes era farda, fichário, escuta autorizada. Quem faz o trabalho sujo agora tem interface bonita, microcopy gentil, e pede permissão antes de vasculhar. Você não liga, porque você não pensa que isso é com você. Mas é.',
    },
    {
      tilt: 2, freq: '0.953 MHz', cap: 'CAPÍTULO 6',
      text: 'A IA não rompe nada disso. Ela acelera. Não vê apenas o que você fez — infere o que você é. É o seu telefone sabendo o que você é antes de você saber.',
    },
    {
      tilt: 3, freq: '2.110 MHz', cap: 'CAPÍTULO 2',
      text: 'Privacidade não é o direito de esconder uma coisa feia. É o direito de fazer merda em paz, de errar, de mudar — e, para milhões de pessoas, é o direito anterior a todos: o de continuar existindo.',
    },
  ] as { tilt: 1 | 2 | 3; freq: string; cap: string; text: string }[],
  sampleTag: 'Amostra apreendida',
  /** primeira letra da Página I (capitular); o resto do parágrafo segue em folds[0].paras[0] */
  dropcap: 'H',
  folds: [
    {
      title: 'Página I · Abertura', seal: 'SELO ROMPIDO',
      paras: [
        'ouve um tempo em que a promessa era simples: a criptografia devolveria ao indivíduo o que o Estado e a corporação haviam tomado. O código seria a arma do fraco. A privacidade, um padrão — não um pedido.',
        'Este livro é sobre o que aconteceu com essa promessa. Sobre o dia em que a ferramenta de libertação aprendeu a sorrir antes de revistar você.',
      ],
    },
    {
      title: 'Página II · O virar', seal: 'LACRADO',
      paras: [
        'A conveniência foi o cavalo de Troia. Cada permissão concedida sem leitura, cada "aceitar todos", cada interface gentil — tijolos de uma prisão que pede desculpas antes de fechar a porta.',
        '[ trecho seguinte disponível na edição completa ]',
      ],
    },
    {
      title: 'Página III · A recusa', seal: 'CLASSIFICADO',
      paras: [
        'Recusar é possível. Não como nostalgia, mas como engenharia: criptografia, soberania de chaves, o direito de existir sem ser inferido. O outro manifesto começa aqui.',
        '[ continua... ]',
      ],
    },
  ],
  epigraph: '"Wer sich nicht selbst befiehlt, / Bleibt immer ein Knecht."',
  epigraphCredit: '— Johann Wolfgang von Goethe · quem não comanda a si mesmo permanece servo.',
  hintA: 'o documento completo sai livre em 22/05/2028 · ',
  hintLink: 'ser avisado',
};

export type BookContent = typeof book;
