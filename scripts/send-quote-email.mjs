/**
 * Envía por Resend el aviso con el enlace a la cotización publicada en devifly.dev.
 *
 * La cotización es una página interactiva (calculadora de planes, EN/ES): no se
 * puede incrustar en el correo, así que el correo es solo la carta de presentación
 * y el botón al enlace.
 *
 *   RESEND_API_KEY=re_xxx node scripts/send-quote-email.mjs --dry-run
 *   RESEND_API_KEY=re_xxx node scripts/send-quote-email.mjs
 *
 * Variables opcionales: QUOTE_TO, QUOTE_FROM, QUOTE_REPLY_TO, QUOTE_URL.
 */

const DRY_RUN = process.argv.includes('--dry-run')

const TO = process.env.QUOTE_TO || 'hdev0716@gmail.com'
const FROM = process.env.QUOTE_FROM || 'Devifly <hola@devifly.dev>'
const REPLY_TO = process.env.QUOTE_REPLY_TO || 'devifly.dev@gmail.com'
const URL = process.env.QUOTE_URL || 'https://devifly.dev/p/white-glove-corrections-8cf7ecec'

const SUBJECT = 'Your website corrections, priced — Devifly'

const TEXT = `Renee,

Here is the quote for the 22 changes you sent on August 13, laid out as a page
you can go through at your own pace:

${URL}

A few things worth knowing before you open it:

- Every price is fixed. If the work takes us longer than expected, you pay the same.
- You can untick any part you would rather leave for later, and the total updates
  as you go.
- Two of the choices change the price: where your six videos live, and who writes
  the new Electric Fields article.
- The page is in English, with a Spanish toggle at the top right.

There is also something we found while pricing this, and it is written openly in
the page: the video section currently shows the same sample clip under several
titles, and the gallery shows grey placeholders. Putting your real videos and
photos in their place is included at no extra charge.

To go ahead, write back with a yes, or tell us which parts you want changed. The
estimate holds until August 27, 2026.

Devifly
devifly.dev
`

const HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${SUBJECT}</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">The 22 changes you sent on August 13, priced. Fixed prices, nothing open-ended.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f1f5f9;padding:32px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;font-family:Arial,Helvetica,sans-serif;color:#16212e;">

        <tr><td style="padding:28px 32px 0;">
          <span style="font-size:17px;font-weight:bold;color:#2563eb;">Devifly</span>
          <span style="color:#cbd5e1;padding:0 6px;">|</span>
          <span style="font-size:13px;color:#64748b;">Web Development Agency</span>
        </td></tr>

        <tr><td style="padding:20px 32px 0;">
          <h1 style="margin:0 0 12px;font-size:22px;line-height:1.25;color:#16212e;">Your website corrections, priced</h1>
          <p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:#334155;">Renee — here is the quote for the 22 changes you sent on August 13, laid out as a page you can go through at your own pace.</p>
        </td></tr>

        <tr><td style="padding:8px 32px 0;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
            <tr><td style="background:#2563eb;border-radius:8px;">
              <a href="${URL}" style="display:inline-block;padding:13px 26px;font-size:15px;font-weight:bold;color:#ffffff;text-decoration:none;">Open the quote</a>
            </td></tr>
          </table>
          <p style="margin:10px 0 0;font-size:12px;color:#94a3b8;word-break:break-all;">${URL}</p>
        </td></tr>

        <tr><td style="padding:22px 32px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #e2e8f0;">
            <tr><td style="padding-top:18px;">
              <p style="margin:0 0 10px;font-size:13px;font-weight:bold;text-transform:uppercase;letter-spacing:.06em;color:#94a3b8;">Before you open it</p>
              <p style="margin:0 0 8px;font-size:14px;line-height:1.6;color:#334155;"><strong>Every price is fixed.</strong> If the work takes us longer than expected, you pay the same.</p>
              <p style="margin:0 0 8px;font-size:14px;line-height:1.6;color:#334155;"><strong>You can untick anything</strong> you would rather leave for later — the total updates as you go.</p>
              <p style="margin:0 0 8px;font-size:14px;line-height:1.6;color:#334155;"><strong>Two choices change the price:</strong> where your six videos live, and who writes the new Electric Fields article.</p>
              <p style="margin:0;font-size:14px;line-height:1.6;color:#334155;">The page is in English, with a Spanish toggle at the top right.</p>
            </td></tr>
          </table>
        </td></tr>

        <tr><td style="padding:18px 32px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc;border-left:3px solid #2f6b58;border-radius:0 6px 6px 0;">
            <tr><td style="padding:14px 16px;">
              <p style="margin:0;font-size:14px;line-height:1.6;color:#334155;"><strong>Something we found while pricing this.</strong> The video section currently shows the same sample clip under several titles, and the gallery shows grey placeholders. Putting your real videos and photos in their place is <strong>included at no extra charge</strong>.</p>
            </td></tr>
          </table>
        </td></tr>

        <tr><td style="padding:20px 32px 0;">
          <p style="margin:0;font-size:15px;line-height:1.6;color:#334155;"><strong>To go ahead:</strong> write back with a yes, or tell us which parts you want changed. The estimate holds until August 27, 2026.</p>
        </td></tr>

        <tr><td style="padding:22px 32px 28px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #e2e8f0;">
            <tr><td style="padding-top:14px;">
              <p style="margin:0;font-size:12px;color:#94a3b8;">Devifly · <a href="https://devifly.dev" style="color:#94a3b8;">devifly.dev</a> · USD, taxes not included</p>
            </td></tr>
          </table>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`

const payload = {
  from: FROM,
  to: [TO],
  reply_to: REPLY_TO,
  subject: SUBJECT,
  html: HTML,
  text: TEXT,
}

if (DRY_RUN) {
  console.log('--- DRY RUN, no se envía nada ---')
  console.log('from:    ', payload.from)
  console.log('to:      ', payload.to.join(', '))
  console.log('reply_to:', payload.reply_to)
  console.log('subject: ', payload.subject)
  console.log('url:     ', URL)
  console.log(`html:     ${HTML.length} bytes`)
  console.log('\n--- versión de texto ---\n')
  console.log(TEXT)
  process.exit(0)
}

const key = process.env.RESEND_API_KEY
if (!key) {
  console.error('Falta RESEND_API_KEY en el entorno.')
  process.exit(1)
}

const res = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${key}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
})

const body = await res.json().catch(() => null)

if (!res.ok) {
  console.error(`Resend respondió ${res.status}:`, body)
  process.exit(1)
}

console.log(`Enviado a ${TO} — id ${body?.id}`)
