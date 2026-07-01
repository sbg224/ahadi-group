'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollWatermark from '@/components/ScrollWatermark'

function cardVariant(i: number) {
  return {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  }
}

const NUM_STYLE_LIGHT: React.CSSProperties = {
  position: 'absolute',
  bottom: '-10px',
  right: '20px',
  fontSize: '100px',
  fontWeight: 900,
  color: 'rgba(255,255,255,0.05)',
  lineHeight: 1,
  pointerEvents: 'none',
  userSelect: 'none',
}

const NUM_STYLE_DARK: React.CSSProperties = {
  position: 'absolute',
  bottom: '-10px',
  right: '20px',
  fontSize: '100px',
  fontWeight: 900,
  color: 'rgba(26,26,24,0.04)',
  lineHeight: 1,
  pointerEvents: 'none',
  userSelect: 'none',
}

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2Z"
      fill="white"
      fillOpacity="0.25"
      stroke="white"
      strokeWidth="1.5"
    />
    <path
      d="M8.5 12l2.5 2.5 4-5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const DocumentIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6Z"
      fill="white"
      fillOpacity="0.2"
      stroke="white"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M14 3v6h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 13h8M8 17h4" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const UserIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="4" stroke="#267253" strokeWidth="1.5" />
    <path
      d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
      stroke="#267253"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const SereneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.5" />
    <path
      d="M8 12.5l2.5 2.5 5-5.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

type MobileValueCard = {
  numeral: string
  background: string
  border?: string
  iconBg: string
  icon: React.ReactNode
  tag?: { label: string; color: string; background: string }
  title: string
  titleColor: string
  body: React.ReactNode
  extra?: React.ReactNode
  numeralColor: string
  dividerColor: string
}

const mobileCards: MobileValueCard[] = [
  {
    numeral: '01',
    background: '#267253',
    iconBg: 'rgba(255,255,255,0.15)',
    icon: <ShieldIcon />,
    title: 'Intégrité',
    titleColor: '#F0F7F4',
    body: (
      <>
        Nous ne gérons pas votre argent. Notre rôle est de témoigner, pas d&apos;exécuter.
        C&apos;est cette indépendance qui fonde notre valeur.
      </>
    ),
    numeralColor: 'rgba(255,255,255,0.4)',
    dividerColor: 'rgba(255,255,255,0.15)',
  },
  {
    numeral: '02',
    background: '#1C2B35',
    iconBg: '#267253',
    icon: <DocumentIcon />,
    tag: { label: 'Notre méthode', color: '#5DBF8A', background: 'rgba(93,191,138,0.15)' },
    title: 'Transparence',
    titleColor: '#F0F7F4',
    body: (
      <>
        Chaque visite produit un rapport. Chaque rapport contient des preuves visuelles.
        Photos, vidéos, observations terrain, vous voyez exactement ce que nous avons vu.
        Sans filtre. Sans omission.
      </>
    ),
    numeralColor: 'rgba(240,247,244,0.4)',
    dividerColor: 'rgba(255,255,255,0.08)',
  },
  {
    numeral: '03',
    background: '#F0F7F4',
    border: '1px solid #C8DDD6',
    iconBg: 'rgba(38,114,83,0.12)',
    icon: <UserIcon />,
    title: 'Confiance',
    titleColor: '#1A1A18',
    body: (
      <>
        Légalement constitués, identifiables, responsables. Vous confiez votre projet à une
        structure officielle enregistrée en Guinée.
      </>
    ),
    numeralColor: 'rgba(26,26,24,0.4)',
    dividerColor: 'rgba(0,0,0,0.1)',
  },
  {
    numeral: '04',
    background: '#267253',
    iconBg: 'rgba(255,255,255,0.15)',
    icon: <SereneIcon />,
    title: 'Sérénité',
    titleColor: '#F0F7F4',
    body: (
      <>
        Investir depuis l&apos;étranger sans pouvoir vérifier, c&apos;est épuisant. Notre mission,
        c&apos;est de vous rendre cette tranquillité d&apos;esprit que rien ne peut remplacer.
      </>
    ),
    extra: (
      <>
        <p className="font-serif" style={{ fontSize: '17px', fontWeight: 700, color: '#F0F7F4', marginTop: '16px' }}>
          Investir et dormir tranquille.
        </p>
        <p style={{ fontSize: '12px', color: 'rgba(240,247,244,0.55)', marginTop: '4px' }}>
          En temps réel. Avec des preuves.
        </p>
      </>
    ),
    numeralColor: 'rgba(255,255,255,0.4)',
    dividerColor: 'rgba(255,255,255,0.2)',
  },
]

export default function Values() {
  const [blockHovered, setBlockHovered] = useState(false)

  return (
    <section
      id="valeurs"
      className="py-20 md:py-36 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #FFFFFF 0%, #F0F7F4 100%)' }}
    >
      <ScrollWatermark tone="light" />

      <div className="max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <div
              className="uppercase mb-4"
              style={{ fontSize: '10px', letterSpacing: '4px', color: '#267253' }}
            >
              Ce en quoi nous croyons
            </div>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: 900,
                letterSpacing: '-2px',
                color: '#1A1A18',
                lineHeight: 1.05,
              }}
            >
              Nos
              <br />
              <span style={{ color: '#267253' }}>engagements</span>
            </h2>
          </div>
          <p
            className="text-right hidden md:block"
            style={{
              maxWidth: '200px',
              fontSize: '13px',
              lineHeight: 1.7,
              color: 'rgba(26,26,24,0.45)',
              paddingTop: '8px',
            }}
          >
            Ce ne sont pas des mots sur une page. C&apos;est ce qui guide chaque rapport, chaque
            visite.
          </p>
        </div>

        {/* Bloc flottant — grille + Sérénité (desktop uniquement, disposition diagonale) */}
        <div className="hidden md:block">
        <div
          onMouseEnter={() => setBlockHovered(true)}
          onMouseLeave={() => setBlockHovered(false)}
          style={{
            borderRadius: '20px',
            transform: blockHovered ? 'translateY(-4px) translateZ(0)' : 'translateZ(0)',
            boxShadow: blockHovered
              ? '0 28px 70px -10px rgba(28,43,53,0.3), 0 12px 30px -8px rgba(28,43,53,0.18)'
              : '0 20px 60px -10px rgba(28,43,53,0.25), 0 8px 24px -8px rgba(28,43,53,0.15)',
            transition: 'box-shadow 0.4s ease, transform 0.4s ease',
          }}
        >

        {/* Grille asymétrique */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            background: 'rgba(0,0,0,0.06)',
            borderRadius: '20px 20px 0 0',
            overflow: 'hidden',
          }}
        >
          {/* Card 01 — Intégrité (vert AHADI, texte blanc) */}
          <motion.div
            variants={cardVariant(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            style={{
              background: '#267253',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px' }}>
                01
              </span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.15)' }} />
            </div>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}
            >
              <ShieldIcon />
            </div>
            <h3 className="font-serif mb-4" style={{ fontSize: '28px', fontWeight: 800, color: '#F0F7F4' }}>
              Intégrité
            </h3>
            <p style={{ fontSize: '13px', color: 'rgba(240,247,244,0.7)', lineHeight: 1.75 }}>
              Nous ne gérons pas votre argent. Notre rôle est de témoigner, pas d&apos;exécuter.
              C&apos;est cette indépendance qui fonde notre valeur.
            </p>
            <div aria-hidden="true" style={NUM_STYLE_LIGHT}>01</div>
          </motion.div>

          {/* Card 02 — Transparence (ardoise, texte clair, rows 1-2) */}
          <motion.div
            variants={cardVariant(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            style={{
              background: '#1C2B35',
              padding: '40px',
              gridRow: '1 / 3',
              minHeight: '460px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Haut : index + tag */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <span
                  style={{
                    fontSize: '10px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: 'rgba(240,247,244,0.4)',
                  }}
                >
                  02
                </span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
              </div>
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  background: 'rgba(93,191,138,0.15)',
                  color: '#5DBF8A',
                  fontSize: '11px',
                  letterSpacing: '1px',
                }}
              >
                Notre méthode
              </span>
            </div>

            {/* Bas : icône + titre + texte + ligne */}
            <div>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '12px',
                  background: '#267253',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <DocumentIcon />
              </div>
              <h3 className="font-serif mb-4" style={{ fontSize: '32px', fontWeight: 800, color: '#F0F7F4' }}>
                Transparence
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(240,247,244,0.6)', lineHeight: 1.75, marginBottom: '32px' }}>
                Chaque visite produit un rapport. Chaque rapport contient des preuves visuelles.
                Photos, vidéos, observations terrain — vous voyez exactement ce que nous avons vu.
                Sans filtre. Sans omission.
              </p>
              <div style={{ width: '40px', height: '2px', background: '#5DBF8A' }} />
            </div>
            <div aria-hidden="true" style={NUM_STYLE_LIGHT}>02</div>
          </motion.div>

          {/* Card 03 — Confiance (fond clair, texte sombre) */}
          <motion.div
            variants={cardVariant(2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            style={{
              background: '#F0F7F4',
              border: '1px solid #C8DDD6',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span style={{ fontSize: '11px', color: 'rgba(26,26,24,0.4)', letterSpacing: '2px' }}>
                03
              </span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }} />
            </div>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: 'rgba(38,114,83,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}
            >
              <UserIcon />
            </div>
            <h3 className="font-serif mb-4" style={{ fontSize: '28px', fontWeight: 800, color: '#1A1A18' }}>
              Confiance
            </h3>
            <p style={{ fontSize: '13px', color: '#5A5A52', lineHeight: 1.75 }}>
              Légalement constitués, identifiables, responsables. Vous confiez votre projet à une
              structure officielle enregistrée en Guinée.
            </p>
            <div aria-hidden="true" style={NUM_STYLE_DARK}>03</div>
          </motion.div>
        </div>

        {/* Card 04 — Sérénité pleine largeur (vert AHADI, texte blanc) */}
        <motion.div
          variants={cardVariant(3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            background: '#267253',
            borderRadius: '0 0 20px 20px',
            padding: '48px 40px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px' }}>
                  04
                </span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
              </div>
              <h3
                className="font-serif mb-4"
                style={{ fontSize: '36px', fontWeight: 800, color: '#F0F7F4', letterSpacing: '-1px' }}
              >
                Sérénité
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(240,247,244,0.75)', lineHeight: 1.75 }}>
                Investir depuis l&apos;étranger sans pouvoir vérifier, c&apos;est épuisant. Notre
                mission, c&apos;est de vous rendre cette tranquillité d&apos;esprit que rien ne
                peut remplacer.
              </p>
            </div>
            <div className="text-right">
              <p
                className="font-serif"
                style={{ fontSize: '20px', fontWeight: 700, color: '#F0F7F4', marginBottom: '8px' }}
              >
                Investir et dormir tranquille.
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(240,247,244,0.55)' }}>
                En temps réel. Avec des preuves.
              </p>
            </div>
          </div>
          <div aria-hidden="true" style={NUM_STYLE_LIGHT}>04</div>
        </motion.div>
        </div>{/* fin bloc flottant */}
        </div>{/* fin hidden md:block desktop */}

        {/* Mobile — liste verticale simple, une carte pleine largeur par engagement */}
        <div className="md:hidden flex flex-col gap-4">
          {mobileCards.map((card, i) => (
            <motion.div
              key={card.numeral}
              variants={cardVariant(i)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              style={{
                background: card.background,
                border: card.border,
                borderRadius: '20px',
                padding: '28px',
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span style={{ fontSize: '11px', color: card.numeralColor, letterSpacing: '2px' }}>
                  {card.numeral}
                </span>
                <div style={{ flex: 1, height: '1px', background: card.dividerColor }} />
              </div>

              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  background: card.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                }}
              >
                {card.icon}
              </div>

              {card.tag && (
                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '100px',
                    background: card.tag.background,
                    color: card.tag.color,
                    fontSize: '11px',
                    letterSpacing: '1px',
                    marginBottom: '14px',
                  }}
                >
                  {card.tag.label}
                </span>
              )}

              <h3 className="font-serif mb-3" style={{ fontSize: '22px', fontWeight: 800, color: card.titleColor }}>
                {card.title}
              </h3>
              <p style={{ fontSize: '13px', color: card.titleColor === '#1A1A18' ? '#5A5A52' : 'rgba(240,247,244,0.7)', lineHeight: 1.75 }}>
                {card.body}
              </p>
              {card.extra}
            </motion.div>
          ))}
        </div>

        {/* Closing bar */}
        <div
          className="flex flex-wrap items-center justify-between gap-6 mt-12"
          style={{ borderTop: '1px solid #E8E8E2', paddingTop: '2rem' }}
        >
          <p className="font-serif" style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', color: '#1A1A18' }}>
            C&apos;est ce que nous vous{' '}
            <span style={{ color: '#267253' }}>offrons.</span>
          </p>

          <div className="flex flex-wrap gap-5">
            {[
              'Preuves à chaque visite',
              'Rapport signé à chaque mission',
              'Indépendance totale garantie',
            ].map((chip) => (
              <div key={chip} className="flex items-center gap-2">
                <div
                  aria-hidden="true"
                  style={{ width: 6, height: 6, borderRadius: '50%', background: '#267253', flexShrink: 0 }}
                />
                <span style={{ fontSize: '12px', color: '#6B6B62' }}>{chip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
