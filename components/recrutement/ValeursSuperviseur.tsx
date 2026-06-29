const profileItems = [
  {
    title: "Regard indépendant",
    body: "L’œil droit, sans parti pris. Vous observez, vous constatez vous ne prenez pas position pour l’entrepreneur.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="12"
          cy="12"
          rx="8"
          ry="5.5"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="2.5"
          fill="#267253"
          fillOpacity="0.12"
          stroke="#267253"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="1" fill="#267253" />
      </svg>
    ),
  },
  {
    title: "Rigueur documentaire",
    body: "Chaque constat doit être écrit, daté, archivé. Vous maîtrisez le rapport écrit et savez présenter un suivi clair.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6Z"
          fill="#267253"
          fillOpacity="0.08"
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
        <path
          d="M8 13h8M8 17h5"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Intégrité sans compromis",
    body: "On ne vous achète pas. Ni par l’entrepreneur, ni par qui que ce soit. Votre parole vaut votre réputation.",
    icon: (
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
          fillOpacity="0.08"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 12l2.5 2.5 4-5"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Mobilité terrain",
    body: "Les projets sont en régions. Le fait de pouvoir se déplacer sur site est indispensible et constitutif du poste.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"
          fill="#267253"
          fillOpacity="0.08"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9" r="2.5" stroke="#267253" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Niveau Bac minimum",
    body: "Formation technique, BTP, agronomie, commerce ou expérience équivalente reconnue sur le terrain.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3L2 8l10 5 10-5-10-5Z"
          fill="#267253"
          fillOpacity="0.1"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M6 10.5v5c0 0 1.5 3 6 3s6-3 6-3v-5"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 8v5"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Sens du service",
    body: "Vous travaillez pour la paix d’esprit du client, pas pour vous mettre en avant. Le service prime sur l’ego.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 21C12 21 3 14 3 8.5a4.5 4.5 0 019-1.8A4.5 4.5 0 0121 8.5C21 14 12 21 12 21Z"
          fill="#267253"
          fillOpacity="0.1"
          stroke="#267253"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const offerPoints = [
  {
    title: "Mission rémunérée",
    body: "Honoraires définis par contrat de mission avant tout démarrage. Pas d’ambigüité, pas de surprise.",
  },
  {
    title: "Réseau professionnel",
    body: "Intégrer le réseau AHADI, c’est travailler avec des pairs sérieux et construire une réputation durable.",
  },
  {
    title: "Réputation protégée",
    body: "AHADI ne vous expose pas directement auprès des prestataires. Vous êtes un superviseur, pas un intermédiaire visible.",
  },
];

export default function ValeursSuperviseur() {
  return (
    <>
      <section className="px-6 py-20" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px bg-ahadi" />
              <span
                className="text-ahadi uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "2px",
                  fontWeight: 500,
                }}
              >
                Profil recherché
              </span>
            </div>
            <h2
              className="font-serif text-noir"
              style={{ fontSize: "clamp(22px, 3vw, 32px)", lineHeight: "1.3" }}
            >
              Ce que nous cherchons
              <br />
              chez nos superviseurs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {profileItems.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-bordure rounded-2xl p-6"
              >
                <div className="mb-4">{item.icon}</div>
                <h3
                  className="text-noir mb-2"
                  style={{ fontSize: "14px", fontWeight: 500 }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-gris"
                  style={{ fontSize: "13px", lineHeight: "1.75" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-6 py-20 border-t border-bordure"
        style={{ backgroundColor: "#F4F4F0" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px bg-ahadi" />
              <span
                className="text-ahadi uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "2px",
                  fontWeight: 500,
                }}
              >
                Ce que nous offrons
              </span>
            </div>
            <h2
              className="font-serif text-noir"
              style={{ fontSize: "clamp(22px, 3vw, 32px)", lineHeight: "1.3" }}
            >
              Un cadre clair.
              <br />
              Des missions honorables.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {offerPoints.map((point) => (
              <div key={point.title}>
                <div
                  className="w-8 mb-5"
                  style={{ height: "1.5px", backgroundColor: "#267253" }}
                />
                <h3
                  className="text-noir mb-3"
                  style={{ fontSize: "15px", fontWeight: 500 }}
                >
                  {point.title}
                </h3>
                <p
                  className="text-gris"
                  style={{ fontSize: "13px", lineHeight: "1.8" }}
                >
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
