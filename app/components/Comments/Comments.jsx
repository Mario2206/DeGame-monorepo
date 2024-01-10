import { getTimeAgo } from '../../util/time';
import styles from './Comments.module.css';

const exampleComments = [
  {
    id: 1,
    gameName: "Tom Clancy's Rainbow Six Siege",
    imgGame:
      'https://cdn1.epicgames.com/offer/carnation/Share_Image_1920x1080-3_1920x1080-6e2d079f24db0a35285007191358978b',
    comment: 'This game is awesome',
    gameRating: 4.5,
    time: '2 hours ago',
  },
  {
    id: 2,
    gameName: 'Avatar: Frontiers of Pandora',
    imgGame:
      'https://cdn-uploads.gameblog.fr/img/news/428100_648873239f3dc.jpg?ver=1',
    comment: 'I love playing this game!',
    gameRating: 5,
    time: '1 day ago',
  },
  {
    id: 3,
    gameName: 'Call of Duty: Modern Warfare III',
    imgGame:
      'https://cdn-products.eneba.com/resized-products/SLVSqluiQW4bQAMgb1_-5npM22TIVGi4-f80BB_sfPc_350x200_2x-0.jpg',
    comment: 'Great graphics in this game.',
    gameRating: 3,
    time: '3 days ago',
  },
];

export function Comments({ comments = [] }) {
  return (
    <div className={styles.commentsContainer}>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.comment}>
          <img src={comment.game.image} alt={comment.game.name} />
          <div>
            <div className={styles.gamenameRatingContainer}>
              <h4>{comment.game.name}</h4>
              <div className={styles.starRating}>
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={comment.gameRating > index ? styles.yellow : ''}
                  >
                    {comment.rating > index ? '★' : '☆'}
                  </span>
                ))}
              </div>
            </div>
            <p>{comment.content}</p>
            <span>{getTimeAgo(comment.timestamp)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
