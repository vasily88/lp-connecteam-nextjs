/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // assetPrefix: './',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'connecteam.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
