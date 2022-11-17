/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // This must be disabled for `next export`
  images: { unoptimized: true },
}

module.exports = nextConfig
