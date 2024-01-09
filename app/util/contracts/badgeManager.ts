import { ethers } from "ethers";
import badgeManager from "../../../artifacts/contracts/badgeManager.sol/badgeManager.json";
import { BADGE_MANAGER_CONTRACT_ADDRESS } from "../../const/contractAddresses";

const BADGE_MANAGER_ABI = badgeManager.abi;

export function getBadgeManagerContract() {
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();
	const contract = ethers.ContractFactory.getContract(
		BADGE_MANAGER_CONTRACT_ADDRESS,
		BADGE_MANAGER_ABI,
		signer
	);
	return { contract, signer };
}

export function getMyBadges() {
  const { contract } = getBadgeManagerContract();
  // TODO: fix this since it doesn't work
  return contract.getMyBadges();
}