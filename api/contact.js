/**
 * Recibe los datos del formulario de contacto de devifly.dev y manda un correo
 * de notificación a Devifly. Nunca envía a una dirección que venga en la petición.
 */

const NOTIFY_TO = 'hdev0716@gmail.com'
const FROM = 'Devifly Contacto <hola@devifly.dev>'
const MAX_BODY = 10_000
const CF_SITEVERIFY = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

const esc = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  const key = process.env.RESEND_API_KEY
  if (!key) return res.status(500).json({ error: 'missing_api_key' })

  let payload = req.body
  if (typeof payload === 'string') {
    if (payload.length > MAX_BODY) return res.status(413).json({ error: 'payload_too_large' })
    try {
      payload = JSON.parse(payload)
    } catch {
      return res.status(400).json({ error: 'invalid_json' })
    }
  }
  if (!payload || typeof payload !== 'object') {
    return res.status(400).json({ error: 'invalid_body' })
  }

  const { name, email, projectType, budget, timeline, message, turnstileToken } = payload

  if (!name || !email || !projectType || !message) {
    return res.status(422).json({ error: 'missing_required_fields' })
  }

  // Verify Turnstile token
  const cfSecret = process.env.CF_TURNSTILE_SECRET_KEY
  if (!cfSecret) return res.status(500).json({ error: 'missing_turnstile_secret' })

  if (!turnstileToken) {
    return res.status(422).json({ error: 'missing_turnstile_token' })
  }

  const cfRes = await fetch(CF_SITEVERIFY, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret: cfSecret, response: turnstileToken }),
  })
  const cfData = await cfRes.json()
  if (!cfData.success) {
    console.error('turnstile', cfData['error-codes'])
    return res.status(422).json({ error: 'turnstile_failed' })
  }

  const row = (label, value) =>
    value
      ? `<tr>
          <td style="padding:7px 12px;border-bottom:1px solid #e2e8f0;color:#475569;white-space:nowrap;font-size:13px;">${esc(label)}</td>
          <td style="padding:7px 12px;border-bottom:1px solid #e2e8f0;font-weight:600;font-size:13px;">${esc(value)}</td>
        </tr>`
      : ''

  const html = `<!doctype html>
<html><body style="margin:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
  <div style="max-width:600px;margin:0 auto;padding:28px 20px;">
    <p style="margin:0 0 4px;font-size:11px;font-weight:bold;letter-spacing:.09em;text-transform:uppercase;color:#2563eb;">Nuevo contacto</p>
    <h1 style="margin:0 0 20px;font-size:22px;">devifly.dev</h1>

    <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;font-size:14px;margin-bottom:20px;">
      <tr><th colspan="2" style="background:#0f172a;color:#fff;text-align:left;padding:10px 12px;font-size:11px;letter-spacing:.07em;text-transform:uppercase;">Datos del cliente</th></tr>
      ${row('Nombre', name)}
      ${row('Email', email)}
      ${row('Tipo de proyecto', projectType)}
      ${row('Presupuesto', budget)}
      ${row('Plazo', timeline)}
    </table>

    <div style="background:#fff;border-left:3px solid #2563eb;border-radius:0 8px 8px 0;padding:14px 16px;">
      <p style="margin:0 0 6px;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:.06em;color:#94a3b8;">Mensaje</p>
      <p style="margin:0;font-size:15px;line-height:1.6;white-space:pre-wrap;">${esc(message)}</p>
    </div>

    <p style="margin:20px 0 0;font-size:12px;color:#94a3b8;">
      Responde a este correo para contactar al cliente en ${esc(email)}.
    </p>
  </div>
</body></html>`

  const text = [
    'Nuevo contacto desde devifly.dev',
    '',
    `Nombre:           ${name}`,
    `Email:            ${email}`,
    `Tipo de proyecto: ${projectType}`,
    budget ? `Presupuesto:      ${budget}` : null,
    timeline ? `Plazo:            ${timeline}` : null,
    '',
    'Mensaje:',
    message,
  ]
    .filter((l) => l !== null)
    .join('\n')

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: [NOTIFY_TO],
        reply_to: email,
        subject: `Nuevo contacto: ${name} — ${projectType}`,
        html,
        text,
      }),
    })

    if (!r.ok) {
      console.error('resend', r.status, await r.text())
      return res.status(502).json({ error: 'send_failed' })
    }

    const { id } = await r.json()
    return res.status(200).json({ ok: true, id })
  } catch (err) {
    console.error('resend', err)
    return res.status(502).json({ error: 'send_failed' })
  }
}
