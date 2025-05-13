import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import SideNav from "../../components/SideNav/SideNav";
import AdminBody from "../../components/AdminBody/AdminBody";

import "./AdminDashboard.css"

export default function AdmimDashboard() {
  return (
    <div>
      <Navigation />
      <div className="admin-layout">
        <SideNav />
        <AdminBody />
      </div>
      <Footer />
    </div>
  );
}
