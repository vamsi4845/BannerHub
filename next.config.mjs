/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
      },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['bannerbot-public.s3.ap-south-1.amazonaws.com', 'images.unsplash.com'],
    },
};

export default nextConfig;
