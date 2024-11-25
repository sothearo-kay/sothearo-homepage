import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mangadex.org",
        pathname: "/covers/**",
      },
    ],
  },
};

export default nextConfig;
