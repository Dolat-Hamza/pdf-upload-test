/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
      images: {
        domains: ['firebasestorage.googleapis.com','storage.tally.so'],
      }
}

module.exports = nextConfig
