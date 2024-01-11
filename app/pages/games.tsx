import React, { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import NFTGrid from '../components/NFT/NFTGrid';
import { NftGame } from '../util/types';
import { getAllMintableNfts } from '../util/contracts/gameCollection';
import { useAddress } from '@thirdweb-dev/react';

export default function Buy() {
  const [isLoading, setIsLoading] = useState(true);
  const [nfts, setNfts] = useState<NftGame[]>([]);
  const address = useAddress()

  useEffect(() => {
    console.log('address', address);
    if(!address) {
      setNfts([])
      setIsLoading(false)
      return
    };
    setIsLoading(true);
    getAllMintableNfts()
      .then((nfts) => {
        setNfts(nfts);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [address]);

  return (
    <Container maxWidth="lg">
      <h1>Games</h1>
      <p>Browse which NFTs are available from the collection.</p>
      <NFTGrid
        data={nfts}
        isLoading={isLoading}
        emptyText={'No games found'}
        displayPrice={true}
      />
    </Container>
  );
}
