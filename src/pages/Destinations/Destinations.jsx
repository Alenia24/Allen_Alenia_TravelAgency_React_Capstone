import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import { getTrips } from "../../services/travel-api";

import "./Destinations.css";
import { Link } from "react-router-dom";

export default function Destinations() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips().then((res) => setTrips(res.data));
  });
  return (
    <div>
      <Navigation />
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
    </div>
  );
}
