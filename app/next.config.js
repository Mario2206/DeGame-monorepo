/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath: "",
	env: {
		GAME_CONTRACT_ADDRESS: process.env.GAME_CONTRACT_ADDRESS,
		BADGE_MANAGER_CONTRACT_ADDRESS: process.env.BADGE_MANAGER_CONTRACT_ADDRESS,
	},
};

module.exports = nextConfig;
