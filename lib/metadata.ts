import type { Metadata } from 'next'
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return { title: `${title} | Gobiya`, description, alternates: { canonical: path }, openGraph: { title: `${title} | Gobiya`, description, url: path }, twitter: { title: `${title} | Gobiya`, description } }
}
