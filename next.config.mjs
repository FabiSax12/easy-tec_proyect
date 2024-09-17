/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.icon-icons.com",
      },
      {
        // CDN for images
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ]
  }
}

export default nextConfig
