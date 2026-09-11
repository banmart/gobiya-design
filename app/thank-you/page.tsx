import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { pageMetadata } from '@/lib/metadata'
import '../home.css'

export const metadata = {
  ...pageMetadata('Thank you', 'Your website review request has been sent to Gobiya Agency.', '/thank-you/'),
  robots: { index: false, follow: false },
}

export default function Page() {
  return <div className="home subpage">
    <a className="skip" href="#main">Skip to content</a>
    <Nav />
    <main id="main" className="home-intro thank-you">
      <div className="home-copy">
        <p className="home-kicker">Gobiya Agency</p>
        <h1>Thank you.<br /><span>We have your request.</span></h1>
        <p className="home-description">We’ll review the details and get back to you using the contact information you provided.</p>
        <a className="home-work" href="/">Back to homepage <span aria-hidden="true">↗</span></a>
      </div>
      <div className="home-check">
        <h2>Need to reach us?</h2>
        <p>Weekdays, 9 AM–5 PM<br />Saturday, 9 AM–3 PM</p>
        <a className="home-work" href="tel:+13237441338">323-744-1338 <span aria-hidden="true">↗</span></a><br />
        <a className="home-work" href="mailto:steve@gobiya.com">steve@gobiya.com <span aria-hidden="true">↗</span></a>
      </div>
    </main>
    <Footer />
  </div>
}
