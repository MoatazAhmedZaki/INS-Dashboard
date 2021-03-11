import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../stylesheets/NavbCSS.css";
import logo from "../../images/White.png";

export default class Navb extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="Navb">
        <Navbar.Brand href="/" className="ml-auto">
          {" "}
          <img className="navLogo" alt="powerSupport-Logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              exact
              to="/"
              activeStyle={{
                color: " #0066B3",
                textDecoration: "none",
              }}
            >
              LOGIN
            </NavLink>

            <NavLink
              exact
              to="/Notifications"
              activeStyle={{
                color: " #0066B3",
                textDecoration: "none",
              }}
            >
              NOTIFICATIONS
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
