import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Conditions générales de prestation — AHADI Group',
}

export default function ConditionsGenerales() {
  return (
    <LegalLayout title="Conditions générales de prestation">
      <div className="space-y-6">
        <div>
          <h2 className="text-noir mb-3" style={{ fontSize: '16px', fontWeight: 500 }}>
            1. Objet
          </h2>
          <p>
            AHADI Group fournit des prestations de supervision, d&apos;audit et
            d&apos;accompagnement de projets en Guinée. AHADI Group n&apos;intervient pas en
            qualité de maître d&apos;œuvre, d&apos;entrepreneur ni de gestionnaire de fonds.
          </p>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={{ fontSize: '16px', fontWeight: 500 }}>
            2. Indépendance
          </h2>
          <p>
            AHADI Group est un intermédiaire indépendant. Nos superviseurs n&apos;ont aucun lien
            commercial avec les prestataires, entrepreneurs ou fournisseurs intervenant sur les
            projets suivis.
          </p>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={{ fontSize: '16px', fontWeight: 500 }}>
            3. Prestations
          </h2>
          <p>
            Les prestations sont définies dans un contrat de mission signé entre AHADI Group et
            le client avant tout démarrage. Toute mission donne lieu à un rapport écrit remis
            au client.
          </p>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={{ fontSize: '16px', fontWeight: 500 }}>
            4. Responsabilité
          </h2>
          <p>
            AHADI Group ne peut être tenu responsable des décisions prises par les entrepreneurs
            ou prestataires tiers intervenant sur les projets. Notre responsabilité est limitée
            à la qualité des rapports et du suivi fournis.
          </p>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={{ fontSize: '16px', fontWeight: 500 }}>
            5. Paiement
          </h2>
          <p>
            Les conditions de paiement sont précisées dans le contrat de mission. AHADI Group
            ne perçoit aucun fonds destiné aux prestataires du projet client.
          </p>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={{ fontSize: '16px', fontWeight: 500 }}>
            6. Droit applicable
          </h2>
          <p>
            Les présentes conditions sont régies par le droit guinéen et le droit OHADA.
          </p>
        </div>
      </div>
    </LegalLayout>
  )
}
