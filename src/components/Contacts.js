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
    margin: "15%",
  };

  return (
    <Row id="contacts">
      <Col sm="3" md={{ size: 1, offset: 4 }}>
        <a href="https://github.com/amandamisjuwar">
          <GitHubIcon style={iconStyle} className="iconHover" />
        </a>
      </Col>
      <Col sm="3" md={{ size: 1 }}>
        <a href="https://www.linkedin.com/in/amandamisjuwar/">
          <LinkedInIcon style={iconStyle} className="iconHover"/>
        </a>
      </Col>
      <Col sm="3" md={{ size: 1 }}>
        <a href="mailto: abmisjuw@uwaterloo.ca">
          <EmailIcon style={iconStyle} className="iconHover"/>
        </a>
      </Col>
      <Col sm="3" md={{ size: 1 }}>
        <a href={Resume} rel="noopener noreferrer" target="_blank">
          <DescriptionIcon style={iconStyle} className="iconHover"/>
        </a>
      </Col>
    </Row>
  );
}

export default Contacts;
