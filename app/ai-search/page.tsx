import PageShell from '@/components/PageShell'
import { pageMetadata } from '@/lib/metadata'
export const metadata = pageMetadata('AI search optimization', 'Make your business information clear and accessible to AI search tools.', '/ai-search/')
export default function Page() {
  return <PageShell title="AI search optimization" intro="Make your business information clear and accessible to AI search tools.">
    <section className="section section--sunk"><div className="wrap finder-layout"><div className="head"><h2 className="t">Help tools understand your business</h2><p>We organize your services, business facts, and customer answers so they can be read in context by search and AI systems.</p></div><div className="finder-detail"><h3>What we work on</h3><ul><li>Clear answers to customer questions</li><li>Accurate business information and structured data</li><li>Content accessibility and crawler settings review</li></ul><a className="btn-dark" href="/contact/">Discuss AI search ↗</a></div></div></section>
    <section className="section"><div className="wrap"><div className="head"><h2 className="t">How we approach it</h2><p>We review your content and technical setup, then address gaps in structure, clarity, and access. Inclusion in AI answers is controlled by each platform and cannot be guaranteed.</p></div></div></section>
  </PageShell>
}
