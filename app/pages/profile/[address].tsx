import { useContract } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import NFTGrid from '../../components/NFT/NFTGrid';
import Skeleton from '../../components/Skeleton/Skeleton';
import { NFT_COLLECTION_ADDRESS } from '../../const/contractAddresses';
import styles from '../../styles/Profile.module.css';
import randomColor from '../../util/randomColor';
import { NftGame } from '../../util/types';
import { getAllMintableNfts, hasGame } from '../../util/wallet';
import { Comments } from '../../components/Comments/Comments';

const [randomColor1, randomColor2, randomColor3, randomColor4] = [
  randomColor(),
  randomColor(),
  randomColor(),
  randomColor(),
];

export default function ProfilePage() {
  const router = useRouter();
  const [tab, setTab] = useState<'games' | 'comments'>('games');
  const [isLoading, setIsLoading] = useState(true);
  const [nfts, setNfts] = useState<NftGame[]>([]);
  const [ownedNfts, setOwnedNfts] = useState<NftGame[]>([]);

  const checkIfOwned = async (nft: NftGame) => {
    const owned = await hasGame(nft.id);
    return owned;
  };

  const getOwnedNfts = async (nfts: NftGame[]) => {
    const array = [];
    for (let i = 0; i < nfts.length; i++) {
      const nft = nfts[i];
      const isOwned = await checkIfOwned(nft);
      if (isOwned) array.push(nft);
    }

    return array;
  };

  useEffect(() => {
    getAllMintableNfts()
      .then((nfts) => getOwnedNfts(nfts).then((data) => setOwnedNfts(data)))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="lg">
      <div className={styles.profileHeader}>
        <div
          className={styles.coverImage}
          style={{
            background: `linear-gradient(90deg, ${randomColor1}, ${randomColor2})`,
          }}
        />
        <div
          className={styles.profilePicture}
          style={{
            background: `linear-gradient(90deg, ${randomColor3}, ${randomColor4})`,
          }}
        />
        <h1 className={styles.profileName}>
          {router.query.address ? (
            router.query.address.toString().substring(0, 4) +
            '...' +
            router.query.address.toString().substring(38, 42)
          ) : (
            <Skeleton width="320" />
          )}
        </h1>
      </div>

      <div className={styles.tabs}>
        <h3
          className={`${styles.tab} 
        ${tab === 'games' ? styles.activeTab : ''}`}
          onClick={() => setTab('games')}
        >
          Games
        </h3>

        <h3
          className={`${styles.tab}
        ${tab === 'comments' ? styles.activeTab : ''}`}
          onClick={() => setTab('comments')}
        >
          Comments
        </h3>
      </div>

      <div
        className={`${
          tab === 'games' ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <NFTGrid
          data={ownedNfts}
          isLoading={isLoading}
          emptyText={'No games found'}
          displayPrice={false}
        />
      </div>

      <div
        className={`${
          tab === 'comments' ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <Comments />
      </div>
    </Container>
  );
}
