import React from "react";
import { Container, Row, Col } from "reactstrap";
// @ts-ignore
import defaultAC from "../images/DefaultACAvatar.svg";
// @ts-ignore
import eyesClosedAC from "../images/EyesClosedACAvatar.svg";
// @ts-ignore
import smilingAC from "../images/SmilingACAvatar.svg";
import TextTransition, { presets } from "react-text-transition";
// @ts-ignore
import {ReactComponent as Arrow } from '../images/arrow.svg';

function Title() {
  const titleStyle = {
    width: "100vw",
    minHeight: "100vh",
    paddingTop: "18vh",
  };

  const headerStyle = {
    paddingTop: "3%",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 600,
    fontSize: "78px",
    color: "black",
  };

  const descStyle = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    fontSize: "22px",
    color: "black",
  };

  const titleImageStyle = {
    height: "275px",
    width: "275px",
  };

  const arrowStyle = {
    marginTop: '10%'
  };

  const avatars = [defaultAC, smilingAC, eyesClosedAC];

  const myDescs = [
    "software engineer",
    "novice levele chef",
    "beginner animator",
  ];

  const descColors = ["#BAD4D0", "#93A2BC", "#E6CECE"];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => setIndex((index) => index + 1), 2100);
    return () => clearTimeout(interval);
  }, []);

  return (
    <div id="title" style={titleStyle}>
      <Container className="themed-container" fluid={true}>
        <Row>
          <Col col-sm-12 col-md-6 offset-md-3>
            <img
              src={avatars[index % avatars.length]}
              style={titleImageStyle}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 style={headerStyle}>Hi! I'm Amanda.</h1>
          </Col>
        </Row>
        <Row>
          <Col style={descStyle} col-sm-12 col-md-6 col-lg-6>
            I'm a{" "}
            <TextTransition
              text={myDescs[index % myDescs.length]}
              style={{ color: descColors[index % descColors.length] }}
              inline
              noOverflow
              springConfig={ presets.molasses }
            />
          </Col>
        </Row>
        <Row>
          <Col>
          <Arrow style={arrowStyle} className="bounce"></Arrow>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Title;
