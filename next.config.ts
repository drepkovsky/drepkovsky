import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ships a self-contained server plus only the node_modules it actually
  // imports, which is what keeps the container image small.
  output: "standalone",
  // The image build does not re-run tsc: Woodpecker typechecks as its own
  // step, and repeating it inside an emulated amd64 build is what was getting
  // the builder OOM-killed. A type error still fails the pipeline, just earlier.
  // One worker when NEXT_LIMIT_WORKERS is set. Only the emulated amd64 build
  // on an ARM machine needs this: three parallel workers under QEMU exceed the
  // builder's memory and get SIGKILLed. CI builds natively and skips it.
  experimental: process.env.NEXT_LIMIT_WORKERS ? { cpus: 1 } : {},
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
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
