import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about">
      <Navigation />
      <div className="about-us-container">
        <div>
          <h1>About Us</h1>
          <div>
            <h5>Explore the World with Confidence</h5>
            <p>
              At Solara's Escape, we believe that every journaey should be
              unforgettable. Since our founding in 2025, we've helped thousands
              of travelers discover the beauty, culture, and adventure the world
              has to offer. From the sun drenched beaches of Bali to the
              historic streets of Rome.
            </p>
          </div>

          <div>
            <h5>Who We Are</h5>
            <p>
              We're a team of passionate explorers, travel planners, and
              destination exports dedicated to turning your dream trips into
              reality, with decades of combined experience in the travel
              industry.
              <br />
              Whether you're planning a romantic honeymoon, a family getaway, or
              solo adventure, we are here to take care of the details so you can
              focus on making memories.
            </p>
          </div>

          <div>
            <h5>Why Choose Us?</h5>
            <p>
              <span>🌍Global Expertise:</span> We've traveled extensively and
              know the hidden gems.{" "}
            </p>
            <p>
              <span>📞24/7 Support:</span> We're just a call away. Before,
              during, and after your trip.
            </p>
            <p>
              <span>💵Great Value:</span> Competitive pricing without
              compromising on quality.
            </p>
          </div>
          <div>
            <h5>Our Mission</h5>
            <p>
              To inspire and empower people to explore the world with ease,
              confidence and excitement, one journey at a time.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
