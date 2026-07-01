'use client'

import Spline from '@splinetool/react-spline'

// TODO: remplacer par l'URL de la scène Spline réelle du sceau 3D une fois fournie.
const SPLINE_SCENE_URL = 'REMPLACE-PAR-TON-ID'

export default function SplineScene() {
  return (
    <Spline
      scene={SPLINE_SCENE_URL}
      style={{ width: '100%', height: '100%' }}
    />
  )
}
