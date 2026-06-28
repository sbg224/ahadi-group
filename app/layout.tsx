import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-serif',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'AHADI Group — Supervision de projets en Guinée',
  description:
    'AHADI Group supervise vos projets de construction, plantation, commerce et démarches administratives en Guinée. Votre représentant indépendant sur le terrain.',
  keywords: [
    'supervision chantier Guinée',
    'gestion projet Conakry',
    'diaspora investissement Guinée',
    'AHADI Group',
  ],
  openGraph: {
    title: 'AHADI Group — La promesse tenue.',
    description: 'Là où vous ne pouvez pas être, nous y sommes.',
    url: 'https://ahadi-group.com',
    siteName: 'AHADI Group',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
