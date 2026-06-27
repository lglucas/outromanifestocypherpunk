import { nextReveal } from './reveal-state';

// Interações do dossiê: revelar tarjas ao rolar + botão toggle + seções dobráveis.
// Port da mecânica de 03-dossie.html.
export function initRedaction(doc: Document = document): void {
  // Blocos com botão manual (REVELAR) NÃO abrem sozinhos ao rolar — só no clique.
  const blocks = Array.from(doc.querySelectorAll<HTMLElement>('.redact-block, .redact')).filter(
    (b) => !b.closest('.transcript, .redact-group')?.querySelector('[data-reveal]'),
  );

  if (typeof IntersectionObserver !== 'undefined') {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const el = en.target as HTMLElement;
            setTimeout(() => el.classList.add('revealed'), 120);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.45 },
    );
    blocks.forEach((b) => io.observe(b));
  } else {
    blocks.forEach((b) => b.classList.add('revealed'));
  }

  // botão REVELAR / RE-TARJAR
  doc.querySelectorAll<HTMLElement>('[data-reveal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.transcript, .redact-group');
      const rb = group?.querySelector<HTMLElement>('.redact-block, .redact');
      if (!rb) return;
      const state = nextReveal(rb.classList.contains('revealed'));
      rb.classList.toggle('revealed', state.revealed);
      btn.classList.toggle('done', state.revealed);
      btn.textContent = state.label;
    });
  });

  // seções dobráveis (AMOSTRA)
  doc.querySelectorAll<HTMLElement>('[data-fold]').forEach((head) => {
    head.addEventListener('click', () => head.closest('.fold')?.classList.toggle('open'));
  });
}
