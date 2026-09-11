import Nav from './Nav'

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="hero__inner">
        <Nav checkHref="/contact/#check" />

        <div className="home-intro">
          <div className="home-copy">
          <p className="home-kicker">Web design & search · Los Angeles</p>
          <h1>
            A better website.<br />More ways to<br /><span>get found.</span>
          </h1>

          <p className="home-description">
            We build custom websites and help your business show up on Google and in AI search.
          </p>

          <div className="home-hero-actions">
            <a className="home-primary" href="/contact/#check">Get your free site review <span aria-hidden="true">↗</span></a>
            <a className="home-work" href="/work/">See our work <span aria-hidden="true">↗</span></a>
          </div>
          </div>
          <div className="home-brand-stage" aria-hidden="true">
            <div className="home-orbit home-orbit--back" />
            <img className="home-sculpture" src="/gobiya-mark.webp" alt="" width="179" height="225" fetchPriority="high" />
            <div className="home-orbit home-orbit--front" />
            <span className="home-stage-note">Small businesses.<br />Bigger tomorrows.</span>
            <div className="home-signal"><span className="home-signal-icon">↗</span><span>Built to stand out.<br /><strong>Designed to get found.</strong></span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
