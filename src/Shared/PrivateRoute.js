import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";
import Center from "./Components/Center";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <Container className="my-5">
        <Center>
          <Spinner animation="border" variant="primary" />
        </Center>
      </Container>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.uid ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
