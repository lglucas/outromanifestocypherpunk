import type { Lang } from '../../i18n/routes';

export interface Testimonial {
  quote: string;
  author: string;
  meta?: string;
  /** idioma do depoimento; sem `lang` aparece nas duas versões do site (D3) */
  lang?: Lang;
}

// Depoimentos de leitores entram aqui ao longo da semana.
// Enquanto vazio, o componente mostra um placeholder "chegando".
export const testimonials: Testimonial[] = [];
