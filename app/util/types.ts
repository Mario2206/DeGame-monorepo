import { NFTMetadata } from '@thirdweb-dev/sdk';

export type NftGame = {
  name: string;
  description: string;
  image: string;
  id: number;
  metadata: NFTMetadata;
  price: string;
  contract: string;
};

export type Comment = {
  id: number;
  game: NftGame;
  rating: number;
  author: string;
  content: string;
  timestamp: number;
};

export type NftBadge = {
  id: number;
  name: string;
  description: string;
  color: string;
};
