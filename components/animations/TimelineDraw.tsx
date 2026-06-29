'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const dotStyle = {
  width: 14,
  height: 14,
  borderRadius: '50%',
  backgroundColor: '#267253',
  border: '3px solid #FAFAF8',
  boxShadow: '0 0 0 2px #267253',
  flexShrink: 0,
}

export default function TimelineDraw() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'end 15%'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div
      ref={ref}
      className="col-start-2 row-start-1 row-span-2 flex justify-center"
      aria-hidden="true"
    >
      <div className="relative w-px bg-[#D4E8DF] h-full" style={{ overflow: 'visible' }}>
        <motion.div
          className="absolute inset-0 bg-ahadi"
          style={{ scaleY, transformOrigin: 'top' }}
        />
        <div className="absolute top-6 left-1/2 -translate-x-1/2" style={dotStyle} />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2" style={dotStyle} />
      </div>
    </div>
  )
}
