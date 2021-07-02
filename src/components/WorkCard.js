import { FullscreenExitTwoTone } from "@material-ui/icons";
import React from "react";
import { Card, CardBody, Collapse } from "reactstrap";

const lineColors = ["#93A2BC", "#AAC5C1", "#E6CECE"];

function ExpandButton(props) {
  const { onClick, cta, link, colorIndex } = props;

  const readMoreStyle = {
    backgroundColor: lineColors[colorIndex]
  }

  const expand = link ? <a href={link}><div className="readMore" style={readMoreStyle}>{cta}</div></a> : <div onClick={onClick} className="readMore" style={readMoreStyle}>{cta}</div>

  return expand;
}

function WorkCard(props) {
  const { title, company, location, term, blurb, colorIndex, cta, link } = props;

  const cardStyle = {
    border: "none",
    borderLeft: "8px solid " + lineColors[colorIndex],
    borderRadius: "0px 0px 0px 0px",
    paddingBottom: "2%"
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card style={cardStyle}>
      <CardBody>
        <h4 className="cardTitle">{title}</h4>
        <h4 className="cardTitle">{company}</h4>
        <h4 className="cardBody">{location}</h4>
        <h4 className="cardBody">{term}</h4>
        {!isOpen ? (
          <ExpandButton
            onClick={toggle}
            cta={cta}
            link={link}
            colorIndex={colorIndex}
          />
        ) : (
          <hr></hr>
        )}
        <Collapse isOpen={isOpen}>
          <p className="cardBody">{blurb}</p>
        </Collapse>
      </CardBody>
    </Card>
  );
}

export default WorkCard;
