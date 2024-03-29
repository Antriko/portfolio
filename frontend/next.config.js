/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images : {
        // https://nextjs.org/docs/messages/export-image-api
        unoptimized: true
    },
    webpack: (config, context) => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300
      }
      return config
    }
  }

module.exports = nextConfig 
