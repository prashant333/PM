import type { NextConfig } from "next";

// GitHub Pages serves the production site under the /PM/ subpath, but local
// `next dev` should stay at the root. Only apply the Pages config in prod.
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isProd
    ? {
        output: "export",
        basePath: "/PM",
        // GitHub Pages has no Next.js image-optimization server, so images
        // must be served as-is for next/image to work on a static export.
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
