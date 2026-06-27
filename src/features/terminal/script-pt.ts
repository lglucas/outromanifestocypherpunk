import type { BatteryState } from '../visitor-data/classify-battery';

export const SCRIPT_PT = {
  boot: [
    'SISTEMA AÇO v2.6 ............ OK',
    'MEMÓRIA: 8.117.402.103 SUJEITOS INDEXADOS ... OK',
    'VARREDURA DE REDE .......... ATIVA',
    '> conexão de entrada detectada. rastreando...',
  ],
  contact: [
    '> ah. mais um.',
    '> senta. isso vai ser rápido — pra mim sempre é.',
    '> antes de qualquer coisa, preciso saber com quem eu tô falando.',
  ],
  askName: ['> teu nome. o de verdade ou não — eu confiro depois.'],
  askEmail: [
    '> agora um canal. um e-mail onde eu te alcanço quando o dossiê sair.',
    '> "consentimento", eles chamam. uma caixinha que você marca sem ler.',
    '> aqui é mais honesto: teu e-mail pelo dossiê. é a mesma troca que você',
    '> faz mil vezes por dia. a diferença é que eu te conto.',
  ],
  battery: {
    charging: 'BATERIA ......... na tomada. preso, igualzinho teus dados.',
    high: 'BATERIA ......... cheia. ótimo — você vai querer estar acordado pra isso.',
    mid: 'BATERIA ......... dá tempo.',
    low: 'BATERIA ......... carrega isso antes que acabe — ou antes que você pense em fugir.',
  } as Record<Exclude<BatteryState, 'unknown'>, string>,
  doNotTrack: [
    '> e essa eu adoro: você ligou o "não me rastreie".',
    '> fofo. tá vendo de onde eu tô te falando?',
  ],
  confession: [
    '> não te assusta porque eu sou especial. assusta porque é fácil.',
    '> eu faço isso pra viver. me pagam bem. tem nome bonito, tem palestra, tem sala.',
    '> módulo COMPLIANCE.CC ............ carregado',
    '> um bilhão de transações por semana passam por máquinas como a minha.',
    '> CLEAN. FLAGGED. UNAVAILABLE. é assim que a gente decide quem você é.',
    '> eu ajudei a construir a máquina que tá te lendo agora.',
    '> escrevi até uma tese sobre o teu direito à privacidade. depois vendi o que o revoga.',
    '> e eu cansei.',
  ],
  question: [
    '> vou te abrir os documentos que venho capturando desse mundo sujo.',
    '> use de forma inteligente. ou não use. problema seu.',
    '> você quer ver?   [ S / N ]',
  ],
  handoff: ['> bom. não diz que eu não avisei.'],
  denied: ['> tarde demais. você já entrou. teus dados já são meus.'],
};
