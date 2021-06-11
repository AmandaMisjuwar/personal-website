import React from "react";
import { Container, Row, Col } from "reactstrap";
// @ts-ignore
import me from "../images/me.jpeg";
import "../App.css";

function About() {
  const aboutStyle = {
    minHeight: "80vh",
    width: "100vw",
    backgroundColor: "#BAD4D0",
    padding: "8%",
  };

  const colStyle = {
      padding: '5%'
  };

  const profPicStyle = {
    width: "300px",
    marginRight:'0px'
  };

  const pWhite = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    color: "white",
    textAlign: "left",
  };

  return (
    <Container style={aboutStyle} fluid>
      <Row>
        <Col sm="12" md="6" style={colStyle}>
          <img
            src={me}
            alt="Image of me at Sugar Beach!"
            style={profPicStyle}
          ></img>
        </Col>
        <Col sm="12" md="4">
          <p style={pWhite}>
            Welcome! <br></br><br></br> I’m currently a 3rd year student studying Computer Science
            at the University of Waterloo. Something about my goals in career
            and maybe something about design and human computer interaction. <br></br><br></br>
            Outside of software development, I love to cook and experiment with
            ingredients I have in my fridge and secretly dream of starting a
            Youtube channel to share my recipes with the world. <br></br><br></br>I also love
            bullet journaling, making short dance animation clips, and
            decorating my Animal Crossing island.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
