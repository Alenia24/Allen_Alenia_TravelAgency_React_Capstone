import { useState } from "react";

// Import method function and CSS
import { postTripReview } from "../../services/travel-api";
import "./PostReview.css";

export default function PostReview({ id }) {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name:"",
    rating:"",
    number:""
  })

  const createReview = (e) => {
    e.preventDefault();

    // Create the review data to send to the server
    const review = {
      trip: id,
      name: e.target.name.value || "Anonymous",
      rating: Number(e.target.rating.value),
      review: e.target.review.value,
    };
    // Create the review
    postTripReview(id, review)
      .then(() => {
        setTimeout(() => {
         setSuccess("Review Created Successfully.") 
        }, 1000)
        setError("")
        
        // Clear the form Data
        e.target.reset();
      })
      .catch((error) => {
        console.error(error)
        setError(error.response.data.error)
      });
  };

  return (
    <div className="post-review">
      <h1>Add a Review</h1>
      {error && <div className="message-error-container">{error}</div>}
      {success && <div className="message-success-container">{success}</div>}
      <form onSubmit={createReview}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          name="rating"
          id="rating"
          required
          min={1}
          max={5}
        />
        <label htmlFor="review">Review</label>
        <input type="text" name="review" id="review" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
