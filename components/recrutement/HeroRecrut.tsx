export default function HeroRecrut() {
  return (
    <section className="pt-32 pb-20 px-6" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-6 h-px bg-ahadi" />
          <span
            className="text-ahadi uppercase"
            style={{ fontSize: '11px', letterSpacing: '2px', fontWeight: 500 }}
          >
            AHADI Group · Recrutement
          </span>
        </div>

        <h1
          className="font-serif text-noir mb-6 max-w-2xl"
          style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontStyle: 'italic', lineHeight: '1.2' }}
        >
          Vous voulez faire partie<br />
          de ceux qui tiennent<br />
          leur promesse sur le terrain.
        </h1>

        <p
          className="text-gris mb-10 max-w-xl"
          style={{ fontSize: '14px', fontWeight: 300, lineHeight: '1.85' }}
        >
          AHADI Group recrute des superviseurs de projets indépendants en Guinée.
          Des hommes et des femmes de terrain, rigoureux, intègres,
          capables de représenter nos clients avec honneur.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          {[
            'Poste : Superviseur de projets',
            'Localisation : Guinée (Conakry et régions)',
          ].map((chip) => (
            <div key={chip} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-ahadi" />
              <span style={{ fontSize: '12px', color: '#6B6B62' }}>{chip}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
