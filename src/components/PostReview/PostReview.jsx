import React from "react";
import { postTripReview } from "../../services/travel-api";
import { useParams } from "react-router-dom";

import "./PostReview.css"

export default function PostReview({ id }) {
  const createReview = (e) => {
    e.preventDefault();
    const review = {
      trip: id,
      name: e.target.name.value,
      rating: Number(e.target.rating.value),
      review: e.target.review.value,
    };

    postTripReview(id, review);
  };
  return (
    <div className="post-review">
      <h1>Add a Review</h1>
      <form onSubmit={createReview}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="rating">Rating</label>
        <input type="number" name="rating" id="rating" required/> 
        <label htmlFor="review">Review</label>
        <input type="text" name="review" id="review" required/>
        
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}
