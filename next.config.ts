import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Keep build checks from overwriting the running development server's files.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  // The review form uses a server-side route (/api/review) to keep Resend credentials private.
  images: {
    unoptimized: true,
  },
  // Trailing slash keeps canonical URLs clean
  trailingSlash: true,
  // The site is a single page now. Every former page permanently redirects (308)
  // to the matching section of the homepage so old links keep their value.
  async redirects() {
    const to = (source: string, destination: string) => ({ source, destination, permanent: true })
    return [
      // Sub pages of the previous site
      to('/web-design', '/#services'),
      to('/seo', '/#services'),
      to('/ai-search', '/#ai'),
      to('/work', '/#work'),
      to('/work/:path*', '/#work'),
      to('/about', '/#how'),
      to('/contact', '/#contact'),
      to('/thank-you', '/#contact'),
      to('/blog', '/'),
      to('/blog/:path*', '/'),
      // Pages from the older site
      to('/insights', '/'),
      to('/glossary', '/'),
      to('/services', '/#services'),
      to('/solutions', '/#services'),
      to('/process', '/#how'),
      to('/seo-myths', '/#services'),
      to('/los-angeles-seo', '/#services'),
      to('/glendale-seo', '/#services'),
      to('/van-nuys-seo', '/#services'),
      to('/studio-city-seo', '/#services'),
    ]
  },
}

export default nextConfig
