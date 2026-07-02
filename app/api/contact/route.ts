import { NextRequest, NextResponse } from 'next/server'
import { resend } from '@/lib/resend'
import { escHtml } from '@/lib/email'
import { checkRateLimit } from '@/lib/rateLimit'
import { isAllowedOrigin } from '@/lib/origin'

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'contact@ahadi-group.com'

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

  // Honeypot : champ invisible pour les humains — s'il est rempli, c'est un
  // bot. Réponse succès factice pour ne pas lui signaler la détection.
  if (String(body.site_web ?? '').trim()) {
    return NextResponse.json({ success: true })
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

  // replyTo seulement si le champ libre "Email ou WhatsApp" contient un email
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)

  const { data, error } = await resend.emails.send({
    from: `AHADI Group <${CONTACT_EMAIL}>`,
    to: [CONTACT_EMAIL],
    ...(isEmail ? { replyTo: contact } : {}),
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
