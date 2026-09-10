'use client'

import { useEffect, useState } from 'react'

const items = [
  'Vibe-coded and hand-coded, no page builders',
  'Built for Google and AI search',
  'A senior specialist, directly',
]

function StripGroup({ hidden }: { hidden?: boolean }) {
  const [lcp, setLcp] = useState<string>('—')

  useEffect(() => {
    const show = (ms: number) => setLcp((ms / 1000).toFixed(2) + 's')
    let gotLcp = false

    if ('PerformanceObserver' in window) {
      try {
        const obs = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const last = entries[entries.length - 1] as PerformanceEntry & { startTime: number }
          if (last) { gotLcp = true; show(last.startTime) }
        })
        obs.observe({ type: 'largest-contentful-paint', buffered: true })
        window.addEventListener('visibilitychange', () => obs.disconnect(), { once: true })
      } catch {}
    }

    const handleLoad = () => {
      setTimeout(() => {
        if (gotLcp) return
        const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
        if (nav && nav.domContentLoadedEventEnd > 0) show(nav.domContentLoadedEventEnd)
        else show(performance.now())
      }, 600)
    }
    window.addEventListener('load', handleLoad, { once: true })
  }, [])

  return (
    <div className="strip__group" aria-hidden={hidden || undefined}>
      {items.map((text) => (
        <span key={text}>{text}</span>
      ))}
      <span>This page loaded in <span className="num">{lcp}</span>, measured live</span>
    </div>
  )
}

export default function TrustStrip() {
  return (
    <div className="strip">
      <div className="strip__track">
        <StripGroup />
        <StripGroup hidden />
        <StripGroup hidden />
      </div>
    </div>
  )
}
