import PageShell from '@/components/PageShell'
import Testimonials from '@/components/Testimonials'
import { pageMetadata } from '@/lib/metadata'
export const metadata = pageMetadata('About', 'Gobiya Agency is a Los Angeles web design and search studio, serving businesses since 2010.', '/about/')
export default function Page() {
  return <PageShell title="About Gobiya Agency" intro="A Los Angeles web design and search studio, serving businesses since 2010.">
    <section className="section section--sunk"><div className="wrap def"><div className="prose"><h2 className="t">Work directly with a specialist</h2><p>We build custom websites and help businesses improve their search presence. You work directly with a senior specialist from the first conversation through delivery.</p><p>Based in Los Angeles, we work remotely with businesses across the United States.</p><a className="textlink" href="/contact/">Contact Gobiya Agency ↗</a></div><dl className="facts"><div><dt>Established</dt><dd>2010</dd></div><div><dt>Customers served</dt><dd>300+</dd></div><div><dt>Based in</dt><dd>Los Angeles, California</dd></div></dl></div></section>
    <Testimonials customer="ghost" />
  </PageShell>
}
