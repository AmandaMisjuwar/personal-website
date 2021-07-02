import React from "react";
import { Container, Row, Col } from "reactstrap";
// @ts-ignore
import defaultAC from "../images/DefaultACAvatar.svg";
// @ts-ignore
import chefAC from "../images/ChefACAvatar.svg";
// @ts-ignore
import smilingAC from "../images/SmilingACAvatar.svg";
import TextTransition, { presets } from "react-text-transition";
// @ts-ignore
import { ReactComponent as Arrow } from "../images/arrow.svg";
import { Link } from "react-scroll";

function Title() {
  const titleStyle = {
    width: "100vw",
    height: "100vh",
    paddingTop: "12%",
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
    marginTop: "10vh",
    cursor: 'pointer'
  };

  const avatars = [defaultAC, chefAC, smilingAC];

  const myDescs = [
    "an aspiring software engineer",
    "a spicy food enthusiast",
    "a bullet journaler in training",
  ];

  const descColors = ["#AAC5C1", "#93A2BC", "#E6CECE"];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => setIndex((index) => index + 1), 2100);
    return () => clearTimeout(interval);
  }, []);

  return (
    <Container
      id="title"
      style={titleStyle}
      className="themed-container"
      fluid={true}
    >
      <Row>
        <Col col-sm-12 col-md-6 offset-md-3>
          <img src={avatars[index % avatars.length]} style={titleImageStyle} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 style={headerStyle}>Hi! I'm Amanda.</h1>
        </Col>
      </Row>
      <Row>
        <Col style={descStyle} col-sm-12 col-md-6 col-lg-6>
          I'm{" "}
          <TextTransition
            text={myDescs[index % myDescs.length]}
            style={{ color: descColors[index % descColors.length] }}
            inline
            noOverflow
            springConfig={presets.stiff}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Link
            // style={navItemStyle}
            to="about"
            smooth={true}
            duration={500}
          >
            <Arrow style={arrowStyle} className="bounce"></Arrow>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Title;
