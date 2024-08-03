/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
      },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
        domains: ['bannerbot-public.s3.ap-south-1.amazonaws.com', 'images.unsplash.com'],
    },
};

export default nextConfig;
