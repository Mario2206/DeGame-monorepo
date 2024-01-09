import { ethers } from 'hardhat';

const CONTRACT = {
  GAME_COLLECTION: 'GameCollection',
  GAME_COMMENTS: 'GameComments',
};

async function main() {
  const gameCollection = await ethers.deployContract(CONTRACT.GAME_COLLECTION);

  await gameCollection.waitForDeployment();

  const game1Price = '1';
  const game2Price = '2';

  await gameCollection.registerGame(ethers.parseEther(game1Price), 10);
  await gameCollection.registerGame(ethers.parseEther(game2Price), 10);

  console.log(
    `Contract ${CONTRACT.GAME_COLLECTION} deployed to ${gameCollection.target}`
  );

  const gameComments = await ethers.deployContract(CONTRACT.GAME_COMMENTS);

  await gameComments.waitForDeployment();

  console.log(
    `Contract ${CONTRACT.GAME_COMMENTS} deployed to ${gameComments.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
