import { ethers } from "hardhat";

async function deployGameCollection() {
	const gameCollection = await ethers.deployContract("GameCollection");
	await gameCollection.waitForDeployment();

	const game1Price = "1";
	const game2Price = "2";

	await gameCollection.registerGame(ethers.parseEther(game1Price), 10);
	await gameCollection.registerGame(ethers.parseEther(game2Price), 10);
	await gameCollection.registerGame(ethers.parseEther(game2Price), 10);
	await gameCollection.registerGame(ethers.parseEther(game2Price), 10);
	await gameCollection.registerGame(ethers.parseEther(game2Price), 10);

	console.log(`Game contract deployed to ${gameCollection.target}`);
	return gameCollection;
}

async function deployBadgeManager() {
	const badgeManager = await ethers.deployContract("BadgeManager");
	await badgeManager.waitForDeployment();

	await badgeManager.registerBadge();

	console.log(`BadgeManager contract deployed to ${badgeManager.target}`);
	return badgeManager;
}

async function main() {
	const gameCollection = await deployGameCollection();

	const badgeManager = await deployBadgeManager();

	// Allow the GameCollection contract to mint badges
	await badgeManager.setAllowedContract(gameCollection.target, true);

	// Set the BadgeManager contract on the GameCollection contract so it can interact with the deployed BadgeManager
	await gameCollection.setBadgeManager(badgeManager.target);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
