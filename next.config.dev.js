"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  typedRoutes: true,
  images: {
    remotePatterns: ["github.com", "media.licdn.com", "res.cloudinary.com", "cloudinary.com"].map(
      (hostname) => ({ protocol: "https", hostname })
    )
  }
};
module.exports = nextConfig;
