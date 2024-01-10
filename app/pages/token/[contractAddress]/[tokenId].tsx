import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import Container from '../../../components/Container/Container';
import { NftGame } from '../../../util/types';
import styles from '../../../styles/Token.module.css';
import { getAllMintableNfts } from '../../../util/contracts/gameCollection';
import { CommentForm } from '../../../components/CommentForm/CommentForm';
import {
  addComment,
  hasGameComment,
} from '../../../util/contracts/gameComments';

export interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
  editable: boolean;
}
export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  setRating,
  editable,
}) => {
  return (
    <div className={styles.starRating}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={rating > index ? styles.star : ''}
          onClick={() => editable && setRating(index + 1)}
        >
          {rating > index ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default function TokenPage() {
  const router = useRouter();
  const { tokenId } = router.query;

  const [nft, setNft] = useState<NftGame | undefined>(undefined);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasComment, setHasComment] = useState(false);

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    addComment(nft?.id || "", comment, rating).then((result) => {
      setLoading(false);
      setHasSubmitted(result);
      setError(!result);
    });
  };

  useEffect(() => {
    getAllMintableNfts().then(async (nfts) => {
      const game = nfts.find((game) => game.id === Number(tokenId));
      if (game) {
        setNft(game);
      } else {
        router.push('/games');
      }
    });
  }, [tokenId, router]);

  useEffect(() => {
    if (nft) {
      hasGameComment(nft.id).then((result) => {
        setHasComment(result);
      });
    }
  }, [nft, hasSubmitted]);

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
            {hasComment ? (
              <p>Comment already submitted</p>
            ) : (
              <div>
                <CommentForm
                  setComment={setComment}
                  comment={comment}
                  setRating={setRating}
                  rating={rating}
                  handleCommentSubmit={handleCommentSubmit}
                  editable={!hasSubmitted}
                  loading={loading}
                  error={error}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
