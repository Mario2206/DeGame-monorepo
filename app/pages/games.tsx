import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { getAllMintableNfts } from "../util/wallet";
import { NftGame } from "../util/types";

export default function Buy() {
	const [isLoading, setIsLoading] = useState(true);
	const [nfts, setNfts] = useState<NftGame[]>([]);

	useEffect(() => {
		// mintNft();
		// hasGame();
		getAllMintableNfts().then((nfts) => {
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
				emptyText={
					"No games found"
				}
			/>
		</Container>
	);
}
