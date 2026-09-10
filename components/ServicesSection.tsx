export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">Services</p>
          <h2 className="t">What we do</h2>
          <p>Three services. They work best together, but you can start with one.</p>
        </div>

        <div className="grid-svc">
          <article className="svc svc--lead reveal">
            <span className="svc-tag">AI &amp; Google search</span>
            <h3>Show up when people search</h3>
            <p>
              When someone asks Google, ChatGPT or Perplexity for a specialist near them, we make
              sure your business is in the answer they get back — not on page four of a list
              nobody scrolls to any more.
            </p>
            <a className="textlink" href="#check">Ask about this</a>
          </article>

          <article className="svc reveal" style={{ '--d': 1 } as React.CSSProperties}>
            <span className="svc-tag">Structured code</span>
            <h3>Schema markup that&apos;s actually right</h3>
            <p>
              Clean structured data telling search bots what your business does, where you are,
              and why customers trust you. Written by hand, validated, kept current.
            </p>
            <a className="textlink" href="#check">Ask about this</a>
          </article>

          <article className="svc reveal" style={{ '--d': 2 } as React.CSSProperties}>
            <span className="svc-tag">Custom web design</span>
            <h3>Fast websites, built by hand</h3>
            <p>
              Custom sites that open instantly on phones and computers. No clunky plugins or slow
              templates — just clean, reliable code you own.
            </p>
            <a className="textlink" href="#check">Ask about this</a>
          </article>
        </div>
      </div>
    </section>
  )
}
