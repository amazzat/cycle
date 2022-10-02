const withRoutes = require("nextjs-routes/config")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      { source: "/:path*", destination: "https://cycle.framer.website/:path*" },
    ];
  },
};

module.exports = withRoutes(nextConfig);
