import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./BookingPage.css";
import Navigation from "../../components/Navigation/Navigation";
import { createBookings } from "../../services/travel-api";

export default function BookingPage() {
  const [success, setSuccess] = useState(null);
  const { id } = useParams();
  const nav = useNavigate();

  const handleBooking = (e) => {
    e.preventDefault();

    const bookingData = {
      trip: id,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      telephone: e.target.telephone.value,
    };
    createBookings(id, bookingData).then(() => {
      setSuccess("Booking Created Successfully.");
      setTimeout(() => {
        nav(`/`);
      }, 1000);
    });
  };

  return (
    <div>
      <Navigation />
      <div className="booking-page-container">
        <div className="booking">
          <h1>Booking Form</h1>
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
