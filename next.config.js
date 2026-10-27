/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "100dayscss.com" }],
  },
};

module.exports = nextConfig;
