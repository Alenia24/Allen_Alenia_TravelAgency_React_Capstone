import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

import "./HomePage.css";
import banner from "../../../src/assets/banner.png";
import action1 from "../../../src/assets/action1.png";
import action2 from "../../../src/assets/action2.png";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const nav = useNavigate()
  return (
    <>
      <Navigation />
      <div>
        <div className="banner">
          <img className="img-fluid banner" src={banner} alt="" />
          <div className="banner-hero">
            <p className="unforgetable">Unforgetable Escapes</p>
            <p className="expertly">Expertly Designed.</p>
            <button
              onClick={() => {
                nav("/destinations");
              }}
              className="travel-with-us-btn"
            >
              Travel With Us
            </button>
          </div>
        </div>

        <div className="action">
          <div className="action-info">
            <p className="grab">Grab your passport</p>
            <h2 className="adventure">Adventure</h2>
            <p className="awaits">awaits</p>
            <button onClick={() => {
                nav("/destinations");
              }} className="travel-with-us-btn">Travel With Us</button>
          </div>
          <div className="action-images">
            <img className="img-fluid img1" src={action1} alt="" width={300} />
            <img className="img-fluid img2" src={action2} alt="" width={300} />
          </div>
        </div>

        <div className="traveler-favs">

        </div>
      </div>
      <Footer />
    </>
  );
}
