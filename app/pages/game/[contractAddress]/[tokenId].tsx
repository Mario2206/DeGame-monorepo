import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NftGame } from '../../../util/types';
import Container from '../../../components/Container/Container';
import styles from './styles.module.css';
import { Comments } from '../../../components/Comments/Comments';
import {
  getGameById,
  hasGame,
  mintNft,
} from '../../../util/contracts/gameCollection';
import { CommentForm } from '../../../components/CommentForm/CommentForm';
import { getFirstSentence } from '../../../util/text';
import {
  addComment,
  getGameComments,
  hasGameComment,
} from '../../../util/contracts/gameComments';

const exampleGame = {
  gameReleaseDate: '10 Dec 2021',
  gameDeveloper: 'Ubisoft Montreal',
  gamePublisher: 'Ubisoft',
};

const GamePageDetails = () => {
  const router = useRouter();

  const [nft, setNft] = useState<NftGame | undefined>(undefined);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [loadingSubmitComment, setLoadingSubmitComment] = useState(false);
  const [error, setError] = useState(false);
  const [playable, setPlayable] = useState(false);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [gameComments, setGameComments] = useState<Comment[]>([]);
  const [hasComment, setHasComment] = useState(false);

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoadingSubmitComment(true);
    addComment(nft.id, comment, rating).then((result) => {
      setLoadingSubmitComment(false);
      setHasSubmitted(result);
      setError(!result);
    });
  };
  const handleBuyGame = async () => {
    if (!playable) {
      setLoadingPayment(true);
      if (nft?.id !== undefined && nft?.price !== undefined) {
        await mintNft(nft.id, nft.price)
          .catch((e) => {
            alert(e.message);
          })
          .finally(() => setLoadingPayment(false));
        await checkIfPlayable();
      }
    }
  };

  const checkIfPlayable = async () => {
    if (nft && nft.id !== undefined) {
      const playable = await hasGame(nft.id);
      console.log('playable nft', playable, nft);
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
          router.push('/games');
        }
      } catch (error) {
        console.error('Error in fetchGame: ', error);
      }
    };
    fetchGame();
  }, [router]);

  useEffect(() => {
    if (!nft || nft.id === undefined) return;
    checkIfPlayable();

    getGameComments(nft.id).then((comments) => {
      setGameComments(comments);
    });
  }, [nft, hasSubmitted]);

  useEffect(() => {
    if (nft) {
      hasGameComment(nft.id).then((result) => {
        setHasComment(result);
      });
    }
  }, [nft, hasSubmitted]);

  return (
    <Container maxWidth="lg">
      <div className={styles.gamePageDetailsContainer}>
        <div className={styles.gamePageDetailsLeft}>
          <img src={nft?.image} alt={nft?.name} />
        </div>

        <div className={styles.gamePageDetailsRight}>
          <h1>{nft?.name}</h1>
          <p>{getFirstSentence(nft?.description || '')}</p>

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
                {loadingPayment ? 'loading...' : `Buy for ${nft?.price} ETH`}
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

        <Comments comments={gameComments} displayAddress={true} />

        {playable ? (
          hasComment ? (
            <p>Comment already submitted</p>
          ) : (
            <div>
              <CommentForm
                comment={comment}
                setComment={setComment}
                rating={rating}
                setRating={setRating}
                handleCommentSubmit={handleCommentSubmit}
                editable={!hasSubmitted}
                loading={loadingSubmitComment}
                error={error}
              />
            </div>
          )
        ) : null}
      </div>
    </Container>
  );
};

export default GamePageDetails;
