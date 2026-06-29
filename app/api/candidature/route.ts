import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSc5_p10nRmaWoFkMT_PATEguNg-qDQHRAsR9w24PFFA9GzOSA/viewform'

export async function POST(req: NextRequest) {
  const fd = await req.formData()

  const nom = fd.get('nom') as string
  const email = fd.get('email') as string
  const telephone = fd.get('telephone') as string
  const ville = fd.get('ville') as string
  const poste = fd.get('poste') as string
  const motivation = fd.get('motivation') as string
  const cv = fd.get('cv') as File | null

  let cvAttachment: { filename: string; content: string } | undefined
  if (cv && cv.size > 0) {
    const cvBuffer = await cv.arrayBuffer()
    const cvBase64 = Buffer.from(cvBuffer).toString('base64')
    cvAttachment = { filename: cv.name, content: cvBase64 }
  }

  if (!nom || !email || !telephone || !ville || !poste || !motivation) {
    return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
  }

  // Email 1 — notification interne AHADI
  const { data, error } = await resend.emails.send({
    from: 'AHADI Group <contact@ahadi-group.com>',
    to: ['contact@ahadi-group.com'],
    subject: `Nouvelle candidature — ${poste} — ${nom}`,
    attachments: cvAttachment ? [cvAttachment] : [],
    html: `
      <h2 style="color:#1A4A35;font-family:Georgia,serif">Nouvelle candidature reçue</h2>
      <table style="border-collapse:collapse;width:100%;max-width:560px;font-family:sans-serif;font-size:14px">
        <tr><td style="padding:8px 0;color:#5A5A52;width:140px">Nom</td><td style="padding:8px 0;color:#1A1A18;font-weight:500">${nom}</td></tr>
        <tr><td style="padding:8px 0;color:#5A5A52">Email</td><td style="padding:8px 0;color:#1A1A18">${email}</td></tr>
        <tr><td style="padding:8px 0;color:#5A5A52">Téléphone</td><td style="padding:8px 0;color:#1A1A18">${telephone}</td></tr>
        <tr><td style="padding:8px 0;color:#5A5A52">Ville</td><td style="padding:8px 0;color:#1A1A18">${ville}</td></tr>
        <tr><td style="padding:8px 0;color:#5A5A52">Poste visé</td><td style="padding:8px 0;color:#1A1A18">${poste}</td></tr>
        <tr><td style="padding:8px 0;color:#5A5A52">CV</td><td style="padding:8px 0;color:#1A1A18">${cv ? cv.name : '—'}</td></tr>
      </table>
      <hr style="border:none;border-top:1px solid #E8E8E2;margin:20px 0">
      <h3 style="color:#1A4A35;font-family:Georgia,serif;font-size:15px">Lettre de motivation</h3>
      <p style="font-family:sans-serif;font-size:14px;color:#1A1A18;line-height:1.7">${motivation.replace(/\n/g, '<br>')}</p>
      <hr style="border:none;border-top:1px solid #E8E8E2;margin:20px 0">
      <p style="font-family:sans-serif;font-size:12px;color:#9B9B90">Reçu via ahadi-group.com/nous-rejoindre</p>
    `,
  })

  if (error) {
    console.error('Resend error (candidature):', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // Email 2 — accusé de réception au candidat (non-bloquant)
  resend.emails.send({
    from: 'AHADI Group <contact@ahadi-group.com>',
    to: [email],
    subject: `Votre candidature AHADI Group — Formulaire d'évaluation`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
        <h2 style="color:#1A4A35;font-family:Georgia,serif;font-style:italic">Bonjour ${nom},</h2>
        <p style="font-size:14px;color:#1A1A18;line-height:1.75">
          Nous avons bien reçu votre candidature pour le poste de <strong>${poste}</strong>.
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
  }).catch((err) => console.error('Resend error (candidat):', err))

  return NextResponse.json({ success: true, id: data?.id })
}
