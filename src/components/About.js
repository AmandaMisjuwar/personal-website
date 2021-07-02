import React from "react";
import { Container, Row, Col } from "reactstrap";
// @ts-ignore
import me from "../images/me.jpeg";
import "../App.css";
import Contacts from "./Contacts";

function About() {
  const aboutStyle = {
    width: "100vw",
    backgroundColor: "#AAC5C1",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "10%",
    paddingRight: "10%",
  };

  const colStyle = {
    padding: "5%",
  };

  const profPicStyle = {
    width: "300px",
    margin: "auto",
  };

  const descColStyle = {
    paddingTop: "5%",
    display: "flex",
    justifyContent: "flex-end",
  };

  const pWhite = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    color: "white",
    textAlign: "left",
  };

  return (
    <Container id="about" style={aboutStyle} fluid>
      <Row>
        <Col sm="12" md="6" style={colStyle}>
          <img
            src={me}
            alt="Image of me at Sugar Beach!"
            style={profPicStyle}
          ></img>
        </Col>
        <Col sm="12" md="5" style={descColStyle}>
          <p style={pWhite}>
            Welcome! <br></br>
            <br></br>
            I’m a 3rd year Computer Science student at the University of
            Waterloo specializing in Human Computer Interaction. I really enjoy
            learning about making stuff that's aesthetic but also highly
            functional!<br></br>
            <br></br>
            Outside of software development, I love to cook and experiment with
            ingredients in my cupboard, and I dream of one day having a large,
            well-equipped kitchen to whip up anything my taste buds desire.
            <br></br>
            <br></br>I'm also an avid Animal Crossing player, and love to design
            (and re-design) my 5-star island Matcha. If you play AC, feel free
            to hit me up - I would love to visit your island and meet your
            villagers!
          </p>
        </Col>
      </Row>
      <Contacts></Contacts>
    </Container>
  );
}

export default About;
