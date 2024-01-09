import { useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Container from "../../components/Container/Container";
import Skeleton from "../../components/Skeleton/Skeleton";
import { Comments } from "../../components/Comments/Comments";
import { NFT_COLLECTION_ADDRESS } from "../../const/contractAddresses";
import styles from "../../styles/Profile.module.css";
import randomColor from "../../util/randomColor";

const [randomColor1, randomColor2, randomColor3, randomColor4] = [
  randomColor(),
  randomColor(),
  randomColor(),
  randomColor(),
];

export default function ProfilePage() {
  const router = useRouter();
  const [tab, setTab] = useState<"nfts" | "listings" | "auctions" | "comments">(
    "nfts"
  );

  const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);

  const { data: ownedNfts, isLoading: loadingOwnedNfts } = useOwnedNFTs(
    nftCollection,
    router.query.address as string
  );

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
            "..." +
            router.query.address.toString().substring(38, 42)
          ) : (
            <Skeleton width="320" />
          )}
        </h1>
      </div>

      <div className={styles.tabs}>
        <h3
          className={`${styles.tab} 
        ${tab === "nfts" ? styles.activeTab : ""}`}
          onClick={() => setTab("nfts")}
        >
          NFTs
        </h3>
        <h3
          className={`${styles.tab} 
        ${tab === "listings" ? styles.activeTab : ""}`}
          onClick={() => setTab("listings")}
        >
          Listings
        </h3>
        <h3
          className={`${styles.tab}
        ${tab === "auctions" ? styles.activeTab : ""}`}
          onClick={() => setTab("auctions")}
        >
          Auctions
        </h3>

        <h3
          className={`${styles.tab}
        ${tab === "comments" ? styles.activeTab : ""}`}
          onClick={() => setTab("comments")}
        >
          Comments
        </h3>
      </div>

      <div
        className={`${
          tab === "nfts" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        {/* <NFTGrid
          data={ownedNfts}
          isLoading={loadingOwnedNfts}
          emptyText="Looks like you don't have any NFTs from this collection. Head to the buy page to buy some!"
        /> */}
      </div>

      <div
        className={`${
          tab === "listings" ? styles.activeTabContent : styles.tabContent
        }`}
      ></div>

      <div
        className={`${
          tab === "auctions" ? styles.activeTabContent : styles.tabContent
        }`}
      ></div>

      <div
        className={`${
          tab === "comments" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <Comments />
      </div>
    </Container>
  );
}
