/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "boezang.apiservices.my.id",
        port: "",
        pathname: "/Images/**",
      },
    ],
    domains: [
      "assets.aceternity.com",
      "encrypted-tbn0.gstatic.com",
      "placehold.co",
      "boezang.apiservices.my.id",
      "via.placeholder.com",
      "firebasestorage.googleapis.com",
      "localhost",
      "admin.boezangapple.com",
      "api.hkks.shop",
      "cloud.mystorages.my.id",
      "boezangapi.hkks.shop",
      "mystorages.cloud",
    ],
  },
};

export default nextConfig;
