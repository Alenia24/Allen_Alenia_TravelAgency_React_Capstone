import React from "react";

import "./TripReviews.css";
import { renderStars } from "../../services/renderStars";

export default function TripReviews({ reviews }) {
  return (
    <div className="Reviews">
      <h2 className="review-heading">Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review) => {
          return (
            <div className="review-card">
              <p className="review-rating">{renderStars(review.rating)}</p>
              <p><strong>{review.name}</strong></p>
              <p>{review.review}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
