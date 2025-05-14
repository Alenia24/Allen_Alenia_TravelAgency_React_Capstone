import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//Import Components
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

// Import method function and CSS
import { getTrips } from "../../services/travel-api";
import "./AdminDashboard.css";

export default function AdmimDashboard() {
  const [trips, setTrips] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    getTrips().then((res) => setTrips(res.data));
  }, []);

  return (
    <div>
      <Navigation />
      <div className="admin-header">
        <h1 className="admin-title">Admin Dashboard</h1>
        <button
          onClick={() => {
            nav("/new-destination");
          }}
          className="book-now-btn"
        >
          Create Destination
        </button>
      </div>

      <div className="admin-destinations">
        {trips.map((trip, i) => {
          return (
            <Link to={`/admin-trip-details/${trip._id}`} key={i}>
              <div className="admin-destinations-card">
                <div className="admin-destinations-image">
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
