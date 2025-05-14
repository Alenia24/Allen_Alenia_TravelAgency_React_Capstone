import React from 'react'
import { Link } from "react-router-dom";

import "./AllDestinations.css"

export default function AllDestinations({ trips }) {
  return (
    <div>
      <div className="all-destinations-header">
        <h1 className="all-destinations-title">Destinations</h1>
        <div></div>
      </div>
      <div className="all-destinations">
        {trips.map((trip, i) => {
          return (
            <Link to={`/destinations/${trip._id}`} key={i}>
              <div className="all-destinations-card">
                <div className="all-destinations-image">
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
