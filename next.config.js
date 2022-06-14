/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "images.unsplash.com","source.unsplash.com"],
  },
};

module.exports = nextConfig;
