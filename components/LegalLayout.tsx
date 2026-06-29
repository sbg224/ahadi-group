interface Props {
  title: string
  children: React.ReactNode
}

export default function LegalLayout({ title, children }: Props) {
  return (
    <div className="min-h-screen bg-fond py-16 px-6">
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <a
          href="/"
          className="text-gris-muted text-sm hover:text-noir transition-colors mb-10 inline-block"
        >
          ← Retour à l&apos;accueil
        </a>
        <h1
          className="font-serif text-noir mb-10"
          style={{ fontSize: '32px', fontStyle: 'italic', lineHeight: '1.2' }}
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
