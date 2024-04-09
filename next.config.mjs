/** @type {import('next').NextConfig} */
const nextConfig = {

  webpack: (config) => {
    config.externals = [...config.externals]
    return config;
  },

  output: 'standalone'
};

export default nextConfig;
