/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignore ESLint errors during production builds (use cautiously)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Enable React strict mode for improved error handling
  reactStrictMode: true,

  // Automatically inline font CSS in the HTML document head
  optimizeFonts: true,

  // Enable image optimization
  images: {
    domains: ['example.com'], // Add domains for external images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable page-level caching for improved performance
  experimental: {
    serverActions: true,
  },

  // Customize the build output directory
  distDir: 'build',
};

export default nextConfig;
