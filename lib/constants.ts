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

export const CV_MAX_SIZE = 5 * 1024 * 1024 // 5 Mo
