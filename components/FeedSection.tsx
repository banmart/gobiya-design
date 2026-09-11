'use client'
import { useEffect, useRef, useState } from 'react'
const pageUrl = 'https://www.facebook.com/profile.php?id=100064043744190'
export default function FeedSection({ compact = false }: { compact?: boolean }) {
  const container = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const element = container.current
    if (!element) return
    const resize = () => setWidth(Math.min(500, Math.floor(element.clientWidth)))
    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  if (compact) return <section className="home-updates" id="feed"><div><h2>Stay in the loop.</h2><p>Recent projects and updates from Gobiya Agency.</p></div><a href={pageUrl} target="_blank" rel="noopener noreferrer">Follow on Facebook <span aria-hidden="true">↗</span></a></section>
  return <section className="section section--sunk" id="feed"><div className="wrap facebook-layout">
    <div className="head"><p className="eyebrow">Facebook</p><h2 className="t">Latest from Gobiya Agency</h2><p>Posts and updates from our Facebook Page.</p><a className="textlink" href={pageUrl} target="_blank" rel="noopener noreferrer">View posts on Facebook ↗</a><p className="feed-help">If the feed is unavailable, use the link to view our posts on Facebook.</p></div>
    <div className="facebook-frame" ref={container}>{width > 0 && <iframe title="Gobiya Agency Facebook Page posts" src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(pageUrl)}&tabs=timeline&width=${width}&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`} width={width} height="600" loading="lazy" allow="encrypted-media; picture-in-picture; web-share" />}</div>
  </div></section>
}
