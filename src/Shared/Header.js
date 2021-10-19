import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaUserCog } from "react-icons/fa";
import "./avtar.css";
import useFirebase from "../Hooks/useFirebase";
const Header = () => {
  const { user } = useFirebase();
  return (
    <Navbar expand="lg" className="sticky-top glass-header">
      <Container>
        <Navbar.Brand as={NavLink} exact to="/">
          <img src="/Logo.png" alt="logo" style={{ maxWidth: "35px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              exact
              to="/"
              className="rounded-3 mx-2 my-2 my-md-0 text-center"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/covid19"
              className="rounded-3 mx-2 my-2 my-md-0 text-center"
            >
              COVID19
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/services"
              className="rounded-3 mx-2 my-2 my-md-0 text-center"
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className="rounded-3 mx-2 my-2 my-md-0 text-center"
            >
              About
            </Nav.Link>
            {user.uid ? (
              <Link
                to="/profile"
                className="avtar px-3 py-2 rounded-pill center fw-bold ls-1 text-dotted"
              >
                {user.displayName ? user.displayName.split(" ")[0] : "Profile"}
                <FaUserCog className="ms-2" />
              </Link>
            ) : (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/login"
                  className="rounded-pill mx-2 my-2 my-md-0 px-3 py-1 text-center btn-outline-primary"
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/signup"
                  className="rounded-pill mx-2 my-2 my-md-0 px-3 py-1 text-center btn-primary"
                >
                  Signup
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
