import { NextRequest, NextResponse } from 'next/server'
import { appendEntry, readAll } from '@/lib/store'
import { getSupabase } from '@/lib/supabase'
import { notifyOwner } from '@/lib/email'
import { requireAdmin } from '@/lib/admin'

interface BookingPayload {
  eventType: string
  eventDate: string
  guestCount: string
  location: string
  name: string
  email: string
  phone: string
  message?: string
}

function validate(body: Partial<BookingPayload>) {
  const errors: string[] = []
  if (!body.eventType) errors.push('eventType is required')
  if (!body.eventDate) errors.push('eventDate is required')
  if (!body.guestCount) errors.push('guestCount is required')
  if (!body.name) errors.push('name is required')
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push('a valid email is required')
  }
  if (!body.phone) errors.push('phone is required')
  return errors
}

export async function POST(req: NextRequest) {
  let body: Partial<BookingPayload>
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
    eventType: body.eventType!,
    eventDate: body.eventDate!,
    guestCount: body.guestCount!,
    location: body.location ?? '',
    name: body.name!,
    email: body.email!,
    phone: body.phone!,
    message: body.message ?? '',
    status: 'new',
  }

  const supabase = getSupabase()
  let saved: Record<string, unknown>

  if (supabase) {
    const { data, error } = await supabase
      .from('bookings')
      .insert({
        event_type: record.eventType,
        event_date: record.eventDate,
        guest_count: record.guestCount,
        location: record.location,
        name: record.name,
        email: record.email,
        phone: record.phone,
        message: record.message,
        status: record.status,
      })
      .select()
      .single()

    if (error) {
      console.error('[bookings] supabase insert failed:', error)
      return NextResponse.json({ error: 'Could not save booking' }, { status: 500 })
    }
    saved = data
  } else {
    // Falls back to local JSON storage — fine for local dev, NOT safe
    // for production hosting (filesystem is not persistent there).
    saved = await appendEntry('bookings', record)
  }

  await notifyOwner(
    `New booking request: ${record.eventType} on ${record.eventDate}`,
    `<h2>New booking request</h2>
     <p><b>Event:</b> ${record.eventType} — ${record.eventDate}</p>
     <p><b>Guests:</b> ${record.guestCount}</p>
     <p><b>Location:</b> ${record.location || 'Not specified'}</p>
     <p><b>Name:</b> ${record.name}</p>
     <p><b>Email:</b> ${record.email}</p>
     <p><b>Phone:</b> ${record.phone}</p>
     <p><b>Message:</b> ${record.message || '—'}</p>`
  )

  return NextResponse.json({ success: true, booking: saved }, { status: 201 })
}

export async function GET(req: NextRequest) {
  const unauthorized = requireAdmin(req)
  if (unauthorized) return unauthorized

  const supabase = getSupabase()
  if (supabase) {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) {
      return NextResponse.json({ error: 'Could not fetch bookings' }, { status: 500 })
    }
    return NextResponse.json({ bookings: data })
  }

  const bookings = await readAll('bookings')
  return NextResponse.json({ bookings })
}
