import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ensures React runs in strict mode
};

export default nextConfig;

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
    ];
  },
};
