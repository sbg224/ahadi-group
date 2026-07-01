'use client'

import { Component, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  fallback: ReactNode
}

type State = {
  hasError: boolean
}

/**
 * @splinetool/react-spline rethrows its load error during render on purpose,
 * expecting an Error Boundary to catch it (see t().catch(j) + `if (i) throw i`
 * in node_modules/@splinetool/react-spline/dist/react-spline.js). Needed as
 * long as SplineScene points at the placeholder scene ID.
 */
export default class SplineErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: unknown) {
    console.warn('SplineScene indisponible (scène non configurée) — fallback CanvasNetwork.', error)
  }

  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}
