import { ThirdwebNftMedia } from "@thirdweb-dev/react";
import React from "react";
import Container from "../../../components/Container/Container";
import { GetStaticProps, GetStaticPaths } from "next";
import { NFT_COLLECTION_ADDRESS } from "../../../const/contractAddresses";
import styles from "../../../styles/Token.module.css";
import { Toaster } from "react-hot-toast";
import { NftGame } from "../../../util/types";
import { getAllMintableNfts, hasGame } from "../../../util/wallet";
import { useRouter } from "next/router";

type Props = {
	nft: NftGame;
	contractMetadata: any;
};

export default function TokenPage() {
	const router = useRouter();

	const { tokenId } = router.query;

	const [nft, setNft] = React.useState<NftGame | undefined>(undefined);

	React.useEffect(() => {
		getAllMintableNfts().then(async (nfts) => {
			const nft = nfts.find((nft) => nft.id === Number(tokenId));
			if (!nft) return;

			if (await hasGame(nft.id)) {
				setNft(nft);
        return
			}
      router.push("/games");
		});
	}, [tokenId]);

	if (!nft) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<Toaster position="bottom-center" reverseOrder={false} />
			<Container maxWidth="lg">
				<div className={styles.container}>
					<div
						style={{
							width: "100vw",
							height: "100vh",
							position: "absolute",
							top: 0,
							left: 0,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<span style={{ marginRight: "8px" }}>Play to</span>{" "}
						<strong>{nft.name}</strong>
					</div>
				</div>
			</Container>
		</>
	);
}
