import React from "react";
import "./skills.css";
import Dev from "./Dev";
import Backend from "./Backend";

const Skills = () => {
 return (
  <section className="skills section" id="skills">
   <h2 className="section__title">Skills</h2>
   <span className="section__subtitle"></span>
   <div className="skills__container container grid">
    <Backend />
    <Dev />
   </div>
   {/* <Backend /> */}
  </section>
 );
};

export default Skills;
