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
        destination: 'https://amobvdltcwgicppocpnn.supabase.co/storage/v1/object/sign/resume/resume.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYTU5ZTBjMi0wZjE0LTQwZWUtOTUwNC02NDc2Y2ZkMTFkNGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXN1bWUvcmVzdW1lLnBkZiIsImlhdCI6MTc3MjAwMTg3MSwiZXhwIjoxNzcyNjA2NjcxfQ.8XgEFRAmYqpoNPiXOtcUfszNzbc0ozYa0k9eDKkvu28',
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
      {
        source: '/aeroguard',
        destination: 'https://aeroguard-gamma.vercel.app/',
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