/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images:{
    domains:['cdn.sanity.io']
  }
}

module.exports = nextConfig
