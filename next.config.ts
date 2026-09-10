import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static export — zero server required, same perf story as the original
  output: 'export',
  // Disable Next's built-in image optimizer (not available in static export)
  // and keep animated webp / gif playing as plain <img> tags
  images: {
    unoptimized: true,
  },
  // Trailing slash keeps canonical URLs clean on static hosts
  trailingSlash: true,
}

export default nextConfig
