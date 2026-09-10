export default function FaqSection() {
  return (
    <section className="section section--sunk" id="faq">
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">FAQ</p>
          <h2 className="t">Questions people actually ask</h2>
          <p>Short answers, no sales language. These are also the answers AI tools quote — which is rather the point.</p>
        </div>

        <div className="faq reveal" style={{ '--d': 1 } as React.CSSProperties}>
          <details open>
            <summary>What does Gobiya do?<span className="faq-sign" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              Gobiya is a Los Angeles web design and search optimization studio. We build fast
              custom websites and structure them so both traditional search engines and AI tools
              like ChatGPT, Perplexity and Google AI Overviews can find, understand and cite the
              business.
            </div>
          </details>

          <details>
            <summary>How is AI search different from normal SEO?<span className="faq-sign" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              Traditional SEO competes for a position in a list of links. AI search competes to be
              quoted inside a written answer. That rewards different things: clearly structured
              facts, self-contained paragraphs, real question-and-answer content, and crawler
              access for AI bots — which are separate from Googlebot and often blocked by accident.
            </div>
          </details>

          <details>
            <summary>Will you rebuild my site, or fix the one I have?<span className="faq-sign" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              Either. If the site is fundamentally sound we improve the structure, speed and
              content in place — that&apos;s usually cheaper and keeps the rankings you already have.
              A rebuild only makes sense when the existing site is slow, unmaintainable, or built
              on something that blocks the work.
            </div>
          </details>

          <details>
            <summary>Do you use AI to build the sites?<span className="faq-sign" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              Yes, and we&apos;d rather say so than pretend otherwise. We&apos;re vibe coders and custom
              coders both: AI writes the first pass, a senior developer reads every line, cuts
              what isn&apos;t earning its place, and hand-tunes the rest. That&apos;s why the work is fast
              and the pages are still small. Vibe coding without the second half is how sites end up
              bloated and unmaintainable.
            </div>
          </details>

          <details>
            <summary>Who will I actually be working with?<span className="faq-sign" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              One senior specialist with more than fifteen years of experience, directly. No
              account managers, no junior hand-offs, no offshore team writing your pages.
            </div>
          </details>

          <details>
            <summary>How long before anything happens?<span className="faq-sign" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              Technical fixes — speed, structured data, crawler access — show up in weeks. Ranking
              and citation changes take longer, typically a few months, because search engines and
              AI models both need to re-crawl and re-index before anything shifts. Anyone
              promising faster than that is guessing.
            </div>
          </details>

          <details>
            <summary>Do you work with businesses outside Los Angeles?<span className="faq-sign" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              Yes. The studio is based in Los Angeles and knows the local market well, but the
              work is remote-friendly and clients are welcome from anywhere in the US.
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
