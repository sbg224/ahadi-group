import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { nom, contact, typeProjet, situation } = body

  if (!nom || !contact || !situation) {
    return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
  }

  const { data, error } = await resend.emails.send({
    from: 'AHADI Group <contact@ahadi-group.com>',
    to: ['contact@ahadi-group.com'],
    subject: `Nouveau dossier — ${typeProjet} — ${nom}`,
    html: `
      <h2>Nouveau dossier reçu</h2>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Contact :</strong> ${contact}</p>
      <p><strong>Type de projet :</strong> ${typeProjet}</p>
      <p><strong>Situation :</strong></p>
      <p>${situation.replace(/\n/g, '<br>')}</p>
      <hr>
      <p style="color:#9B9B90;font-size:12px">Reçu via ahadi-group.com</p>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, id: data?.id })
}
