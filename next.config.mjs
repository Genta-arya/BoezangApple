/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "boezangapi.hkks.shop",
        port: "",
        pathname: "/Images/**",
      },
    ],
    domains: [
      "assets.aceternity.com",
      "encrypted-tbn0.gstatic.com",
      "placehold.co",
      "via.placeholder.com",
      "firebasestorage.googleapis.com",
      "localhost",
      "api.hkks.shop",
      "boezangapi.hkks.shop",
    ],
  },
};

export default nextConfig;
