export interface Testimonial {
  quote: string;
  author: string;
  meta?: string;
}

// Depoimentos de leitores entram aqui ao longo da semana.
// Enquanto vazio, o componente mostra um placeholder "chegando".
export const testimonials: Testimonial[] = [];
