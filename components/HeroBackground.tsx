'use client'

import dynamic from 'next/dynamic'
import { useSyncExternalStore } from 'react'
import CanvasNetwork from '@/components/CanvasNetwork'
import SplineErrorBoundary from '@/components/SplineErrorBoundary'

const SplineScene = dynamic(() => import('@/components/SplineScene'), {
  ssr: false,
  loading: () => null,
})

const MEDIA_QUERY = '(min-width: 768px)'

function subscribe(callback: () => void) {
  const mql = window.matchMedia(MEDIA_QUERY)
  mql.addEventListener('change', callback)
  return () => mql.removeEventListener('change', callback)
}

function getSnapshot() {
  return window.matchMedia(MEDIA_QUERY).matches
}

function getServerSnapshot() {
  return false
}

export default function HeroBackground() {
  const isDesktop = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {isDesktop ? (
        <SplineErrorBoundary fallback={<CanvasNetwork />}>
          <SplineScene />
        </SplineErrorBoundary>
      ) : (
        <CanvasNetwork />
      )}
    </div>
  )
}
