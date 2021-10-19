import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useServices from "../../Hooks/useServices";

const ServiceSingle = () => {
  const { services } = useServices();
  const { findTitle } = useParams();
  const service = services.find((service) => service.title === findTitle);
  return (
    <Container className="py-5">
      <Row xs={1} md={2} className="my-5 flex-column-reverse  flex-md-row">
        <Col className="center flex-column align-items-start">
          <h3 className="text-dark ls-1 fw-bold mb-3">{service?.title}</h3>
          <p className="text-secondary mb-4">{service?.details}</p>
          <Link
            to="/success"
            className="btn-outline-primary py-2 px-4 rounded-2"
          >
            Take This
          </Link>
        </Col>
        <Col>
          <img
            src={service?.img}
            alt={service?.title}
            className="img-fluid rounded-3 shadow-sm"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceSingle;
