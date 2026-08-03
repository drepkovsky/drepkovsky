import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ships a self-contained server plus only the node_modules it actually
  // imports, which is what keeps the container image small.
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // cv.drepkovsky.com predates this rebuild and still has a TLS cert.
      // Point it at the page rather than letting two hosts serve one site.
      {
        source: "/:path*",
        has: [{ type: "host", value: "cv.drepkovsky.com" }],
        destination: "https://drepkovsky.com/cv",
        permanent: true,
      },
      // www never had a cert; kept here so it works the day one is issued.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.drepkovsky.com" }],
        destination: "https://drepkovsky.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
