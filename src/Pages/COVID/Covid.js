import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiPhoneCall } from "react-icons/bi";

const Covid = () => {
  return (
    <Container>
      {/* covid */}
      <Row xs={1} md={2} g={3} className="my-5 shadow=sm">
        <Col>
          <img
            src="/Images/hospital.png"
            alt="hospital.png"
            className="img-fluid shadow-sm rounded-3"
          />
        </Col>
        <Col>
          <h2 className="text-dark ls-1 mb-3 fw-bold">COVID-19 😥</h2>
          <div className="text-secondary lh-lg">
            <p>
              Total <span className="text-dange fw-bold ls-1">241,881,369</span>{" "}
              active cases over the word.
            </p>
            <p>
              Total <span className="text-danger fw-bold ls-1">4,920,476</span>{" "}
              death over the word.
            </p>
            <p>
              Total{" "}
              <span className="text-primary fw-bold ls-1">219,209,180</span>{" "}
              Recovered over the word.
            </p>
          </div>
          <p>
            <BiPhoneCall className=" me-3" />
            01765-065796
          </p>
        </Col>
      </Row>
      {/* vaccine */}
      <Row g={3} className="my-4 shadow=sm ">
        <Col xs={12} md={8} className="center align-items-start flex-column">
          <h2 className="text-dark ls-1 mb-3 fw-bold">Get Vaccined</h2>
          <div className="text-secondary lh-lg">
            Take Vaccine . Stay Safe and ensure your family's safety
          </div>
          <p>
            <BiPhoneCall className=" me-3" />
            01765-065796
          </p>
        </Col>
        <Col xs={12} md={4}>
          <img
            src="/Images/vaccine.jpg"
            alt="hospital.png"
            className="img-fluid shadow-sm rounded-3"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Covid;
