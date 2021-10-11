import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectList = [
    {
      name: "Marketeer",
      organization: `Hack the North 2021`,
      desc: `A competitor analysis tool utilizing web scraping for small business owners to visualize online marketplace metrics`,
      stack: `ReactJS, NodeJS, Puppeteer, Firebase, Dropbase`,
      colorIndex: 2,
      link: "https://github.com/AmandaMisjuwar/marketing-analysis-tool",
    },
    {
      name: "Community Fridge KW",
      organization: "UW Blueprint",
      desc: `A scheduling platform for the local non-profit organization Community Fridge KW!`,
      stack: `TypeScript, ReactJS, Express.js, NodeJS, PostgreSQL, Docker`,
      colorIndex: 1,
      link: "https://github.com/uwblueprint/community-fridge-kw/",
    },
    {
      name: "fundbear",
      organization: "ElleHacks 2020",
      desc: `An app that connects disaster relief organizations & potential donors to maximize emergency aid`,
      stack: `ReactJS`,
      colorIndex: 2,
      link: "https://github.com/AmandaMisjuwar/fundbear",
    },
    {
      name: "Personal Website",
      organization: "",
      desc: `The website you're looking at right now!`,
      stack: `ReactJS`,
      colorIndex: 1,
      link: "https://github.com/AmandaMisjuwar/personal-website",
    },
    {
      name: "biquadris",
      organization: "",
      desc: `Two-player Tetris with special features. Utilized OOP concepts and design patterns such as MVC and observer`,
      stack: `C++`,
      colorIndex: 2,
      link: "",
    },
  ];
  const pageHeaderFont = {
    fontFamily: "Poppins, sans-serif",
    color: "white",
  };
  const projectsStyle = {
    width: "100vw",
    backgroundColor: "#93A2BC",
    paddingBottom: "5%",
    paddingLeft: "10%",
    paddingRight: "10%",
    textAlign: "center",
  };

  const projectsComponents = projectList.map((item) => {
    return (
      <Col sm="12" lg="4">
        <ProjectCard
          name={item.name}
          organization={item.organization}
          desc={item.desc}
          stack={item.stack}
          colorIndex={item.colorIndex}
          cta={item.cta}
          link={item.link}
        ></ProjectCard>
      </Col>
    );
  });

  return (
    <div id="projects" style={projectsStyle}>
      <Container>
        <Row>
          <Col>
            <h1 className="pageHeader" style={pageHeaderFont}>
              PROJECTS
            </h1>
          </Col>
        </Row>
        <Row>{projectsComponents}</Row>
      </Container>
    </div>
  );
}

export default Projects;
