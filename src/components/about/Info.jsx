import React from "react";
import {
 HiOutlineDesktopComputer,
 HiOutlineTerminal,
 HiOutlineSparkles,
 HiOutlineMail,
} from "react-icons/hi";
// import { SiJavascript } from "react-icons/si";

const Info = () => {
 return (
  <div className="about__info grid">
   <div className="about__box">
    <HiOutlineDesktopComputer className="about__icon" />
    <h3 className="about__title">
     Creating, managing, and maintaining web applications is my thing. I take
     pride in making them responsive, acessible, and user friendly.
    </h3>
   </div>
   <div className="about__box">
    <HiOutlineMail className="about__icon" />
    <h3 className="about__title">
     {" "}
     I design super cool emails. From design to testing, I make sure your
     clients see what you have to offer.
    </h3>
   </div>
   <div className="about__box">
    <HiOutlineTerminal className="about__icon" />
    <h3 className="about__title">
     On a never ending quest for knowledge. I'm always looking to learn
     about new technologies and keep up with the latest development trends.
    </h3>
   </div>
   <div className="about__box">
    <HiOutlineSparkles className="about__icon" />
    <h3 className="about__title">
     In my free time find me in the gym, out in nature, gaming, or whatever
     niche hobby I'm currently fixated with.
    </h3>
   </div>
  </div>
 );
};

export default Info;
