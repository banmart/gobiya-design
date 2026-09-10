'use client'

import { useEffect, useRef, useState } from 'react'
import { SITES, TAGS } from '@/lib/sites'

function WorkCard({ site, index }: { site: (typeof SITES)[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isVideo = /\.(mp4|webm)(\?|$)/i.test(site.media)
  const n = site.plate

  // For videos: lazy-load src + play on intersection
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (!('IntersectionObserver' in window)) {
      video.src = site.media
      video.play().catch(() => {})
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!video.src) video.src = site.media
            video.play().catch(() => {})
          } else if (video.src) {
            video.pause()
          }
        })
      },
      { rootMargin: '200px 0px', threshold: 0.1 }
    )
    obs.observe(video)
    return () => obs.disconnect()
  }, [site.media])

  const meta = site.tags.map((t) => TAGS[t] || t).join(' · ')

  return (
    <article
      className="work reveal"
      style={{ '--d': index % 3, '--plate': `var(--plate-${n})`, '--plate-ink': `var(--plate-${n}-ink)` } as React.CSSProperties}
      data-tags={site.tags.join(' ')}
    >
      <div
        className={`work-plate work-plate--shot`}
        style={{ '--plate': `var(--plate-${n})`, '--plate-ink': `var(--plate-${n}-ink)` } as React.CSSProperties}
      >
        {isVideo ? (
          <video
            className="work-shot"
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            width={site.w}
            height={site.h}
            aria-hidden="true"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="work-shot"
            src={site.media}
            alt=""
            loading="lazy"
            decoding="async"
            width={site.w}
            height={site.h}
          />
        )}
      </div>
      <div className="work-body">
        <span className="work-meta">{meta}</span>
        <h3>{site.name}</h3>
        <p>{site.what}</p>
        <div className="work-foot">
          <span className="site-service">{site.service}</span>
        </div>
      </div>
    </article>
  )
}

type FilterKey = 'all' | 'landing' | 'product' | 'immersive'

export default function WorkSection() {
  const [expanded, setExpanded] = useState(false)
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')
  const gridRef = useRef<HTMLDivElement>(null)

  // Reveal observer for dynamically-rendered cards
  useEffect(() => {
    const grid = gridRef.current
    if (!grid || !('IntersectionObserver' in window)) {
      grid?.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'))
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          obs.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    )
    grid.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [activeFilter, expanded])

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'landing', label: 'Landing & agency' },
    { key: 'product', label: 'Product & SaaS' },
    { key: 'immersive', label: '3D & interactive' },
  ]

  const counts: Record<FilterKey, number> = {
    all: SITES.length,
    landing: SITES.filter((s) => s.tags.includes('landing')).length,
    product: SITES.filter((s) => s.tags.includes('product')).length,
    immersive: SITES.filter((s) => s.tags.includes('immersive')).length,
  }

  const visible = SITES.filter(
    (s) => activeFilter === 'all' || s.tags.includes(activeFilter)
  )

  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">Latest work</p>
          <h2 className="t">See what your next website could look like</h2>
          <p>
            Explore design examples across business websites, products, and interactive experiences.
            Choose a category to find a direction for your brand.
          </p>
        </div>

        <div className="filters reveal" style={{ '--d': 1 } as React.CSSProperties}
             role="group" aria-label="Filter work by category">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              className="filter"
              type="button"
              data-filter={key}
              aria-pressed={activeFilter === key}
              onClick={() => { setActiveFilter(key); setExpanded(false) }}
            >
              {label}
              <span className="filter-n" aria-hidden="true">{counts[key]}</span>
            </button>
          ))}
        </div>

        <div className="grid-work" id="work-grid" ref={gridRef}>
          {(expanded ? visible : visible.slice(0, 6)).map((site, i) => (
            <WorkCard key={site.name} site={site} index={i} />
          ))}
        </div>
        <div className="work-expand">
          <p role="status">Showing {expanded ? visible.length : Math.min(6, visible.length)} of {visible.length} design examples</p>
          {visible.length > 6 && <button className="filter" type="button" aria-expanded={expanded} aria-controls="work-grid" onClick={() => setExpanded(!expanded)}>{expanded ? "Show fewer examples" : "Explore all examples"}</button>}
        </div>
        {visible.length === 0 && (
          <p className="grid-empty">No sites in that category yet.</p>
        )}
      </div>
    </section>
  )
}
