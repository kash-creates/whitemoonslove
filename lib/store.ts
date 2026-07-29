import { promises as fs } from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true })
}

async function filePath(name: string) {
  await ensureDataDir()
  return path.join(DATA_DIR, `${name}.json`)
}

export async function readAll<T>(name: string): Promise<T[]> {
  try {
    const file = await filePath(name)
    const raw = await fs.readFile(file, 'utf-8')
    return JSON.parse(raw) as T[]
  } catch {
    return []
  }
}

export async function appendEntry<T extends Record<string, unknown>>(
  name: string,
  entry: T
): Promise<T & { id: string; createdAt: string }> {
  const file = await filePath(name)
  const existing = await readAll<T & { id: string; createdAt: string }>(name)
  const record = {
    ...entry,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
  }
  existing.push(record)
  await fs.writeFile(file, JSON.stringify(existing, null, 2), 'utf-8')
  return record
}
