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

  const [nft, setNft] = React.useState<NftGame | undefined>(undefined);
  const [comment, setComment] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [hasSubmitted, setHasSubmitted] = React.useState(false);

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Comment:", comment, "Rating:", rating);
  };

  React.useEffect(() => {
    getAllMintableNfts().then(async (nfts) => {
      const nft = nfts.find((nft) => nft.id === Number(tokenId));
      if (!nft) return;

      if (await hasGame(nft.id)) {
        setNft(nft);
        console.log(nft);
        return;
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
