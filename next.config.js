/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/EHsite',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '/EHsite/',
}

module.exports = nextConfig 