import Nav from './Nav'
import HeroBackground from './HeroBackground'
import CheckForm from './CheckForm'

export default function Hero() {
  return (
    <section className="hero">
      <HeroBackground />

      <div className="hero__inner">
        <Nav />

        <div className="stage">
          <div className="badge rise" style={{ '--i': 8 } as React.CSSProperties}>
            <span className="badge__tag">Free</span>
            <span>AI search check — no call required</span>
          </div>

          <h1 className="headline hero-title rise" style={{ '--i': 10 } as React.CSSProperties}>
            Web design.<br className="brk" /> Search visibility.
          </h1>

          <p className="sub rise" style={{ '--i': 12 } as React.CSSProperties}>
            Custom websites, SEO, and AI search optimization.
            Based in Los Angeles. Working with businesses across the US.
          </p>

          <a className="hero-call btn-dark" href="tel:+13237441338">Call 323-744-1338</a>
          <CheckForm />
          <a className="hero-work-link" href="/work/">Explore the work <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}
