import React, { useState } from "react";
import { Card, Col, Container, Row, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Center from "../../Shared/Components/Center";
import "./user.css";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card className="shadow py-4">
            <Card.Body>
              <img
                src="/logo2.png"
                alt="logo2.png"
                className="img-fluid mx-auto mb-4 d-block"
              />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log(userData.email, userData.password);
                  // clearing input values
                  setUserData({ email: "", password: "" });
                }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="rounded-2 px-2 py-3 mb-3"
                  onChange={(e) =>
                    setUserData({
                      email: e.target.value,
                      password: userData.password,
                    })
                  }
                  value={userData.email}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="rounded-2 px-2 py-3 mb-3"
                  onChange={(e) =>
                    setUserData({
                      email: userData.email,
                      password: e.target.value,
                    })
                  }
                  value={userData.password}
                />
                <button
                  type="submit"
                  className="btn-primary px-2 py-3 w-100 rounded-2 mb-2"
                >
                  Login
                </button>
                <Link to="/signup" className="text-primary">
                  Create an account .
                </Link>
                <Center className="mt-4">
                  <Nav.Link className="rounded-pill py-1 px-3 text-primary ls-2 pill-border">
                    <FcGoogle /> <small>Google Signin</small>
                  </Nav.Link>
                </Center>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
