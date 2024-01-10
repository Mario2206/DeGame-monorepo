import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import toast, { Toaster } from 'react-hot-toast';
import Container from "../../../components/Container/Container";
import { NftGame } from "../../../util/types";
import styles from "../../../styles/Token.module.css";
import { getAllMintableNfts } from "../../../util/contracts/gameCollection";
import { CommentForm } from "../../../components/CommentForm/CommentForm";

export default function TokenPage() {
	const router = useRouter();
	const { tokenId } = router.query;

	const [nft, setNft] = useState<NftGame | undefined>(undefined);
	const [comment, setComment] = useState("");
	const [rating, setRating] = useState(0);
	const [hasSubmitted, setHasSubmitted] = useState(false);

	const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setHasSubmitted(true);

		// TODO: badge for new comment
		toast.success('Congratulations! You have gained a badge for your first comment!');
	};

	useEffect(() => {
		getAllMintableNfts().then(async (nfts) => {
			const game = nfts.find((game) => game.id === Number(tokenId));
			if (game) {
				setNft(game);
			} else {
				router.push("/games");
			}
		});
	}, [tokenId, router]);

	if (!nft) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<Container maxWidth="lg">
				<div className={styles.container}>
					<div className={styles.containerGame}>
						<div className={styles.gameInfo}>
							<span>Play to</span>
							<h1 className={styles.gameTitle}>{nft.name}</h1>
						</div>
						<img src={nft.image} alt={nft.name} className={styles.gameImage} />
						<div>
							<CommentForm
								setComment={setComment}
								comment={comment}
								setRating={setRating}
								rating={rating}
								handleCommentSubmit={handleCommentSubmit}
								editable={!hasSubmitted}
							/>
						</div>
					</div>
				</div>
			</Container>
			<Toaster position="bottom-center" reverseOrder={false} toastOptions={{ duration: 4000 }} />
		</>
	);
}
