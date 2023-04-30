import React from "react";
import "./footer.css";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
 return (
  <footer className="footer">
   <div className="footer__container">
    <div className="footer__social">
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
     <a
      href="https://twitter.com/huntapadgett"
      className="home__social-icon"
      target="_blank"
      rel="noreferrer"
     >
      <FiTwitter />
     </a>
    </div>
    <span className="footer__copy">© 2023 HUNTER PADGETT</span>
   </div>
  </footer>
 );
};

export default Footer;
