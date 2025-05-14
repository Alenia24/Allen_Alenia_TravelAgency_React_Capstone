import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Import components
import Navigation from "../../components/Navigation/Navigation";

// Import method function and CSS
import { createBookings } from "../../services/travel-api";
import "./BookingPage.css";

export default function BookingPage() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const nav = useNavigate();

  const handleBooking = (e) => {
    e.preventDefault();

    // Create the booking data to send to the server
    const bookingData = {
      trip: id,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      telephone: e.target.telephone.value,
    };

    // Create the booking
    createBookings(id, bookingData)
      .then(() => {
        setSuccess("Booking Created Successfully.");
        setError("");
        setTimeout(() => {
          nav(`/`);
        }, 2000);
      })
      .catch((error) => {
        setError(error.response.data.message);
        setSuccess("");
      });
  };

  return (
    <div>
      <Navigation />
      <div className="booking-page-container">
        <div className="booking">
          <h1>Booking Form</h1>
          {error && <div className="message-error-container">{error}</div>}
          {success && (
            <div className="message-success-container">{success}</div>
          )}

          <form onSubmit={handleBooking} className="booking-form" method="post">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" required />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" required />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
            <label htmlFor="telephone">Telephone</label>
            <input type="text" name="telephone" id="telephone" required />

            <button className="booking-btn" type="submit">
              Book Trip
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
