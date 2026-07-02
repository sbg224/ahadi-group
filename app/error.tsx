'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error('[AHADI] Erreur runtime:', error)
  }, [error])

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: 'linear-gradient(to bottom, #F0F7F4 0%, #FFFFFF 60%, #FFFFFF 100%)' }}
    >
      <div
        className="uppercase text-gris-leger mb-4"
        style={{ fontSize: '11px', letterSpacing: '2px' }}
      >
        Erreur technique
      </div>
      <h1 className="font-serif text-noir mb-4" style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>
        Une erreur est survenue.
      </h1>
      <p className="text-gris text-sm leading-relaxed mb-10 max-w-md">
        Ce n&apos;est pas de votre fait. Vous pouvez réessayer, ou revenir à l&apos;accueil si le
        problème persiste.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => unstable_retry()}
          className="btn-primary bg-ahadi text-white px-6 py-3 rounded-full text-sm font-medium"
        >
          Réessayer
        </button>
        <Link
          href="/"
          className="btn-secondary border border-ahadi text-ahadi px-6 py-3 rounded-full text-sm font-medium"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
