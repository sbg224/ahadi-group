const store = new Map<string, { count: number; resetAt: number }>()

/**
 * Rate limiter en mémoire (par instance serverless).
 * Retourne true si la requête est autorisée, false si bloquée.
 */
export function checkRateLimit(key: string, max: number, windowMs: number): boolean {
  const now = Date.now()
  const entry = store.get(key)

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return true
  }

  if (entry.count >= max) return false
  entry.count++
  return true
}
