import React from "react";
import { Card, Col } from "react-bootstrap";

const DoctorCard = ({ doctor }) => {
  const { name, degree, about, img } = doctor;
  return (
    <Col className="text-center doctor">
      <Card className="rounded-3 product-card py-4">
        <img src={img} alt="" className="img-fluid doctor-img mb-4" />
        <Card.Body className="text-start">
          <h5 className="fw-bold text-dark ls-1">{name}</h5>
          <p>
            {degree &&
              degree.map((deg) => (
                <span
                  className=" px-2 rounded-pill btn-outline-primary me-2 ls-1"
                  style={{ fontSize: "12px" }}
                >
                  {deg}
                </span>
              ))}
          </p>
          <p className="text-secondary ls-1">{about}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DoctorCard;
