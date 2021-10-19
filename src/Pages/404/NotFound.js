import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NotFoundSVG from "../../SVG/NotFoundSVG";

const NotFound = () => {
  return (
    <Container className="my-5">
      <Row className=" center justify-content-center">
        <Col xs={8} md={3}>
          <NotFoundSVG />
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
