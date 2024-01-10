import { ethers } from 'ethers';
import { id } from 'ethers/lib/utils';
import gameComments from '../../../artifacts/contracts/gameComments.sol/gameComments.json';
import { COMMENTS_CONTRACT_ADDRESS } from '../../const/contractAddresses';

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

  const commentIds = await contract.getAllOwnedCommentsId();

  const comments = [];

  for (let i = 0; i < commentIds.length; i++) {
    const commentId = commentIds[i];
    const comment = await contract.getComment(commentId);

    comments.push({
      id: comment[0],
      author: comment[1],
      content: comment[2],
      timestamp: comment[3],
    });
  }
  return comments;
}

export async function addComment(content: String) {
  const { contract } = getGameCommentsContract();
  await contract.addComment(content);
}
