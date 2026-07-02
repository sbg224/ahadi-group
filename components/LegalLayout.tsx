import Link from 'next/link'

interface Props {
  title: string
  children: React.ReactNode
}

export default function LegalLayout({ title, children }: Props) {
  return (
    <div
      className="min-h-screen py-16 px-6"
      style={{ background: 'linear-gradient(to bottom, #F0F7F4 0%, #FFFFFF 35%, #FFFFFF 100%)' }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <Link
          href="/"
          className="text-gris-muted text-sm hover:text-noir transition-colors mb-10 inline-block"
        >
          ← Retour à l&apos;accueil
        </Link>
        <h1
          className="font-serif text-noir mb-10"
          style={{ fontSize: '32px', lineHeight: '1.2' }}
        >
          {title}
        </h1>
        <div
          className="text-gris"
          style={{ fontSize: '14px', lineHeight: '1.8' }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
