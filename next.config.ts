import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  compress: true,
  poweredByHeader: false,
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb"
    }
  },
  async redirects() {
    return [
      {
        source: "/categories",
        destination: "/bundles",
        permanent: true
      },
      {
        source: "/packs",
        destination: "/bundles",
        permanent: true
      }
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
