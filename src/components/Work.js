import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
import WorkCard from "./WorkCard";

function Work() {
  const workExperiences = [
    {
      title: "Full-stack Software Developer",
      company: "OANDA",
      location: "Remote",
      term: "Summer 2021",
      blurb:
        "Working on the onboarding process using React, Python, and Flask.",
      colorIndex: 0,
      cta: "Read more",
      link: "",
    },
    {
      title: "Software Engineer Intern",
      company: "American Express Canada",
      location: "Remote",
      term: "Fall 2020",
      blurb: `At Amex, I was on the International Insurance Team, where I helped develop features on an internal portal used by our agents across the world (UK, Argentina, Hong Kong, etc).
      I also lead the implementation of a big data workflow that was new to the team, eliminating the need for business analysts to regularly request manual data queries for analysis.
      Finally, I volunteered for Amex Canada’s Women in Tech network and helped them make an engaging publicity video which they now use to promote and recruit more network members and propose events!`,
      colorIndex: 1,
      cta: "Read more",
      link: "",
    },
    {
      title: "Junior Web Developer",
      company: "AGF Investments",
      location: "Toronto, ON",
      term: "Winter 2020",
      blurb: `As a Junior Web Developer on the App Development team at AGF Investments, I designed and implemented unit tests in jUnit for the service and controller layers of the backend of AGF.com, the main agent and customer facing platform for the company. This resulted in improved functionality of critical features and brought up new edge cases for testing.
      I also helped investigate and fix critical back and front end production bugs that directly impacted both agents and clients.`,
      colorIndex: 2,
      cta: "Read more",
      link: "",
    },
    {
      title: "QA Analyst Intern",
      company: "American Express Canada",
      location: "Remote",
      term: "Fall 2020",
      blurb: "",
      colorIndex: 0,
      cta: "Read the blog post",
      link: "https://crowdlinker.com/blog/software-qa-internship-experience/",
    },
  ];
  const pageHeaderFont = {
    fontFamily: "Poppins, sans-serif",
  };
  const workExperienceStyle = {
    width: "100vw",
    minHeight: "100vh",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "10%",
    paddingRight: "10%",
  };

  const workExperienceComponents = workExperiences.map((item) => {
    return (
      <WorkCard
        title={item.title}
        company={item.company}
        location={item.location}
        term={item.term}
        blurb={item.blurb}
        colorIndex={item.colorIndex}
        cta={item.cta}
        link={item.link}
      ></WorkCard>
    );
  });

  return (
    <div id="work">
      <Container style={workExperienceStyle}>
        <Row>
          <Col>
            <h1 className="pageHeader" style={pageHeaderFont}>
              WORK EXPERIENCE
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>{workExperienceComponents}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Work;
