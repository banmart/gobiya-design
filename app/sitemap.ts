import type { MetadataRoute } from 'next'
import { navigation } from '@/lib/navigation'
export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', ...navigation.map(item => item.href)].map(path => ({ url: `https://www.gobiya.com${path}` }))
}
export const dynamic = 'force-static'
