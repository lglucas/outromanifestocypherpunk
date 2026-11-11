// Ficha do sujeito (home) — PT. Sprint D3.
export const subject = {
  subject: 'SUJEITO',
  placeholder: 'SUJEITO Nº 0001',
  you: '"você"',
  location: 'LOCALIZAÇÃO ESTIMADA',
  carrier: 'OPERADORA / NÓ DE SAÍDA',
  device: 'DISPOSITIVO',
  ip: 'ENDEREÇO IP',
  prediction: 'PREDIÇÃO COMPORTAMENTAL',
  predictionValue: 'CUMPRIRÁ OS TERMOS SEM LER',
  mugCap: 'captura automática · sem consentimento',
  scores: [
    { lbl: 'Índice de comportamento', val: '7/10', bars: '████████░░', note: 'tendência: recusa precoce', danger: false },
    { lbl: 'Nível de risco', val: 'ESCALANDO', bars: '▲ ▲ ▲', note: 'leitura em progresso', danger: true },
    { lbl: 'Classe de privacidade', val: 'ANORMAL', bars: '! !', note: 'demanda monitoramento', danger: false },
  ],
  analystTag: 'Observação do analista',
  // HTML inline permitido (<strong>)
  analystNote:
    'O sujeito apresenta sintomas precoces de recusa. Recomenda-se monitoramento contínuo via interface amigável: tende a aceitar termos que não lê, e a coleta permanece autorizada por padrão. Caso conclua a leitura desta obra, reclassificar como <strong>não-cooperativo</strong> e reavaliar a predição "CUMPRIRÁ".',
};

export type SubjectContent = typeof subject;
