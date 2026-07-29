import { createClient, SupabaseClient } from '@supabase/supabase-js'

let cachedClient: SupabaseClient | null = null
let attempted = false

/**
 * Returns a Supabase server client, or null if env vars aren't set yet.
 * Uses the SERVICE ROLE key because these API routes run only on the
 * server (never expose SUPABASE_SERVICE_ROLE_KEY to the browser).
 */
export function getSupabase(): SupabaseClient | null {
  if (attempted) return cachedClient
  attempted = true

  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    return null
  }

  cachedClient = createClient(url, key, {
    auth: { persistSession: false },
  })
  return cachedClient
}

export const isSupabaseConfigured = () => getSupabase() !== null
