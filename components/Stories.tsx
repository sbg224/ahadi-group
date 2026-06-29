const dotStyle = {
  width: 14,
  height: 14,
  borderRadius: '50%',
  backgroundColor: '#267253',
  border: '3px solid #FAFAF8',
  boxShadow: '0 0 0 2px #267253',
  flexShrink: 0,
}

export default function Stories() {
  return (
    <section id="histoire" className="py-20 px-6 bg-fond">
      <div className="max-w-6xl mx-auto">
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
          {/* Spine */}
          <div
            className="col-start-2 row-start-1 row-span-2 flex justify-center"
            aria-hidden="true"
          >
            <div className="relative w-px bg-[#D4E8DF] h-full">
              <div className="absolute top-6 left-1/2 -translate-x-1/2" style={dotStyle} />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2" style={dotStyle} />
            </div>
          </div>

          {/* Histoire 1 — gauche */}
          <article className="col-start-1 row-start-1 pb-16">
            <h3 className="text-noir mb-4" style={{ fontSize: '13px', fontWeight: 500 }}>
              La plantation d&apos;un ami
            </h3>
            <p className="text-gris text-sm leading-relaxed mb-5">
              Un ami avait investi ses économies dans une plantation en Guinée. La famille sur place
              devait gérer. Mais entre les obligations du quotidien et les imprévus, personne
              n&apos;était vraiment disponible. Personne ne vérifiait. Personne ne rendait de
              compte.
            </p>
            <p className="text-gris text-sm leading-relaxed mb-6">
              Quand il a pu revenir voir, il était trop tard. La plantation était perdue. Pas à
              cause d&apos;une catastrophe naturelle. À cause d&apos;un suivi qui n&apos;existait
              pas.
            </p>
            <blockquote
              className="bg-ahadi-light p-5 font-serif text-gris-muted leading-relaxed"
              style={{
                fontSize: '14px',
                borderRadius: '10px 0 10px 10px',
              }}
            >
              Ce n&apos;est pas l&apos;argent qu&apos;il a perdu qui fait le plus mal. C&apos;est
              de n&apos;avoir jamais su ce qui se passait vraiment.
            </blockquote>
          </article>

          {/* Histoire 2 — droite */}
          <article className="col-start-3 row-start-2 pt-16">
            <h3 className="text-noir mb-4" style={{ fontSize: '13px', fontWeight: 500 }}>
              La maison de mon père
            </h3>
            <p className="text-gris text-sm leading-relaxed mb-5">
              Mon père a fait construire sa maison depuis l&apos;étranger. Il payait, faisait
              confiance, attendait les nouvelles. Ce qu&apos;il recevait comme information et ce qui
              se passait réellement sur le chantier, c&apos;était deux réalités différentes.
            </p>
            <p className="text-gris text-sm leading-relaxed mb-6">
              Au final, il a dépensé deux fois ce qui était prévu. Et aujourd&apos;hui, cette maison
              doit être reconstruite. Pas parce qu&apos;il n&apos;avait pas les moyens. Parce
              qu&apos;il n&apos;avait personne pour veiller.
            </p>
            <blockquote
              className="bg-ahadi-light p-5 font-serif text-gris-muted leading-relaxed"
              style={{
                fontSize: '14px',
                borderRadius: '0 10px 10px 10px',
              }}
            >
              C&apos;est pour cette maison-là, et pour toutes celles qui suivront,
              qu&apos;AHADI Group existe.
            </blockquote>
          </article>
        </div>

        {/* Mobile — colonne unique */}
        <div className="md:hidden flex flex-col gap-12">
          <article>
            <div className="flex items-center gap-3 mb-4">
              <div style={dotStyle} />
              <h3 className="text-noir" style={{ fontSize: '13px', fontWeight: 500 }}>
                La plantation d&apos;un ami
              </h3>
            </div>
            <p className="text-gris text-sm leading-relaxed mb-5">
              Un ami avait investi ses économies dans une plantation en Guinée. La famille sur place
              devait gérer. Mais entre les obligations du quotidien et les imprévus, personne
              n&apos;était vraiment disponible. Personne ne vérifiait. Personne ne rendait de
              compte.
            </p>
            <p className="text-gris text-sm leading-relaxed mb-6">
              Quand il a pu revenir voir, il était trop tard. La plantation était perdue. Pas à
              cause d&apos;une catastrophe naturelle. À cause d&apos;un suivi qui n&apos;existait
              pas.
            </p>
            <blockquote
              className="bg-ahadi-light p-5 font-serif text-gris-muted leading-relaxed"
              style={{
                fontSize: '14px',
                borderRadius: '10px 0 10px 10px',
              }}
            >
              Ce n&apos;est pas l&apos;argent qu&apos;il a perdu qui fait le plus mal. C&apos;est
              de n&apos;avoir jamais su ce qui se passait vraiment.
            </blockquote>
          </article>

          <article>
            <div className="flex items-center gap-3 mb-4">
              <div style={dotStyle} />
              <h3 className="text-noir" style={{ fontSize: '13px', fontWeight: 500 }}>
                La maison de mon père
              </h3>
            </div>
            <p className="text-gris text-sm leading-relaxed mb-5">
              Mon père a fait construire sa maison depuis l&apos;étranger. Il payait, faisait
              confiance, attendait les nouvelles. Ce qu&apos;il recevait comme information et ce qui
              se passait réellement sur le chantier, c&apos;était deux réalités différentes.
            </p>
            <p className="text-gris text-sm leading-relaxed mb-6">
              Au final, il a dépensé deux fois ce qui était prévu. Et aujourd&apos;hui, cette maison
              doit être reconstruite. Pas parce qu&apos;il n&apos;avait pas les moyens. Parce
              qu&apos;il n&apos;avait personne pour veiller.
            </p>
            <blockquote
              className="bg-ahadi-light p-5 font-serif text-gris-muted leading-relaxed"
              style={{
                fontSize: '14px',
                borderRadius: '0 10px 10px 10px',
              }}
            >
              C&apos;est pour cette maison-là, et pour toutes celles qui suivront,
              qu&apos;AHADI Group existe.
            </blockquote>
          </article>
        </div>
      </div>
    </section>
  )
}
