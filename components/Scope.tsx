'use client'

import { motion } from 'framer-motion'

const domains = [
  {
    title: 'Construction & rénovation',
    description: 'Supervision de chantier, contrôle qualité, validation des étapes clés',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 22V12L12 5l7 7v10H5Z"
          fill="#267253"
          fillOpacity="0.08"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 13L12 3l10 10"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 22v-7h4v7"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="6" y="13" width="2.5" height="2.5" rx="0.4" stroke="#267253" strokeWidth="1.2" />
        <rect x="15.5" y="13" width="2.5" height="2.5" rx="0.4" stroke="#267253" strokeWidth="1.2" />
        <path d="M2 22h20" stroke="#267253" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      </svg>
    ),
  },
  {
    title: 'Plantation & agriculture',
    description: 'Audit de plantation, suivi de production, vérification terrain régulière',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 19h16" stroke="#267253" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
        <path d="M12 19V10" stroke="#267253" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M12 16 Q7 13 7 8 Q10 8 12 16Z"
          fill="#267253"
          fillOpacity="0.18"
          stroke="#267253"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M12 12 Q17 9 17 4 Q14 4 12 12Z"
          fill="#267253"
          fillOpacity="0.18"
          stroke="#267253"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M12 19c-1.5 0-2.5 1-2.5 2.5M12 19c1.5 0 2.5 1 2.5 2.5"
          stroke="#267253"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    title: 'Ouverture de commerce',
    description: "Accompagnement complet du local au premier jour d'exploitation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="2"
          y="11"
          width="20"
          height="11"
          rx="1"
          fill="#267253"
          fillOpacity="0.07"
          stroke="#267253"
          strokeWidth="1.5"
        />
        <path
          d="M2 11L5 4h14l3 7"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="3.5" y="13" width="4.5" height="4" rx="0.5" stroke="#267253" strokeWidth="1.2" />
        <rect x="16" y="13" width="4.5" height="4" rx="0.5" stroke="#267253" strokeWidth="1.2" />
        <path
          d="M10.5 22v-6h3v6"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="13" cy="19" r="0.65" fill="#267253" />
      </svg>
    ),
  },
  {
    title: 'Démarches administratives',
    description: 'Achat de terrain, permis, enregistrements, suivi et représentation',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6Z"
          fill="#267253"
          fillOpacity="0.07"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M14 3v6h6"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 13h8M8 17h4.5" stroke="#267253" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="16.5" cy="17" r="2.8" stroke="#267253" strokeWidth="1.3" />
        <path
          d="M15.2 17l1.1 1.1 1.9-2"
          stroke="#267253"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Audit de projet',
    description: 'Diagnostic à tout stade, où en est réellement votre projet',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle
          cx="10.5"
          cy="10.5"
          r="6.5"
          fill="#267253"
          fillOpacity="0.07"
          stroke="#267253"
          strokeWidth="1.5"
        />
        <path d="M15.5 15.5L21 21" stroke="#267253" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 12.5V11" stroke="#267253" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M10.5 12.5V8.5" stroke="#267253" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M13 12.5V10" stroke="#267253" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 12.5h7" stroke="#267253" strokeWidth="1.1" strokeLinecap="round" opacity="0.45" />
      </svg>
    ),
  },
  {
    title: 'Gestion clé en main',
    description: "Vous définissez l'objectif. Nous pilotons tout jusqu'à la livraison.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle
          cx="9"
          cy="9"
          r="5"
          fill="#267253"
          fillOpacity="0.08"
          stroke="#267253"
          strokeWidth="1.5"
        />
        <path
          d="M6.5 9l2 2 3.5-4"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M13.5 12.5L20 19" stroke="#267253" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 17l-2 2" stroke="#267253" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.8 14.8l-1.5 1.5" stroke="#267253" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Scope() {
  return (
    <section id="services" className="py-20 px-6" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div
            className="uppercase text-gris-leger mb-3"
            style={{ fontSize: '10px', letterSpacing: '2px' }}
          >
            Nos domaines d&apos;intervention
          </div>
          <h2
            className="font-serif text-noir mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
          >
            Un projet, quel qu&apos;il soit.
          </h2>
          <p className="text-gris text-sm leading-relaxed">
            Partout où vous avez besoin d&apos;un regard indépendant et fiable sur le terrain en
            Guinée, AHADI est là.
          </p>
        </div>

        <div className="border border-bordure rounded-2xl overflow-hidden bg-fond">
          <div className="grid md:grid-cols-3">
            {domains.map((domain, i) => {
              const col = i % 3
              const row = Math.floor(i / 3)
              const isLastCol = col === 2
              const isLastRow = row === Math.floor((domains.length - 1) / 3)
              const isLastItem = i === domains.length - 1

              const classes = ['p-8', 'border-bordure']
              if (!isLastItem) classes.push('border-b')
              if (!isLastCol) classes.push('md:border-r')
              if (!isLastRow) classes.push('md:border-b')
              if (isLastRow) classes.push('md:border-b-0')

              return (
                <motion.div
                  key={domain.title}
                  className={classes.join(' ')}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                  }}
                >
                  <div className="w-12 h-12 bg-ahadi-light rounded-[14px] flex items-center justify-center mb-4">
                    {domain.icon}
                  </div>
                  <h3 className="text-noir mb-2" style={{ fontSize: '13px', fontWeight: 500 }}>
                    {domain.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ fontSize: '12px', color: '#8B8B82', lineHeight: '1.6' }}
                  >
                    {domain.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
