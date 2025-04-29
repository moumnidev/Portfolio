import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "cdn.jsdelivr.net"], // ajoute ici les sources d’images externes que tu utilises
  },
};

export default nextConfig;
