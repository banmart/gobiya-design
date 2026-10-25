import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

// Search and AI crawlers may read the public homepage; the form endpoint is not a page.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/api/' }],
    sitemap: 'https://www.gobiya.com/sitemap.xml',
    host: 'https://www.gobiya.com',
  }
}
