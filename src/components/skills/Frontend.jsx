import React from "react";
import { HiCheckBadge } from "react-icons/hi2";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

const Frontend = () => {
 return (
  <div className="skills__content">
   <h3 className="skills__title">Frontend Developer</h3>
   <div className="skills__box">
    <div className="skills__group">
     <div className="skills__data">
      <SiHtml5 />
      <div>
       <h3 className="skills__name">HTML</h3>
      </div>
     </div>
     <div className="skills__data">
      <SiCss3 />
      <div>
       <h3 className="skills__name">CSS/SASS</h3>
      </div>
     </div>
     <div className="skills__data">
      <HiCheckBadge />
      <div>
       <h3 className="skills__name">Bootstrap</h3>
       <span className="skills__level">Intermediate</span>
      </div>
     </div>
    </div>
    <div className="skills__group">
     <div className="skills__data">
      <SiJavascript />
      <div>
       <h3 className="skills__name">JavaScript</h3>
      </div>
     </div>
     <div className="skills__data">
      <HiCheckBadge />
      <div>
       <h3 className="skills__name">Typescript</h3>
       <span className="skills__level">Basic</span>
      </div>
     </div>
     <div className="skills__data">
      <HiCheckBadge />
      <div>
       <h3 className="skills__name">React</h3>
       <span className="skills__level">Basic</span>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Frontend;
