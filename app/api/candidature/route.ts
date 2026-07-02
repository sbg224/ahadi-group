import { NextRequest, NextResponse } from 'next/server'
import { resend } from '@/lib/resend'
import { escHtml } from '@/lib/email'
import { checkRateLimit } from '@/lib/rateLimit'
import { GOOGLE_FORM_URL, POSTES_VALIDES, CV_MAX_SIZE } from '@/lib/constants'
import { isAllowedOrigin } from '@/lib/origin'

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'contact@ahadi-group.com'

const ALLOWED_CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

// Regex téléphone international — chiffres, +, -, espaces, parenthèses, 7 à 20 chars
const PHONE_RE = /^[+\d][\d\s\-().]{5,19}$/

async function isValidCvMagicBytes(file: File): Promise<boolean> {
  const buf = await file.slice(0, 8).arrayBuffer()
  const b = new Uint8Array(buf)
  // PDF: %PDF (25 50 44 46)
  if (b[0] === 0x25 && b[1] === 0x50 && b[2] === 0x44 && b[3] === 0x46) return true
  // OLE2 / DOC (D0 CF 11 E0)
  if (b[0] === 0xd0 && b[1] === 0xcf && b[2] === 0x11 && b[3] === 0xe0) return true
  // ZIP / DOCX (50 4B 03 04)
  if (b[0] === 0x50 && b[1] === 0x4b && b[2] === 0x03 && b[3] === 0x04) return true
  return false
}

export async function POST(req: NextRequest) {
  // Vérification CSRF par Origin (FormData = requête simple CORS sans préflight)
  const origin = req.headers.get('origin')
  if (!isAllowedOrigin(origin)) {
    return NextResponse.json({ error: 'Requête non autorisée' }, { status: 403 })
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    '127.0.0.1'

  if (!checkRateLimit(`candidature:${ip}`, 3, 15 * 60 * 1000)) {
    return NextResponse.json(
      { error: 'Trop de requêtes. Réessayez dans quelques minutes.' },
      { status: 429 },
    )
  }

  const fd = await req.formData()

  // Honeypot : champ invisible pour les humains — s'il est rempli, c'est un
  // bot. Réponse succès factice pour ne pas lui signaler la détection.
  if (String(fd.get('site_web') ?? '').trim()) {
    return NextResponse.json({ success: true })
  }

  const nom = String(fd.get('nom') ?? '').trim()
  const email = String(fd.get('email') ?? '').trim()
  const telephone = String(fd.get('telephone') ?? '').trim()
  const ville = String(fd.get('ville') ?? '').trim()
  const poste = String(fd.get('poste') ?? '').trim()
  const motivation = String(fd.get('motivation') ?? '').trim()
  const cvRaw = fd.get('cv')
  const cv = cvRaw instanceof File ? cvRaw : null

  // Champs requis
  if (!nom || !email || !telephone || !ville || !poste || !motivation) {
    return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
  }

  // Longueurs
  if (
    nom.length > 100 ||
    email.length > 200 ||
    telephone.length > 20 ||
    ville.length > 100 ||
    motivation.length > 5000
  ) {
    return NextResponse.json({ error: 'Un champ dépasse la taille autorisée' }, { status: 400 })
  }

  // Format email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Format email invalide' }, { status: 400 })
  }

  // Format téléphone
  if (!PHONE_RE.test(telephone)) {
    return NextResponse.json({ error: 'Format de téléphone invalide' }, { status: 400 })
  }

  // Enum poste
  if (!(POSTES_VALIDES as readonly string[]).includes(poste)) {
    return NextResponse.json({ error: 'Poste invalide' }, { status: 400 })
  }

  // Validation et conversion du CV
  let cvAttachment: { filename: string; content: string } | undefined
  if (cv && cv.size > 0) {
    if (cv.size > CV_MAX_SIZE) {
      return NextResponse.json({ error: 'CV trop volumineux (max 5 Mo)' }, { status: 400 })
    }
    if (!ALLOWED_CV_TYPES.includes(cv.type)) {
      return NextResponse.json(
        { error: 'Format de CV non autorisé (.pdf, .doc, .docx uniquement)' },
        { status: 400 },
      )
    }
    if (!(await isValidCvMagicBytes(cv))) {
      return NextResponse.json(
        { error: 'Le fichier ne correspond pas à son extension déclarée' },
        { status: 400 },
      )
    }
    // Pas d'espaces dans le nom de fichier pour éviter les problèmes d'encodage MIME
    const safeName = cv.name
      .replace(/[^a-zA-Z0-9._\-]/g, '_')
      .replace(/_+/g, '_')
      .slice(0, 100)
    const cvBase64 = Buffer.from(await cv.arrayBuffer()).toString('base64')
    cvAttachment = { filename: safeName, content: cvBase64 }
  }

  // Email 1 — notification interne AHADI
  const { data, error } = await resend.emails.send({
    from: `AHADI Group <${CONTACT_EMAIL}>`,
    to: [CONTACT_EMAIL],
    replyTo: email,
    subject: `Nouvelle candidature — ${poste} — ${nom}`,
    attachments: cvAttachment ? [cvAttachment] : [],
    html: `
      <h2 style="color:#1A4A35;font-family:Georgia,serif">Nouvelle candidature reçue</h2>
      <table style="border-collapse:collapse;width:100%;max-width:560px;font-family:sans-serif;font-size:14px">
        <tr><td style="padding:8px 0;color:#5A5A52;width:140px">Nom</td><td style="padding:8px 0;color:#1A1A18;font-weight:500">${escHtml(nom)}</td></tr>
        <tr><td style="padding:8px 0;color:#5A5A52">Email</td><td style="padding:8px 0;color:#1A1A18">${escHtml(email)}</td></tr>
        <tr><td style="padding:8px 0;color:#5A5A52">Téléphone</td><td style="padding:8px 0;color:#1A1A18">${escHtml(telephone)}</td></tr>
        <tr><td style="padding:8px 0;color:#5A5A52">Ville</td><td style="padding:8px 0;color:#1A1A18">${escHtml(ville)}</td></tr>
        <tr><td style="padding:8px 0;color:#5A5A52">Poste visé</td><td style="padding:8px 0;color:#1A1A18">${escHtml(poste)}</td></tr>
        <tr><td style="padding:8px 0;color:#5A5A52">CV</td><td style="padding:8px 0;color:#1A1A18">${cvAttachment ? escHtml(cvAttachment.filename) : '—'}</td></tr>
      </table>
      <hr style="border:none;border-top:1px solid #E8E8E2;margin:20px 0">
      <h3 style="color:#1A4A35;font-family:Georgia,serif;font-size:15px">Lettre de motivation</h3>
      <p style="font-family:sans-serif;font-size:14px;color:#1A1A18;line-height:1.7">${escHtml(motivation).replace(/\n/g, '<br>')}</p>
      <hr style="border:none;border-top:1px solid #E8E8E2;margin:20px 0">
      <p style="font-family:sans-serif;font-size:12px;color:#9B9B90">Reçu via ahadi-group.com/nous-rejoindre</p>
    `,
  })

  if (error) {
    console.error('[AHADI] Resend error (candidature):', error)
    return NextResponse.json(
      { error: "L'envoi a échoué. Contactez-nous directement par WhatsApp." },
      { status: 500 },
    )
  }

  // Email 2 — accusé de réception au candidat (non-bloquant)
  resend.emails
    .send({
      from: `AHADI Group <${CONTACT_EMAIL}>`,
      to: [email],
      subject: `Votre candidature AHADI Group — Formulaire d'évaluation`,
      html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
        <h2 style="color:#1A4A35;font-family:Georgia,serif">Bonjour ${escHtml(nom)},</h2>
        <p style="font-size:14px;color:#1A1A18;line-height:1.75">
          Nous avons bien reçu votre candidature pour le poste de <strong>${escHtml(poste)}</strong>.
        </p>
        <p style="font-size:14px;color:#5A5A52;line-height:1.75">
          Avant de vous répondre, nous vous demandons de compléter un court formulaire
          d'évaluation complémentaire. Cela ne prend que quelques minutes.
        </p>
        <div style="margin:32px 0">
          <a
            href="${GOOGLE_FORM_URL}"
            style="background:#267253;color:#fff;text-decoration:none;padding:12px 24px;border-radius:10px;font-size:14px;font-weight:500"
          >
            Accéder au formulaire →
          </a>
        </div>
        <p style="font-size:13px;color:#9B9B90;line-height:1.7">
          Merci de le compléter dans les 48h suivant la réception de cet email.
          Passé ce délai, votre dossier ne sera pas examiné.
        </p>
        <hr style="border:none;border-top:1px solid #E8E8E2;margin:32px 0">
        <p style="font-size:12px;color:#9B9B90">
          AHADI Group SARLU · Conakry, Guinée<br>
          <a href="https://ahadi-group.com" style="color:#267253">ahadi-group.com</a>
        </p>
      </div>
    `,
    })
    .catch((err) => console.error('[AHADI] Resend error (candidat):', err))

  return NextResponse.json({ success: true, id: data?.id })
}
