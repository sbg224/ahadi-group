export default function Legit() {
  return (
    <div className="bg-ahadi-light border-b border-ahadi-border">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-start gap-4">
        <span className="pulse-wrap shrink-0 mt-0.5">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2Z"
            fill="#267253"
            fillOpacity="0.15"
          />
          <path
            d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2Z"
            stroke="#267253"
            strokeWidth="1.5"
          />
          <path
            d="M8.5 12l2.5 2.5 4-5"
            stroke="#267253"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        </span>
        <p className="text-sm text-gris leading-relaxed">
          <span style={{ fontWeight: 500, color: '#1A1A18' }}>
            Entreprise légalement constituée en Guinée.
          </span>{' '}
          SARLU enregistrée, immatriculée au RCCM de Conakry. Vous traitez avec une structure
          officielle, identifiable et responsable.
        </p>
      </div>
    </div>
  )
}
