import React from 'react'
import { Link } from "react-router-dom";

export default function AllDestinations({ trips }) {
  return (
    <div>
      <h1 className="title">Destinations</h1>
      <div className="destinations">
        {trips.map((trip) => {
          return (
            <Link to={`/destinations/${trip._id}`}>
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
  );
}
