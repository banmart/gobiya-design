export default function AreasSection() {
  const areas = [
    'Los Angeles', 'Santa Monica', 'Pasadena', 'Long Beach',
    'Glendale', 'Burbank', 'San Fernando Valley', 'Orange County', 'Remote, US-wide',
  ]

  return (
    <section className="section section--tight">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">Coverage</p>
          <h2 className="t">Where we work</h2>
        </div>
        <div className="areas reveal" style={{ '--d': 1 } as React.CSSProperties}>
          {areas.map((area) => (
            <span key={area} className="area">{area}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
