import type { Metadata } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-outfit',
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
    <html lang="fr" className={`${outfit.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
