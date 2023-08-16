/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["nanopro.uz", "api.generatoruz.com"],
  },
};

module.exports = nextConfig;
