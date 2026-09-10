import PageShell from '@/components/PageShell'
import CheckForm from '@/components/CheckForm'
import { pageMetadata } from '@/lib/metadata'
export const metadata = pageMetadata('Contact', 'Contact Gobiya to discuss your project or request a free website analysis.', '/contact/')
export default function Page() {
  return <PageShell title="Contact" intro="Tell us about your website and what you want to improve.">
    <section className="section section--sunk"><div className="wrap contact-layout"><div className="head"><h2 className="t">Talk about your project</h2><p><a className="textlink" href="tel:+13237441338">323-744-1338</a></p><p><a className="textlink" href="mailto:hello@gobiya.com">hello@gobiya.com</a></p><p>Los Angeles · Weekdays, 9–6 Pacific</p></div><CheckForm /></div></section>
  </PageShell>
}
