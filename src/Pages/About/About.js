import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiPhoneCall } from "react-icons/bi";
const About = () => {
  return (
    <Container className="my-5">
      <Row xs={1} md={2} g={3}>
        <Col>
          <h2 className="text-dark ls-1 mb-3 fw-bold">
            Laksham Genaral Hospital
          </h2>
          <p className="text-secondary lh-lg">
            Laksham General Hospital is a private not-for-profit hospital and
            one of the most comprehensive medical facilities At Laksham General
            Hospital, we’re dedicated to providing a high-quality care in an
            extremely convenient location. So you need not travel far to see
            highly trained specialists
          </p>
          <p>
            <BiPhoneCall className=" me-3" />
            01765-065796
          </p>
        </Col>
        <Col>
          <img
            src="/Images/hospital.png"
            alt="hospital.png"
            className="img-fluid shadow rounded-3"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
