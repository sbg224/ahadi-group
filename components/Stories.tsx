'use client'

import { motion } from 'framer-motion'
import TimelineDraw from '@/components/animations/TimelineDraw'
import ScrollWatermark from '@/components/ScrollWatermark'

const dotStyle = {
  width: 14,
  height: 14,
  borderRadius: '50%',
  backgroundColor: 'var(--ahadi)',
  border: '3px solid var(--fond)',
  boxShadow: '0 0 0 2px var(--ahadi)',
  flexShrink: 0,
}

// Source unique des deux histoires — consommée par les rendus desktop
// (timeline 3 colonnes) et mobile (colonne simple), pour qu'une
// modification de texte ne se fasse qu'à un seul endroit.
type Story = {
  title: string
  paragraphs: string[]
  quote: string
  quoteRadius: string
}

const stories: Story[] = [
  {
    title: "La plantation d'un ami",
    paragraphs: [
      "Un ami avait investi ses économies dans une plantation en Guinée. La famille sur place devait gérer. Mais entre les obligations du quotidien et les imprévus, personne n'était vraiment disponible. Personne ne vérifiait. Personne ne rendait de compte.",
      "Quand il a pu revenir voir, il était trop tard. La plantation était perdue. Pas à cause d'une catastrophe naturelle. À cause d'un suivi qui n'existait pas.",
    ],
    quote:
      "Ce n'est pas l'argent qu'il a perdu qui fait le plus mal. C'est de n'avoir jamais su ce qui se passait vraiment.",
    quoteRadius: '10px 0 10px 10px',
  },
  {
    title: 'La maison de mon père',
    paragraphs: [
      "Mon père a fait construire sa maison depuis l'étranger. Il payait, faisait confiance, attendait les nouvelles. Ce qu'il recevait comme information et ce qui se passait réellement sur le chantier, c'était deux réalités différentes.",
      "Au final, il a dépensé deux fois ce qui était prévu. Et aujourd'hui, cette maison doit être reconstruite. Pas parce qu'il n'avait pas les moyens. Parce qu'il n'avait personne pour veiller.",
    ],
    quote:
      "C'est pour cette maison-là, et pour toutes celles qui suivront, qu'AHADI Group existe.",
    quoteRadius: '0 10px 10px 10px',
  },
]

function StoryBody({ story }: { story: Story }) {
  return (
    <>
      {story.paragraphs.map((paragraph, i) => (
        <p
          key={i}
          className={`text-gris text-sm leading-relaxed ${
            i === story.paragraphs.length - 1 ? 'mb-6' : 'mb-5'
          }`}
        >
          {paragraph}
        </p>
      ))}
      <blockquote
        className="bg-ahadi-light p-5 font-serif text-gris-muted leading-relaxed"
        style={{ fontSize: '14px', borderRadius: story.quoteRadius }}
      >
        {story.quote}
      </blockquote>
    </>
  )
}

export default function Stories() {
  return (
    <section
      id="histoire"
      className="relative overflow-hidden py-20 md:py-36 px-6"
      style={{ background: 'linear-gradient(to bottom, var(--ahadi-light) 0%, #FFFFFF 60%, #FFFFFF 100%)' }}
    >
      <ScrollWatermark tone="light" />
      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-2xl mb-16">
          <div
            className="uppercase text-gris-leger mb-3"
            style={{ fontSize: '10px', letterSpacing: '2px' }}
          >
            Pourquoi AHADI existe
          </div>
          <h2
            className="font-serif text-noir mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
          >
            Deux histoires vraies. Un seul constat.
          </h2>
          <p className="text-gris text-sm leading-relaxed">
            AHADI n&apos;est pas né d&apos;une idée de bureau. Il est né de projets sabotés par
            l&apos;absence d&apos;un regard indépendant sur le terrain.
          </p>
        </div>

        {/* Desktop timeline — 3-column grid */}
        <div
          className="hidden md:grid"
          style={{ gridTemplateColumns: '1fr 40px 1fr', columnGap: '32px' }}
        >
          {/* Spine — progressive draw */}
          <TimelineDraw />

          {stories.map((story, i) => (
            <article
              key={story.title}
              className={i === 0 ? 'col-start-1 row-start-1 pb-16' : 'col-start-3 row-start-2 pt-16'}
            >
              <h3 className="text-noir mb-4" style={{ fontSize: '13px', fontWeight: 500 }}>
                {story.title}
              </h3>
              <StoryBody story={story} />
            </article>
          ))}
        </div>

        {/* Mobile — colonne unique */}
        <div className="md:hidden flex flex-col gap-12">
          {stories.map((story) => (
            <article key={story.title}>
              <div className="flex items-center gap-3 mb-4">
                <div style={dotStyle} />
                <h3 className="text-noir" style={{ fontSize: '13px', fontWeight: 500 }}>
                  {story.title}
                </h3>
              </div>
              <StoryBody story={story} />
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
