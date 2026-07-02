import ScrollWatermark from '@/components/ScrollWatermark'

export default function Footer() {
  return (
    <footer>
      <div className="relative overflow-hidden border-t border-bordure px-6 py-10" style={{ backgroundColor: '#F4F4F0' }}>
        <ScrollWatermark tone="light" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="text-gris text-xs leading-relaxed mb-5 max-w-3xl">
            <span style={{ fontWeight: 500, color: '#1A1A18' }}>
              Mentions légales & conditions
            </span>{' '}
            AHADI Group SARLU, Société à Responsabilité Limitée Unipersonnelle immatriculée au RCCM
            de Conakry, Guinée. Capital social conforme au droit OHADA. AHADI Group agit
            exclusivement en qualité de prestataire de supervision et de conseil. En aucun cas AHADI
            Group ne gère, ne détient ni ne transfère des fonds pour le compte de ses clients.
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="/conditions-generales" className="text-gris-muted text-xs hover:text-noir transition-colors">
              Conditions générales de prestation
            </a>
            <a href="/politique-de-confidentialite" className="text-gris-muted text-xs hover:text-noir transition-colors">
              Politique de confidentialité
            </a>
            <a href="/mentions-legales" className="text-gris-muted text-xs hover:text-noir transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>

      {/* Pas de filigrane ici : le bandeau fait ~60px de haut, le texte
          AHADI/GROUP (min 6rem) y serait rogné à plus de 90 % */}
      <div className="relative overflow-hidden bg-noir px-6 py-5">
        <div className="relative z-10 max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <p style={{ fontSize: '11px', color: '#5A5A52' }}>
            © 2026 AHADI Group SARLU · Conakry, Guinée · Entreprise légalement constituée
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/nous-rejoindre"
              className="hover:underline"
              style={{ color: '#267253', fontSize: '12px' }}
            >
              Nous rejoindre
            </a>
            <p className="font-serif text-ahadi">
              La promesse tenue.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
