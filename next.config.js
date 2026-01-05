/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false, // No trailing slashes (default Next.js behavior)
  images: {
    domains: ['images.unsplash.com'],
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

