/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    formats: ["image/webp"],
    domains: ["localhost"],
  },
  compress: true,
};

module.exports = nextConfig;
