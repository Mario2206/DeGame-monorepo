import React, { useEffect, useState } from "react";
import styles from "./NFT.module.css";
import { NftGame } from "../../util/types";
import { getContract, hasGame, mintNft } from "../../util/wallet";
import { Event } from "ethers";
import Link from "next/link";

type Props = {
	nft: NftGame;
};

export default function NFTComponent({ nft }: Props) {
	const [playable, setPlayable] = useState(false);
	const [loading, setIsLoading] = useState(false);

	const checkIfPlayable = async () => {
		const playable = await hasGame(nft.id);
		setPlayable(playable);
	};

	const onClick = async () => {
		if (!playable) {
			setIsLoading(true);
			await mintNft(nft.id, nft.price).catch(() => {
				setIsLoading(false);
			});
		}
	};

	useEffect(() => {
		checkIfPlayable();
	}, [nft]);

	useEffect(() => {
		const { contract } = getContract();
		const onMinted = (event: Event) => {
			console.log({ event });
			checkIfPlayable();
			setIsLoading(false);
		};
		contract.on("Minted", onMinted);
		return () => {
			contract.removeListener("Minted", onMinted);
		};
	}, []);

	return (
		<>
			<img
				src={nft.metadata.image || ""}
				className={styles.nftImage}
				style={{ height: "200px" }}
			/>
			<p className={styles.nftTokenId}>Token ID #{nft.metadata.id}</p>
			<p className={styles.nftName}>{nft.metadata.name}</p>
			<div className={styles.priceContainer}>
				<div className={styles.nftPriceContainer}>
					<div>
						<p className={styles.nftPriceLabel}>Price</p>
						<p className={styles.nftPriceValue}>{nft.price} ETH</p>
					</div>
				</div>
			</div>
			{playable && (
				<Link href={`/token/${nft.contract}/${nft.id}`}>
					<button
						onClick={onClick}
						style={{ padding: "8px 0", marginTop: "8px", width: "100%" }}
					>
						Play
					</button>
				</Link>
			)}
			{!playable && (
				<button
					onClick={onClick}
					style={{ padding: "8px 0", marginTop: "8px" }}
				>
					{loading ? "loading..." : "Buy"}
				</button>
			)}
		</>
	);
}
