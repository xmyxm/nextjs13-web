/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "p0.meituan.net",
                port: "",
                pathname: "/scarlett/**",
            },
        ],
    },
};

module.exports = nextConfig;
