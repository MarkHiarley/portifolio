import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Origens que servem o dev server por HTTPS (túnel/proxy). Sem isso, o Next
  // recusa os pedidos cross-origin para /_next/* e a página chega sem hidratar.
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.1.220",
    "chatvolt.isaacvshiarley.cloud",
    "*.isaacvshiarley.cloud",
  ],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
