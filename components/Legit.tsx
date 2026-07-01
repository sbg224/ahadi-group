'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import SealBadge from '@/components/icons/SealBadge'

export default function Legit() {
  return (
    <div className="bg-ahadi-light border-b border-ahadi-border">
      <motion.div
        className="max-w-6xl mx-auto px-6 py-5 flex items-start gap-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className="pulse-wrap shrink-0">
          <SealBadge icon={<ShieldCheck size={24} color="white" strokeWidth={1.7} aria-hidden="true" />} size={48} />
        </span>
        <p className="text-sm text-gris leading-relaxed">
          <span style={{ fontWeight: 500, color: '#1A1A18' }}>
            Entreprise légalement constituée en Guinée.
          </span>{' '}
          SARLU enregistrée, immatriculée au RCCM de Conakry. Vous traitez avec une structure
          officielle, identifiable et responsable.
        </p>
      </motion.div>
    </div>
  )
}
