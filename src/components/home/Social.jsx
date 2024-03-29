import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Social = () => {
 return (
  <div className="home__social">
   <a
    href="https://www.linkedin.com/in/hunterpadgett1/"
    className="home__social-icon"
    target="_blank"
    rel="noreferrer"
   >
    <FiLinkedin />
   </a>
   <a
    href="https://github.com/HunterPadgett"
    className="home__social-icon"
    target="_blank"
    rel="noreferrer"
   >
    <FiGithub />
   </a>
   {/* <a
    href="https://twitter.com/huntapadgett"
    className="home__social-icon"
    target="_blank"
    rel="noreferrer"
   >
    <FiTwitter />
   </a> */}
  </div>
 );
};

export default Social;
