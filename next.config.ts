import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  allowedDevOrigins: ["100.75.185.45", "10.0.0.25"],
};

export default nextConfig;
