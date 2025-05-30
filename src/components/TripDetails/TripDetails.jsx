import { useNavigate, useParams } from 'react-router-dom';

import "./TripDetails.css"

export default function TripDetails({trip}) {
  const nav = useNavigate();
  const { id } = useParams();

  return (
    <div>
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
            <span>Date:</span> {new Date(trip.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
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
          <button onClick={(() => {
            nav(`/booking/${id}`)
          })} className="book-now-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
}
