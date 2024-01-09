import React from "react";
import Skeleton from "../Skeleton/Skeleton";
import NFT from "./NFT";
import styles from "../../styles/Buy.module.css";
import { NftGame } from "../../util/types";

type Props = {
	isLoading: boolean;
	data: NftGame[] | undefined;
	emptyText?: string;
};

export default function NFTGrid({
	isLoading,
	data,
	emptyText = "No NFTs found for this collection.",
}: Props) {
	return (
		<div className={styles.nftGridContainer}>
			{isLoading ? (
				[...Array(20)].map((_, index) => (
					<div key={index} className={styles.nftContainer}>
						<Skeleton key={index} width={"100%"} height="312px" />
					</div>
				))
			) : data && data.length > 0 ? (
				data.map((nft) => (
					<div key={nft.id} className={styles.nftContainer}>
						<NFT nft={nft} />
					</div>
				))
			) : (
				<p>{emptyText}</p>
			)}
		</div>
	);
}
