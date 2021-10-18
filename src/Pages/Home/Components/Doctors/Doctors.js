import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaClinicMedical } from "react-icons/fa";
import useDoctors from "../../../../Hooks/useDoctors";
import Title from "../../../../Shared/Components/Title";
import DoctorCard from "./DoctorCard";

const Doctors = () => {
  const { doctors } = useDoctors();
  return (
    <Container className="my-5">
      <Title className="text-dark fw-bold ls-1 mt-5" title="Doctors">
        <FaClinicMedical />
      </Title>
      <Row xs={1} md={2} lg={3} className="g-4 mb-5 mt-1">
        {doctors.length ? (
          <>
            {doctors.map((doctor) => (
              <DoctorCard doctor={doctor} />
            ))}
          </>
        ) : (
          <h2 className="text-center mt-4 text-primary">Loading...</h2>
        )}
      </Row>
    </Container>
  );
};

export default Doctors;
