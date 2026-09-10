'use client'

import { useEffect } from 'react'

export default function RevealInit() {
  useEffect(() => {
    // Add .js class so CSS can gate reveal animations
    document.documentElement.classList.add('js')

    // Scroll reveal for .reveal elements
    const items = document.querySelectorAll('.reveal')
    if (!items.length) return

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-in'))
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

    items.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return null
}
