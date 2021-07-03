import React from "react";
import { Row, Col } from "reactstrap";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import DescriptionIcon from "@material-ui/icons/Description";
// @ts-ignore
import Resume from '../resources/AmandaMisjuwar_Resume.pdf';


function Contacts() {
  const iconStyle = {
    color: "white",
    width: "50px",
    height: "50px",
    margin: "5%"
  };

  const contactStyle = {
    marginTop: "5vh",
  }

  return (
    <Row id="contacts" style={contactStyle} justify-content-md-center>
      <Col>
        <a href="https://github.com/amandamisjuwar">
          <GitHubIcon style={iconStyle} className="iconHover" />
        </a>
      </Col>
      <Col>
        <a href="https://www.linkedin.com/in/amandamisjuwar/">
          <LinkedInIcon style={iconStyle} className="iconHover"/>
        </a>
      </Col>
      <Col>
        <a href="mailto: abmisjuw@uwaterloo.ca">
          <EmailIcon style={iconStyle} className="iconHover"/>
        </a>
      </Col>
      <Col>
        <a href={Resume} rel="noopener noreferrer" target="_blank">
          <DescriptionIcon style={iconStyle} className="iconHover"/>
        </a>
      </Col>
    </Row>
  );
}

export default Contacts;
