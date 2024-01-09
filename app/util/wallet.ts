import { ethers } from "ethers";
import type { NFT as NFTType } from "@thirdweb-dev/sdk";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import { NftGame } from "./types";

const abi = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "balance",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "needed",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "ERC1155InsufficientBalance",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "approver",
				type: "address",
			},
		],
		name: "ERC1155InvalidApprover",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "idsLength",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "valuesLength",
				type: "uint256",
			},
		],
		name: "ERC1155InvalidArrayLength",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
		],
		name: "ERC1155InvalidOperator",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "receiver",
				type: "address",
			},
		],
		name: "ERC1155InvalidReceiver",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address",
			},
		],
		name: "ERC1155InvalidSender",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		name: "ERC1155MissingApprovalForAll",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		name: "OwnableInvalidOwner",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "OwnableUnauthorizedAccount",
		type: "error",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool",
			},
		],
		name: "ApprovalForAll",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "gameId",
				type: "uint256",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
		],
		name: "Minted",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "gameId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "price",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint16",
				name: "royaltyPercent",
				type: "uint16",
			},
		],
		name: "RegisterGame",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256[]",
				name: "ids",
				type: "uint256[]",
			},
			{
				indexed: false,
				internalType: "uint256[]",
				name: "values",
				type: "uint256[]",
			},
		],
		name: "TransferBatch",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "TransferSingle",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "string",
				name: "value",
				type: "string",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
		],
		name: "URI",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address[]",
				name: "accounts",
				type: "address[]",
			},
			{
				internalType: "uint256[]",
				name: "ids",
				type: "uint256[]",
			},
		],
		name: "balanceOfBatch",
		outputs: [
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "contractURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "games",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "idCounter",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
		],
		name: "isApprovedForAll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "gameId",
				type: "uint256",
			},
		],
		name: "mint",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256[]",
				name: "ids",
				type: "uint256[]",
			},
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]",
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes",
			},
		],
		name: "mintBatch",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "prices",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "price",
				type: "uint256",
			},
			{
				internalType: "uint16",
				name: "royaltyPercent",
				type: "uint16",
			},
		],
		name: "registerGame",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "gameId",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_salePrice",
				type: "uint256",
			},
		],
		name: "royaltyInfo",
		outputs: [
			{
				internalType: "address",
				name: "receiver",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "royaltyAmount",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256[]",
				name: "ids",
				type: "uint256[]",
			},
			{
				internalType: "uint256[]",
				name: "values",
				type: "uint256[]",
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes",
			},
		],
		name: "safeBatchTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes",
			},
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool",
			},
		],
		name: "setApprovalForAll",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4",
			},
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_tokenid",
				type: "uint256",
			},
		],
		name: "uri",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [],
		name: "withdraw",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];

export function getContract() {
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();
	const contract = ethers.ContractFactory.getContract(
		NFT_COLLECTION_ADDRESS,
		abi,
		signer
	);
	return { contract, signer };
}

export async function mintNft(gameId: number, price: string) {
	const { contract } = getContract();
	const gamePrice = ethers.utils.parseEther(price);
	console.log({ gamePrice });
	const res = await contract["mint(uint256)"](gameId, {
		value: gamePrice,
		gasLimit: 100000,
	});
	console.log({ res, value: res.value.toString() });
}

export async function hasGame(tokenId: number) {
	const { contract, signer } = getContract();
	const res = await contract.balanceOf(await signer.getAddress(), tokenId);
	const value = Number(res);
	return value > 0;
}

export async function getAllMintableNfts() {
	const { contract } = getContract();
	const events = await contract.queryFilter("RegisterGame");
	const nfts = await Promise.all(events.map<Promise<NftGame>>(async (event) => {
		const metadataUri = await contract.uri(event.args?.gameId.toNumber() ?? 0);
		const metadata = await fetch(metadataUri).then((res) => res.json()).catch(() => null);
		return {
			name: metadata?.name || "NFT Game",
			id: event.args?.gameId.toNumber() ?? 0,
			description: metadata?.description || "NFT Game",
			image: metadata?.image || "https://placekitten.com/200/300",
			price: ethers.utils.formatEther(event.args?.price ?? 0),
			contract: NFT_COLLECTION_ADDRESS,
			metadata: {
				name: metadata?.name || "NFT Game",
				description: metadata?.description || "NFT Game",
				image: metadata?.image || "https://placekitten.com/200/300",
				id: event.args?.gameId.toNumber() ?? 0,
				uri: "",
			},
		};
	}));
	return nfts;
}
