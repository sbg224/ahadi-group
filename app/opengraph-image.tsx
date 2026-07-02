import { ImageResponse } from 'next/og'

export const alt = 'AHADI Group — Supervision de projets en Guinée. La promesse tenue.'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1A4A35 0%, #267253 100%)',
          position: 'relative',
        }}
      >
        {/* Liseré or — signature du sceau AHADI */}
        <div
          style={{
            position: 'absolute',
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: '2px solid rgba(212,175,55,0.45)',
            borderRadius: 24,
          }}
        />
        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: 'rgba(212,175,55,0.9)',
            marginBottom: 28,
          }}
        >
          AHADI Group · Guinée
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            color: '#F0F7F4',
            textAlign: 'center',
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Là où vous ne pouvez pas être, nous y sommes.
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginTop: 44,
          }}
        >
          <div style={{ width: 48, height: 2, background: '#D4AF37' }} />
          <div style={{ fontSize: 30, color: 'rgba(240,247,244,0.85)' }}>
            Supervision de projets · La promesse tenue.
          </div>
          <div style={{ width: 48, height: 2, background: '#D4AF37' }} />
        </div>
      </div>
    ),
    { ...size },
  )
}
