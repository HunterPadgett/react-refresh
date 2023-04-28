import React from "react";
import Projects from "./Projects";
import "./projects.css";

const Portfolio = () => {
 return (
  <section className="portfolio section" id="projects">
   <h2 className="section__title">Projects</h2>
   <span className="section__subtitle"></span>
   <Projects />
  </section>
 );
};

export default Portfolio;
