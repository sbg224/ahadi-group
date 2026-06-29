const store = new Map<string, { count: number; resetAt: number }>()

// Nettoyage des entrées expirées pour éviter la fuite mémoire sur instances longues
function purgeExpired() {
  const now = Date.now()
  for (const [key, entry] of store) {
    if (now > entry.resetAt) store.delete(key)
  }
}

let lastPurge = Date.now()
const PURGE_INTERVAL_MS = 5 * 60 * 1000 // purge toutes les 5 min

export function checkRateLimit(key: string, max: number, windowMs: number): boolean {
  const now = Date.now()

  if (now - lastPurge > PURGE_INTERVAL_MS) {
    purgeExpired()
    lastPurge = now
  }

  const entry = store.get(key)

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return true
  }

  if (entry.count >= max) return false
  entry.count++
  return true
}
