/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
 /* */images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
