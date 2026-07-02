import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: 'linear-gradient(to bottom, #F0F7F4 0%, #FFFFFF 60%, #FFFFFF 100%)' }}
    >
      <div
        className="uppercase text-gris-leger mb-4"
        style={{ fontSize: '11px', letterSpacing: '2px' }}
      >
        Erreur 404
      </div>
      <h1 className="font-serif text-noir mb-4" style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>
        Cette page n&apos;existe pas.
      </h1>
      <p className="text-gris text-sm leading-relaxed mb-10 max-w-md">
        L&apos;adresse demandée est introuvable. Elle a peut-être été déplacée, ou le lien
        contient une erreur.
      </p>
      <Link
        href="/"
        className="btn-primary bg-ahadi text-white px-6 py-3 rounded-full text-sm font-medium"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  )
}
