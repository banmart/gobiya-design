import { createHash } from 'node:crypto'

export const runtime = 'nodejs'

const failure = (status: number) => Response.json({ success: false }, { status })

export async function POST(request: Request) {
  const origin = request.headers.get('origin')
  if (origin && origin !== new URL(request.url).origin) return failure(403)
  if (!request.headers.get('content-type')?.includes('application/json')) return failure(415)

  let fields: Record<string, unknown>
  try {
    const body = await request.text()
    if (body.length > 8192) return failure(413)
    fields = JSON.parse(body)
    if (!fields || typeof fields !== 'object' || Array.isArray(fields)) return failure(400)
  } catch { return failure(400) }

  const limits = { fullName: 150, phone: 50, website: 500, email: 254 }
  for (const [name, limit] of Object.entries(limits)) {
    const value = fields[name]
    if (typeof value !== 'string' || !value.trim() || value.length > limit || /[\r\n\x00]/.test(value)) return failure(400)
  }
  const fullName = (fields.fullName as string).trim()
  const phone = (fields.phone as string).trim()
  const email = (fields.email as string).trim()
  const website = (fields.website as string).trim()
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || phone.replace(/\D/g, '').length < 7) return failure(400)
  try {
    const url = new URL(/^https?:\/\//i.test(website) ? website : `https://${website}`)
    if (!['http:', 'https:'].includes(url.protocol) || !url.hostname.includes('.') || /\s/.test(website)) return failure(400)
  } catch { return failure(400) }

  const apiKey = process.env.RESEND_API || process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL || 'Gobiya Agency <steve@gobiya.com>'
  if (!apiKey) return failure(503)

  const text = `New website review request\n\nFull Name: ${fullName}\nPhone: ${phone}\nWebsite: ${website}\nEmail: ${email}\n`
  // Retrying the same submission must not send duplicate emails (Resend retains keys for 24 hours).
  const idempotencyKey = createHash('sha256').update(text).digest('hex')
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `review-${idempotencyKey}`,
      },
      body: JSON.stringify({ from, to: ['steve@gobiya.com'], reply_to: email, subject: 'New website review request — Gobiya Agency', text }),
      signal: AbortSignal.timeout(15000),
    })
    if (!response.ok) return failure(502)
    const result = await response.json()
    if (typeof result.id !== 'string' || !result.id) return failure(502)
    return Response.json({ success: true })
  } catch { return failure(502) }
}
