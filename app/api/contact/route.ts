import { NextRequest, NextResponse } from 'next/server'
import { appendEntry, readAll } from '@/lib/store'
import { getSupabase } from '@/lib/supabase'
import { notifyOwner } from '@/lib/email'
import { requireAdmin } from '@/lib/admin'

interface ContactPayload {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

function validate(body: Partial<ContactPayload>) {
  const errors: string[] = []
  if (!body.name) errors.push('name is required')
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push('a valid email is required')
  }
  if (!body.message || body.message.trim().length < 5) {
    errors.push('message is too short')
  }
  return errors
}

export async function POST(req: NextRequest) {
  let body: Partial<ContactPayload>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const errors = validate(body)
  if (errors.length > 0) {
    return NextResponse.json({ error: 'Validation failed', details: errors }, { status: 422 })
  }

  const record = {
    name: body.name!,
    email: body.email!,
    phone: body.phone ?? '',
    subject: body.subject ?? '',
    message: body.message!,
    status: 'new',
  }

  const supabase = getSupabase()
  let saved: Record<string, unknown>

  if (supabase) {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert(record)
      .select()
      .single()

    if (error) {
      console.error('[contact] supabase insert failed:', error)
      return NextResponse.json({ error: 'Could not save message' }, { status: 500 })
    }
    saved = data
  } else {
    // Falls back to local JSON storage — fine for local dev, NOT safe
    // for production hosting (filesystem is not persistent there).
    saved = await appendEntry('contact-messages', record)
  }

  // await notifyOwner(
//   `New contact message from ${record.name}`,
//   `<h2>New contact message</h2>`
// )
  await notifyOwner(
    `New contact message from ${record.name}`,
    `<h2>New contact message</h2>
     <p><b>Name:</b> ${record.name}</p>
     <p><b>Email:</b> ${record.email}</p>
     <p><b>Phone:</b> ${record.phone || '—'}</p>
     <p><b>Subject:</b> ${record.subject || '—'}</p>
     <p><b>Message:</b> ${record.message}</p>`
  )

  return NextResponse.json(
    {
     success: true,
     message: "Contact form is working",
    data: record,
   },
    { status: 201 }
  )
}

export async function GET(req: NextRequest) {
  const unauthorized = requireAdmin(req)
  if (unauthorized) return unauthorized

  const supabase = getSupabase()
  console.log("SUPABASE:",!!supabase)
  if (supabase) {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) {
      return NextResponse.json({ error: 'Could not fetch messages' }, { status: 500 })
    }
    return NextResponse.json({ messages: data })
  }

  const messages = await readAll('contact-messages')
  return NextResponse.json({ messages })
}
