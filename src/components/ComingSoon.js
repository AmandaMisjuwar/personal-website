import React from "react";
import { Container, Row } from "reactstrap";
import Contacts from "./Contacts";

function ComingSoon() {
  const comingSoonStyle = {
    height: "100vh",
    padding: "25%",
    background: "#93A2BC",
    color: "white",
  };
  return (
    <Container id="coming-soon" style={comingSoonStyle} fluid>
      <h1>This section is coming soon! :)</h1>
      <br></br>
      <Contacts></Contacts>
    </Container>
  );
}

export default ComingSoon;
