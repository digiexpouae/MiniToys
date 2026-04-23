/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // experimental: {

  //   optimizeCss: true,
  // },
  images: {
    domains: ['picsum.photos'], // Add all external image hosts here

    unoptimized: true,

  },
};

export default nextConfig;
