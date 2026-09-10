import Nav from './Nav'
import Footer from './Footer'
import RevealInit from './RevealInit'
import HeroBackground from './HeroBackground'
export default function PageShell({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return <>
    <a className="skip" href="#main">Skip to content</a><RevealInit />
    <main id="main" className="topic-page">
      <section className="hero hero--page" aria-labelledby="page-title">
        <HeroBackground />
        <div className="hero__inner">
          <Nav />
          <div className="stage">
            <h1 id="page-title" className="hero-title rise">{title}</h1>
            <p className="sub rise">{intro}</p>
          </div>
        </div>
      </section>
      {children}
    </main>
    <Footer />
  </>
}
