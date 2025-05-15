import React from "react";

import { useNavigate } from "react-router-dom";
import "./RestrictedPage.css"
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function RestrictedPage() {
  const nav = useNavigate();
  return (
    <div className="restricted-page-container">
        <Navigation />
      <div className="restricted-container">
        <h1 className="title">
          4<span>🔒</span>3
        </h1>
        <h2 className="restict">Restricted Access</h2>
        <button
          className="home-btn"
          onClick={() => {
            nav("/");
          }}
        >
          Continue to Homepage
        </button>
      </div>
      <Footer />
    </div>
  );
}
