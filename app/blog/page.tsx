import PageShell from '@/components/PageShell'
import BlogSection from '@/components/BlogSection'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata('Blog', 'Practical guides to website project planning, business listing hours, and AI crawler access from Gobiya Agency.', '/blog/')

export default function Page() {
  return <PageShell title="The Gobiya blog" intro="Useful answers to the questions that come up when you run a business website."><BlogSection /></PageShell>
}
