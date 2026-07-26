import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Unlisted: AWS SAA-C03 flashcards, served from public/aws.html
      { source: "/aws", destination: "/aws.html" },
    ];
  },
};

export default nextConfig;
