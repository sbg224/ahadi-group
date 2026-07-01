'use client'

import { motion } from 'framer-motion'

const items = ['Engagement', 'Transparence', 'Sérénité']

export default function Devise() {
  return (
    <div className="border-t border-b border-bordure bg-fond">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item}
              className={`flex flex-col items-center justify-center py-5 border-bordure ${
                i < items.length - 1 ? 'border-b sm:border-b-0 sm:border-r' : ''
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-ahadi mb-2" aria-hidden="true" />
              <span
                className="text-gris-leger uppercase"
                style={{ fontSize: '11px', letterSpacing: '3px' }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
