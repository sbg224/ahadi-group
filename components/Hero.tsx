export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-fond">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-6 h-px bg-ahadi" aria-hidden="true" />
          <span
            className="text-ahadi uppercase"
            style={{ fontSize: '11px', letterSpacing: '2px' }}
          >
            AHADI Group · Guinée
          </span>
        </div>

        <h1
          className="font-serif text-noir mb-12 max-w-3xl"
          style={{ fontSize: 'clamp(26px, 4vw, 42px)', lineHeight: '1.25' }}
        >
          <em>
            En Guinée, des milliers de projets échouent
            <br className="hidden md:block" /> chaque année.{' '}
            <span className="text-ahadi">Pas faute de moyens.</span>
            <br className="hidden md:block" /> Faute d&apos;un regard honnête sur le terrain.
          </em>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
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
            <p className="font-serif text-ahadi" style={{ fontSize: '16px', fontStyle: 'italic' }}>
              Là où vous ne pouvez pas être, nous y sommes.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="bg-ahadi text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Déposer un dossier
          </a>
          <a
            href="#services"
            className="border border-ahadi text-ahadi px-6 py-3 rounded-full text-sm font-medium hover:bg-ahadi-light transition-colors"
          >
            Nos services
          </a>
          <div className="flex flex-wrap items-center gap-5 mt-1 md:mt-0">
            {[
              'Aucune gestion de fonds',
              'Rapport signé à chaque mission',
              'Réponse sous 24h',
            ].map((chip) => (
              <div key={chip} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-ahadi" aria-hidden="true" />
                <span className="text-xs text-gris-muted">{chip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
