/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
    images: {
        domains: [
          "uawwnkwoyhkmotmoncgk.supabase.co",
        ],
      },
}

module.exports = nextConfig
