import React, { useState } from "react";
import { createTrips } from "../../services/travel-api";
import { useNavigate } from "react-router-dom";

import "./NewDestination.css";

export default function NewDestination() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const nav = useNavigate();

  // Define the handler
  const handleNewTrip = (e) => {
    e.preventDefault();
    
    //Create the destination to send to the server
    const formData = new FormData();
    formData.append("title", e.target.title.value);
    formData.append("description", e.target.description.value);
    formData.append("price", e.target.price.value);
    formData.append("location", e.target.location.value);
    formData.append("duration", e.target.duration.value);
    formData.append("date", e.target.date.value);
    formData.append("type", e.target.type.value);
    formData.append("image", e.target.image.files[0]);

    // Create the destination
    createTrips(formData)
      .then(() => {
        setSuccess("Destination Created Successfully.");
        setError("");
        setTimeout(() => {
          nav(`/admindashboard`);
        }, 1000);
      })
      .catch((error) => {
        setError(error.response.data.message);
        setSuccess("");
      });
  };
  
  return (
    <div className="new-destination-trip-container">
      <div className="new-trip">
        <p
          className="new-destination-back"
          onClick={() => {
            nav("/admindashboard");
          }}
        >
          Back to Dashboard
        </p>
        <h1 className="new-destination-title">Create New Destination</h1>
        {error && <div className="message-error-container">{error}</div>}
        {success && <div className="message-success-container">{success}</div>}
        <form onSubmit={handleNewTrip}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" required />
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" required />
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" required />
          <label htmlFor="date">Date</label>

          <input
            type="date"
            name="date"
            id="date"
            min={new Date().toISOString().split("T")[0]}
            required
          />
          <label htmlFor="duration">Duration</label>
          <input type="number" name="duration" id="duration" required />
          <label htmlFor="type">Type</label>
          <select name="type" defaultValue="other" id="type">
            <option value="adventure">Adventure</option>
            <option value="cultural">Cultural</option>
            <option value="family">Family</option>
            <option value="romantic">Romantic</option>
            <option value="beach">Beach</option>
            <option value="island">Island</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" min={0} required />
          <label htmlFor="image">Image</label>
          <input type="file" name="image" id="image" required />
          <button className="create-destination-btn" type="submit">
            Create Destination
          </button>
        </form>
      </div>
    </div>
  );
}
