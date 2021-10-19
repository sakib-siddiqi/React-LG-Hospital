import React from "react";
import { Nav } from "react-bootstrap";
import Center from "../../../Shared/Components/Center";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router";
import useAuth from "../../../Hooks/useAuth";
const GoogleSignin = ({ handleSignin }) => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Center className="mt-4">
      <Nav.Link
        className="rounded-pill py-1 px-3 text-primary ls-2 pill-border"
        onClick={() => {
          handleSignin();
        }}
      >
        <FcGoogle /> <small>Google Signin</small>
      </Nav.Link>
    </Center>
  );
};

export default GoogleSignin;
