import { ethers } from "hardhat";

async function main() {
	const gameCollection = await ethers.deployContract("GameCollection");

	await gameCollection.waitForDeployment();

	const game1Price = "1";
	const game2Price = "2";

	await gameCollection.registerGame(ethers.parseEther(game1Price), 10);
	await gameCollection.registerGame(ethers.parseEther(game2Price), 10);

	console.log(`Contract deployed to ${gameCollection.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
