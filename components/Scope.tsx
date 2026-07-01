'use client'

import { motion } from 'framer-motion'
import { HardHat, Sprout, Store, FileCheck2, SearchCheck, KeyRound } from 'lucide-react'
import SealBadge from '@/components/icons/SealBadge'
import AuroraHalos from '@/components/AuroraHalos'
import ScrollWatermark from '@/components/ScrollWatermark'

const iconProps = { size: 28, color: 'white', strokeWidth: 1.6, 'aria-hidden': true } as const

const domains = [
  {
    title: 'Construction & rénovation',
    description: 'Supervision de chantier, vérifications rigoureuses, validation des étapes clés',
    icon: <HardHat {...iconProps} />,
  },
  {
    title: 'Plantation & agriculture',
    description: 'Audit de plantation, suivi de production, vérification terrain régulière',
    icon: <Sprout {...iconProps} />,
  },
  {
    title: 'Ouverture de commerce',
    description: "Accompagnement complet du local au premier jour d'exploitation",
    icon: <Store {...iconProps} />,
  },
  {
    title: 'Démarches administratives',
    description: 'Achat de terrain, permis, enregistrements, suivi et représentation',
    icon: <FileCheck2 {...iconProps} />,
  },
  {
    title: 'Audit de projet',
    description: 'Diagnostic à tout stade, où en est réellement votre projet',
    icon: <SearchCheck {...iconProps} />,
  },
  {
    title: 'Gestion clé en main',
    description: "Vous définissez l'objectif. Nous pilotons tout jusqu'à la livraison.",
    icon: <KeyRound {...iconProps} />,
  },
]

export default function Scope() {
  return (
    <section id="services" className="relative overflow-hidden py-20 md:py-36 px-6" style={{ background: '#FFFFFF' }}>
      <AuroraHalos />
      <ScrollWatermark tone="light" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div
            className="uppercase text-gris-leger mb-3"
            style={{ fontSize: '10px', letterSpacing: '2px' }}
          >
            Nos domaines d&apos;intervention
          </div>
          <h2
            className="font-serif text-noir mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
          >
            Un projet, quel qu&apos;il soit.
          </h2>
          <p className="text-gris text-sm leading-relaxed">
            Partout où vous avez besoin d&apos;un regard indépendant et fiable sur le terrain en
            Guinée, AHADI est là.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.title}
              className="glass-panel rounded-2xl p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
            >
              <SealBadge icon={domain.icon} size={64} className="mb-4" />
              <h3 className="text-noir mb-2" style={{ fontSize: '13px', fontWeight: 500 }}>
                {domain.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{ fontSize: '12px', color: '#8B8B82', lineHeight: '1.6' }}
              >
                {domain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
