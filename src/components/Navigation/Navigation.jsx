import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";

import logo from "../../../src/assets/logo.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
  //Check if a token exists in local storage
  const loggedIn = localStorage.getItem("accessToken") !== null;
  const nav = useNavigate();

  //If the logout button is clicked remove the accessToken and refresh token from local storage
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    //Redirect to home page
    nav("/");
  };
  return (
    <div>
      <div className="message">
        <p>
          Curated Journeys to the World's Most Captivating Destination. Travel
          Beyond Expectation. <span>Book Now</span>
        </p>
      </div>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className="mx-3 p-0">
          <Nav.Link as={Link} to={"/"}>
            <img src={logo} alt="" width={100} height={50} />
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/destinations"}>
                Destinations
              </Nav.Link>
              <Nav.Link as={Link} to={"/vacation-types"}>
                Vacation Types
              </Nav.Link>
              <Nav.Link as={Link} to={"/about-us"}>
                About Us
              </Nav.Link>
              {/* // Toggle between login and logout  */}
              {loggedIn ? (
                <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
              ) : (
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
