export default function TrustStrip({ compact = false }: { compact?: boolean }) {
  if (compact) return <section className="home-proof" aria-label="About Gobiya Agency"><div><span><strong>300+</strong> customers served</span><span>Building for businesses <strong>since 2010</strong></span></div></section>
  return <section className="proof-band" aria-label="Gobiya Agency in numbers"><div className="wrap proof-grid">
    <div className="proof-stat"><strong>300+</strong><span>Customers served</span></div>
    <div className="proof-stat"><strong>Since 2010</strong><span>Building for businesses</span></div>
    <div className="proof-story"><p className="eyebrow">A customer result · Dental practice</p><p><strong>5 → 15+</strong> appointments a day, in <strong>45 days.</strong></p><span>One practice’s outcome. Results vary by business.</span><a className="textlink" href="tel:+13237441338">Let’s talk about your goals ↗</a></div>
  </div></section>
}
