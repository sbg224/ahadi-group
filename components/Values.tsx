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
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ color: 'var(--ahadi)' }}>
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
      stroke="currentColor"
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

/**
 * Source unique des 4 engagements — consommée par le rendu desktop
 * (grille asymétrique + carte pleine largeur) et le rendu mobile
 * (liste verticale). Modifier un texte ou une couleur ici suffit.
 */
type ValueTheme = {
  background: string
  border?: string
  iconBg: string
  titleColor: string
  bodyColor: string
  numeralColor: string
  dividerColor: string
  ghostColor: string
}

const THEMES: Record<'vert' | 'ardoise' | 'clair', ValueTheme> = {
  vert: {
    background: 'var(--ahadi)',
    iconBg: 'rgba(255,255,255,0.15)',
    titleColor: 'var(--ahadi-light)',
    bodyColor: 'color-mix(in srgb, var(--ahadi-light) 70%, transparent)',
    numeralColor: 'rgba(255,255,255,0.4)',
    dividerColor: 'rgba(255,255,255,0.15)',
    ghostColor: 'rgba(255,255,255,0.05)',
  },
  ardoise: {
    background: 'var(--ardoise)',
    iconBg: 'var(--ahadi)',
    titleColor: 'var(--ahadi-light)',
    bodyColor: 'color-mix(in srgb, var(--ahadi-light) 60%, transparent)',
    numeralColor: 'color-mix(in srgb, var(--ahadi-light) 40%, transparent)',
    dividerColor: 'rgba(255,255,255,0.08)',
    ghostColor: 'rgba(255,255,255,0.05)',
  },
  clair: {
    background: 'var(--ahadi-light)',
    border: '1px solid var(--ahadi-border)',
    iconBg: 'color-mix(in srgb, var(--ahadi) 12%, transparent)',
    titleColor: 'var(--noir)',
    bodyColor: 'var(--gris)',
    numeralColor: 'color-mix(in srgb, var(--noir) 40%, transparent)',
    dividerColor: 'rgba(0,0,0,0.1)',
    ghostColor: 'color-mix(in srgb, var(--noir) 4%, transparent)',
  },
}

type Value = {
  numeral: string
  title: string
  body: string
  theme: keyof typeof THEMES
  icon: React.ReactNode
  tag?: string
  closing?: { headline: string; sub: string }
}

const values: Value[] = [
  {
    numeral: '01',
    title: 'Intégrité',
    body: "Nous ne gérons pas votre argent. Notre rôle est de témoigner, pas d'exécuter. C'est cette indépendance qui fonde notre valeur.",
    theme: 'vert',
    icon: <ShieldIcon />,
  },
  {
    numeral: '02',
    title: 'Transparence',
    body: 'Chaque visite produit un rapport. Chaque rapport contient des preuves visuelles. Photos, vidéos, observations terrain — vous voyez exactement ce que nous avons vu. Sans filtre. Sans omission.',
    theme: 'ardoise',
    icon: <DocumentIcon />,
    tag: 'Notre méthode',
  },
  {
    numeral: '03',
    title: 'Confiance',
    body: 'Légalement constitués, identifiables, responsables. Vous confiez votre projet à une structure officielle enregistrée en Guinée.',
    theme: 'clair',
    icon: <UserIcon />,
  },
  {
    numeral: '04',
    title: 'Sérénité',
    body: "Investir depuis l'étranger sans pouvoir vérifier, c'est épuisant. Notre mission, c'est de vous rendre cette tranquillité d'esprit que rien ne peut remplacer.",
    theme: 'vert',
    icon: <SereneIcon />,
    closing: {
      headline: 'Investir et dormir tranquille.',
      sub: 'En temps réel. Avec des preuves.',
    },
  },
]

function ghostStyle(theme: ValueTheme): React.CSSProperties {
  return {
    position: 'absolute',
    bottom: '-10px',
    right: '20px',
    fontSize: '100px',
    fontWeight: 900,
    color: theme.ghostColor,
    lineHeight: 1,
    pointerEvents: 'none',
    userSelect: 'none',
  }
}

function NumeralRow({ value, theme }: { value: Value; theme: ValueTheme }) {
  return (
    <div className="flex items-center gap-3">
      <span style={{ fontSize: '11px', color: theme.numeralColor, letterSpacing: '2px' }}>
        {value.numeral}
      </span>
      <div style={{ flex: 1, height: '1px', background: theme.dividerColor }} />
    </div>
  )
}

function IconTile({ value, theme, size = 48 }: { value: Value; theme: ValueTheme; size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '12px',
        background: theme.iconBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {value.icon}
    </div>
  )
}

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '4px 12px',
        borderRadius: '100px',
        background: 'color-mix(in srgb, var(--vert-vif) 15%, transparent)',
        color: 'var(--vert-vif)',
        fontSize: '11px',
        letterSpacing: '1px',
      }}
    >
      {label}
    </span>
  )
}

export default function Values() {
  const [blockHovered, setBlockHovered] = useState(false)

  const [integrite, transparence, confiance, serenite] = values

  return (
    <section
      id="valeurs"
      className="py-20 md:py-36 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #FFFFFF 0%, var(--ahadi-light) 100%)' }}
    >
      <ScrollWatermark tone="light" />

      <div className="max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <div
              className="uppercase mb-4"
              style={{ fontSize: '10px', letterSpacing: '4px', color: 'var(--ahadi)' }}
            >
              Ce en quoi nous croyons
            </div>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: 900,
                letterSpacing: '-2px',
                color: 'var(--noir)',
                lineHeight: 1.05,
              }}
            >
              Nos
              <br />
              <span style={{ color: 'var(--ahadi)' }}>engagements</span>
            </h2>
          </div>
          <p
            className="text-right hidden md:block"
            style={{
              maxWidth: '200px',
              fontSize: '13px',
              lineHeight: 1.7,
              color: 'color-mix(in srgb, var(--noir) 55%, transparent)',
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
              ? '0 28px 70px -10px color-mix(in srgb, var(--ardoise) 30%, transparent), 0 12px 30px -8px color-mix(in srgb, var(--ardoise) 18%, transparent)'
              : '0 20px 60px -10px color-mix(in srgb, var(--ardoise) 25%, transparent), 0 8px 24px -8px color-mix(in srgb, var(--ardoise) 15%, transparent)',
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
          {/* Card 01 — Intégrité */}
          <motion.div
            variants={cardVariant(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            style={{
              background: THEMES.vert.background,
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div className="mb-8">
              <NumeralRow value={integrite} theme={THEMES.vert} />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <IconTile value={integrite} theme={THEMES.vert} />
            </div>
            <h3 className="font-serif mb-4" style={{ fontSize: '28px', fontWeight: 800, color: THEMES.vert.titleColor }}>
              {integrite.title}
            </h3>
            <p style={{ fontSize: '13px', color: THEMES.vert.bodyColor, lineHeight: 1.75 }}>
              {integrite.body}
            </p>
            <div aria-hidden="true" style={ghostStyle(THEMES.vert)}>{integrite.numeral}</div>
          </motion.div>

          {/* Card 02 — Transparence (ardoise, rows 1-2) */}
          <motion.div
            variants={cardVariant(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            style={{
              background: THEMES.ardoise.background,
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
              <div style={{ marginBottom: '1rem' }}>
                <NumeralRow value={transparence} theme={THEMES.ardoise} />
              </div>
              {transparence.tag && <Tag label={transparence.tag} />}
            </div>

            {/* Bas : icône + titre + texte + ligne */}
            <div>
              <div style={{ marginBottom: '24px' }}>
                <IconTile value={transparence} theme={THEMES.ardoise} />
              </div>
              <h3 className="font-serif mb-4" style={{ fontSize: '32px', fontWeight: 800, color: THEMES.ardoise.titleColor }}>
                {transparence.title}
              </h3>
              <p style={{ fontSize: '13px', color: THEMES.ardoise.bodyColor, lineHeight: 1.75, marginBottom: '32px' }}>
                {transparence.body}
              </p>
              <div style={{ width: '40px', height: '2px', background: 'var(--vert-vif)' }} />
            </div>
            <div aria-hidden="true" style={ghostStyle(THEMES.ardoise)}>{transparence.numeral}</div>
          </motion.div>

          {/* Card 03 — Confiance (fond clair) */}
          <motion.div
            variants={cardVariant(2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            style={{
              background: THEMES.clair.background,
              border: THEMES.clair.border,
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div className="mb-8">
              <NumeralRow value={confiance} theme={THEMES.clair} />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <IconTile value={confiance} theme={THEMES.clair} />
            </div>
            <h3 className="font-serif mb-4" style={{ fontSize: '28px', fontWeight: 800, color: THEMES.clair.titleColor }}>
              {confiance.title}
            </h3>
            <p style={{ fontSize: '13px', color: THEMES.clair.bodyColor, lineHeight: 1.75 }}>
              {confiance.body}
            </p>
            <div aria-hidden="true" style={ghostStyle(THEMES.clair)}>{confiance.numeral}</div>
          </motion.div>
        </div>

        {/* Card 04 — Sérénité pleine largeur */}
        <motion.div
          variants={cardVariant(3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            background: THEMES.vert.background,
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
              <div className="mb-6">
                <NumeralRow value={serenite} theme={THEMES.vert} />
              </div>
              <h3
                className="font-serif mb-4"
                style={{ fontSize: '36px', fontWeight: 800, color: THEMES.vert.titleColor, letterSpacing: '-1px' }}
              >
                {serenite.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'color-mix(in srgb, var(--ahadi-light) 75%, transparent)', lineHeight: 1.75 }}>
                {serenite.body}
              </p>
            </div>
            {serenite.closing && (
              <div className="text-right">
                <p
                  className="font-serif"
                  style={{ fontSize: '20px', fontWeight: 700, color: THEMES.vert.titleColor, marginBottom: '8px' }}
                >
                  {serenite.closing.headline}
                </p>
                <p style={{ fontSize: '13px', color: 'color-mix(in srgb, var(--ahadi-light) 55%, transparent)' }}>
                  {serenite.closing.sub}
                </p>
              </div>
            )}
          </div>
          <div aria-hidden="true" style={ghostStyle(THEMES.vert)}>{serenite.numeral}</div>
        </motion.div>
        </div>{/* fin bloc flottant */}
        </div>{/* fin hidden md:block desktop */}

        {/* Mobile — liste verticale simple, une carte pleine largeur par engagement */}
        <div className="md:hidden flex flex-col gap-4">
          {values.map((value, i) => {
            const theme = THEMES[value.theme]
            return (
              <motion.div
                key={value.numeral}
                variants={cardVariant(i)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                style={{
                  background: theme.background,
                  border: theme.border,
                  borderRadius: '20px',
                  padding: '28px',
                }}
              >
                <div className="mb-5">
                  <NumeralRow value={value} theme={theme} />
                </div>
                <div style={{ marginBottom: '18px' }}>
                  <IconTile value={value} theme={theme} size={44} />
                </div>
                {value.tag && (
                  <div style={{ marginBottom: '14px' }}>
                    <Tag label={value.tag} />
                  </div>
                )}
                <h3 className="font-serif mb-3" style={{ fontSize: '22px', fontWeight: 800, color: theme.titleColor }}>
                  {value.title}
                </h3>
                <p style={{ fontSize: '13px', color: theme.bodyColor, lineHeight: 1.75 }}>
                  {value.body}
                </p>
                {value.closing && (
                  <>
                    <p className="font-serif" style={{ fontSize: '17px', fontWeight: 700, color: theme.titleColor, marginTop: '16px' }}>
                      {value.closing.headline}
                    </p>
                    <p style={{ fontSize: '12px', color: 'color-mix(in srgb, var(--ahadi-light) 55%, transparent)', marginTop: '4px' }}>
                      {value.closing.sub}
                    </p>
                  </>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Closing bar */}
        <div
          className="flex flex-wrap items-center justify-between gap-6 mt-12"
          style={{ borderTop: '1px solid var(--bordure)', paddingTop: '2rem' }}
        >
          <p className="font-serif" style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', color: 'var(--noir)' }}>
            C&apos;est ce que nous vous{' '}
            <span style={{ color: 'var(--ahadi)' }}>offrons.</span>
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
                  style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ahadi)', flexShrink: 0 }}
                />
                <span style={{ fontSize: '12px', color: 'var(--gris-muted)' }}>{chip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
