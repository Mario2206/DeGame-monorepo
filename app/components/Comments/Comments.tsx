import React from 'react';
import { getTimeAgo } from '../../util/time';
import styles from './Comments.module.css';
import { Comment } from '../../util/types';


export function Comments({ comments = [], displayAddress = false }: { comments: Comment[], displayAddress?: boolean }) {
  return (
    <div className={styles.commentsContainer}>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.comment}>
          <img src={comment.game.image} alt={comment.game.name} />
          <div>
            <div className={styles.gamenameRatingContainer}>
              <h4>{displayAddress ? comment.author : comment.game.name}</h4>
              <div className={styles.starRating}>
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={comment.rating > index ? styles.yellow : ''}
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
