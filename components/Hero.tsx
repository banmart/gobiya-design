import Nav from './Nav'
import CheckForm from './CheckForm'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        {/* No poster: avoids stale-frame flash when the clip changes */}
        <video autoPlay muted loop playsInline preload="auto">
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085844_21a8f4b3-dea5-4ede-be16-d53f6973bb14.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="hero__inner">
        <Nav />

        <div className="stage">
          <div className="badge rise" style={{ '--i': 8 } as React.CSSProperties}>
            <span className="badge__tag">Free</span>
            <span>AI search check — no call required</span>
          </div>

          <h1 className="headline rise" style={{ '--i': 10 } as React.CSSProperties}>
            Built to be found.<br className="brk" /> By Google and by AI.
          </h1>

          <p className="sub rise" style={{ '--i': 12 } as React.CSSProperties}>
            Gobiya is a Los Angeles web design and search studio that builds fast custom websites.<br className="brk" />
            We structure them so Google — and the AI tools people ask instead — can find and quote your business.
          </p>

          <CheckForm />
        </div>
      </div>
    </section>
  )
}
