import PageShell from '@/components/PageShell'
import WorkSection from '@/components/WorkSection'
import { pageMetadata } from '@/lib/metadata'
export const metadata = pageMetadata('Work', 'Explore website design examples across business, product, and interactive sites.', '/work/')
export default function Page() {
  return <PageShell title="Work" intro="Website design examples for business, product, and interactive experiences."><WorkSection /></PageShell>
}
