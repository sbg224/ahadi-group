import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import HeroRecrut from '@/components/recrutement/HeroRecrut'
import ValeursSuperviseur from '@/components/recrutement/ValeursSuperviseur'
import FormulaireCandidat from '@/components/recrutement/FormulaireCandidat'

export const metadata: Metadata = {
  title: 'Nous rejoindre — AHADI Group',
  description:
    'AHADI Group recrute des superviseurs de projets indépendants en Guinée. Postulez en ligne.',
  openGraph: {
    title: 'Nous rejoindre — AHADI Group',
    description:
      'Rejoignez le réseau de superviseurs AHADI Group. Des missions claires, une réputation protégée.',
    url: 'https://ahadi-group.com/nous-rejoindre',
    siteName: 'AHADI Group',
  },
}

export default function NousRejoindre() {
  return (
    <>
      <Nav />
      <main>
        <HeroRecrut />
        <ValeursSuperviseur />
        <FormulaireCandidat />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
