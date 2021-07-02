import React from "react";
import { Col, Container, Row } from "reactstrap";
import Contacts from "./Contacts";

function ComingSoon() {
  const comingSoonStyle = {
    padding: "25%",
    background: "#93A2BC",
    color: "white",
  };
  return (
    <Container id="coming-soon" style={comingSoonStyle} fluid>
      <Row>
        <Col>
          <h1>This section is coming soon!</h1>
        </Col>
      </Row>

      <br></br>
      <Contacts></Contacts>
    </Container>
  );
}

export default ComingSoon;
