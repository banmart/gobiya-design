export default function ProcessSection() {
  return (
    <section className="section section--sunk" id="process">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">Process</p>
          <h2 className="t">How it works</h2>
          <p>Three stages, in order. Most agencies stop after the third — that&apos;s usually why the traffic never arrives.</p>
        </div>

        <ol className="steps">
          <li className="step reveal">
            <span className="step-n" aria-hidden="true">01</span>
            <h3>Clear writing first</h3>
            <p>
              We write plain-English words that explain what you do, quickly, so people don&apos;t
              leave confused. This comes before design, because a beautiful page that doesn&apos;t
              say anything is just decoration.
            </p>
          </li>
          <li className="step reveal" style={{ '--d': 1 } as React.CSSProperties}>
            <span className="step-n" aria-hidden="true">02</span>
            <h3>Structure machines can read</h3>
            <p>
              We add the invisible structural code that tells search engines and AI tools your
              exact business name, location and services — so they describe you correctly
              instead of guessing.
            </p>
          </li>
          <li className="step reveal" style={{ '--d': 2 } as React.CSSProperties}>
            <span className="step-n" aria-hidden="true">03</span>
            <h3>Vibe-coded, hand-finished, built to load instantly</h3>
            <p>
              We build with AI in the loop — that&apos;s how a two-week build becomes a two-day one —
              and then read, cut and tune every line by hand before it ships. You get the speed of
              vibe coding with the discipline of custom code: no clunky plugins, no page-builder
              bloat, nothing on the page that we can&apos;t explain.
            </p>
          </li>
        </ol>
      </div>
    </section>
  )
}
