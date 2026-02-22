import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Set up the professional redirects
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/resume.pdf', // Ensure this file is in your /public folder
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/sabuhiabs',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/sabbasov',
        permanent: true,
      },
    ];
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', 
      },
    ],
  },
  output: 'standalone',
  // Note: 'framer-motion' usually doesn't need transpiling in newer Next.js versions, 
  // but keeping it if your specific environment requires it.
  transpilePackages: ['motion'],
  webpack: (config, { dev }) => {
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;