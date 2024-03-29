import { BigNumber, ethers } from "ethers";
import badgeManager from "./artifacts/BadgeManager.sol/BadgeManager.json";
import { BADGE_MANAGER_CONTRACT_ADDRESS } from "../../const/contractAddresses";
import { NftBadge } from "../types";

const BADGE_MANAGER_ABI = badgeManager.abi;

const badgeMetadata: NftBadge[] = [
	{
		id: 1,
		name: "First game",
		description: "You bought your first game!",
		color: "#3278f0",
	},
	{
		id: 2,
		name: "First rating",
		description: "You rated your first game!",
		color: "#eb4034",
	},
];

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

export async function getMyBadges() {
	const { contract } = getBadgeManagerContract();
	const badges = (await contract.getMyBadges()) as BigNumber[];
	return badges.map((badge) => {
		const id = badge.toNumber();
		return badgeMetadata.find((b) => b.id === id);
	})
	.filter((badge) => badge !== undefined) as NftBadge[];
}


export const getBadgeMetadata = (id: number) => {
	return badgeMetadata.find((badge) => badge.id == id);
}