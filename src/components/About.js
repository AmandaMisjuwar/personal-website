import React from "react";
import { Container, Row, Col } from "reactstrap";
// @ts-ignore
import me from "../resources/me.jpeg";
import "../App.css";
import Contacts from "./Contacts";
// @ts-ignore
import Resume from '../resources/AmandaMisjuwar_Resume.pdf';

function About() {
  const aboutStyle = {
    width: "100vw",
    backgroundColor: "#96B1AD",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "10%",
    paddingRight: "10%",
    textAlign: "center"
  };

  const colStyle = {
    padding: "5%",
  };

  const profPicStyle = {
    width: "325px",
    margin: "auto",
  };

  const descColStyle = {
    paddingTop: "5%",
    display: "flex",
    justifyContent: "flex-end",
  };

  const pWhite = {
    fontFamily: 'Jost', 
    fontWeight: 500,
    fontSize: "17px",
    color: "white",
    textAlign: "left",
  };

  return (
    <Container id="about" style={aboutStyle} fluid>
      <Row>
        <Col sm="12" lg="6" style={colStyle}>
          <img
            src={me}
            alt="Me at Sugar Beach!"
            style={profPicStyle}
          ></img>
        </Col>
        <Col sm="12" lg="5" style={descColStyle}>
          <p style={pWhite}>
            Hi there! I’m a 4th year Computer Science student at the University of
            Waterloo specializing in Human Computer Interaction. Previously, I've interned at OANDA 
            and American Express, where I worked on full-stack web applications and data workflows. 
            <br></br>
            <br></br>
            Currently, I'm interning at Microsoft on the .NET Core Infrastructure team, which builds tools to support
            the open-source development of .NET applications! I'm also volunteering with <a href="https://uwblueprint.org/">UW Blueprint</a> to lead the 
            implementation of a camp booking system for the non-profit org Focus on Nature! 🌱
            <br></br>
            <br></br>
            Outside of software development, I'm an avid Animal Crossing player, and love to design
            my island Matcha. If you play, I'd love to visit and meet your villagers!
            <br></br>
            <br></br>
            Also, I'm currently searching for Fall 2022 SWE/TPM internships - here's my <a style={{color: 'white', textDecoration: 'underline', fontWeight: 'bold'}} href={Resume} rel="noopener noreferrer" target="_blank">resume</a>!
          </p>
        </Col>
      </Row>
      <Contacts></Contacts>
    </Container>
  );
}

export default About;
