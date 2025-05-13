import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Import Pages
import HomePage from "./pages/HomePage/HomePage";
import Destination from "./pages/Destinations/Destinations";
import DestinationItem from "./pages/DestionationItem/DestinationItem";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AdminDashboard from "./pages/AdminDashboard/AdmimDashboard";
import EditDestination from "./pages/EditDestination/EditDestination";
import AdminTripDetails from "./components/AdminBody/AdminTripDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/destinations/:id" element={<DestinationItem />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/editDestinations/:id" element={<EditDestination />} />
        <Route path="/admin-trip-details/:id" element={<AdminTripDetails />} />
        {/* <Route path="*" element={<NoFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
