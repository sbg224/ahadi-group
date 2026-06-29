'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

type Word = { text: string; green?: boolean }

const h1Words: Word[] = [
  { text: 'En' }, { text: 'Guinée,' }, { text: 'des' }, { text: 'milliers' },
  { text: 'de' }, { text: 'projets' }, { text: 'échouent' }, { text: 'chaque' },
  { text: 'année.' }, { text: 'Pas', green: true }, { text: 'faute', green: true },
  { text: 'de', green: true }, { text: 'moyens.', green: true }, { text: 'Faute' },
  { text: "d'un" }, { text: 'regard' }, { text: 'honnête' }, { text: 'sur' },
  { text: 'le' }, { text: 'terrain.' },
]

const wordVariant = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: 'easeOut' as const } },
})

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -160])

  return (
    <section
      ref={ref}
      className="pt-32 pb-20 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 30%, #F0F7F4 100%)' }}
    >
      <motion.div className="max-w-6xl mx-auto" style={{ y }}>
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
        >
          <div className="w-6 h-px bg-ahadi" aria-hidden="true" />
          <span
            className="text-ahadi uppercase"
            style={{ fontSize: '11px', letterSpacing: '2px' }}
          >
            AHADI Group · Guinée
          </span>
        </motion.div>

        {/* H1 — word reveal */}
        <h1
          className="font-serif text-noir mb-12 max-w-3xl"
          style={{ fontSize: 'clamp(26px, 4vw, 42px)', lineHeight: '1.45', fontWeight: 800 }}
          aria-label="En Guinée, des milliers de projets échouent chaque année. Pas faute de moyens. Faute d'un regard honnête sur le terrain."
        >
          {h1Words.map((word, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                overflow: 'hidden',
                verticalAlign: 'bottom',
                marginRight: '0.28em',
              }}
            >
              <motion.span
                style={{ display: 'inline-block' }}
                className={word.green ? 'text-ahadi' : undefined}
                custom={i}
                variants={wordVariant}
                initial="hidden"
                animate="visible"
              >
                {word.text}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Body */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-16"
          variants={fadeUp(1.6)}
          initial="hidden"
          animate="visible"
        >
          <div>
            <div
              className="uppercase text-gris-leger mb-4"
              style={{ fontSize: '10px', letterSpacing: '2px' }}
            >
              Le constat
            </div>
            <p className="text-gris text-sm leading-relaxed mb-4">
              Des maisons qui ont coûté deux fois leur prix.
              <br />
              Des plantations perdues faute de suivi.
              <br />
              Des projets de commerce jamais aboutis.
              <br />
              Des familles qui ont tout investi, tout perdu,
              <br />
              sans même comprendre pourquoi.
            </p>
            <p className="text-gris text-sm leading-relaxed">
              Ce n&apos;est pas de la malchance. C&apos;est{' '}
              <span style={{ fontWeight: 500, color: '#1A1A18' }}>
                l&apos;absence d&apos;un intermédiaire de confiance
              </span>{' '}
              entre celui qui investit et celui qui exécute.
            </p>
          </div>

          <div>
            <div
              className="uppercase text-gris-leger mb-4"
              style={{ fontSize: '10px', letterSpacing: '2px' }}
            >
              Notre réponse
            </div>
            <p className="text-gris text-sm leading-relaxed mb-4">
              AHADI Group est né pour combler ce vide.
              <br />
              Nous sommes votre représentant indépendant
              <br />
              sur le terrain en Guinée.
            </p>
            <p className="text-gris text-sm leading-relaxed mb-6">
              Nous ne construisons pas. Nous ne gérons
              <br />
              pas vos fonds. Nous veillons. Nous documentons.
              <br />
              Nous rendons des comptes.
            </p>
            <p className="font-serif text-ahadi" style={{ fontSize: '16px' }}>
              Là où vous ne pouvez pas être, nous y sommes.
            </p>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          variants={fadeUp(1.8)}
          initial="hidden"
          animate="visible"
        >
          <a
            href="#contact"
            className="btn-primary bg-ahadi text-white px-6 py-3 rounded-full text-sm font-medium"
          >
            Déposer un dossier
          </a>
          <a
            href="#services"
            className="btn-secondary border border-ahadi text-ahadi px-6 py-3 rounded-full text-sm font-medium"
          >
            Nos services
          </a>
          <div className="flex flex-wrap items-center gap-5 mt-1 md:mt-0">
            {['Aucune gestion de fonds', 'Rapport signé à chaque mission', 'Réponse sous 24h'].map(
              (chip) => (
                <div key={chip} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-ahadi" aria-hidden="true" />
                  <span className="text-xs text-gris-muted">{chip}</span>
                </div>
              ),
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
