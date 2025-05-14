import React from "react";

import "./TripReviews.css";
import { renderStars } from "../../services/renderStars";

export default function TripReviews({ reviews }) {
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
