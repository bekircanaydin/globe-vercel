/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['three']
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  output: 'standalone'
}
export default nextConfig
