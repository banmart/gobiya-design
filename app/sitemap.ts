import type { MetadataRoute } from 'next'
import { navigation } from '@/lib/navigation'
import { articles } from '@/lib/articles'
export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', ...navigation.map(item => item.href), ...articles.map(article => `/blog/${article.slug}/`)].map(path => ({ url: `https://www.gobiya.com${path}` }))
}
export const dynamic = 'force-static'
