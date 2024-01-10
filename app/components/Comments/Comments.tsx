import React, { useState } from 'react';
import styles from "./Comments.module.css";

const exampleComments = [
  {
    id: 1,
    commentName: "Tom Clancy's Rainbow Six Siege",
    commentImg: "https://cdn1.epicgames.com/offer/carnation/Share_Image_1920x1080-3_1920x1080-6e2d079f24db0a35285007191358978b",
    comment: "This game is awesome",
    gameRating: 4.5,
    time: "2 hours ago",
  },
  {
    id: 2,
    commentName: "Avatar: Frontiers of Pandora",
    commentImg: "https://cdn-uploads.gameblog.fr/img/news/428100_648873239f3dc.jpg?ver=1",
    comment: "I love playing this game!",
    gameRating: 5,
    time: "1 day ago",
  },
  {
    id: 3,
    commentName: "Call of Duty: Modern Warfare III",
    commentImg: "https://cdn-products.eneba.com/resized-products/SLVSqluiQW4bQAMgb1_-5npM22TIVGi4-f80BB_sfPc_350x200_2x-0.jpg",
    comment: "Great graphics in this game.",
    gameRating: 3,
    time: "3 days ago",
  },
];

export function Comments({ comments = exampleComments }) {
  return (
    <div className={styles.commentsContainer}>
      {/* Existing Comments Display */}
      {comments.map((comment) => (
        <div key={comment.id} className={styles.comment}>
          <img src={comment.commentImg} alt={comment.commentName} />
          <div>
            <div className={styles.gamenameRatingContainer}>
              <h4>{comment.commentName}</h4>
              <div className={styles.starRating}>
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className={comment.gameRating > index ? styles.yellow : ''}>
                    {comment.gameRating > index ? '★' : '☆'}
                  </span>
                ))}
              </div>
            </div>
            <p>{comment.comment}</p>
            <span>{comment.time}</span>
          </div>
        </div>
      ))}


    </div>
  );
}

