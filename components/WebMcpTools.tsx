'use client'

import { useEffect } from 'react'
import { registerSiteTools, type ModelContext } from '@/lib/webmcp'

function goTo(href: string) {
  const el = href === '#top' ? document.body : document.querySelector(href)
  if (!el) return
  const top = href === '#top' ? 0 : el.getBoundingClientRect().top + window.scrollY
  window.scrollTo({ top, behavior: 'smooth' })
  history.replaceState(null, '', href)
}

export default function WebMcpTools() {
  useEffect(() => {
    const context = (document as Document & { modelContext?: ModelContext }).modelContext
    if (!context?.registerTool) return

    const controller = new AbortController()
    void registerSiteTools(context, goTo, controller.signal).catch(error => {
      controller.abort()
      console.warn('Gobiya WebMCP registration failed:', error)
    })
    return () => controller.abort()
  }, [])

  return null
}
