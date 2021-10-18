import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./founder.css";
const Founder = () => {
  return (
    <Container className="py-5" id="founder">
      <Row className="justify-content-center mt-5">
        <Col xm={11} md={9} lg={7}>
          <Card className="bg-primary text-light px-3 py-5">
            <Row>
              <Col xm={12} md={5}>
                <img
                  src="/Images/founder.png"
                  alt="founder.png"
                  className="rounded-pill img-fluid mb-3 mb-md-auto"
                />
              </Col>
              <Col
                xm={12}
                md={7}
                className="center justify-content-around flex-column align-items-start"
              >
                <div>
                  <h4 className="fw-bold ls-2">MD. Yusuf Rahman</h4>
                  <small className="ls-1 lh-base">
                    “When I was a child, there was not even a single hospital in
                    this area. This Hospital was my childhood dream and now it
                    is here to provide you best services for low cost.”
                  </small>
                </div>
                <p className="text-light h5 ls-1">Founder of LGH</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Founder;
