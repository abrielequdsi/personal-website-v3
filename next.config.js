/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3.us-west-2.amazonaws.com', 'media.licdn.com'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
