/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                hostname: "wp.luxesoftwares.com.br",
                protocol: "https"
            }
        ]
    }
};

export default nextConfig;
