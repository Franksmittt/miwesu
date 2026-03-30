/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false, // No trailing slashes (default Next.js behavior)
  async redirects() {
    return [
      { source: '/tools/biltong', destination: '/tools/biltong-calculator', permanent: true },
      { source: '/tools/saps520', destination: '/tools/saps-520', permanent: true },
    ]
  },
  images: {
    domains: ['images.unsplash.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  serverExternalPackages: ['@react-pdf/renderer'],
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async headers() {
    const isProduction = process.env.NODE_ENV === 'production' || 
                        process.env.VERCEL_ENV === 'production'
    
    // Security headers for non-production (X-Robots-Tag: noindex)
    const securityHeaders = isProduction
      ? []
      : [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ]

    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          ...securityHeaders,
        ],
      },
    ]
  },
}

module.exports = nextConfig

