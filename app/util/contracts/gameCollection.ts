import { ethers } from 'ethers';
import { GAME_CONTRACT_ADDRESS } from '../../const/contractAddresses';
import { NftGame } from '../types';
import gameCollection from '../../../artifacts/contracts/GameCollection.sol/GameCollection.json';

const GAME_COLLECTION_ABI = gameCollection.abi;

export function getGameCollectionContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = ethers.ContractFactory.getContract(
    GAME_CONTRACT_ADDRESS,
    GAME_COLLECTION_ABI,
    signer
  );
  return { contract, signer };
}

export async function mintNft(gameId: number, price: string) {
  const { contract } = getGameCollectionContract();
  const gamePrice = ethers.utils.parseEther(price);
  const res = await contract['mint(uint256)'](gameId, {
    value: gamePrice,
    gasLimit: 1000000,
  });
  await res.wait();
}

export async function hasGame(tokenId: number) {
  const { contract, signer } = getGameCollectionContract();
  const res = await contract.balanceOf(await signer.getAddress(), tokenId);
  const value = Number(res);
  return value > 0;
}

export async function getAllMintableNfts() {
  const { contract } = getGameCollectionContract();
  const events = await contract.queryFilter('RegisterGame');
  const nfts = await Promise.all(
    events.map<Promise<NftGame>>(async (event) => {
      const metadataUri = await contract.uri(
        event.args?.gameId.toNumber() ?? 0
      );
      const metadata = await fetch(metadataUri)
        .then((res) => res.json())
        .catch(() => null);
      return {
        name: metadata?.name || 'NFT Game',
        id: event.args?.gameId.toNumber() ?? 0,
        description: metadata?.description || 'NFT Game',
        image: metadata?.image || 'https://placekitten.com/200/300',
        price: ethers.utils.formatEther(event.args?.price ?? 0),
        contract: GAME_CONTRACT_ADDRESS,
        metadata: {
          name: metadata?.name || 'NFT Game',
          description: metadata?.description || 'NFT Game',
          image: metadata?.image || 'https://placekitten.com/200/300',
          id: event.args?.gameId.toNumber() ?? 0,
          uri: '',
        },
      };
    })
  );
  return nfts;
}

export const getOwnedNfts = async (nfts: NftGame[]) => {
  const array = [];
  for (let i = 0; i < nfts.length; i++) {
    const nft = nfts[i];
    const isOwned = await hasGame(nft.id);
    if (isOwned) array.push(nft);
  }

  return array;
};

export async function getGameById(
  gameId: number | string
): Promise<NftGame | null> {
  return getAllMintableNfts().then(async (nfts) => {
    const game = nfts.find((game) => game.id === Number(gameId));
    if (game) {
      return game;
    } else return null;
  });
}
