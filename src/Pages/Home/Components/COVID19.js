import React from "react";
import { Container } from "react-bootstrap";
import { AiFillAlert } from "react-icons/ai";
const COVID19 = () => {
  return (
    <Container
      id="covid"
      className="rounded-3 px-2 py-4 text-center position-relative"
    >
      <div className="covid-icon shadow mx-auto center bg-light position-absolute">
        <AiFillAlert className="h2 text-danger" />
      </div>
      <h2 className="text-dark fw-bold ls-2 mt-3">
        <span className="text-danger">COVID19</span> CARE
      </h2>
      <small className="text-secondary ls-1 d-block mb-4">
        We are providign you COVID19 care service with low cost.
      </small>
      <button className="btn btn-primary py-2 px-4 mb-3 shadow">
        Take Covid Service
      </button>
    </Container>
  );
};

export default COVID19;
