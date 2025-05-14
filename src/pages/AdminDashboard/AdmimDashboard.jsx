import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import AdminBody from "../../components/AdminBody/AdminBody";

import "./AdminDashboard.css";
import { getTrips } from "../../services/travel-api";

export default function AdmimDashboard() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips().then((res) => setTrips(res.data));
  });
  return (
    <div>
      <Navigation />
      <AdminBody trips={trips} />
      <Footer />
    </div>
  );
}
