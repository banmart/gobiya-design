/* The Facebook feed section is hidden until the sync-facebook build script
   writes posts into it. In the Next.js port it stays hidden by default; the
   sync script can be updated to write static post data into a JSON file
   that this component imports. */
export default function FeedSection() {
  return (
    <section className="section section--sunk" id="feed" hidden>
      <div className="wrap">
        <div className="head reveal">
          <p className="eyebrow">From the feed</p>
          <h2 className="t">What&apos;s going up, while it goes up</h2>
          <p>
            Straight from our Facebook page — builds in progress, sites going live, and
            the occasional thing we learned the hard way. No schedule, no filler. If it
            is here, it happened.
          </p>
        </div>
        <div className="grid-fb reveal" style={{ '--d': 1 } as React.CSSProperties} id="fb-grid">
          {/* FB_POSTS:START */}
          {/* FB_POSTS:END */}
        </div>
        <p className="feed-more reveal" style={{ '--d': 2 } as React.CSSProperties}>
          <a href="https://www.facebook.com/" id="fb-page-link" rel="noopener">
            See everything on Facebook
          </a>
        </p>
      </div>
    </section>
  )
}
