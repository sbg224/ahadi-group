import { NextRequest, NextResponse } from 'next/server'
import { resend } from '@/lib/resend'
import { escHtml } from '@/lib/email'
import { checkRateLimit } from '@/lib/rateLimit'

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'contact@ahadi-group.com'

const ALLOWED_ORIGINS = [
  'https://ahadi-group.com',
  'https://www.ahadi-group.com',
]

function isAllowedOrigin(origin: string | null): boolean {
  if (process.env.NODE_ENV !== 'production') return true
  if (!origin) return false
  if (ALLOWED_ORIGINS.includes(origin)) return true
  // Autorise les previews Vercel
  if (/^https:\/\/ahadi-group[a-z0-9-]*\.vercel\.app$/.test(origin)) return true
  return false
}

export async function POST(req: NextRequest) {
  // Vérification CSRF par Origin
  const origin = req.headers.get('origin')
  if (!isAllowedOrigin(origin)) {
    return NextResponse.json({ error: 'Requête non autorisée' }, { status: 403 })
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    '127.0.0.1'

  if (!checkRateLimit(`contact:${ip}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json(
      { error: 'Trop de requêtes. Réessayez dans quelques minutes.' },
      { status: 429 },
    )
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 })
  }

  const nom = String(body.nom ?? '').trim()
  const contact = String(body.contact ?? '').trim()
  const typeProjet = String(body.typeProjet ?? '').trim()
  const situation = String(body.situation ?? '').trim()

  if (!nom || !contact || !situation) {
    return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
  }
  if (
    nom.length > 100 ||
    contact.length > 200 ||
    typeProjet.length > 100 ||
    situation.length > 5000
  ) {
    return NextResponse.json({ error: 'Un champ dépasse la taille autorisée' }, { status: 400 })
  }

  const { data, error } = await resend.emails.send({
    from: `AHADI Group <${CONTACT_EMAIL}>`,
    to: [CONTACT_EMAIL],
    subject: `Nouveau dossier — ${typeProjet || 'Non précisé'} — ${nom}`,
    html: `
      <h2>Nouveau dossier reçu</h2>
      <p><strong>Nom :</strong> ${escHtml(nom)}</p>
      <p><strong>Contact :</strong> ${escHtml(contact)}</p>
      <p><strong>Type de projet :</strong> ${escHtml(typeProjet)}</p>
      <p><strong>Situation :</strong></p>
      <p>${escHtml(situation).replace(/\n/g, '<br>')}</p>
      <hr>
      <p style="color:#9B9B90;font-size:12px">Reçu via ahadi-group.com</p>
    `,
  })

  if (error) {
    // Erreur interne uniquement — ne pas exposer error.message au client
    console.error('[AHADI] Resend error (contact):', error)
    return NextResponse.json(
      { error: "L'envoi a échoué. Contactez-nous directement par WhatsApp." },
      { status: 500 },
    )
  }

  return NextResponse.json({ success: true, id: data?.id })
}
