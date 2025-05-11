import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Import Pages
import HomePage from "./pages/HomePage/HomePage";
import Destination from "./pages/Destinations/Destinations";
import DestinationItem from "./pages/DestionationItem/DestinationItem";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/destinations/:id" element={<DestinationItem />} />
        {/* <Route path="*" element={<NoFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
