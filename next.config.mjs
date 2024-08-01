/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    // basePath: process.env.BASE_PATH ? process.env.BASE_PATH : "",
    // assetPrefix: process.env.URL ? process.env.URL : undefined,
    images: {
        domains: [
            'acispempiretest.s3.amazonaws.com',
            'acispempiretest.s3.us-east-2.amazonaws.com'
        ],
    },

};

export default nextConfig;