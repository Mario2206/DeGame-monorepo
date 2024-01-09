/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  env: {
    NFT_CONTRACT_ADDRESS: process.env.NFT_CONTRACT_ADDRESS,
    COMMENTS_CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
  },
};

module.exports = nextConfig;
