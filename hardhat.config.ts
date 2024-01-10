import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
	solidity: "0.8.20",
	networks: {
		sepolia: {
			url: process.env.API_URL,
			accounts: [process.env.PRIVATE_KEY as string],
		},
	},
};

export default config;
