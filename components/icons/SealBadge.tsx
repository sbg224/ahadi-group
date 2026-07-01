'use client'

import { motion, useReducedMotion } from 'framer-motion'

type SealBadgeProps = {
  icon: React.ReactNode
  size?: number
  float?: boolean
  groupHover?: boolean
  className?: string
}

/**
 * "Cachet AHADI" — cercle dégradé vert + liseré or (bord de sceau), icône
 * blanche centrée. Système d'icône unique du site, décliné en plusieurs
 * tailles. `groupHover` attend un ancestor avec la classe Tailwind `group`.
 */
export default function SealBadge({
  icon,
  size = 64,
  float = false,
  groupHover = false,
  className,
}: SealBadgeProps) {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className={`shrink-0 rounded-full flex items-center justify-center ${
        groupHover ? 'transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2' : ''
      } ${className ?? ''}`}
      style={{
        width: size,
        height: size,
        background: 'linear-gradient(135deg, #267253 0%, #1A4A35 100%)',
        boxShadow: `0 0 0 ${Math.max(2, Math.round(size * 0.035))}px rgba(212,175,55,0.35), 0 ${Math.round(
          size * 0.14,
        )}px ${Math.round(size * 0.28)}px -${Math.round(size * 0.12)}px rgba(38,114,83,0.4)`,
      }}
    >
      <motion.div
        className="flex items-center justify-center"
        animate={float && !reduceMotion ? { y: [0, -4, 0] } : undefined}
        transition={
          float && !reduceMotion
            ? { duration: 3.4, repeat: Infinity, ease: 'easeInOut' }
            : undefined
        }
      >
        {icon}
      </motion.div>
    </div>
  )
}
