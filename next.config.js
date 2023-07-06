/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/uQZ29Pu.png',
      },
      {
        protocol: 'https',
        hostname: 'd2aaddunp29031.cloudfront.net',
        port: '',
        pathname: '/hero-demo.mp4',
      }
    ],
  },
}

module.exports = nextConfig
