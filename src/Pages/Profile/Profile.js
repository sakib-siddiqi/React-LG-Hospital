import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./profile.css";
import { FaUserCog } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useHistory } from "react-router";
import Center from "../../Shared/Components/Center";
const Profile = () => {
  const { user, handleSignOut, handleDeleteUser } = useAuth();
  const history = useHistory();
  return (
    <Container className="py-5" id="profile">
      <Row className="justify-content-center mt-5">
        <Col xm={11} md={9} lg={7}>
          <Card className="bg-primary text-light px-3 py-5">
            <Row>
              <Col xm={12} md={5} className="center">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.photoURL}
                    className="img-fluid rounded-pill"
                  />
                ) : (
                  <FaUserCog className="display-1" />
                )}
              </Col>
              <Col
                xm={12}
                md={7}
                className="center justify-content-around flex-column align-items-start"
              >
                <div>
                  <h4 className="fw-bold ls-2">{user.displayName}</h4>
                </div>
                <p className="text-light h5 ls-1">{user.email}</p>
                <button
                  onClick={() => {
                    handleSignOut();
                    history.push("/");
                  }}
                  className="py-2 px-4 bg-light text-dark btn ls-2 fw-bold"
                >
                  Logout
                </button>
              </Col>
            </Row>
          </Card>
          <Center className="mt-5">
            <button
              onClick={() => {
                handleDeleteUser();
                history.push("/");
              }}
              className="py-2 px-4 btn  btn-outline-danger btn ls-2 fw-bold"
            >
              Delete Account
            </button>
          </Center>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
