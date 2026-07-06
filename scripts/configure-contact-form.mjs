import { readFileSync, writeFileSync } from 'node:fs';

const CONTACT_FORM_MARKER = '<!-- CONTACT_FORM_PLACEHOLDER -->';
const envValue = process.env.VITE_CONTACT_FORM_ENABLED;
const contactFormEnabled = envValue !== 'false';

const hiddenNetlifyContactForm = `  <form name="kontakt" method="POST" action="/takk-for-henvendelsen" data-netlify="true" netlify-honeypot="bot-field" hidden>
    <input type="hidden" name="form-name" value="kontakt">
    <input name="bot-field">
    <input type="text" name="navn">
    <input type="email" name="epost">
    <input type="tel" name="telefon">
    <select name="henvendelse_type">
      <option value="Hjemmekennel">Hjemmekennel</option>
      <option value="Omplassering">Omplassering</option>
      <option value="Annet">Annet</option>
    </select>
    <input type="text" name="hundens_navn">
    <input type="date" name="fra_dato">
    <input type="date" name="til_dato">
    <textarea name="melding"></textarea>
  </form>`;

const disabledContactFormComment = '  <!-- Contact form disabled: Netlify Forms discovery form omitted. -->';

const indexTemplate = readFileSync('src/index.html', 'utf8');

if (!indexTemplate.includes(CONTACT_FORM_MARKER)) {
  throw new Error(`Missing ${CONTACT_FORM_MARKER} in src/index.html.`);
}

const indexHtml = indexTemplate.replace(
  CONTACT_FORM_MARKER,
  contactFormEnabled ? hiddenNetlifyContactForm : disabledContactFormComment,
);

writeFileSync('src/index.generated.html', indexHtml);

writeFileSync(
  'src/app/contact-form/contact-form.config.generated.ts',
  `export const contactFormEnabled = ${contactFormEnabled};\n`,
);

console.log(
  `Contact form is ${contactFormEnabled ? 'enabled' : 'disabled'} via VITE_CONTACT_FORM_ENABLED=${envValue ?? '(not set)'}.`,
);
