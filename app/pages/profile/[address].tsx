import { useContract } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import NFTGrid from '../../components/NFT/NFTGrid';
import Skeleton from '../../components/Skeleton/Skeleton';
import styles from '../../styles/Profile.module.css';
import randomColor from '../../util/randomColor';
import { NftBadge, NftGame } from '../../util/types';
import { Comments } from '../../components/Comments/Comments';
import {
  getAllMintableNfts,
  getOwnedNfts,
  hasGame,
} from '../../util/contracts/gameCollection';
import { makeFirstLetterUppercase } from '../../util/text';
import { getMyBadges } from '../../util/contracts/badgeManager';
import { Badge } from '../../components/Badge/Badge';
import { BadgeList } from '../../components/Badge/BadgeList';
import { getOwnedComments } from '../../util/contracts/gameComments';

const [randomColor1, randomColor2, randomColor3, randomColor4] = [
  randomColor(),
  randomColor(),
  randomColor(),
  randomColor(),
];

const tabs = ['games', 'comments', 'badges'] as const;

export default function ProfilePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'games' | 'comments' | 'badges'>(
    'games'
  );
  const [isLoading, setIsLoading] = useState(true);
  const [ownedNfts, setOwnedNfts] = useState<NftGame[]>([]);
  const [ownedComments, setOwnedComments] = useState<NftGame[]>([]);
  const [myBadges, setMyBadges] = useState<NftBadge[]>([]);

  useEffect(() => {
    getAllMintableNfts()
      .then(getOwnedNfts)
      .then((data) => setOwnedNfts(data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    // Get owned NFTS
    getAllMintableNfts()
      .then((nfts) => getOwnedNfts(nfts).then((data) => setOwnedNfts(data)))
      .finally(() => {
        setIsLoading(false);
      });

    // Get owned Comments
    getOwnedComments().then((comments) => {
      setOwnedComments(comments);
    });

    getMyBadges().then((data) => {
      console.log({ data });
      setMyBadges(data);
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
        {tabs.map((tab) => (
          <h3
            key={tab}
            className={`${styles.tab} 
        ${activeTab === tab ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {makeFirstLetterUppercase(tab)}
          </h3>
        ))}
      </div>

      <div
        className={`${
          activeTab === 'games' ? styles.activeTabContent : styles.tabContent
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
          activeTab === 'comments' ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <Comments comments={ownedComments} />
      </div>
      <div
        className={`${
          activeTab === 'badges' ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <BadgeList badges={myBadges} />
      </div>
    </Container>
  );
}
