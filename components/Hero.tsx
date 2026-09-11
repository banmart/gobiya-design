import Nav from './Nav'
import HomepageCheck from './HomepageCheck'

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="hero__inner">
        <Nav checkHref="#check" />

        <div className="home-intro">
          <div className="home-copy">
          <p className="home-kicker">Web design & search · Los Angeles</p>
          <h1>
            A better website.<br />More ways to<br /><span>get found.</span>
          </h1>

          <p className="home-description">
            We build custom websites and help your business show up on Google and in AI search.
          </p>

          <a className="home-work" href="/work/">See our work <span aria-hidden="true">↗</span></a>
          </div>
          <HomepageCheck />
        </div>
      </div>
    </section>
  )
}
