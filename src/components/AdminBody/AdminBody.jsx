import React from 'react'
import AllDestinations from "../../components/AllDestinations/AllDestinations";
import { Link, useNavigate } from "react-router-dom";

import "./AdminBody.css"

export default function AdminBody({trips}) {
  const nav = useNavigate();
  return (
    <div>
      <div className='admin-header'>
        <h1 className="admin-title">Admin Dashboard</h1>
        <button onClick={() => {
          nav("/new-destination")
        }} className='book-now-btn'>Create Destination</button>
      </div>
      
      <div className="destinations">
        {trips.map((trip, i) => {
          return (
            <Link to={`/admin-trip-details/${trip._id}`} key={i}>
              <div className="card">
                <div className="image">
                  <img
                    className="img-fluid"
                    src={trip.imageURL}
                    alt={trip.location}
                  />
                  <p>{trip.title}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  )
}
