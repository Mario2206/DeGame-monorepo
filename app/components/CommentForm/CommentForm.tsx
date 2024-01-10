import styles from "./CommentForm.module.css";

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

type CommentFormProps = {
	handleCommentSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	rating: number;
	setRating: (rating: number) => void;
	comment: string;
	setComment: (comment: string) => void;
	editable: boolean;
};

export const CommentForm = ({
	handleCommentSubmit,
	rating,
	setRating,
	comment,
	setComment,
	editable,
}: CommentFormProps) => {
	return (
		<form onSubmit={handleCommentSubmit} className={styles.commentForm}>
			<StarRating rating={rating} setRating={setRating} editable={editable} />
			<textarea
				className={styles.commentTextarea}
				value={comment}
				onChange={(e) => setComment(e.target.value)}
				placeholder="Write your comment here..."
				rows={4}
				disabled={!editable}
			/>
			<button
				className={styles.submitButton}
				type="submit"
				disabled={!editable}
			>
				Submit Comment
			</button>
		</form>
	);
};
