import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Import Pages
import HomePage from "./pages/HomePage/HomePage";
import Destination from "./pages/Destinations/Destination";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<Destination />} />
        {/* <Route path="*" element={<NoFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
