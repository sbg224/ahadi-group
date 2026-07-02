import { Eye, FileText, ShieldCheck, MapPin, GraduationCap, Heart } from 'lucide-react'
import SealBadge from '@/components/icons/SealBadge'

const profileIconProps = { size: 28, color: 'white', strokeWidth: 1.6, 'aria-hidden': true } as const

const profileItems = [
  {
    title: "Regard indépendant",
    body: "L’œil droit, sans parti pris. Vous observez, vous constatez, vous ne prenez pas position pour l’entrepreneur.",
    icon: <Eye {...profileIconProps} />,
  },
  {
    title: "Rigueur documentaire",
    body: "Chaque constat doit être écrit, daté, archivé. Vous maîtrisez le rapport écrit et savez présenter un suivi clair.",
    icon: <FileText {...profileIconProps} />,
  },
  {
    title: "Intégrité sans compromis",
    body: "On ne vous achète pas. Ni par l’entrepreneur, ni par qui que ce soit. Votre parole vaut votre réputation.",
    icon: <ShieldCheck {...profileIconProps} />,
  },
  {
    title: "Mobilité terrain",
    body: "Les projets sont en régions. Le fait de pouvoir se déplacer sur site est indispensable et constitutif du poste.",
    icon: <MapPin {...profileIconProps} />,
  },
  {
    title: "Niveau Bac minimum",
    body: "Formation technique, BTP, agronomie, commerce ou expérience équivalente reconnue sur le terrain.",
    icon: <GraduationCap {...profileIconProps} />,
  },
  {
    title: "Sens du service",
    body: "Vous travaillez pour la paix d’esprit du client, pas pour vous mettre en avant. Le service prime sur l’ego.",
    icon: <Heart {...profileIconProps} />,
  },
];

const offerPoints = [
  {
    title: "Mission rémunérée",
    body: "Honoraires définis par contrat de mission avant tout démarrage. Pas d’ambiguïté, pas de surprise.",
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
                <SealBadge icon={item.icon} size={64} className="mb-4" />
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
