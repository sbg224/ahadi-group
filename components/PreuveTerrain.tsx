'use client'

import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'
import ScrollWatermark from '@/components/ScrollWatermark'

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
    <circle cx="12" cy="12" r="10" fill="#267253" fillOpacity="0.12" stroke="#267253" strokeWidth="1.4" />
    <path d="M8 12.5l2.5 2.5 5-5.5" stroke="#267253" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const WarnIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
    <path
      d="M12 3.5L21.5 20H2.5L12 3.5Z"
      fill="#D4AF37"
      fillOpacity="0.15"
      stroke="#D4AF37"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path d="M12 10v4" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="12" cy="17" r="0.9" fill="#D4AF37" />
  </svg>
)

const notes = [
  { icon: <CheckIcon />, text: 'Fondations coulées niveau 2, conforme au planning' },
  { icon: <WarnIcon />, text: 'Livraison ciment retardée de 3 jours, signalé au client' },
  { icon: <CheckIcon />, text: "Main d'œuvre présente conforme au contrat" },
]

export default function PreuveTerrain() {
  return (
    <section
      className="relative overflow-hidden px-6 py-20 md:py-36"
      style={{ background: 'linear-gradient(to bottom, #F0F7F4 0%, #FFFFFF 100%)' }}
    >
      <ScrollWatermark tone="light" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div
            className="uppercase text-gris-leger mb-3"
            style={{ fontSize: '10px', letterSpacing: '2px' }}
          >
            Avant de vous engager
          </div>
          <h2
            className="font-serif text-noir mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
          >
            Ce que vous recevez à chaque visite.
          </h2>
          <p className="text-gris text-sm leading-relaxed">
            Ce n&apos;est pas une promesse abstraite. Voici, concrètement, la trace que nous vous
            laissons après chaque passage sur le terrain.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
        <div className="bg-white rounded-2xl shadow-xl border border-bordure overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Photo terrain */}
            <div
              className="relative p-8 md:p-10 flex flex-col justify-between min-h-[260px]"
              style={{ background: 'linear-gradient(135deg, #267253 0%, #1A4A35 100%)' }}
            >
              <span className="uppercase text-white/50" style={{ fontSize: '10px', letterSpacing: '2px' }}>
                Exemple de rapport de supervision
              </span>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                  <Camera size={26} color="white" strokeWidth={1.6} strokeOpacity={0.85} aria-hidden="true" />
                </div>
              </div>
              <div>
                <p className="text-white text-sm font-medium">Chantier — Coya, Conakry</p>
                <p className="text-white/60 text-xs mt-1">Visite du 12 mars · Photo terrain</p>
              </div>
            </div>

            {/* Note de suivi */}
            <div className="p-8 md:p-10">
              <span className="uppercase text-gris-leger" style={{ fontSize: '10px', letterSpacing: '2px' }}>
                Note de suivi
              </span>
              <ul className="flex flex-col gap-3 mt-5 mb-6">
                {notes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    {note.icon}
                    <span className="text-gris text-sm leading-relaxed">{note.text}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-5 border-t border-bordure flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs text-gris-muted">Rapport signé — Superviseur AHADI</span>
                <span className="font-serif text-ahadi" style={{ fontSize: '13px' }}>
                  Validé ✓
                </span>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  )
}
