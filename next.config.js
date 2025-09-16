/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration for GitHub Pages
  output: 'export',
  basePath: isProd ? '/Website_Mockup_Integration' : '',
  assetPrefix: isProd ? '/Website_Mockup_Integration/' : '',
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@material/web'],
  },
  
  // Image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // PWA & SEO optimizations
  poweredByHeader: false,
  compress: true,
  
  // Material Web Components support
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  
  // Environment variables
  env: {
    SITE_NAME: 'Reservia M3',
    SITE_URL: 'https://okamixtape.github.io/Website_Mockup_Integration',
  },
};

module.exports = nextConfig;
