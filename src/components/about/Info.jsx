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
     I specialize in creating, managing, and maintaining web applications that
     are not only visually stunning but also responsive, accessible, and
     user-friendly.
    </h3>
   </div>
   <div className="about__box">
    <HiOutlineMail className="about__icon" />
    <h3 className="about__title">
     {" "}
     I craft eye-catching email designs. From the initial design phase to the
     final testing and deployment, I ensure that your clients receive a product
     that showcases your brand and message.
    </h3>
   </div>
   <div className="about__box">
    <HiOutlineTerminal className="about__icon" />
    <h3 className="about__title">
     I'm on a never-ending quest for knowledge, always looking to learn about
     new technologies and keep up with the latest development trends.
    </h3>
   </div>
   <div className="about__box">
    <HiOutlineSparkles className="about__icon" />
    <h3 className="about__title">
     In my free time, you can find me in the gym, out in nature, gaming, or
     pursuing whatever niche hobby I'm currently fixated on.
    </h3>
   </div>
  </div>
 );
};

export default Info;
