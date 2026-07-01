type AhadiSealProps = {
  size?: number
  opacity?: number
  className?: string
}

/**
 * Médaillon décoratif — cercles concentriques + étoile centrale, teintes AHADI.
 * Purement décoratif (aria-hidden), signature visuelle réutilisée hero + cards Méthode.
 */
export default function AhadiSeal({ size = 220, opacity = 1, className }: AhadiSealProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ opacity }}
    >
      <circle cx="100" cy="100" r="98" stroke="#267253" strokeWidth="1" opacity="0.25" />
      <circle cx="100" cy="100" r="80" stroke="#D4AF37" strokeWidth="1" opacity="0.3" />
      <circle cx="100" cy="100" r="62" fill="#267253" fillOpacity="0.06" stroke="#267253" strokeWidth="1.2" opacity="0.4" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i / 24) * Math.PI * 2
        const x1 = 100 + Math.cos(angle) * 88
        const y1 = 100 + Math.sin(angle) * 88
        const x2 = 100 + Math.cos(angle) * 94
        const y2 = 100 + Math.sin(angle) * 94
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#D4AF37"
            strokeWidth="1.4"
            opacity="0.35"
          />
        )
      })}
      <path
        d="M100 62 L110.5 89.5 L140 89.5 L116.5 106.5 L126 134 L100 117 L74 134 L83.5 106.5 L60 89.5 L89.5 89.5 Z"
        fill="#267253"
        fillOpacity="0.1"
        stroke="#267253"
        strokeWidth="1.3"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  )
}
