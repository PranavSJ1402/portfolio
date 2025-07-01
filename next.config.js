/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required if you're using next/image without image optimization server
  },
};

module.exports = nextConfig;
