/** @type {import('next').NextConfig} */
const nextConfig = {
    images: module.exports = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'fakestoreapi.com',
              pathname: '/img/**',
            },
          ],
        },
      }
    };
