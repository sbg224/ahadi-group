'use client'

import { useState } from 'react'
import { WHATSAPP_URL } from '@/lib/constants'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const fd = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: fd.get('nom'),
          contact: fd.get('contact'),
          typeProjet: fd.get('type_projet'),
          situation: fd.get('situation'),
        }),
      })

      if (res.ok) {
        setSuccess(true)
        form.reset()
      } else {
        setError('Une erreur est survenue. Veuillez réessayer.')
      }
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-fond">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Informations */}
          <div>
            <div
              className="uppercase text-gris-leger mb-3"
              style={{ fontSize: '10px', letterSpacing: '2px' }}
            >
              Nous contacter
            </div>
            <h2
              className="font-serif text-noir mb-5"
              style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontStyle: 'italic' }}
            >
              Parlons de votre projet.
            </h2>
            <p className="text-gris text-sm leading-relaxed mb-10">
              Décrivez-nous votre situation en quelques lignes. Construction, plantation, commerce,
              démarche administrative, nous vous répondons sous 24h.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-ahadi-light flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#267253" strokeWidth="1.5" />
                    <path d="M2 8l10 6 10-6" stroke="#267253" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-gris text-sm">contact@ahadi-group.com</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-ahadi-light flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.07-1.34C8.45 21.51 10.18 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Z"
                      stroke="#267253"
                      strokeWidth="1.5"
                    />
                    <path d="M8.5 10.5c.5 1 1.5 3 4 4" stroke="#267253" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gris text-sm hover:text-noir transition-colors"
                >
                  WhatsApp disponible
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-ahadi-light flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"
                      stroke="#267253"
                      strokeWidth="1.5"
                    />
                    <circle cx="12" cy="9" r="2.5" stroke="#267253" strokeWidth="1.5" />
                  </svg>
                </div>
                <span className="text-gris text-sm">Conakry, Guinée · Diaspora France &amp; Europe</span>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="rounded-2xl overflow-hidden border border-bordure shadow-sm">
            <div className="bg-ahadi px-8 py-6">
              <h3
                className="font-serif text-white mb-1"
                style={{ fontSize: '20px', fontStyle: 'italic' }}
              >
                Déposez votre dossier
              </h3>
              <p className="text-white/70 text-xs">Nous vous répondons sous 24h</p>
            </div>

            <div className="bg-white p-8">
              {success ? (
                <div
                  className="flex flex-col items-center justify-center text-center py-12 px-4 rounded-xl"
                  style={{ minHeight: '360px', backgroundColor: '#F0F7F4' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                    style={{ backgroundColor: '#C8DDD6' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M5 12l5 5 9-10"
                        stroke="#1A4A35"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p
                    className="font-serif mb-2"
                    style={{ fontSize: '18px', fontStyle: 'italic', color: '#1A4A35' }}
                  >
                    Votre demande a bien été envoyée.
                  </p>
                  <p style={{ fontSize: '13px', color: '#1A4A35', opacity: 0.8 }}>
                    Nous vous répondons sous 24h.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <div>
                    <label htmlFor="nom" className="text-xs text-gris-muted mb-1.5 block">
                      Nom complet
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-[10px] text-sm text-noir outline-none focus:ring-1 focus:ring-ahadi"
                      style={{ backgroundColor: '#F7F7F5' }}
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact" className="text-xs text-gris-muted mb-1.5 block">
                      Email ou WhatsApp
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-[10px] text-sm text-noir outline-none focus:ring-1 focus:ring-ahadi"
                      style={{ backgroundColor: '#F7F7F5' }}
                      placeholder="email@exemple.com ou +33..."
                    />
                  </div>

                  <div>
                    <label htmlFor="type_projet" className="text-xs text-gris-muted mb-1.5 block">
                      Type de projet
                    </label>
                    <select
                      id="type_projet"
                      name="type_projet"
                      required
                      className="w-full px-4 py-3 rounded-[10px] text-sm text-noir outline-none focus:ring-1 focus:ring-ahadi appearance-none"
                      style={{ backgroundColor: '#F7F7F5' }}
                    >
                      <option value="">Choisir...</option>
                      <option>Construction / Rénovation</option>
                      <option>Plantation / Agriculture</option>
                      <option>Ouverture de commerce</option>
                      <option>Démarches administratives</option>
                      <option>Audit de projet</option>
                      <option>Gestion clé en main</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="situation" className="text-xs text-gris-muted mb-1.5 block">
                      Votre situation
                    </label>
                    <textarea
                      id="situation"
                      name="situation"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-[10px] text-sm text-noir outline-none focus:ring-1 focus:ring-ahadi resize-none"
                      style={{ backgroundColor: '#F7F7F5' }}
                      placeholder="Décrivez votre situation..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-xs">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-noir text-white rounded-full py-3 text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer ma demande <span aria-hidden="true">→</span>
                      </>
                    )}
                  </button>

                  <p className="text-center" style={{ fontSize: '11px', color: '#C0C0B8' }}>
                    Vos informations restent strictement confidentielles.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
