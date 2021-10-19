import React, { useState } from "react";
import { Card, Col, Container, Row, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Center from "../../Shared/Components/Center";
import "./user.css";
import { FcGoogle } from "react-icons/fc";
import GoogleSignin from "./Components/GoogleSignin";
import useFirebase from "../../Hooks/useFirebase";
const Signup = () => {
  const { user, handleGoogleSignin, handleEmailPasswordSignup } = useFirebase();
  console.log(user);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card className="shadow py-4">
            <Card.Body>
              <img
                src="/Logo2.png"
                alt="logo2.png"
                className="img-fluid mx-auto mb-4 d-block"
              />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const { name, email, password } = userData;
                  handleEmailPasswordSignup(name, email, password);
                  // clearing input values
                  setUserData({ name: "", email: "", password: "" });
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="rounded-2 px-2 py-3 mb-3"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({
                      name: e.target.value,
                      email: userData.email,
                      password: userData.password,
                    })
                  }
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="rounded-2 px-2 py-3 mb-3"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({
                      name: userData.name,
                      email: e.target.value,
                      password: userData.password,
                    })
                  }
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="rounded-2 px-2 py-3 mb-3"
                  onChange={(e) =>
                    setUserData({
                      name: userData.name,
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
                  Signup
                </button>
                <Link to="/login" className="text-primary">
                  I have an account .
                </Link>
              </form>{" "}
              <GoogleSignin handleSignin={handleGoogleSignin} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
