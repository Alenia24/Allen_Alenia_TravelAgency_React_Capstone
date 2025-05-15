import React from "react";

import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="socials">
          <h6>SOCIALS</h6>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div className="site-links">
          <h6>SOCIAL LINKS</h6>
          <p>
            <Link to={"/"}>Home</Link>
          </p>
          <p>
            <Link to={"/destinations"}>Destinations</Link>
          </p>
          <p>
            <Link to={"/about-us"}>About Us</Link>
          </p>
          <p>
            <Link to={"/admindashboard"}>Admin Dashboard</Link>
          </p>
        </div>

        <div className="contact-info">
          <h6>CONTACT INFO</h6>
          <p>+1 (800) 548-6546</p>
          <p>info@solaraescapes.com</p>
        </div>

        <div className="legal-info">
          <h6>LEGAL INFO</h6>
          <p>Privacy Policies</p>
          <p>Terms & Conditions</p>
          <p>Travel Disclosures or Insurance Info</p>
        </div>
      </div>

      <div className="copyright">© 2025 Solara Escapes</div>
    </div>
  );
}
