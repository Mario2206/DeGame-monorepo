/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Localhost, Sepolia } from '@thirdweb-dev/chains';

const LocalhostNetwork = { ...Localhost, chainId: 31337 };

export const NETWORK = Sepolia;

// 3. The address of your NFT collection smart contract.
export const GAME_CONTRACT_ADDRESS = process.env.GAME_CONTRACT_ADDRESS || '';

export const COMMENTS_CONTRACT_ADDRESS =
  process.env.COMMENTS_CONTRACT_ADDRESS || '';

export const BADGE_MANAGER_CONTRACT_ADDRESS =
  process.env.BADGE_MANAGER_CONTRACT_ADDRESS || '';
