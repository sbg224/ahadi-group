import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Mentions légales — AHADI Group',
}

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales">
      <div className="space-y-6">
        <div>
          <p><strong className="text-noir">Dénomination sociale :</strong> AHADI Group SARLU</p>
          <p><strong className="text-noir">Forme juridique :</strong> Société à Responsabilité Limitée Unipersonnelle</p>
          <p><strong className="text-noir">Siège social :</strong> Conakry, République de Guinée</p>
          <p><strong className="text-noir">Immatriculation :</strong> RCCM de Conakry</p>
          <p><strong className="text-noir">Capital social :</strong> Conforme au droit OHADA</p>
          <p><strong className="text-noir">Email de contact :</strong> contact@ahadi-group.com</p>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={{ fontSize: '16px', fontWeight: 500 }}>
            Hébergement
          </h2>
          <p>
            Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, USA
          </p>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={{ fontSize: '16px', fontWeight: 500 }}>
            Activité
          </h2>
          <p>
            AHADI Group agit exclusivement en qualité de prestataire de supervision et de conseil
            indépendant. En aucun cas AHADI Group ne gère, ne détient ni ne transfère des fonds
            pour le compte de ses clients.
          </p>
        </div>
      </div>
    </LegalLayout>
  )
}
