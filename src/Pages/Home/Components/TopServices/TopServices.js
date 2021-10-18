import React from "react";
import { Row, Container } from "react-bootstrap";
import Title from "../../../../Shared/Components/Title";
import { IoDiamond } from "react-icons/io5";
import useServices from "../../../../Hooks/useServices";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const TopServices = () => {
  const { services } = useServices();
  return (
    <Container className="my-5">
      <Title className="text-dark fw-bold ls-1 mt-5" title="Services">
        <IoDiamond />
      </Title>
      <Row xs={1} md={2} lg={3} className="g-4 mb-5 mt-1">
        {services.length ? (
          <>
            {services.slice(0, 6).map((service) => (
              <ServiceCard service={service} key={service.id} />
            ))}
          </>
        ) : (
          <h2 className="text-center mt-4 text-primary">Loading...</h2>
        )}
      </Row>
      <div className="text-center">
        <Link to="/services">
          <button className="btn-primary py-2 px-4 rounded-3 shadow">
            All SERVICES
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default TopServices;
