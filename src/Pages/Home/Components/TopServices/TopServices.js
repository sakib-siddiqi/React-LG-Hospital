import React from "react";
import { Row, Container } from "react-bootstrap";
import Title from "../../../../Shared/Components/Title";
import { IoDiamond } from "react-icons/io5";

const TopServices = () => {
  return (
    <Container className="my-5">
      <Title className="text-dark fw-bold ls-1 mt-5" title="Services">
        <IoDiamond />
      </Title>
      <Row xm={12} md={2} lg={3}></Row>
    </Container>
  );
};

export default TopServices;
