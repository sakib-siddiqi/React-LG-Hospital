import React from "react";
import { Row, Container } from "react-bootstrap";
import { IoDiamond } from "react-icons/io5";
import { Link } from "react-router-dom";
import useServices from "../../Hooks/useServices";
import Title from "../../Shared/Components/Title";
import ServiceCard from "../Home/Components/TopServices/ServiceCard";

const Services = () => {
  const { services } = useServices();
  return (
    <Container className="my-5">
      <Title className="text-dark fw-bold ls-1" title="Services">
        <IoDiamond />
      </Title>

      {services.length ? (
        <Row xs={1} md={2} lg={3} className="g-4 mb-5 mt-1">
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </Row>
      ) : (
        <h2 className="text-center mt-4 text-primary">Loading...</h2>
      )}
      <div className="text-center">
        <Link to="/">
          <button className="btn-primary py-2 px-4 rounded-3 shadow mt-4">
            Back to Home
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default Services;
