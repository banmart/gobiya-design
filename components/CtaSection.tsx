export default function CtaSection() {
  return (
    <section className="section section--ink">
      <div className="wrap">
        <div className="close">
          <div className="reveal">
            <h2 className="t">Find out what&apos;s stopping you</h2>
            <p>
              Send your address and you&apos;ll get a plain-English list of what&apos;s keeping Google and
              AI tools from citing your business. No long sales call, no jargon.
            </p>
          </div>
          <div className="close-actions reveal" style={{ '--d': 1 } as React.CSSProperties}>
            <a className="btn-light" href="#check">Check my site free</a>
            <a className="btn-ghost" href="tel:+13237441338">Call 323-744-1338</a>
            <a className="btn-ghost" href="mailto:hello@gobiya.com">Email instead</a>
          </div>
        </div>
      </div>
    </section>
  )
}
