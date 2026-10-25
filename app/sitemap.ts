import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

// One-page site: the homepage is the only URL.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://www.gobiya.com/', lastModified: '2026-10-25', changeFrequency: 'monthly', priority: 1 }]
}
