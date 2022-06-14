/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "raw.githubusercontent.com",
      "images.unsplash.com",
      "source.unsplash.com",
    ],
  },
});
