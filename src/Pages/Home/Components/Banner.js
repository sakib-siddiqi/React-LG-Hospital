import React from "react";
import { Container } from "react-bootstrap";

const Banner = () => {
  return (
    <Container
      fluid
      className="text-center banner ls-2 text-light center flex-column"
    >
      <h1 className="fw-bold mb-3 lh-sm fs-lg">
        Laksham General
        <br />
        Hospital
      </h1>
      <h6>Our Duty to Care You</h6>
    </Container>
  );
};

export default Banner;
