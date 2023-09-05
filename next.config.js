/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/deleted-forever",
        destination: "/products",
        permanent: true,
      }, // 308 is a permanent redirect
      {
        source: "/products/deleted-temp",
        destination: "/products",
        permanent: false,
      }, // 307 is a temporary redirect
    ];
  },
  async rewrites() {
    return [
      {
        source: "/ellie",
        destination: "/about/me/ellie",
      },
      {
        source: "/items/:slug",
        destination: "/products/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
