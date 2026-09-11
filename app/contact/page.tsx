import PageShell from '@/components/PageShell'
import HomepageCheck from '@/components/HomepageCheck'
import { pageMetadata } from '@/lib/metadata'
export const metadata = pageMetadata('Contact', 'Contact Gobiya Agency in Los Angeles at 323-744-1338 to discuss your project or request a free website review.', '/contact/')
export default function Page() {
  return <PageShell title="Contact" intro="Tell us about your website and what you want to improve.">
    <section className="section section--sunk"><div className="wrap contact-layout"><div className="head"><h2 className="t">Talk about your project</h2><p><a className="textlink" href="tel:+13237441338">323-744-1338</a></p><p><a className="textlink" href="mailto:steve@gobiya.com">steve@gobiya.com</a></p><address className="company-address"><strong>Gobiya Agency</strong><br />3580 Wilshire Blvd, Ste 132<br />Los Angeles, CA 90010</address><p>Weekdays, 9 AM–5 PM<br />Saturday, 9 AM–3 PM</p></div><HomepageCheck /></div></section>
  </PageShell>
}
