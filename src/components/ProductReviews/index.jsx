// Importing styles
import { StyledProductReviews } from "./styles";

export default function ProductReviews({ rating, reviews }) {
  const stars = Array.from({ length: rating }, (_, i) => (
    <span key={i} className="material-symbols-rounded">
      star
    </span>
  ));

  const userReviews = reviews.map((review) => (
    <div key={review.id} className="reviews-container">
      <h4>{review.username}</h4>
      <span>{stars}</span>
      <p>{review.description}</p>
    </div>
  ));

  return (
    <StyledProductReviews>
      <div className="rating-container">
        <h3>Rating</h3>
        {stars}
      </div>
      <h3>Reviews</h3>
      {userReviews.length > 0 ? (
        userReviews
      ) : (
        <p className="reviews-container">This item has no reviews</p>
      )}
    </StyledProductReviews>
  );
}