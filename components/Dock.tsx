'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Dock() {
  const dockRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dock = dockRef.current
    const hero = document.querySelector('.hero')
    if (!dock || !hero) return

    if (typeof window.IntersectionObserver !== 'undefined') {
      const obs = new IntersectionObserver(
        ([entry]) => dock.classList.toggle('is-on', !entry.isIntersecting),
        { rootMargin: '-72px 0px 0px 0px', threshold: 0 }
      )
      obs.observe(hero)
      return () => obs.disconnect()
    } else {
      const handler = () => {
        dock.classList.toggle('is-on', window.scrollY > (hero as HTMLElement).offsetHeight - 72)
      }
      window.addEventListener('scroll', handler, { passive: true })
      return () => window.removeEventListener('scroll', handler)
    }
  }, [])

  return (
    <div className="dock" id="dock" ref={dockRef}>
      <div className="dock__in">
        <a className="dock__brand" href="#top">
          <Image src="/gobiya-logo-neon-black.webp" alt="" width={1075} height={1075} decoding="async" unoptimized />
          <span>Gobiya</span>
        </a>
        <nav className="dock__nav" aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#ai-search">AI Search</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="tel-link dock__tel" href="tel:+13237441338" aria-label="Call Gobiya at 323-744-1338">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
               strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6.6 3.5h3l1.5 3.7-1.9 1.4a11.5 11.5 0 0 0 5.2 5.2l1.4-1.9 3.7 1.5v3a1.6 1.6 0 0 1-1.7 1.6A15.8 15.8 0 0 1 5 5.2 1.6 1.6 0 0 1 6.6 3.5Z"/>
          </svg>
          <span>323-744-1338</span>
        </a>
        <a className="btn-dark dock__cta" href="#check">Free site check</a>
      </div>
    </div>
  )
}
