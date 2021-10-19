import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Center from "../../Shared/Components/Center";
import NotFoundSVG from "../../SVG/NotFoundSVG";
import { BiHomeHeart } from "react-icons/bi";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <Container className="my-5">
      <Row className=" center justify-content-center my-5">
        <Col xs={8} md={3}>
          <NotFoundSVG />
        </Col>
      </Row>
      <Center>
        <NavLink className="btn-primary p-2 rounded-3" to="/">
          <BiHomeHeart className="h4" />
        </NavLink>
      </Center>
    </Container>
  );
};

export default NotFound;
