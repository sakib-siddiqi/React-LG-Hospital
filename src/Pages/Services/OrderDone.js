import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SuccessSVG from "../../SVG/SuccessSVG";

const OrderDone = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={4} md={2}>
          <SuccessSVG />
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDone;
