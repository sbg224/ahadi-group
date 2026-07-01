const halos = [
  { top: '-12%', left: '-8%', size: 420, color: 'rgba(38,114,83,0.12)', blur: 60 },
  { bottom: '-16%', right: '-10%', size: 480, color: 'rgba(212,175,55,0.1)', blur: 70 },
  { top: '35%', right: '18%', size: 300, color: 'rgba(38,114,83,0.08)', blur: 50 },
]

/**
 * Halos diffus vert/or, pour donner au backdrop-blur (glassmorphism) quelque
 * chose de réel à flouter derrière les panneaux translucides.
 */
export default function AuroraHalos() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {halos.map((halo, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: halo.top,
            left: halo.left,
            right: halo.right,
            bottom: halo.bottom,
            width: halo.size,
            height: halo.size,
            borderRadius: '50%',
            background: halo.color,
            filter: `blur(${halo.blur}px)`,
          }}
        />
      ))}
    </div>
  )
}
