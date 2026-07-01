'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const PATH_COUNT = 12

/**
 * Adapted from the 21st.dev FloatingPaths hero background: only the animated
 * SVG-paths sub-component is kept (not the fullscreen wrapper or the
 * letter-by-letter title). Recolored to the AHADI palette, density cut from
 * 36 to 12 paths for card scale, and gated by viewport visibility +
 * prefers-reduced-motion instead of running unconditionally forever.
 */
function buildPaths(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const t = i / (count - 1)
    const yBase = -40 + t * 380
    const amp = 50 + (i % 3) * 18
    const isGold = i % 5 === 2
    const alpha = 0.06 + (i % 4) * 0.03
    return {
      id: i,
      d: `M-40 ${yBase.toFixed(1)} C 90 ${(yBase - amp).toFixed(1)}, 210 ${(yBase + amp).toFixed(1)}, 340 ${yBase.toFixed(1)}`,
      color: isGold ? `rgba(212,175,55,${alpha})` : `rgba(38,114,83,${alpha})`,
      width: 1 + (i % 3) * 0.4,
      duration: 14 + i * 1.5,
    }
  })
}

const paths = buildPaths(PATH_COUNT)

export default function FloatingPaths({ className }: { className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-40px' })
  const reduceMotion = useReducedMotion()
  const shouldAnimate = isInView && !reduceMotion

  return (
    <div
      ref={ref}
      className={`absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none ${className ?? ''}`}
      aria-hidden="true"
    >
      <svg className="w-full h-full" viewBox="0 0 300 300" fill="none" preserveAspectRatio="xMidYMid slice">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeLinecap="round"
            initial={{ pathLength: 0.5, pathOffset: 0 }}
            animate={shouldAnimate ? { pathOffset: [0, 1] } : { pathOffset: 0 }}
            transition={
              shouldAnimate
                ? { duration: path.duration, repeat: Infinity, ease: 'linear' }
                : { duration: 0.3 }
            }
          />
        ))}
      </svg>
    </div>
  )
}
