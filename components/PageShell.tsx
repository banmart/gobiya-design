import Nav from './Nav'
import Footer from './Footer'
import '@/app/home.css'
export default function PageShell({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return <div className="home subpage">
    <a className="skip" href="#main">Skip to content</a>
    <Nav checkHref={title === 'Contact' ? '#check' : '/contact/#check'} />
    <main id="main" className="topic-page">
      <section className="home-intro subpage-intro" aria-labelledby="page-title">
        <div className="home-copy">
          <p className="home-kicker">Gobiya Agency · Los Angeles</p>
          <h1 id="page-title">{title}</h1>
        </div>
        <div className="subpage-summary">
          <p className="home-description">{intro}</p>
          <a className="home-work" href={title === 'Contact' ? '#check' : '/contact/'}>{title === 'Contact' ? 'Request a site review' : 'Talk about your project'} <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      {children}
    </main>
    <Footer />
  </div>
}
