'use client'

import { useEffect, useRef } from 'react'

type Node = { x: number; y: number; vx: number; vy: number }

const NODE_COUNT = 22
const LINK_DIST = 140
const COLORS = ['#267253', '#D4AF37']

export default function CanvasNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let nodes: Node[] = []
    let frameId = 0
    let running = true

    function resize() {
      const parent = canvas!.parentElement
      width = parent?.clientWidth ?? window.innerWidth
      height = parent?.clientHeight ?? window.innerHeight
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function makeNodes() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      }))
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height)

      for (const node of nodes) {
        if (!reduceMotion) {
          node.x += node.vx
          node.y += node.vy
          if (node.x < 0 || node.x > width) node.vx *= -1
          if (node.y < 0 || node.y > height) node.vy *= -1
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < LINK_DIST) {
            ctx!.strokeStyle = `rgba(38, 114, 83, ${0.12 * (1 - dist / LINK_DIST)})`
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      nodes.forEach((node, i) => {
        ctx!.fillStyle = COLORS[i % 2]
        ctx!.globalAlpha = 0.35
        ctx!.beginPath()
        ctx!.arc(node.x, node.y, 2.2, 0, Math.PI * 2)
        ctx!.fill()
        ctx!.globalAlpha = 1
      })

      if (running && !reduceMotion) {
        frameId = requestAnimationFrame(draw)
      }
    }

    function handleVisibility() {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(frameId)
      } else {
        running = true
        draw()
      }
    }

    resize()
    makeNodes()
    draw()

    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      running = false
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full" />
}
