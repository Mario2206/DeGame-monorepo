import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "1234567891234567890123456789012345678901234567890123456789012340" as string;

const config: HardhatUserConfig = {
	solidity: "0.8.20",
	networks: {
		sepolia: {
			url: process.env.API_URL || "http://localhost:8545",
			accounts: [PRIVATE_KEY],
		},
	},
};

export default config;
