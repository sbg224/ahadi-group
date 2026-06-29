'use client'

import { useRef, useState } from 'react'

type ValueData = {
  title: string
  body: string
  bg: string
  titleColor: string
  bodyColor: string
  accentColor: string
  border?: string
}

const values: ValueData[] = [
  {
    title: 'Intégrité',
    body: "Nous ne prenons jamais d'argent des artisans, des prestataires ou de quiconque qui travaille sur votre projet. Notre seul client, c'est vous.",
    bg: '#1A1A18',
    titleColor: '#FAFAF8',
    bodyColor: '#6B6B62',
    accentColor: '#267253',
  },
  {
    title: 'Transparence',
    body: 'Chaque visite, chaque inspection, chaque étape donne lieu à un rapport écrit, signé et documenté. Vous savez toujours ce qui se passe.',
    bg: '#F0F7F4',
    titleColor: '#1A1A18',
    bodyColor: '#5A5A52',
    accentColor: '#267253',
    border: '#C8DDD6',
  },
  {
    title: 'Confiance',
    body: 'Vous nous confiez ce qui compte le plus pour vous et votre famille. Nous prenons cette responsabilité au sérieux, chaque jour.',
    bg: '#F0F7F4',
    titleColor: '#1A1A18',
    bodyColor: '#5A5A52',
    accentColor: '#267253',
    border: '#C8DDD6',
  },
  {
    title: 'Sérénité',
    body: "Vous investissez depuis l'autre bout du monde. Notre mission est simple : vous donner l'esprit tranquille. En temps réel. Avec des preuves.",
    bg: '#267253',
    titleColor: '#FFFFFF',
    bodyColor: 'rgba(255,255,255,0.75)',
    accentColor: '#FFFFFF',
  },
]

function ValueCard({ v }: { v: ValueData }) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const nx = (e.clientX - left) / width - 0.5
    const ny = (e.clientY - top) / height - 0.5
    setTilt({ x: ny * 8, y: -nx * 8 })
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 })
  }

  const isResting = tilt.x === 0 && tilt.y === 0

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="p-8 rounded-2xl"
      style={{
        backgroundColor: v.bg,
        border: v.border ? `1px solid ${v.border}` : undefined,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: isResting ? 'transform 0.5s ease' : 'transform 0.1s ease',
        willChange: 'transform',
      }}
    >
      <div
        className="h-0.5 w-7 mb-6"
        style={{ backgroundColor: v.accentColor }}
        aria-hidden="true"
      />
      <h3 className="font-serif mb-3" style={{ fontSize: '20px', color: v.titleColor }}>
        {v.title}
      </h3>
      <p style={{ fontSize: '12px', color: v.bodyColor, lineHeight: '1.7' }}>{v.body}</p>
    </div>
  )
}

export default function Values() {
  return (
    <section id="valeurs" className="py-20 px-6 bg-fond">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div
            className="uppercase text-gris-leger mb-3"
            style={{ fontSize: '10px', letterSpacing: '2px' }}
          >
            Ce en quoi nous croyons
          </div>
          <h2
            className="font-serif text-noir mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
          >
            Nos engagements
          </h2>
          <p className="text-gris text-sm leading-relaxed">
            Ce ne sont pas des mots sur une page. C&apos;est ce qui guide chaque rapport, chaque
            visite, chaque conversation avec un client.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {values.map((v) => (
            <ValueCard key={v.title} v={v} />
          ))}
        </div>

        <div className="bg-noir rounded-2xl px-8 py-12 text-center">
          <p className="font-serif text-white" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
            Investir et dormir tranquille.
          </p>
          <p
            className="font-serif text-white mb-6"
            style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}
          >
            C&apos;est ce que nous vous offrons.
          </p>
          <p
            className="text-gris-muted mx-auto max-w-md"
            style={{ fontSize: '12px', lineHeight: '1.8' }}
          >
            Qu&apos;il s&apos;agisse de votre maison familiale, de votre commerce ou de votre
            plantation, vous avez le droit de savoir ce qui se passe. En temps réel. Avec des
            preuves.
          </p>
        </div>
      </div>
    </section>
  )
}
