import { ethers } from 'hardhat';

async function deployGameCollection() {
  const gameCollection = await ethers.deployContract('GameCollection');
  await gameCollection.waitForDeployment();

  const game1Price = '1';
  const game2Price = '2';

  await gameCollection.registerGame(ethers.parseEther(game1Price), 10);
  await gameCollection.registerGame(ethers.parseEther(game2Price), 10);

  console.log(`Game contract deployed to ${gameCollection.target}`);
  return gameCollection;
}

async function deployGameComments() {
  const gameComments = await ethers.deployContract('GameComments');
  await gameComments.waitForDeployment();

  console.log(`GameComments contract deployed to ${gameComments.target}`);
  return gameComments;
}

async function main() {
  const gameCollection = await deployGameCollection();

  const gameComments = await deployGameComments();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
