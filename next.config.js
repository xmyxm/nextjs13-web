/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["p0.meituan.net", "qqweb.top"],
  },
}

module.exports = nextConfig
