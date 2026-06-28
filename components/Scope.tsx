const domains = [
  {
    title: 'Construction & rénovation',
    description: 'Supervision de chantier, contrôle qualité, validation des étapes clés',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="10" width="18" height="11" rx="1.5" stroke="#267253" strokeWidth="1.5" />
        <path
          d="M1 10.5L12 3l11 7.5"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="9" y="14" width="6" height="7" rx="1" stroke="#267253" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Plantation & agriculture',
    description: 'Audit de plantation, suivi de production, vérification terrain régulière',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21V11" stroke="#267253" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M12 11C12 11 7 9 7 4c0 0 3-1 5 3 2-4 5-3 5-3 0 5-5 7-5 7Z"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M8 21h8" stroke="#267253" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Ouverture de commerce",
    description: "Accompagnement complet du local au premier jour d'exploitation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 9h18l-1.5 9a2 2 0 0 1-2 1.5H6.5a2 2 0 0 1-2-1.5L3 9Z"
          stroke="#267253"
          strokeWidth="1.5"
        />
        <path
          d="M3 9l2-5h14l2 5"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 14h6" stroke="#267253" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Démarches administratives',
    description: 'Achat de terrain, permis, enregistrements, suivi et représentation',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="2" stroke="#267253" strokeWidth="1.5" />
        <path
          d="M8 8h8M8 12h8M8 16h5"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Audit de projet',
    description: 'Diagnostic à tout stade, où en est réellement votre projet',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="#267253" strokeWidth="1.5" />
        <path d="M16.5 16.5L21 21" stroke="#267253" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M11 8v3l2 2"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Gestion clé en main',
    description: "Vous définissez l'objectif. Nous pilotons tout jusqu'à la livraison.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="8.5" cy="8.5" r="4.5" stroke="#267253" strokeWidth="1.5" />
        <path
          d="M12 12l8 8M17 17l-2 2"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M7 8.5h3" stroke="#267253" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Scope() {
  return (
    <section id="services" className="py-20 px-6 bg-fond">
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
            style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontStyle: 'italic' }}
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
                <div key={domain.title} className={classes.join(' ')}>
                  <div className="w-12 h-12 bg-ahadi-light rounded-[14px] flex items-center justify-center mb-4">
                    {domain.icon}
                  </div>
                  <h3
                    className="text-noir mb-2"
                    style={{ fontSize: '13px', fontWeight: 500 }}
                  >
                    {domain.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ fontSize: '12px', color: '#8B8B82', lineHeight: '1.6' }}
                  >
                    {domain.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
