import type { Metadata } from 'next'
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return { title: `${title} | Gobiya Agency`, description, alternates: { canonical: path }, openGraph: { title: `${title} | Gobiya Agency`, description, url: path }, twitter: { title: `${title} | Gobiya Agency`, description } }
}
