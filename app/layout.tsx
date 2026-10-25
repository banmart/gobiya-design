import type { Metadata, Viewport } from 'next'
import './globals.css'
import structuredData from '@/lib/structured-data.json'
import WebMcpTools from '@/components/WebMcpTools'

const title = 'Gobiya | Los Angeles Web Design, SEO & AI Search Agency'
const description =
  'Gobiya is a Koreatown, Los Angeles web design agency. We design, build and optimize custom websites for Google, Maps and AI search. Free site review.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gobiya.com'),
  title,
  description,
  alternates: { canonical: '/', languages: { 'en-US': '/', 'x-default': '/' } },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  authors: [{ name: 'Gobiya' }],
  formatDetection: { telephone: false },
  verification: { google: 'BCJ8-9rzY9X5CjZqM2hY7erF-1vFCZHFKl-Y-nbXv3U' },
  other: { 'geo.region': 'US-CA', 'geo.placename': 'Los Angeles' },
  openGraph: {
    type: 'website',
    siteName: 'Gobiya',
    locale: 'en_US',
    url: '/',
    title: 'Gobiya: Los Angeles web design, SEO & AI search',
    description:
      'We design, build and optimize custom websites so Los Angeles businesses get found on Google, Maps and AI search. Start with a free site review.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Gobiya: built already, now make it found. Los Angeles web design, SEO and AI search.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gobiya: Los Angeles web design, SEO & AI search',
    description: 'Custom websites built to be found on Google, Maps and AI search. Free site review.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [{ url: '/favicon-48.png', sizes: '48x48', type: 'image/png' }, { url: '/icon-192.png', sizes: '192x192', type: 'image/png' }],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#f5f5f7',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        {/* Marks the page as scripted before first paint so reveal animations start hidden. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <link rel="preload" as="image" href="/gobiya-logo-neon-black-sm.webp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className="lock" suppressHydrationWarning>
        <WebMcpTools />
        {children}
      </body>
    </html>
  )
}
