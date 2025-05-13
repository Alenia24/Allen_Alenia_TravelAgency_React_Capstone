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

function App() {
  const [trips, setTrips] = useState([]);
  
    useEffect(() => {
      getTrips().then((res) => setTrips(res.data));
    });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<Destination trips={trips} />} />
        <Route path="/destinations/:id" element={<DestinationItem />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        {/* <Route path="*" element={<NoFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
