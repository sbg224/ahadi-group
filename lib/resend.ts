import { Resend } from 'resend'

if (!process.env.RESEND_API_KEY) {
  console.error('[AHADI] RESEND_API_KEY absent — les emails ne fonctionneront pas')
}

export const resend = new Resend(process.env.RESEND_API_KEY)
