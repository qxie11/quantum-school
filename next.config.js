/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    formats: ["image/webp"],
    domains: ["localhost"],
  },
  compress: true,
  webpack(config) {
    return config;
  },
};

module.exports = nextConfig;
