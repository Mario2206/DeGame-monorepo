import { ethers } from 'ethers';
import gameComments from '../../../artifacts/contracts/gameComments.sol/gameComments.json';
import { COMMENTS_CONTRACT_ADDRESS } from '../../const/contractAddresses';
import { Comment } from '../types';
import { getAllMintableNfts, getGameById } from './gameCollection';

const BADGE_MANAGER_ABI = gameComments.abi;

export function getGameCommentsContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = ethers.ContractFactory.getContract(
    COMMENTS_CONTRACT_ADDRESS,
    BADGE_MANAGER_ABI,
    signer
  );
  return { contract, signer };
}

export async function getOwnedComments() {
  const { contract } = getGameCommentsContract();

  const result = await contract.getAllOwnedComments();

  const comments: Comment[] = [];

  const nfts = await getAllMintableNfts();

  for (let i = 0; i < result.length; i++) {
    const obj = result[i];

    const gameId = obj[1].toNumber();
    const nft = nfts.find((nft) => nft.id === gameId);

    if (!nft) continue;

    comments.push({
      id: obj[0].toNumber(),
      game: nft,
      rating: obj[2],
      author: obj[3],
      content: obj[4],
      timestamp: obj[5].toNumber(),
    });
  }

  return comments;
}

export async function getGameComments(gameId: number) {
  const { contract } = getGameCommentsContract();

  const result = await contract.getAllGamesComments(gameId);

  const comments: Comment[] = [];

  const nft = await getGameById(gameId);

  if (!nft) return [];

  for (let i = 0; i < result.length; i++) {
    const obj = result[i];

    comments.push({
      id: obj[0].toNumber(),
      game: nft,
      rating: obj[2],
      author: obj[3],
      content: obj[4],
      timestamp: obj[5].toNumber(),
    });
  }

  return comments;
}

export async function addComment(
  gameId: number,
  content: String,
  rating: number
) {
  try {
    const { contract } = getGameCommentsContract();
    const tx = await contract.addComment(gameId, content, rating);

    const receipt = await tx.wait();

    return receipt.status;
  } catch (err) {
    return false;
  }
}

export async function hasGameComment(gameId: number) {
  const ownedComments = await getOwnedComments();
  return ownedComments.find((comment) => comment.game.id === gameId)
    ? true
    : false;
}
