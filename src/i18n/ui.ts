// Dicionário de UI compartilhada (moldura, abas, CTAs, tarjas). PT + EN. Sprint D3.
import type { Lang } from './routes';
export type { Lang } from './routes';

const pt = {
  htmlLang: 'pt-BR',
  ogLocale: 'pt_BR',
  timeLocale: 'pt-BR',
  siteTitle: 'O Outro Manifesto Cypherpunk',
  siteTagline: 'por que a tecnologia que prometia libertar virou braço do controle',
  classbar: 'CLASSIFICADO · NÍVEL VERMELHO',
  sector: 'SETOR:',
  agency: 'DEPARTAMENTO DE INFERÊNCIA TOTAL',
  division: 'DIVISÃO DE ANÁLISE COMPORTAMENTAL',
  protocol: 'PROTOCOLO 0001 · © TODOS OS DIREITOS RESERVADOS · CC BY-SA 4.0 EM 22/05/2028',
  lastSweep: 'última varredura · operadora',
  ghost: 'não há para onde correr',
  informant: 'o informante',
  privacy: 'privacidade',
  tabsAria: 'Anexos do dossiê',
  tabs: {
    home: ['ANEXO —', 'SUJEITO'],
    book: ['ANEXO A', 'DOCUMENTO'],
    author: ['ANEXO B', 'INFORMANTE'],
    download: ['ANEXO C', 'LIBERAÇÃO'],
  } as Record<'home' | 'book' | 'author' | 'download', [string, string]>,
  ctaFree: 'Livre em 22/05/2028',
  ctaAmazon: 'Adquirir na Amazon',
  ctaAmazonSoon: 'Adquirir na Amazon — em breve',
  declassified: 'DESCLASSIFICADO',
  reveal: 'REVELAR',
  redactAgain: 'RE-TARJAR',
  reopen: '› reabrir transmissão',
  testimonials: 'Testemunhos',
  testimonialsEmpty: '[ depoimentos de leitores chegando — anexados em breve ]',
};

export type UiDict = typeof pt;

const en: UiDict = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  timeLocale: 'en-GB',
  siteTitle: 'The Other Cypherpunk Manifesto',
  siteTagline: 'why the technology that promised to set us free became an arm of control',
  classbar: 'CLASSIFIED · LEVEL RED',
  sector: 'SECTOR:',
  agency: 'DEPARTMENT OF TOTAL INFERENCE',
  division: 'BEHAVIORAL ANALYSIS DIVISION',
  protocol: 'PROTOCOL 0001 · © ALL RIGHTS RESERVED · CC BY-SA 4.0 ON 22 MAY 2028',
  lastSweep: 'last sweep · carrier',
  ghost: 'there is nowhere to run',
  informant: 'the informant',
  privacy: 'privacy',
  tabsAria: 'Dossier annexes',
  tabs: {
    home: ['ANNEX —', 'SUBJECT'],
    book: ['ANNEX A', 'DOCUMENT'],
    author: ['ANNEX B', 'INFORMANT'],
    download: ['ANNEX C', 'RELEASE'],
  },
  ctaFree: 'Free on 22 May 2028',
  ctaAmazon: 'Get it on Amazon',
  ctaAmazonSoon: 'Get it on Amazon — soon',
  declassified: 'DECLASSIFIED',
  reveal: 'REVEAL',
  redactAgain: 'REDACT AGAIN',
  reopen: '› reopen transmission',
  testimonials: 'Testimony',
  testimonialsEmpty: '[ reader testimony incoming — to be attached shortly ]',
};

export const ui: Record<Lang, UiDict> = { pt, en };

export function t(lang: Lang): UiDict {
  return ui[lang] ?? ui.pt;
}

/** Idioma a partir do Astro.currentLocale (qualquer coisa ≠ 'en' é PT). */
export function langOf(locale: string | undefined): Lang {
  return locale === 'en' ? 'en' : 'pt';
}
