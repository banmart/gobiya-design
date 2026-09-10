export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">About</p>
          <h2 className="t">What is Gobiya?</h2>
        </div>

        <div className="def">
          <div className="prose reveal">
            <p>
              <strong>Gobiya is a modern web design and search strategy studio based in Los
              Angeles.</strong> We build clean, fast websites for businesses and help them get
              found online when people search for their services.
            </p>
            <p>
              Many websites look good but never show up on search engines. Others rank well but
              feel boring or hard to use. Gobiya fixes both at once — we write clear text, code
              custom pages that load instantly, and structure your business information so
              search engines and AI tools know exactly who you are.
            </p>
            <p>
              You won&apos;t get passed to trainees or an offshore team. You work directly with a
              senior specialist with more than fifteen years of real-world experience.
            </p>
          </div>

          <dl className="facts reveal" style={{ '--d': 1 } as React.CSSProperties}>
            <div><dt>Practice</dt><dd>Web design &amp; search optimization</dd></div>
            <div><dt>Based in</dt><dd>Los Angeles, California</dd></div>
            <div><dt>Experience</dt><dd>15+ years</dd></div>
            <div><dt>You work with</dt><dd>A senior specialist, directly</dd></div>
            <div><dt>Built with</dt><dd>Vibe coding and custom code — no page builders</dd></div>
            <div><dt>Optimized for</dt><dd>Google, Bing, ChatGPT, Perplexity</dd></div>
          </dl>
        </div>
      </div>
    </section>
  )
}
