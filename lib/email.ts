import { Resend } from 'resend'

const OWNER_EMAIL = process.env.OWNER_NOTIFICATION_EMAIL || 'ashrafshekhalvi@gmail.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'notifications@resend.dev'

let client: Resend | null = null
let attempted = false

function getResend(): Resend | null {
  if (attempted) return client
  attempted = true
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  client = new Resend(key)
  return client
}

export async function notifyOwner(subject: string, html: string) {
  const resend = getResend()
  if (!resend) {
    // Not configured yet — fail silently so form submissions still succeed.
    console.warn('[email] RESEND_API_KEY not set, skipping notification:', subject)
    return
  }
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      subject,
      html,
    })
  } catch (err) {
    console.error('[email] failed to send notification:', err)
  }
}
