import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import { getTrips } from "../../services/travel-api";

import "./Destinations.css";
import Footer from "../../components/Footer/Footer";
import AllDestinations from "../../components/AllDestinations/AllDestinations";

export default function Destinations() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips().then((res) => setTrips(res.data));
  });
  return (
    <div>
      <Navigation />
      <AllDestinations trips={trips} />
      <Footer />
    </div>
  );
}
