// Política de privacidade — PT. Sprint D3 (licença D-034/D-035 + cookie de idioma). Itens em HTML inline.
export const privacy = {
  title: 'ANEXO · DEVER LEGAL',
  description:
    'Política de privacidade do site O Outro Manifesto Cypherpunk: o que coletamos (e-mail e analytics anônimo), por quê, e como pedir exclusão. Honramos o "Não me rastreie".',
  tag: 'Anexo · dever legal',
  h2a: 'PRIVACIDADE ',
  h2b: '(de verdade)',
  docsub:
    'Um livro sobre vigilância não pode ser leviano com os teus dados. Então aqui vai, sem juridiquês de fachada: exatamente o que coletamos, por quê, e como sair.',
  sections: [
    {
      h: 'O que coletamos',
      items: [
        '<strong>Teu e-mail e nome</strong>, se você os der no terminal ou no formulário de aviso. Guardados no nosso <strong>Listmonk</strong> (servidor próprio), com o teu consentimento explícito e o idioma em que você se cadastrou (pt/en).',
        '<strong>Estatísticas de acesso anônimas</strong>, via <strong>Umami self-hosted</strong> (no nosso servidor) — sem cookies, sem te identificar, sem guardar teu IP nem teu User-Agent crus. Só números agregados (páginas vistas, país, referência).',
        '<strong>O que o "hacker" te mostra no terminal</strong> (IP, dispositivo, etc.) <strong>não é gravado no servidor</strong> — vive só na tua sessão de navegador e some quando você fecha a aba. A demonstração é o ponto; a coleta não.',
        '<strong>Dois cookies funcionais</strong>, sem rastreio: <code>livro_entered</code> (lembra que você já passou pelo terminal) e <code>lang</code> (lembra o idioma que você escolheu no seletor). O idioma do teu navegador é lido só para escolher a versão PT ou EN da página — não é guardado.',
      ],
    },
    {
      h: 'Por quê',
      items: [
        'E-mail: te avisar do lançamento do livro na Amazon e da liberação gratuita (PDF/EPUB, CC BY-SA 4.0) em 22/05/2028.',
        'Estatísticas: entender quantas pessoas chegam e por onde — nada além disso.',
      ],
    },
    {
      h: 'Retenção e teus direitos',
      items: [
        'Teu e-mail fica até você <strong>descadastrar</strong> (link em todo e-mail que enviarmos).',
        'Quer ver, corrigir ou <strong>apagar</strong> teus dados? Escreva pra <a href="mailto:contato@lucasgalvao.com.br">contato@lucasgalvao.com.br</a> — a gente resolve.',
        'Não vendemos, não alugamos, não entregamos teus dados a ninguém. (Sim, a ironia de um livro sobre isso prometer isso não passou despercebida.)',
      ],
    },
  ],
  dntH: '"Não me rastreie"',
  dntHtml:
    'Se o teu navegador manda o sinal <em>Do Not Track</em>, o nosso analytics <strong>respeita</strong> e não te conta. Aqui ele funciona. O livro é justamente sobre por que essa caixinha quase nunca te protege em todo o resto da internet.',
  foot: 'Licença do livro: © todos os direitos reservados; CC BY-SA 4.0 a partir de 22/05/2028. Última atualização: novembro/2026.',
  hintA: "don't trust, ",
  hintB: 'verify',
};

export type PrivacyContent = typeof privacy;
