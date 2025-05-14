import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import { getTrips } from "../../services/travel-api";
import { Link } from "react-router-dom";

import "./Destinations.css";
import Footer from "../../components/Footer/Footer";

export default function Destinations() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips().then((res) => setTrips(res.data));
  });
  return (
    <div>
      <Navigation />
      <div className="destinations-header">
        <h1 className="destinations-title">Destinations</h1>
        <div></div>
      </div>
      <div className="destinations">
        {trips.map((trip, i) => {
          return (
            <Link to={`/destinations/${trip._id}`} key={i}>
              <div className="destinations-card">
                <div className="destinations-image">
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
      <Footer />
    </div>
  );
}
