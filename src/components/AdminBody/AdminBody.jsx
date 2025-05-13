import React from 'react'
import AllDestinations from "../../components/AllDestinations/AllDestinations";
import { Link } from "react-router-dom";

export default function AdminBody({trips}) {
  return (
    <div>
      <h1 className="title">Admin Dashoard</h1>
      <div className="destinations">
        {trips.map((trip) => {
          return (
            <Link to={`/admin-trip-details/${trip._id}`}>
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
