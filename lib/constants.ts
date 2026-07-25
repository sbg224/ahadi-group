export const SITE_URL = 'https://ahadi-group.com'

// Repli utilise si CONTACT_EMAIL est absent des variables d'environnement
export const CONTACT_EMAIL_FALLBACK = 'contact@ahadi-group.com'

export const WHATSAPP_URL =
  'https://wa.me/33751044407?text=Bonjour%20AHADI%20Group%2C%20je%20souhaite%20vous%20soumettre%20un%20projet.'

export const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSc5_p10nRmaWoFkMT_PATEguNg-qDQHRAsR9w24PFFA9GzOSA/viewform'

export const POSTES_VALIDES = [
  'Superviseur de chantier BTP',
  'Superviseur de plantation / agriculture',
  'Superviseur commercial',
  'Superviseur administratif',
] as const

export type PosteValide = (typeof POSTES_VALIDES)[number]

export const CV_MAX_SIZE = 4 * 1024 * 1024 // 4 Mo — sous la limite de payload des Vercel Functions (4,5 Mo)

export const RATE_LIMIT_CONTACT = { max: 5, windowMs: 10 * 60 * 1000 }
export const RATE_LIMIT_CANDIDATURE = { max: 3, windowMs: 15 * 60 * 1000 }

export const ALLOWED_CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

// Regex téléphone international — chiffres, +, -, espaces, parenthèses, 7 à 20 chars
export const PHONE_RE = /^[+\d][\d\s\-().]{5,19}$/
