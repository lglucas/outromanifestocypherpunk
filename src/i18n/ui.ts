export const languages = { pt: 'Português', en: 'English', de: 'Deutsch' } as const;
export type Lang = keyof typeof languages;

export const ui = {
  pt: {
    'nav.home': 'Início', 'nav.book': 'O Livro', 'nav.author': 'O Autor', 'nav.download': 'Baixar',
    'site.title': 'O Outro Manifesto Cypherpunk',
    'site.tagline': 'por que a tecnologia que prometia libertar virou braço do controle',
    'cta.amazon': 'Comprar na Amazon', 'cta.download': 'Baixar grátis',
    'wip': 'Em construção — D1.',
  },
  en: {
    'nav.home': 'Home', 'nav.book': 'The Book', 'nav.author': 'The Author', 'nav.download': 'Download',
    'site.title': 'The Other Cypherpunk Manifesto',
    'site.tagline': 'why the technology that promised to free us became an arm of control',
    'cta.amazon': 'Buy on Amazon', 'cta.download': 'Download free',
    'wip': 'Book translation coming soon.',
  },
  de: {
    'nav.home': 'Start', 'nav.book': 'Das Buch', 'nav.author': 'Der Autor', 'nav.download': 'Download',
    'site.title': 'Das andere Cypherpunk-Manifest',
    'site.tagline': 'warum die Technik, die befreien sollte, zum Arm der Kontrolle wurde',
    'cta.amazon': 'Bei Amazon kaufen', 'cta.download': 'Kostenlos laden',
    'wip': 'Buchübersetzung in Kürze.',
  },
} as const;

export function t(lang: Lang, key: keyof typeof ui['pt']): string {
  return ui[lang][key] ?? ui.pt[key];
}