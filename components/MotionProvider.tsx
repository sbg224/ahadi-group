'use client'

import { MotionConfig } from 'framer-motion'

/**
 * Applique prefers-reduced-motion à TOUTES les animations Framer Motion du
 * site d'un coup (Hero, whileInView, ParallaxOrb, TimelineDraw…) — la règle
 * CSS globale de globals.css ne couvre pas les animations pilotées en JS.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
