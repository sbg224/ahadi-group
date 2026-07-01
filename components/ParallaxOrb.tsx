'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

type ParallaxOrbProps = {
  children: React.ReactNode
  yRange?: [number, number]
  rotateRange?: [number, number]
  className?: string
}

export function ParallaxOrb({
  children,
  yRange = [80, -80],
  rotateRange = [0, 25],
  className,
}: ParallaxOrbProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], yRange)
  const rotate = useTransform(scrollYProgress, [0, 1], rotateRange)

  return (
    <div ref={ref} className={className ?? 'relative'}>
      <motion.div style={{ y, rotate }}>{children}</motion.div>
    </div>
  )
}
