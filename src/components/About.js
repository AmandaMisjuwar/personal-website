import React from "react";
import { Container, Row, Col } from "reactstrap";
// @ts-ignore
import me from "../images/me.jpeg";
import "../App.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import DescriptionIcon from "@material-ui/icons/Description";

function About() {
  const aboutStyle = {
    width: "100vw",
    backgroundColor: "#AAC5C1",
    paddingTop: "5%", 
    paddingBottom: "5%",
    paddingLeft: "10%",
    paddingRight: "10%"
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

  const iconStyle = {
      color: 'white',
      width: '50px',
      height: '50px',
      margin: '15%'
  }

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
        <Col sm="12" md="5" style={descColStyle}>
          <p style={pWhite}>
            Welcome! <br></br>
            <br></br> I’m currently a 3rd year student studying Computer Science
            at the University of Waterloo. Something about my goals in career
            and maybe something about design and human computer interaction.{" "}
            <br></br>
            <br></br>
            Outside of software development, I love to cook and experiment with
            ingredients I have in my fridge and secretly dream of starting a
            Youtube channel to share my recipes with the world. <br></br>
            <br></br>I also love bullet journaling (maybe I'll post my
            spreads?), making short dance animation clips, and decorating my Animal Crossing
            island!
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm="3" md={{size: 1, offset: 4}}>
          <GitHubIcon style={iconStyle} />
        </Col>
        <Col sm="3" md={{size: 1}}>
          <LinkedInIcon style={iconStyle} />
        </Col>
        <Col sm="3" md={{size: 1}}>
          <EmailIcon style={iconStyle} />
        </Col>
        <Col sm="3" md={{size: 1}}>
          <DescriptionIcon style={iconStyle} />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
