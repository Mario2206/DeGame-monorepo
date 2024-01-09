import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import Container from "../../../components/Container/Container";
import { NftGame } from "../../../util/types";
import { getAllMintableNfts } from "../../../util/wallet";
import styles from "../../../styles/Token.module.css";

interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
  editable: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  setRating,
  editable,
}) => {
  return (
    <div className={styles.starRating}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={rating > index ? styles.star : ""}
          onClick={() => editable && setRating(index + 1)}
        >
          {rating > index ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

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
      <Toaster position="bottom-center" reverseOrder={false} />
      <Container maxWidth="lg">
        <div className={styles.container}>
          <div className={styles.containerGame}>
            <div className={styles.gameInfo}>
              <span>Play to</span>
              <h1 className={styles.gameTitle}>{nft.name}</h1>
            </div>
            <img src={nft.image} alt={nft.name} className={styles.gameImage} />
            <div>
              <form
                onSubmit={handleCommentSubmit}
                className={styles.commentForm}
              >
                <StarRating
                  rating={rating}
                  setRating={setRating}
                  editable={!hasSubmitted}
                />
                <textarea
                  className={styles.commentTextarea}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write your comment here..."
                  rows={4}
                  disabled={hasSubmitted}
                />
                <button className={styles.submitButton} type="submit">
                  {hasSubmitted ? "Update your vote?" : "Submit Comment"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
