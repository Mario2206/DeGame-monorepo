import { NFTMetadata } from "@thirdweb-dev/sdk";

export type NftGame = {
	name: string;
	description: string;
	image: string;
	id: number;
	metadata: NFTMetadata;
  price: string;
	contract: string;
};