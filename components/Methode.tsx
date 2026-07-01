'use client'

import { motion } from 'framer-motion'
import { ClipboardCheck, MapPin, FlagTriangleRight } from 'lucide-react'
import SealBadge from '@/components/icons/SealBadge'
import FloatingPaths from '@/components/FloatingPaths'
import AuroraHalos from '@/components/AuroraHalos'
import ScrollWatermark from '@/components/ScrollWatermark'

const cardTints = ['rgba(242,247,244,0.6)', 'rgba(251,247,234,0.6)', 'rgba(255,255,255,0.6)']

const Dot = () => <div className="w-1.5 h-1.5 rounded-full bg-ahadi shrink-0 mt-1.5" aria-hidden="true" />

type Row = {
  numeral: string
  label: string
  intro: string
  bullets: string[]
  trailing?: string
  icon: React.ReactNode
}

const rows: Row[] = [
  {
    numeral: '01',
    label: 'Avant le projet',
    intro: 'Nous prenons le temps de comprendre votre projet avant que quoi que ce soit ne démarre.',
    bullets: [
      'Nous analysons vos besoins et vos objectifs.',
      'Nous établissons une étude budgétaire réaliste.',
      'Nous vérifions sérieusement les personnes et entreprises impliquées.',
      'Nous cadrons clairement les grandes étapes à venir.',
    ],
    icon: <ClipboardCheck size={46} color="white" strokeWidth={1.6} aria-hidden="true" />,
  },
  {
    numeral: '02',
    label: 'Pendant le projet',
    intro: "C'est la présence que vous ne pouvez pas assurer à distance.",
    bullets: [
      'Nous nous rendons régulièrement sur place et documentons chaque visite.',
      'Nous suivons le planning de près et vous alertons en cas de retard.',
      'Nous suivons le budget et justifions chaque dépense.',
      'Nous restons joignables sur WhatsApp pour toute question urgente.',
    ],
    trailing:
      "Quand un imprévu survient, nous ne nous contentons pas de vous prévenir. Nous vous proposons une solution et nous vous aidons à trancher rapidement.",
    icon: <MapPin size={46} color="white" strokeWidth={1.6} aria-hidden="true" />,
  },
  {
    numeral: '03',
    label: 'Après le projet',
    intro: 'La promesse tenue jusqu\'au bout.',
    bullets: [
      'Nous vous accompagnons pour la réception des travaux.',
      'Nous vérifions que tout correspond à ce qui avait été convenu.',
      'Nous vous remettons un rapport complet qui clôture le suivi.',
    ],
    icon: <FlagTriangleRight size={46} color="white" strokeWidth={1.6} aria-hidden="true" />,
  },
]

function MethodCard({ icon, index }: { icon: React.ReactNode; index: number }) {
  return (
    <motion.div
      className="group relative glass-panel rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center"
      style={{ backgroundColor: cardTints[index % cardTints.length] }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.175 }}
      whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(38,114,83,0.3)', transition: { duration: 0.22 } }}
    >
      <FloatingPaths />
      <SealBadge icon={icon} size={104} float groupHover className="relative z-10" />
    </motion.div>
  )
}

function MethodRow({ row, reversed, index }: { row: Row; reversed: boolean; index: number }) {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={reversed ? 'md:order-2' : ''}>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-serif text-ahadi" style={{ fontSize: '14px' }}>
            {row.numeral}
          </span>
          <div className="flex-1 h-px bg-bordure" />
        </div>
        <h3 className="font-serif text-noir mb-3" style={{ fontSize: 'clamp(18px, 2vw, 22px)' }}>
          {row.label}
        </h3>
        <p className="text-gris text-sm leading-relaxed mb-5">{row.intro}</p>
        <ul className="flex flex-col gap-2.5">
          {row.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5">
              <Dot />
              <span className="text-gris text-sm leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
        {row.trailing && (
          <p className="text-gris text-sm leading-relaxed mt-5">{row.trailing}</p>
        )}
      </div>

      <div className={reversed ? 'md:order-1' : ''}>
        <MethodCard icon={row.icon} index={index} />
      </div>
    </motion.div>
  )
}

export default function Methode() {
  return (
    <section id="methode" className="relative overflow-hidden py-20 md:py-36 px-6 bg-fond">
      <AuroraHalos />
      <ScrollWatermark tone="light" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16 md:mb-24">
          <div
            className="uppercase text-gris-leger mb-3"
            style={{ fontSize: '10px', letterSpacing: '2px' }}
          >
            Notre méthode
          </div>
          <h2
            className="font-serif text-noir mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
          >
            Comment nous tenons la promesse.
          </h2>
          <p className="text-gris text-sm leading-relaxed">
            Vous gardez la main sur votre projet. Nous assurons la présence quotidienne que vous ne
            pouvez pas garantir à distance, et nous vous aidons à décider quand une situation
            l&apos;exige. AHADI Group agit comme une protection autour de votre investissement, du
            premier jour jusqu&apos;à la réalisation de votre objectif.
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-32">
          {rows.map((row, i) => (
            <MethodRow key={row.numeral} row={row} reversed={i % 2 === 1} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
