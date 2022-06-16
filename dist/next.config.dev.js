"use strict";

/** @type {import('next').NextConfig} */
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  reactStrictMode: true,
  "presets": ["next/babel"]
};