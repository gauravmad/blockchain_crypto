/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
 eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript build errors
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
