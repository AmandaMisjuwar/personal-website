import React from "react";
import About from "./About";
import Title from "./Title";
import Work from "./Work";
import ComingSoon from './ComingSoon'
import Projects from "./Projects";

function Page() {
  return (
    <div>
      <Title></Title>
      <About></About>
      <Work></Work>
      <Projects></Projects>
      <ComingSoon></ComingSoon>
    </div>
  );
}

export default Page;
