import type { Metadata } from 'next'
import { Anton, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
})

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gobiya — Web design and AI search optimization | Los Angeles',
  description:
    'Gobiya is a Los Angeles web design and search studio. We build fast custom websites and structure them so Google, ChatGPT, Perplexity and AI Overviews can find and cite your business.',
  metadataBase: new URL('https://www.gobiya.com'),
  alternates: { canonical: 'https://www.gobiya.com/' },

  openGraph: {
    type: 'website',
    url: 'https://www.gobiya.com/',
    siteName: 'Gobiya',
    title: 'Gobiya — Web design and AI search optimization | Los Angeles',
    description:
      'Fast custom websites, structured so Google and AI search can find and cite your business. Los Angeles.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gobiya — Web design and AI search optimization',
    description:
      'Fast custom websites, structured so Google and AI search can find and cite your business.',
  },
  icons: {
    icon: { url: '/gobiya-logo-neon-black.webp', sizes: '1075x1075', type: 'image/webp' },
    apple: '/gobiya-logo-neon-black.webp',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.gobiya.com/#studio',
      name: 'Gobiya',
      description:
        'Los Angeles web design and search optimization studio building fast custom websites structured for Google and AI search.',
      url: 'https://www.gobiya.com/',
      email: 'hello@gobiya.com',
      telephone: '+1-323-744-1338',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          telephone: '+1-323-744-1338',
          email: 'steve@gobiya.com',
          areaServed: 'US',
          availableLanguage: 'English',
        },
      ],
      areaServed: [
        { '@type': 'City', name: 'Los Angeles' },
        { '@type': 'State', name: 'California' },
        { '@type': 'Country', name: 'United States' },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Los Angeles',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
      knowsAbout: [
        'Web design',
        'Search engine optimization',
        'Generative engine optimization',
        'Schema.org structured data',
        'Core Web Vitals',
      ],
      makesOffer: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom web design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search engine optimization' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI search optimization (GEO)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Schema markup implementation' } },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.gobiya.com/#website',
      url: 'https://www.gobiya.com/',
      name: 'Gobiya',
      publisher: { '@id': 'https://www.gobiya.com/#studio' },
      inLanguage: 'en-US',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${anton.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body id="top">
        {children}
      </body>
    </html>
  )
}
