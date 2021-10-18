import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, details, img } = service;
  return (
    <Col className="text-center service">
      <Card className="rounded-3 product-card">
        <img src={img} alt="" className="img-fluid card-img" />
        <Card.Body>
          <h5 className="fw-bold text-dark ls-1">{title}</h5>
          <small className="text-secondary px-3 text-dotted ls-1">
            {details}
          </small>
          <Link to={`/services/${title}`}>
            <button className="btn-outline-primary py-1 px-3 rounded-2 mt-3">
              Details
            </button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceCard;
