import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiCopyrightFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer style={{ borderTop: "3px solid #444" }}>
      <Container className="pt-4">
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
            <Link to="/">
              <img src="/Logo2.png" alt="logo2.png" />
            </Link>
          </Col>
          <Col>
            <h3 className="text-dark ls-1 fw-bold mb-3">Contacts</h3>
            <p className="fst-italic mb-1 text-dark">017 00 - 00 00 00 </p>
            <p className="fst-italic text-dark">lgh.laksham@gmail.com </p>
          </Col>
          <Col>
            <h3 className="text-dark ls-1 fw-bold mb-3">Location</h3>
            <p className="fst-italic mb-1 text-dark">
              Laksham, Cumilla, Bangladesh
            </p>
          </Col>
        </Row>
      </Container>
      <p className="py-3 text-center center bg-light mb-0 fw-bold ls-1">
        <RiCopyrightFill /> by sakibsiddiqi15
      </p>
    </footer>
  );
};

export default Footer;
