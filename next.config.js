/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'images.pexels.com',
      'images.unsplash.com',
      'via.placeholder.com'
    ],
  },
  env: {
    NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID || 'default-client-id',
  }
}

module.exports = nextConfig