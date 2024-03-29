import { ethers } from 'hardhat';

async function deployGameCollection() {
  const gameCollection = await ethers.deployContract('GameCollection');
  await gameCollection.waitForDeployment();

  const game1Price = '0.001';
  const game2Price = '0.002';

  await gameCollection.registerGame(ethers.parseEther(game1Price), 10);
  await gameCollection.registerGame(ethers.parseEther(game2Price), 10);

  await gameCollection.registerGame(ethers.parseEther(game1Price), 10);
  await gameCollection.registerGame(ethers.parseEther(game2Price), 10);
  await gameCollection.registerGame(ethers.parseEther(game2Price), 10);
  await gameCollection.registerGame(ethers.parseEther(game2Price), 10);
  await gameCollection.registerGame(ethers.parseEther(game2Price), 10);

  console.log(`Game contract deployed to ${gameCollection.target}`);
  return gameCollection;
}

async function deployBadgeManager() {
  const badgeManager = await ethers.deployContract('BadgeManager');
  await badgeManager.waitForDeployment();

  await badgeManager.registerBadge(); // First game bought
  await badgeManager.registerBadge(); // First comment created

  console.log(`BadgeManager contract deployed to ${badgeManager.target}`);
  return badgeManager;
}

async function deployGameComments() {
  const gameComments = await ethers.deployContract('GameComments');
  await gameComments.waitForDeployment();

  console.log(`GameComments contract deployed to ${gameComments.target}`);
  return gameComments;
}

async function main() {
  const gameCollection = await deployGameCollection();

  const badgeManager = await deployBadgeManager();

  const commentsManager = await deployGameComments();

  // Allow the GameCollection contract to mint badges
  await badgeManager.setAllowedContract(gameCollection.target, true);
  await badgeManager.setAllowedContract(commentsManager.target, true);

  // Set the BadgeManager contract on the contracts s
  await gameCollection.setBadgeManager(badgeManager.target);
  await commentsManager.setBadgeManager(badgeManager.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
