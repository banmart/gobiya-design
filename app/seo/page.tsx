import PageShell from '@/components/PageShell'
import { pageMetadata } from '@/lib/metadata'
export const metadata = pageMetadata('Search engine optimization', 'Help customers find your services through search.', '/seo/')
export default function Page() {
  return <PageShell title="Search engine optimization" intro="Help customers find your services through search.">
    <section className="section section--sunk"><div className="wrap finder-layout"><div className="head"><h2 className="t">Content and technical foundations</h2><p>We review how search engines access your website and how well each page answers the searches relevant to your business.</p></div><div className="finder-detail"><h3>What we work on</h3><ul><li>Service pages and search-focused content</li><li>Local business information and consistency</li><li>Indexing, page titles, internal links, and speed</li></ul><a className="btn-dark" href="/contact/">Discuss your SEO ↗</a></div></div></section>
    <section className="section"><div className="wrap"><div className="head"><h2 className="t">How we approach it</h2><p>We review your current site, identify priorities, and improve the pages and technical issues that need attention.</p></div></div></section>
  </PageShell>
}
