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
}

export default nextConfig
