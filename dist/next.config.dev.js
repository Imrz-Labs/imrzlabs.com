"use strict";

var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @type {import('next').NextConfig} */
module.exports = (_module$exports = {
  distDir: 'build',
  reactStrictMode: false,
  webpack5: true,
  webpack: function webpack(config) {
    config.resolve.fallback = {
      fs: false
    };
    return config;
  },
  future: {
    webpack5: true
  },
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
  }
}, _defineProperty(_module$exports, "reactStrictMode", true), _defineProperty(_module$exports, "presets", ["next/babel"]), _module$exports);