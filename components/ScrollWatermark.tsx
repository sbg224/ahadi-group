'use client'

import { useScroll, useTransform, motion, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

type ScrollWatermarkProps = {
  tone?: 'light' | 'dark'
}

const TONE_COLOR = {
  light: 'rgba(26,26,24,0.05)',
  dark: 'rgba(255,255,255,0.06)',
}

/**
 * Filigrane "AHADI / GROUP" en parallaxe de scroll continue.
 *
 * À insérer comme premier enfant D'UNE SECTION (`position: relative` +
 * `overflow: hidden` côté section, contenu réel enveloppé dans
 * `relative z-10`) — jamais en wrapper externe autour d'une section.
 * Toute section du site a son propre fond opaque : un filigrane placé
 * "derrière" une section depuis l'extérieur serait entièrement masqué
 * par ce fond, quel que soit son `position` (fixed/sticky/absolute).
 * Rendu ici en enfant direct, il peint par-dessus le fond de la section
 * mais sous son contenu, exactement comme les grands numéros fantômes
 * déjà utilisés dans les cards de la section Valeurs.
 */
export default function ScrollWatermark({ tone = 'light' }: ScrollWatermarkProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const yScroll = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])
  const y = reduceMotion ? '0%' : yScroll
  const color = TONE_COLOR[tone]

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      style={{ y }}
      className="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center select-none"
    >
      <span
        className="font-bold leading-none tracking-tight"
        style={{ fontSize: 'clamp(4rem, 18vw, 14rem)', color }}
      >
        AHADI
      </span>
      <span
        className="font-bold leading-none tracking-[0.2em]"
        style={{ fontSize: 'clamp(2rem, 8vw, 6rem)', color }}
      >
        GROUP
      </span>
    </motion.div>
  )
}
