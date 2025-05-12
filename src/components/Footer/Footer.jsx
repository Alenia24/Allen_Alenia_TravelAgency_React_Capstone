import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-info">
          <div className="socials">
            <h6>SOCIALS</h6>
            <p>Linkedln</p>
            <p>Github</p>
          </div>
          <div className="site-links">
            <h6>SOCIAL LINKS</h6>
            <p>Destinations</p>
            <p>Vacation Types</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>

          <div className="contact-info">
            <h6>CONTACT INFO</h6>
            <p>alenia.allenn@gmail.com</p>
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
    </div>
  );
}
