import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Keep build checks from overwriting the running development server's files.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  // The review form uses a server-side route to keep Resend credentials private.
  // Disable Next's built-in image optimizer (not available in static export)
  // and keep animated webp / gif playing as plain <img> tags
  images: {
    unoptimized: true,
  },
  // Trailing slash keeps canonical URLs clean on static hosts
  trailingSlash: true,
  // Pages from the previous site that no longer exist. Permanent (308) so the
  // old URLs pass their link equity to the closest page we still publish.
  async redirects() {
    return [
      // Article archive -> the blog
      { source: '/insights', destination: '/blog/', permanent: true },
      { source: '/glossary', destination: '/blog/', permanent: true },
      // Service overviews -> the homepage, where every service is listed
      { source: '/services', destination: '/', permanent: true },
      { source: '/solutions', destination: '/', permanent: true },
      // How we work -> about
      { source: '/process', destination: '/about/', permanent: true },
      // Search topic and city landing pages -> the SEO service page
      { source: '/seo-myths', destination: '/seo/', permanent: true },
      { source: '/los-angeles-seo', destination: '/seo/', permanent: true },
      { source: '/glendale-seo', destination: '/seo/', permanent: true },
      { source: '/van-nuys-seo', destination: '/seo/', permanent: true },
      { source: '/studio-city-seo', destination: '/seo/', permanent: true },
      // Retired case study -> the work index
      { source: '/work/the-healing-metta', destination: '/work/', permanent: true },
    ]
  },
}

export default nextConfig
