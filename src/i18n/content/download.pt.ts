// Anexo C (lançamento + liberação em 22/05/2028) — PT. Sprint D3 (licença D-034/D-035).
export const download = {
  title: 'ANEXO C · LIBERAÇÃO',
  description:
    'O Outro Manifesto Cypherpunk: lançamento na Amazon em breve; liberação gratuita (PDF e EPUB, CC BY-SA 4.0) em 22/05/2028, Bitcoin Pizza Day. Deixe seu e-mail e seja avisado das duas datas.',
  tag: 'Anexo C · liberação',
  h2a: 'A ',
  h2b: 'LIBERAÇÃO',
  h3: 'Desclassificação programada',
  // HTML inline simples (<strong>)
  introHtml:
    'Por enquanto, o documento é <strong>© todos os direitos reservados</strong>. Sai primeiro na <strong>Amazon</strong>. Em <strong>22 de maio de 2028</strong> — o Bitcoin Pizza Day — vira livre de verdade: <strong>PDF e EPUB sob CC BY-SA 4.0</strong>, pra copiar, estudar e redistribuir. Deixe um canal de contato e seja avisado nas duas datas: o lançamento e a liberação.',
  placeholder: 'seu-email@dominio.cifrado',
  emailAria: 'seu e-mail',
  button: 'Quero ser avisado',
  privacyLine:
    'Guardamos só o teu e-mail, no nosso servidor. Não vendemos, não inferimos, não entregamos a ninguém. (Sim — a ironia não passou despercebida.)',
  freeStamp: 'Livre em 22/05/2028',
  hintA: '© todos os direitos reservados · CC BY-SA 4.0 em 22/05/2028 · ',
  hintB: "don't trust, verify",
  leadName: 'leitor (liberação)',
  msg: {
    invalid: '✕ ENDEREÇO INVÁLIDO — TENTE NOVAMENTE.',
    processing: '► PROCESSANDO...',
    ok: '► CANAL REGISTRADO. VOCÊ SERÁ AVISADO. NENHUM DADO INFERIDO.',
    fail: '✕ FALHA NO REGISTRO — TENTE DE NOVO.',
  },
};

export type DownloadContent = typeof download;
