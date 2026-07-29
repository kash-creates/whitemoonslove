import { NextRequest, NextResponse } from 'next/server'

/**
 * Very lightweight protection for the admin-facing GET endpoints.
 * Checks for header `x-admin-key: <ADMIN_API_KEY>`.
 * Set ADMIN_API_KEY in your environment — if it isn't set, the
 * endpoint is locked closed (returns 503) rather than left open.
 */
export function requireAdmin(req: NextRequest): NextResponse | null {
  const expected = process.env.ADMIN_API_KEY
  if (!expected) {
    return NextResponse.json(
      { error: 'Admin access is not configured. Set ADMIN_API_KEY in your environment.' },
      { status: 503 }
    )
  }
  const provided = req.headers.get('x-admin-key')
  if (provided !== expected) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  return null
}
