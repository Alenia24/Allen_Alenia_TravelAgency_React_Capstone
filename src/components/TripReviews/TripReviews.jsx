// Import function to generate stars
import { renderStars } from "../../services/renderStars";

import "./TripReviews.css";

export default function TripReviews({ reviews }) {
  //If reviews is not an array, i.e the trip has no reviews then return the below
    if(!Array.isArray(reviews)) {
        return ( <div className="Reviews">
            <h2 className="review-heading">Reviews</h2>
            <div className="reviews-container">
              <p>No Reviews Available. Be the First to Add a Review.</p>
            </div>
          </div>) 
    }

  return (
    <div className="Reviews">
      <h2 className="review-heading">Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review, i) => {
          return (
            <div className="review-card" key={i}>
              <p className="review-rating">{renderStars(review.rating)}</p>
              <p>{review.review}</p>
              <p className="review-name">
                <strong>{review.name}</strong>
              </p>
              <p>{(review.createdAt).split("T")[0]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
