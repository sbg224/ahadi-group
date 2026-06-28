export default function Footer() {
  return (
    <footer>
      <div className="border-t border-bordure px-6 py-10" style={{ backgroundColor: '#F4F4F0' }}>
        <div className="max-w-6xl mx-auto">
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
            {[
              'Conditions générales de prestation',
              'Politique de confidentialité',
              'Mentions légales',
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gris-muted text-xs hover:text-noir transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-noir px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <p style={{ fontSize: '11px', color: '#5A5A52' }}>
            © 2026 AHADI Group SARLU · Conakry, Guinée · Entreprise légalement constituée
          </p>
          <p className="font-serif text-ahadi" style={{ fontStyle: 'italic' }}>
            La promesse tenue.
          </p>
        </div>
      </div>
    </footer>
  )
}
