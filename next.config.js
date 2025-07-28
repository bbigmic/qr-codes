/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // SEO i performance
  compress: true,
  poweredByHeader: false,
  
  // Headers dla SEO
  async headers() {
    return [
      {
        source: '/(.*)',
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
        ],
      },
    ];
  },
  
  // Redirects dla SEO
  async redirects() {
    return [
      {
        source: '/qr-generator',
        destination: '/',
        permanent: true,
      },
      {
        source: '/generator-qr',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig; 