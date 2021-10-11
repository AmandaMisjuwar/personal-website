import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
import WorkCard from "./WorkCard";

function Work() {
  const workExperiences = [
    {
      title: "Incoming Software Engineer Intern",
      company: "Microsoft",
      location: "Redmond, WA",
      term: "Summer 2022",
      blurb:
        `I'm really looking forward to joining the Cloud + AI group at Microsoft next summer!`,
      colorIndex: 2,
      cta: "Read more",
      link: "",
    },
    {
      title: "Full-stack Software Developer",
      company: "OANDA",
      location: "Remote",
      term: "Summer 2021",
      blurb:
        `At OANDA, I was on the Activation team, which handles the customer onboarding process. I built streamlined customer-facing components using React.js, Typescript, Material UI, and Formik. As for the backend, I worked on an API that handles tasks such as ID verification and user data in Python on Pyramid.

        One interesting thing I did was integrate a third party address finder service into the sign-up forms in order to standardize the user experience for customers in 100+ countries. Since global address formats differ significantly, the challenge was figuring out how to keep the forms as simple and intuitive to complete while still obtaining the necessary country-level details to proceed with ID verification.`,
      colorIndex: 0,
      cta: "Read more",
      link: "",
    },
    {
      title: "Software Engineer Intern",
      company: "American Express Canada",
      location: "Remote",
      term: "Fall 2020",
      blurb: `At Amex, I joined the International Insurance Team, where I built features on an internal portal used by agents across the world (UK, Argentina, Hong Kong, etc). I greatly improved my development skills using HTML/CSS/Javascript as well as Java on the Spring MVC framework.
      I also lead the implementation of a new big data workflow for the team, which eliminated the need for business analysts to repeatedly request manual data queries for marketing analysis. This was a huge learning curve for me as I had never worked with big data before. I authored shell scripts and configured event engine jobs to automate the data extraction through Hadoop, intermediate storage in Jethro tables, and live connection to Tableau reports. Throughout the process, I hosted numerous check-ins with marketing analysts to communicate requirements, which was also new experience to me!
      Finally, I had the opportunity to be a part of Amex Canada's Women in Technology team, where I got to create a publicity video that they now use to promote the network, recruit more  members, and propose events, which was super fun and engaging!`,
      colorIndex: 1,
      cta: "Read more",
      link: "",
    },
    {
      title: "Junior Web Developer",
      company: "AGF Investments",
      location: "Toronto, ON",
      term: "Winter 2020",
      blurb: `As a Junior Web Developer on the App Development team at AGF Investments, I designed and implemented unit tests in jUnit for the service and controller layers of the backend of AGF.com, the main agent and customer facing platform for the company. This resulted in improved functionality of critical features as well as higher confidence in correct behaviour of the code.
      I also helped investigate and fix critical back and front end production bugs that directly impacted both agents and clients.`,
      colorIndex: 2,
      cta: "Read more",
      link: "",
    },
    {
      title: "QA Analyst Intern",
      company: "Crowdlinker",
      location: "Toronto, ON",
      term: "Summer 2019",
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
    paddingBottom: "5%",
    paddingLeft: "10%",
    paddingRight: "10%",
    textAlign: "center"
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
