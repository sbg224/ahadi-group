'use client'

import { useState } from 'react'

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSc5_p10nRmaWoFkMT_PATEguNg-qDQHRAsR9w24PFFA9GzOSA/viewform'

const postes = [
  'Superviseur de chantier BTP',
  'Superviseur de plantation / agriculture',
  'Superviseur commercial',
  'Superviseur administratif',
]

export default function FormulaireCandidat() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [ville, setVille] = useState('')
  const [poste, setPoste] = useState('')
  const [motivation, setMotivation] = useState('')
  const [cv, setCv] = useState<File | null>(null)

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const fd = new FormData()
    fd.append('nom', nom)
    fd.append('email', email)
    fd.append('telephone', telephone)
    fd.append('ville', ville)
    fd.append('poste', poste)
    fd.append('motivation', motivation)
    if (cv) fd.append('cv', cv)

    const res = await fetch('/api/candidature', { method: 'POST', body: fd })
    const json = await res.json()

    setLoading(false)
    if (!res.ok || json.error) {
      setError(json.error ?? 'Une erreur est survenue. Veuillez réessayer.')
    } else {
      setSuccess(true)
    }
  }

  const inputClass =
    'w-full border border-bordure rounded-xl px-4 py-3 text-sm text-noir placeholder:text-gris-leger focus:outline-none focus:border-ahadi transition-colors'

  return (
    <section id="candidature" className="px-6 py-20 bg-fond">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — contexte */}
          <div className="pt-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px bg-ahadi" />
              <span
                className="text-ahadi uppercase"
                style={{ fontSize: '11px', letterSpacing: '2px', fontWeight: 500 }}
              >
                Candidature
              </span>
            </div>
            <h2
              className="font-serif text-noir mb-6"
              style={{ fontSize: 'clamp(22px, 3vw, 32px)', lineHeight: '1.3' }}
            >
              Postulez en ligne.
              <br />
              <em>Directement.</em>
            </h2>

            <div className="mb-8">
              <p
                className="text-gris mb-5"
                style={{ fontSize: '13px', lineHeight: '1.85', fontWeight: 400 }}
              >
                Ce que nous lisons en premier&nbsp;:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'La sincérité de votre motivation',
                  "Votre rapport à l'intégrité",
                  'Votre capacité à vous exprimer clairement',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div
                      className="mt-1.5 shrink-0 rounded-full bg-ahadi"
                      style={{ width: '5px', height: '5px' }}
                    />
                    <span className="text-gris" style={{ fontSize: '13px', lineHeight: '1.7' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-gris-muted" style={{ fontSize: '12px', lineHeight: '1.8' }}>
                Un CV parfait ne suffit pas.
                <br />
                Une lettre authentique fait la différence.
              </p>
            </div>

            <blockquote
              className="border-l-2 border-ahadi pl-5 py-1"
              style={{ borderColor: '#267253' }}
            >
              <p
                className="font-serif text-gris"
                style={{ fontSize: '14px', fontStyle: 'italic', lineHeight: '1.7' }}
              >
                &ldquo;Nous ne cherchons pas des diplômes.
                Nous cherchons des hommes et des femmes
                qui tiennent leur parole.&rdquo;
              </p>
              <footer
                className="mt-2 text-gris-leger"
                style={{ fontSize: '11px', letterSpacing: '0.5px' }}
              >
                — AHADI Group
              </footer>
            </blockquote>
          </div>

          {/* Right — form card */}
          <div className="rounded-2xl overflow-hidden border border-bordure shadow-sm">
            <div className="px-8 py-6" style={{ backgroundColor: '#267253' }}>
              <h3
                className="font-serif text-white"
                style={{ fontSize: '20px', fontStyle: 'italic' }}
              >
                Votre candidature
              </h3>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>
                Nous vous répondons sous 48h
              </p>
            </div>

            <div className="bg-white p-8">
              {success ? (
                <div
                  className="text-center"
                  style={{
                    backgroundColor: '#F0F7F4',
                    color: '#1A4A35',
                    padding: '2rem',
                    borderRadius: '12px',
                  }}
                >
                  <svg
                    className="mx-auto mb-4"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <circle cx="20" cy="20" r="20" fill="#267253" fillOpacity="0.12" />
                    <path
                      d="M12 20l6 6 10-12"
                      stroke="#267253"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p
                    className="font-serif"
                    style={{ fontSize: '18px', fontStyle: 'italic', marginBottom: '12px' }}
                  >
                    Candidature envoyée.
                  </p>
                  <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#1A4A35' }}>
                    Vérifiez votre email — vous avez reçu un formulaire
                    d&apos;évaluation complémentaire à remplir dans les 48h.
                  </p>
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-5 px-5 py-2.5 rounded-xl text-white text-sm font-medium"
                    style={{ backgroundColor: '#267253' }}
                  >
                    Accéder au formulaire →
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gris-muted mb-1.5">Nom complet</label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="Mamadou Diallo"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gris-muted mb-1.5">Ville</label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="Conakry"
                        value={ville}
                        onChange={(e) => setVille(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gris-muted mb-1.5">Email</label>
                    <input
                      type="email"
                      className={inputClass}
                      placeholder="vous@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gris-muted mb-1.5">Téléphone</label>
                    <input
                      type="tel"
                      className={inputClass}
                      placeholder="+224 6xx xx xx xx"
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gris-muted mb-1.5">Poste visé</label>
                    <select
                      className={inputClass}
                      value={poste}
                      onChange={(e) => setPoste(e.target.value)}
                      required
                      style={{ appearance: 'none', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%239B9B90' strokeWidth='1.5' fill='none' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
                    >
                      <option value="" disabled>
                        Choisir un poste...
                      </option>
                      {postes.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gris-muted mb-1.5">
                      Lettre de motivation
                    </label>
                    <textarea
                      className={inputClass}
                      placeholder="Expliquez pourquoi vous souhaitez rejoindre AHADI Group, votre rapport à l'intégrité et ce qui vous qualifie pour ce rôle..."
                      value={motivation}
                      onChange={(e) => setMotivation(e.target.value)}
                      required
                      style={{ minHeight: '140px', resize: 'vertical' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gris-muted mb-1.5">CV</label>
                    <label className="flex items-center gap-4 border border-dashed border-bordure-forte rounded-xl p-4 cursor-pointer hover:border-ahadi transition-colors">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="shrink-0"
                        aria-hidden="true"
                      >
                        <path
                          d="M10 3v10M6 7l4-4 4 4"
                          stroke="#267253"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 15v1a2 2 0 002 2h10a2 2 0 002-2v-1"
                          stroke="#9B9B90"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm font-medium text-noir truncate"
                          style={{ fontSize: '13px' }}
                        >
                          {cv ? cv.name : 'Ajouter votre CV'}
                        </p>
                        <p style={{ fontSize: '11px', color: '#9B9B90', marginTop: '2px' }}>
                          .pdf, .doc, .docx
                        </p>
                      </div>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="sr-only"
                        onChange={(e) => setCv(e.target.files?.[0] ?? null)}
                        required
                      />
                    </label>
                  </div>

                  {error && (
                    <p
                      className="rounded-xl px-4 py-3 text-sm"
                      style={{ backgroundColor: '#FEF2F2', color: '#991B1B' }}
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl text-white font-medium transition-opacity disabled:opacity-60"
                    style={{ backgroundColor: '#267253', fontSize: '14px' }}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <circle
                            cx="8"
                            cy="8"
                            r="6"
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="2"
                          />
                          <path
                            d="M8 2a6 6 0 016 6"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        Envoi en cours…
                      </span>
                    ) : (
                      'Envoyer ma candidature'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
