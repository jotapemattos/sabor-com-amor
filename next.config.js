/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vugczgvubmxqvffdukjv.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/products/**'
      }
    ]
  }
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
