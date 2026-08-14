/**
 * Recibe la selección que el cliente armó en una cotización de /p/ y la manda
 * por correo a Devifly. Endpoint público pero sin efectos: solo manda un correo
 * a una dirección fija, nunca a una que venga en la petición.
 */

const NOTIFY_TO = 'hdev0716@gmail.com'
const FROM = 'Devifly <hola@devifly.dev>'

// Solo los documentos que existen. Evita que el endpoint sirva para mandar
// correos con un origen inventado.
const DOCS = {
  'white-glove-corrections-8cf7ecec': {
    client: 'José Jaramillo',
    account: 'White Glove Naples',
    replyTo: 'worthyjose@gmail.com',
    url: 'https://devifly.dev/p/white-glove-corrections-8cf7ecec',
  },
}

const MAX_BODY = 20_000

const esc = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const money = (n) =>
  typeof n === 'number' && Number.isFinite(n)
    ? '$' + Math.round(n).toLocaleString('en-US')
    : '—'

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

  const doc = DOCS[payload.doc]
  if (!doc) return res.status(404).json({ error: 'unknown_doc' })

  const choices = payload.choices ?? {}
  const totals = payload.totals ?? {}
  const message = String(payload.message ?? '').slice(0, 4000).trim()

  const parts = Array.isArray(choices.parts) ? choices.parts : []
  const partRows = parts
    .map(
      (p) => `<tr>
        <td style="padding:6px 10px;border-bottom:1px solid #e2e8f0;">
          ${p.included ? '✅' : '⬜'} ${esc(p.name)}
        </td>
        <td style="padding:6px 10px;border-bottom:1px solid #e2e8f0;text-align:right;white-space:nowrap;">
          ${p.included ? money(p.price) : '<span style="color:#94a3b8;">excluded</span>'}
        </td>
      </tr>`,
    )
    .join('')

  const row = (k, v) => `<tr>
      <td style="padding:6px 10px;border-bottom:1px solid #e2e8f0;color:#475569;">${esc(k)}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #e2e8f0;text-align:right;font-weight:600;white-space:nowrap;">${v}</td>
    </tr>`

  const html = `<!doctype html>
<html><body style="margin:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
  <div style="max-width:640px;margin:0 auto;padding:28px 20px;">
    <p style="margin:0 0 4px;font-size:12px;font-weight:bold;letter-spacing:.08em;text-transform:uppercase;color:#2563eb;">Respuesta a una cotización</p>
    <h1 style="margin:0 0 6px;font-size:20px;">${esc(doc.client)} — ${esc(doc.account)}</h1>
    <p style="margin:0 0 20px;font-size:13px;color:#64748b;">
      Idioma de la página: ${esc(payload.lang ?? '—')} ·
      <a href="${esc(doc.url)}" style="color:#2563eb;">ver el documento</a>
    </p>

    ${
      message
        ? `<div style="background:#fff;border-left:3px solid #2563eb;border-radius:0 8px 8px 0;padding:14px 16px;margin-bottom:20px;">
             <p style="margin:0 0 6px;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:.06em;color:#94a3b8;">Su mensaje</p>
             <p style="margin:0;font-size:15px;line-height:1.6;white-space:pre-wrap;">${esc(message)}</p>
           </div>`
        : `<p style="font-size:14px;color:#64748b;margin:0 0 20px;">Sin mensaje: solo mandó la selección.</p>`
    }

    <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;font-size:14px;margin-bottom:16px;">
      <tr><th colspan="2" style="background:#0f172a;color:#fff;text-align:left;padding:9px 10px;font-size:12px;letter-spacing:.06em;text-transform:uppercase;">Lo que eligió</th></tr>
      ${partRows}
      ${row('Cambios cubiertos', esc(choices.changesCovered))}
      ${row('Videos', esc(choices.videos))}
      ${row('Artículo Electric Fields', esc(choices.article))}
      ${row('Plan de mantenimiento', esc(choices.plan))}
      ${row('Cambios a futuro', esc(choices.futureChanges))}
      ${row('Ritmo', esc(choices.timing))}
    </table>

    <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;font-size:14px;">
      <tr><th colspan="2" style="background:#0f172a;color:#fff;text-align:left;padding:9px 10px;font-size:12px;letter-spacing:.06em;text-transform:uppercase;">Números</th></tr>
      ${row('Correcciones (neto)', money(totals.corrections))}
      ${row('Al aprobar (50%)', money(totals.dueOnApproval))}
      ${row('Al publicar (50%)', money(totals.dueOnPublish))}
      ${row('Plan / año', money(totals.planPerYear))}
      ${row('Hosting / año', money(totals.hostingPerYear))}
      ${row('Hosting de video / año', money(totals.mediaHostingPerYear))}
      ${row('Cambios posteriores', money(totals.laterChanges))}
      ${row('Primeros 12 meses', money(totals.firstTwelveMonths))}
      ${row('Tiempo estimado', esc(totals.timeline))}
    </table>

    <p style="margin:18px 0 0;font-size:12px;color:#94a3b8;">
      Responde a este correo y le llega directo a ${esc(doc.replyTo)}.
    </p>
  </div>
</body></html>`

  const text = [
    `${doc.client} — ${doc.account}`,
    `Documento: ${doc.url}`,
    '',
    message ? `Mensaje:\n${message}` : 'Sin mensaje.',
    '',
    'Eligió:',
    ...parts.map((p) => `  ${p.included ? '[x]' : '[ ]'} ${p.name} — ${p.included ? money(p.price) : 'excluido'}`),
    `  Cambios cubiertos: ${choices.changesCovered ?? '—'}`,
    `  Videos: ${choices.videos ?? '—'}`,
    `  Artículo: ${choices.article ?? '—'}`,
    `  Plan: ${choices.plan ?? '—'}`,
    `  Cambios a futuro: ${choices.futureChanges ?? '—'}`,
    `  Ritmo: ${choices.timing ?? '—'}`,
    '',
    'Números:',
    `  Correcciones: ${money(totals.corrections)}`,
    `  Al aprobar: ${money(totals.dueOnApproval)}`,
    `  Al publicar: ${money(totals.dueOnPublish)}`,
    `  Primeros 12 meses: ${money(totals.firstTwelveMonths)}`,
    `  Tiempo: ${totals.timeline ?? '—'}`,
  ].join('\n')

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: [NOTIFY_TO],
        reply_to: doc.replyTo,
        subject: `${doc.client} respondió la cotización — ${money(totals.firstTwelveMonths)} a 12 meses`,
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
