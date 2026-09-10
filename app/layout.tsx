import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gobiya — Web design and AI search optimization | Los Angeles',
  description:
    'Gobiya is a Los Angeles web design and search studio. We build fast custom websites and structure them so Google, ChatGPT, Perplexity and AI Overviews can find and cite your business.',
  metadataBase: new URL('https://www.gobiya.com'),
  alternates: { canonical: 'https://www.gobiya.com/' },
  themeColor: '#eef2ee',
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
    {
      '@type': 'FAQPage',
      '@id': 'https://www.gobiya.com/#faq',
      isPartOf: { '@id': 'https://www.gobiya.com/#website' },
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does Gobiya do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gobiya is a Los Angeles web design and search optimization studio. We build fast custom websites and structure them so both traditional search engines and AI tools like ChatGPT, Perplexity and Google AI Overviews can find, understand and cite the business.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is AI search different from normal SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional SEO competes for a position in a list of links. AI search competes to be quoted inside a written answer. That rewards clearly structured facts, self-contained paragraphs, real question-and-answer content, and crawler access for AI bots, which are separate from Googlebot and often blocked by accident.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will you rebuild my site, or fix the one I have?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Either. If the site is fundamentally sound we improve the structure, speed and content in place, which is usually cheaper and keeps existing rankings. A rebuild only makes sense when the existing site is slow, unmaintainable, or built on something that blocks the work.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you use AI to build the sites?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Gobiya are vibe coders and custom coders both: AI writes the first pass, a senior developer reads every line, cuts what is not earning its place, and hand-tunes the rest.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who will I actually be working with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'One senior specialist with more than fifteen years of experience, directly. No account managers, no junior hand-offs, no offshore team writing your pages.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long before anything happens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Technical fixes such as speed, structured data and crawler access show up in weeks. Ranking and citation changes take longer, typically a few months, because search engines and AI models both need to re-crawl and re-index before anything shifts.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with businesses outside Los Angeles?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The studio is based in Los Angeles and knows the local market well, but the work is remote-friendly and clients are welcome from anywhere in the US.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
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
