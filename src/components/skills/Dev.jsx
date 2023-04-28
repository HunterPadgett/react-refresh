import React from "react";
import { HiCheckBadge } from "react-icons/hi2";
import {
 SiJavascript,
 SiHtml5,
 SiCss3,
 SiTailwindcss,
 SiReact,
 SiBootstrap,
 SiExpress,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";

const Dev = () => {
 return (
  <div className="skills__content">
   <h3 className="skills__title">Development</h3>
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
      <SiBootstrap />
      <div>
       <h3 className="skills__name">Bootstrap</h3>
      </div>
     </div>
     <div className="skills__data">
      <FaNode />
      <div>
       <h3 className="skills__name">Node.js</h3>
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
      <SiTailwindcss />
      <div>
       <h3 className="skills__name">Tailwind</h3>
      </div>
     </div>
     <div className="skills__data">
      <SiReact />
      <div>
       <h3 className="skills__name">React</h3>
      </div>
     </div>
     <div className="skills__data">
      <SiExpress />
      <div>
       <h3 className="skills__name">Express</h3>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Dev;
