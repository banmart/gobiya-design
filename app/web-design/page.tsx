import PageShell from '@/components/PageShell'
import Testimonials from '@/components/Testimonials'
import { pageMetadata } from '@/lib/metadata'
export const metadata = pageMetadata('Web design', 'Custom websites built around your business, your content, and your customers.', '/web-design/')
export default function Page() {
  return <PageShell title="Web design" intro="Custom websites built around your business, your content, and your customers.">
    <section className="section section--sunk"><div className="wrap finder-layout"><div className="head"><h2 className="t">A clear path from visit to enquiry</h2><p>We plan your pages, write focused content, and build responsive layouts that make your services easy to understand.</p></div><div className="finder-detail"><h3>What we work on</h3><ul><li>Page structure and navigation</li><li>Custom design and mobile layouts</li><li>Performance and accessibility checks</li></ul><a className="btn-dark" href="/contact/">Discuss your website ↗</a></div></div></section>
    <section className="section"><div className="wrap"><div className="head"><h2 className="t">How we approach it</h2><p>We agree on the content and page structure, develop the design, then check the finished site before launch.</p></div></div></section>
    <Testimonials customer="nicole" />
  </PageShell>
}
