import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  transpilePackages: ["briven-ui"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
