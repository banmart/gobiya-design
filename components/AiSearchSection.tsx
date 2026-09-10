function CheckMark() {
  return (
    <span className="check-mark" aria-hidden="true">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4"
           strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8.5 6.5 12 13 4.5"/>
      </svg>
    </span>
  )
}

export default function AiSearchSection() {
  return (
    <section className="section section--ink" id="ai-search">
      <div className="wrap">
        <div className="audit">
          <div className="audit-rail">
            <div className="reveal">
              <div className="head">
                <p className="eyebrow">AI search</p>
                <h2 className="t">Showing up when people ask AI</h2>
                <p>
                  People used to type into Google. Now they ask ChatGPT, Perplexity and Google&apos;s own
                  AI answers. Those tools don&apos;t rank ten blue links — they pick a few sources and
                  quote them. Seven things decide whether you&apos;re one of them.
                </p>
              </div>
              <p className="audit-lede">
                This is the checklist we run on every site we build. It&apos;s also the checklist this
                page passes — open the source and you can verify all seven yourself.
              </p>
              <div className="audit-note">
                <strong>Nothing here is a secret.</strong> The work is in doing all seven properly
                and keeping them true as the site grows — which is where most sites quietly fall over.
              </div>
            </div>
          </div>

          <ol className="checks reveal" style={{ '--d': 1 } as React.CSSProperties}>
            <li className="check">
              <CheckMark />
              <div>
                <h3>Your business described as data, not just words</h3>
                <p>A <code>ProfessionalService</code> block tells the machine your name, location and services as facts — not sentences it has to guess at.</p>
              </div>
            </li>
            <li className="check">
              <CheckMark />
              <div>
                <h3>Real questions with real answers</h3>
                <p>A <code>FAQPage</code> block gives AI tools something quotable. This is the single most-cited format in AI answers.</p>
              </div>
            </li>
            <li className="check">
              <CheckMark />
              <div>
                <h3>Answers that stand on their own</h3>
                <p>Each paragraph makes sense lifted out of the page. AI quotes fragments — a paragraph that depends on the one above it never gets used.</p>
              </div>
            </li>
            <li className="check">
              <CheckMark />
              <div>
                <h3>Who you are, said in the first hundred words</h3>
                <p>&ldquo;Gobiya is a Los Angeles web design and search studio.&rdquo; Plain, early, unambiguous. Models look for exactly this shape.</p>
              </div>
            </li>
            <li className="check">
              <CheckMark />
              <div>
                <h3>Content in the HTML, not built by JavaScript</h3>
                <p>Most AI crawlers don&apos;t run scripts. If your text only appears after JavaScript, they see an empty page.</p>
              </div>
            </li>
            <li className="check">
              <CheckMark />
              <div>
                <h3>AI crawlers actually allowed in</h3>
                <p><code>GPTBot</code>, <code>ClaudeBot</code>, <code>PerplexityBot</code> and <code>Google-Extended</code> are separate from Googlebot. Plenty of sites block them by accident.</p>
              </div>
            </li>
            <li className="check">
              <CheckMark />
              <div>
                <h3>Fast enough to finish loading</h3>
                <p>Crawlers give up on slow pages. Speed isn&apos;t a nice-to-have here — it decides whether you get read at all.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
