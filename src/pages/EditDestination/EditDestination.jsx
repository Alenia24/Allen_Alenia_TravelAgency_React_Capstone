import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTrip, updateTrip } from "../../services/travel-api";
import "./EditDestination.css"

export default function EditDestination() {
  const [trip, setTrip] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    getTrip(id).then((res) => setTrip(res.data));
  }, [id]);

  const handleEditTrip = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", e.target.title.value);
    formData.append("description", e.target.description.value);
    formData.append("price", e.target.price.value);
    formData.append("location", e.target.location.value);
    formData.append("duration", e.target.duration.value);
    formData.append("date", e.target.date.value);
    formData.append("type", e.target.type.value);

    //Append the image only if the image has been updated
    if (e.target.image && e.target.image.files.length > 0) {
      formData.append("image", e.target.image.files[0]);
    }

    updateTrip(id, formData)
      .then(() => {
        setSuccess("Destination Edited Successfully.");
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
    <div className="edit-destination-container">
      <div className="edit-destination">
        <p
          className="edit-destination-back"
          onClick={() => {
            nav("/admindashboard");
          }}
        >
          Back to Dashboard
        </p>
        <h1 className="edit-destination-title">Edit Destination</h1>
        {error && <div className="message-error-container">{error}</div>}
        {success && <div className="message-success-container">{success}</div>}
        {trip && (
          <form onSubmit={handleEditTrip}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={trip.title}
              id="title"
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              defaultValue={trip.description}
              id="description"
            />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              defaultValue={trip.location}
              id="location"
            />
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              defaultValue={new Date(trip.date).toISOString().split("T")[0]}
              id="date"
            />
            <label htmlFor="duration">Duration</label>
            <input
              type="number"
              name="duration"
              defaultValue={trip.duration}
              id="duration"
            />

            <label htmlFor="type">Type</label>
            <select name="type" defaultValue={trip.type} id="type">
              <option value="adventure">Adventure</option>
              <option value="cultural">Cultural</option>
              <option value="family">Family</option>
              <option value="romantic">Romantic</option>
              <option value="beach">Beach</option>
              <option value="island">Island</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              defaultValue={trip.price}
              id="price"
            />

            <label htmlFor="image">Image</label>
            <input type="file" name="image" id="image" />

            <button className="edit-destination-btn" type="submit">
              Edit Destination
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
