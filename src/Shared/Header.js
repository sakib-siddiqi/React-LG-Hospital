import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Navbar expand="lg" className="sticky-top glass-header">
      <Container>
        <Navbar.Brand as={NavLink} exact to="/">
          <img src="/logo.png" alt="logo" style={{ maxWidth: "35px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} exact to="/" className="rounded-3">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} exact to="/services" className="rounded-3">
              Services
            </Nav.Link>
            <Link
              to="/login"
              className="ms-2 btn-outline-primary py-1 px-3 rounded-pill"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="ms-2 btn-primary py-1 px-3 rounded-pill"
            >
              Signup
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
