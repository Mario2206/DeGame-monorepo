import React, { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import NFTGrid from '../components/NFT/NFTGrid';
import { NftGame } from '../util/types';
import { getAllMintableNfts } from '../util/contracts/gameCollection';
import Modal from '../components/Modal/Modal';
import { ConnectWallet, useAddress, useConnectionStatus } from '@thirdweb-dev/react';

export default function Buy() {
  const [isLoading, setIsLoading] = useState(true);
  const [nfts, setNfts] = useState<NftGame[]>([]);
  const [showModal, setShowModal] = useState(false);

  const address = useAddress();
  const connectionStatus = useConnectionStatus();
  console.log('connectionStatus', connectionStatus);

  useEffect(() => {
    if(!address && connectionStatus === "disconnected" || !address && connectionStatus === "connected") setShowModal(true);
    else setShowModal(false);
  }, [address, connectionStatus])
  
  useEffect(() => {
    getAllMintableNfts()
      .then((nfts) => {
        setNfts(nfts);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
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

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <img src="https://i.ibb.co/QfP8n1R/wallet-img.webp" width={250} alt="MetaMask Logo" />
        <p>Please connect your wallet to view available games.</p>
        <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
      </Modal>
    </Container>
  );
}
