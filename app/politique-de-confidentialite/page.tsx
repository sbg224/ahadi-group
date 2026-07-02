import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — AHADI Group',
  description:
    'Comment AHADI Group collecte, utilise et protège vos données personnelles (formulaire de contact et candidatures).',
}

const H2_STYLE = { fontSize: '16px', fontWeight: 500 } as const

export default function PolitiqueConfidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité">
      <div className="space-y-6">
        <div>
          <p>
            Cette politique décrit comment AHADI Group SARLU collecte et traite les données
            personnelles des visiteurs du site ahadi-group.com, y compris les résidents de
            l&apos;Union européenne auxquels s&apos;applique le Règlement général sur la
            protection des données (RGPD).
          </p>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={H2_STYLE}>
            Responsable du traitement
          </h2>
          <p>
            AHADI Group SARLU, immatriculée au RCCM de Conakry, République de Guinée.
            <br />
            Contact : contact@ahadi-group.com
          </p>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={H2_STYLE}>
            Données collectées
          </h2>
          <p className="mb-3">
            <strong className="text-noir">Formulaire de dépôt de dossier :</strong> nom, email ou
            numéro WhatsApp, type de projet, description de votre situation.
          </p>
          <p>
            <strong className="text-noir">Formulaire de candidature :</strong> nom, email,
            téléphone, ville, poste visé, lettre de motivation et CV (fichier joint).
          </p>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={H2_STYLE}>
            Finalités et bases légales
          </h2>
          <p>
            Les données du formulaire de dépôt de dossier sont utilisées uniquement pour répondre
            à votre demande et évaluer votre projet (mesures précontractuelles prises à votre
            demande). Les données de candidature sont utilisées uniquement pour l&apos;examen de
            votre candidature (mesures précontractuelles). Vos données ne sont jamais vendues ni
            utilisées à des fins publicitaires.
          </p>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={H2_STYLE}>
            Destinataires et sous-traitants
          </h2>
          <p className="mb-3">
            Vos données sont accessibles uniquement à AHADI Group. Pour le fonctionnement du site,
            nous faisons appel aux sous-traitants techniques suivants :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-noir">Vercel Inc.</strong> (États-Unis) — hébergement du
              site.
            </li>
            <li>
              <strong className="text-noir">Resend Inc.</strong> (États-Unis) — acheminement des
              emails contenant les données des formulaires.
            </li>
            <li>
              <strong className="text-noir">Google LLC</strong> (États-Unis) — formulaire
              d&apos;évaluation complémentaire proposé aux candidats (Google Forms).
            </li>
          </ul>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={H2_STYLE}>
            Transferts hors de l&apos;Union européenne
          </h2>
          <p>
            Les sous-traitants listés ci-dessus sont établis aux États-Unis. Les transferts de
            données vers ces prestataires sont encadrés par des garanties appropriées au sens du
            RGPD (clauses contractuelles types de la Commission européenne et, le cas échéant,
            certification au Data Privacy Framework UE–États-Unis).
          </p>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={H2_STYLE}>
            Durées de conservation
          </h2>
          <p>
            Les données du formulaire de dépôt de dossier sont conservées pendant la durée du
            traitement de votre demande, puis au maximum 12 mois après le dernier échange en
            l&apos;absence de suite. Les candidatures (CV compris) sont conservées au maximum
            6 mois après réception si elles ne sont pas retenues. Toutes les données sont
            supprimées sur simple demande.
          </p>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={H2_STYLE}>
            Vos droits
          </h2>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
            d&apos;opposition, de limitation du traitement et de portabilité de vos données. Pour
            exercer ces droits : contact@ahadi-group.com. Si vous résidez dans l&apos;Union
            européenne, vous pouvez également introduire une réclamation auprès de votre autorité
            de contrôle (en France, la CNIL — cnil.fr).
          </p>
        </div>

        <hr className="border-bordure" />

        <div>
          <h2 className="text-noir mb-3" style={H2_STYLE}>
            Cookies et mesure d&apos;audience
          </h2>
          <p>
            Ce site n&apos;utilise aucun cookie de suivi, aucun traceur publicitaire et aucun
            outil de mesure d&apos;audience. Aucune bannière de consentement n&apos;est donc
            nécessaire.
          </p>
        </div>
      </div>
    </LegalLayout>
  )
}
