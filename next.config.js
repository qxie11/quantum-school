/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ["localhost"],
  },
  webpack(config) {
    return config;
  },
};

module.exports = nextConfig;
