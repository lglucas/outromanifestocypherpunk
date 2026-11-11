// Annex C (launch + release on 22 May 2028) — EN. Sprint D3 (license D-034/D-035).
import type { DownloadContent } from './download.pt';

export const download: DownloadContent = {
  title: 'ANNEX C · RELEASE',
  description:
    'The Other Cypherpunk Manifesto: coming to Amazon soon; free release (PDF and EPUB, CC BY-SA 4.0) on 22 May 2028, Bitcoin Pizza Day. Leave your email and get notified on both dates.',
  tag: 'Annex C · release',
  h2a: 'THE ',
  h2b: 'RELEASE',
  h3: 'Scheduled declassification',
  introHtml:
    'For now, the document is <strong>© all rights reserved</strong>. It comes out on <strong>Amazon</strong> first. On <strong>22 May 2028</strong> — Bitcoin Pizza Day — it goes properly free: <strong>PDF and EPUB under CC BY-SA 4.0</strong>, to copy, study and pass around. Leave a contact channel and we’ll ping you on both dates: the launch and the release.',
  placeholder: 'your-email@encrypted.domain',
  emailAria: 'your email',
  button: 'Notify me',
  privacyLine:
    'We keep only your email, on our own server. We don’t sell it, don’t infer from it, don’t hand it to anyone. (Yes — the irony has not escaped us.)',
  freeStamp: 'Free on 22 May 2028',
  hintA: '© all rights reserved · CC BY-SA 4.0 on 22 May 2028 · ',
  hintB: "don't trust, verify",
  leadName: 'reader (release)',
  msg: {
    invalid: '✕ INVALID ADDRESS — TRY AGAIN.',
    processing: '► PROCESSING...',
    ok: '► CHANNEL REGISTERED. YOU WILL BE NOTIFIED. NO DATA INFERRED.',
    fail: '✕ REGISTRATION FAILED — TRY AGAIN.',
  },
};
