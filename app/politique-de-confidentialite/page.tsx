import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — AHADI Group',
}

export default function PolitiqueConfidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité">
      <div className="space-y-6">
        <div>
          <h2 className="text-noir mb-3" style={{ fontSize: '16px', fontWeight: 500 }}>
            Collecte des données
          </h2>
          <p>
            Les données collectées via le formulaire de contact (nom, email ou numéro WhatsApp,
            type de projet, description de la situation) sont utilisées uniquement pour répondre
            à votre demande.
          </p>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={{ fontSize: '16px', fontWeight: 500 }}>
            Utilisation
          </h2>
          <p>
            Vos données ne sont jamais vendues, partagées ou transmises à des tiers. Elles sont
            utilisées exclusivement par AHADI Group pour traiter votre dossier.
          </p>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={{ fontSize: '16px', fontWeight: 500 }}>
            Conservation
          </h2>
          <p>
            Vos données sont conservées le temps nécessaire au traitement de votre demande et
            supprimées sur simple demande.
          </p>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={{ fontSize: '16px', fontWeight: 500 }}>
            Vos droits
          </h2>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de
            vos données. Pour exercer ces droits : contact@ahadi-group.com
          </p>
        </div>

        <hr className="border-bordure" />

        <div>
          <p>
            <strong className="text-noir">Responsable du traitement :</strong> AHADI Group SARLU,
            Conakry, Guinée.
          </p>
        </div>
      </div>
    </LegalLayout>
  )
}
