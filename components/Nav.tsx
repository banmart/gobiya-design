'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLElement>(null)

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        close()
        toggleRef.current?.focus()
      }
    }
    const handleResize = () => {
      if (window.innerWidth > 900 && isOpen) close()
    }
    document.addEventListener('keydown', handleKey)
    window.addEventListener('resize', handleResize)
    return () => {
      document.removeEventListener('keydown', handleKey)
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen, close])

  const handleMenuClick = (e: React.MouseEvent) => {
    if ((e.target as Element).closest('a')) close()
  }

  const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.6 3.5h3l1.5 3.7-1.9 1.4a11.5 11.5 0 0 0 5.2 5.2l1.4-1.9 3.7 1.5v3a1.6 1.6 0 0 1-1.7 1.6A15.8 15.8 0 0 1 5 5.2 1.6 1.6 0 0 1 6.6 3.5Z"/>
    </svg>
  )

  return (
    <header className="nav">
      <a className="brand" href="#top">
        <Image
          className="brand__mark rise"
          style={{ '--i': 0 } as React.CSSProperties}
          src="/gobiya-mark.webp"
          alt=""
          width={180}
          height={222}
          decoding="async"
          fetchPriority="high"
          unoptimized
        />
        <span className="rise" style={{ '--i': 1 } as React.CSSProperties}>Gobiya</span>
      </a>

      <nav
        className={`nav__nav${isOpen ? ' is-open' : ''}`}
        id="site-menu"
        aria-label="Primary"
        ref={menuRef}
        onClick={handleMenuClick}
      >
        <ul className="nav__links">
          <li className="rise" style={{ '--i': 2 } as React.CSSProperties}><a href="#work">Work</a></li>
          <li className="rise" style={{ '--i': 3 } as React.CSSProperties}><a href="#ai-search">AI Search</a></li>
          <li className="rise" style={{ '--i': 4 } as React.CSSProperties}><a href="#process">Process</a></li>
          <li className="rise" style={{ '--i': 5 } as React.CSSProperties}><a href="#faq">FAQ</a></li>
        </ul>
        <a className="btn-dark menu__cta" href="#check">Free site check</a>
        <a className="tel-link menu__tel" href="tel:+13237441338">
          <PhoneIcon />
          <span>323-744-1338</span>
        </a>
      </nav>

      <div className="nav__cta rise" style={{ '--i': 6 } as React.CSSProperties}>
        <a className="tel-link" href="tel:+13237441338" aria-label="Call Gobiya at 323-744-1338">
          <PhoneIcon />
          <span>323-744-1338</span>
        </a>
        <a className="btn-dark" href="#check">Free site check</a>
      </div>

      <button
        className="nav__toggle rise"
        style={{ '--i': 6 } as React.CSSProperties}
        id="menu-toggle"
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="site-menu"
        ref={toggleRef}
        onClick={() => setIsOpen(v => !v)}
      >
        <span className="nav__toggle-box" aria-hidden="true">
          <span className="bar bar--top" />
          <span className="bar bar--bot" />
        </span>
      </button>
    </header>
  )
}
