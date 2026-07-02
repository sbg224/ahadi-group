const ALLOWED_ORIGINS = [
  'https://ahadi-group.com',
  'https://www.ahadi-group.com',
]

/**
 * Vérification CSRF par Origin, partagée par les routes API.
 *
 * Allowlist exacte uniquement : les URLs de déploiement Vercel proviennent
 * des variables injectées par la plateforme (VERCEL_URL / VERCEL_BRANCH_URL),
 * jamais d'un motif générique — un motif `ahadi-group*.vercel.app` serait
 * contournable par n'importe quel projet Vercel tiers portant ce nom.
 */
export function isAllowedOrigin(origin: string | null): boolean {
  if (process.env.NODE_ENV !== 'production') return true
  if (!origin) return false
  if (ALLOWED_ORIGINS.includes(origin)) return true

  const vercelHosts = [
    process.env.VERCEL_URL,
    process.env.VERCEL_BRANCH_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
  ]
  return vercelHosts.some((host) => host && origin === `https://${host}`)
}
