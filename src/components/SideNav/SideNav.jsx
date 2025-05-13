import React from 'react'
import { Link } from "react-router-dom";

import "./SideNav.css"

export default function SideNav() {
  return (
    <div>
      <img
        src="../../src/assets/logo.png"
        alt="solar escape logo"
        width={100}
      />
      <div className="menu">
        <Link to="/editDestinations">
          Edit Destinations
        </Link>
      </div>
    </div>
  );
}
