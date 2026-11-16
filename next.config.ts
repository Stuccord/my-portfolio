import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes a plain HTML/CSS/JS site to /out.
  output: "export",
  // Screenshots are already compressed WebP files, so no image server is needed.
  images: { unoptimized: true },
  trailingSlash: false,
  turbopack: { root: __dirname },
};

export default nextConfig;
