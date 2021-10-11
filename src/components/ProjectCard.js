import React from "react";
import { Card, CardBody } from "reactstrap";

const lineColors = ["#93A2BC", "#E6CECE", "#96B1AD"];

function ProjectCard(props) {
  const { name, organization, desc, stack, colorIndex, link } = props;

  const cardStyle = {
    border: "none",
    borderTop: "8px solid " + lineColors[colorIndex],
    borderRadius: "15px 15px 20px 20px",
    padding: "4%",
    margin: "2%",
    marginBottom:"6%"
  };

  const hrStyle = {
    color: lineColors[colorIndex],
    backgroundColor: lineColors[colorIndex],
    height: "2px",
    width: "15%",
    marginLeft: "0px",
  };


  return (
    <Card style={cardStyle}>
      <CardBody>
        <h4 className="cardTitle">{name}</h4>
        <h4 className="cardTitle">{organization}</h4>
        <hr style={hrStyle}/>
        <p className="cardBody">{desc}</p>
        <p className="cardBody">Built with {stack}</p>
        {link ? <p className="cardBody">Find the source code <a href={link}>here</a></p> : null}
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
