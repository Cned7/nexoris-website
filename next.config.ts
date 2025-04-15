import type { NextConfig } from 'next'
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ensures React runs in strict mode

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
}

export default nextConfig

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*', // Apply the header to all routes
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow', // Modify this value as needed
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
