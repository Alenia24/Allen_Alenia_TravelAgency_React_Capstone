import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTrips, getTrip, updateTrip } from "../../services/travel-api";

export default function AdminTripDetails() {
  const [trip, setTrip] = useState({});
  const { id } = useParams();
  const nav = useNavigate();


  useEffect(() => {
    getTrip(id).then((res) => setTrip(res.data));
  }, []);

  const deleteDestination = () => {
    deleteTrips(id).then(() => {
        nav("/admindashboard")
    })
  }

  return (
    <div>
      {trip && (
        <div className="trip-container">
          <img className="img-fluid" src={trip.imageURL} alt={trip.location} />
          <div className="trip-details">
            <h1>{trip.title}</h1>
            <p>
              <span>Location:</span> {trip.location}
            </p>
            <p>
              <span>Description:</span> {trip.description}
            </p>
            <p>
              <span>Date:</span> {trip.date}
            </p>
            <p>
              <span>Duration:</span> {trip.duration} Days
            </p>
            <p>
              <span>Trip Type:</span> {trip.type}
            </p>
            <p>
              <span>Price:</span> ${trip.price}
            </p>
            <button
              className="book-now-btn"
              onClick={() => {nav(`/editDestinations/${id}`)}}
            >
              Edit Destination
            </button>
            <button className="book-now-btn" onClick={deleteDestination}>
              Delete Destination
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
