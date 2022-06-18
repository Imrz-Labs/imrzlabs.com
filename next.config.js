/** @type {import('next').NextConfig} */
module.exports = {

  distDir: 'build',

  reactStrictMode: false,
  webpack5: true,
  webpack: (config) => {
      config.resolve.fallback = { fs: false };
      return config;
    },

  future: { webpack5: true },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  
  reactStrictMode: true,
  "presets": ["next/babel"]
}

