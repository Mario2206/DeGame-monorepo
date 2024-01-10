import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NftGame } from "../../../util/types";
import Container from "../../../components/Container/Container";
import styles from "./styles.module.css";
import { Comments } from "../../../components/Comments/Comments";
import {
	getGameById,
	hasGame,
	mintNft,
} from "../../../util/contracts/gameCollection";
import { CommentForm } from "../../../components/CommentForm/CommentForm";
import { getFirstSentence } from "../../../util/text";

const exampleGame = {
	gameReleaseDate: "10 Dec 2021",
	gameDeveloper: "Ubisoft Montreal",
	gamePublisher: "Ubisoft",
};

const parentComponentComments = [
	{
		id: 1,
		commentName: "Jonathan",
		commentImg:
			"https://pitch-assets.imgix.net/0b9fdfb7-6a4c-44fa-a54c-a688affc0ba5?pitch-bytes=124295&pitch-content-type=image%2Fpng&w=2000&h=2000&fit=max&auto=format&q=100",
		comment: "I love playing this game!",
		gameRating: 5,
		time: "1 day ago",
	},
	{
		id: 2,
		commentName: "Thomas",
		commentImg:
			"https://pitch-assets.imgix.net/d96095de-2fef-400c-ad3e-467126102e40?pitch-bytes=326193&pitch-content-type=image%2Fpng&w=2000&h=2000&fit=max&auto=format&q=100",
		comment: "This game is awesome",
		gameRating: 4.5,
		time: "2 hours ago",
	},
	{
		id: 3,
		commentName: "Adil",
		commentImg:
			"https://pitch-assets.imgix.net/9d8ccedc-a7cc-4a81-82be-ad5fa3cb1143?pitch-bytes=242410&pitch-content-type=image%2Fpng&w=2000&h=2000&fit=max&auto=format&q=100",
		comment: "Great graphics in this game.",
		gameRating: 3,
		time: "3 days ago",
	},
];

const GamePageDetails = () => {
	const router = useRouter();

	const [nft, setNft] = useState<NftGame | undefined>(undefined);
	const [loading, setIsLoading] = useState(false);
	const [playable, setPlayable] = useState(false);
	const [comment, setComment] = useState("");
	const [rating, setRating] = useState(0);
	const [hasSubmitted, setHasSubmitted] = useState(false);

	const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("comment: ", comment);
		setHasSubmitted(true);
	};

	const handleBuyGame = async () => {
		if (!playable) {
			setIsLoading(true);
			if (nft?.id !== undefined && nft?.price !== undefined) {
				await mintNft(nft.id, nft.price)
				.catch((e) => {
					alert(e.message);
				})
				.finally(() => setIsLoading(false))
				await checkIfPlayable();
			}
		}
	};

	const checkIfPlayable = async () => {
		if (nft && nft.id !== undefined) {
			const playable = await hasGame(nft.id);
			console.log("playable nft", playable, nft);
			setPlayable(playable);
		}
	};

	useEffect(() => {
		const gameId = router.query.tokenId as string;

		const fetchGame = async () => {
			try {
				const game = await getGameById(gameId);
				if (game) {
					setNft(game);
				} else {
					router.push("/games");
				}
			} catch (error) {
				console.error("Error in fetchGame: ", error);
			}
		};
		fetchGame();
	}, [router]);

	useEffect(() => {
		checkIfPlayable();
	}, [nft]);

	return (
		<Container maxWidth="lg">
			<div className={styles.gamePageDetailsContainer}>
				<div className={styles.gamePageDetailsLeft}>
					<img src={nft?.image} alt={nft?.name} />
				</div>

				<div className={styles.gamePageDetailsRight}>
					<h1>{nft?.name}</h1>
					<p>{getFirstSentence(nft?.description || "")}</p>

					{/* Additionnal Data */}
					<div className={styles.gamePageDetailsInfos}>
						<p>
							Release Date:
							<strong>{exampleGame.gameReleaseDate}</strong>
						</p>
						<p>
							Developer:
							<strong>{exampleGame.gameDeveloper}</strong>
						</p>
						<p>
							Publisher:
							<strong>{exampleGame.gamePublisher}</strong>
						</p>
					</div>

					<div className={styles.gamePageDetailsButton}>
						{playable ? (
							<button
								onClick={() =>
									router.push(`/token/${nft?.contract}/${nft?.id}`)
								}
							>
								Play
							</button>
						) : (
							<button onClick={handleBuyGame}>
								{loading ? "loading..." : `Buy for ${nft?.price} ETH`}
							</button>
						)}
						{playable && (
							<span>You can leave your rating and comment here also*</span>
						)}
					</div>
				</div>
			</div>

			<div className="">
				<p>Most helpful reviews: </p>

				<Comments comments={parentComponentComments} />

				<div>
					<CommentForm
						comment={comment}
						setComment={setComment}
						rating={rating}
						setRating={setRating}
						handleCommentSubmit={handleCommentSubmit}
						editable={!hasSubmitted}
					/>
				</div>
			</div>
		</Container>
	);
};

export default GamePageDetails;
