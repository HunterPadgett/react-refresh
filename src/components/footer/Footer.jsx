import React from "react";
import "./footer.css";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
 return (
  <footer className="footer">
   <div className="footer__container container">
    <div className="footer__social">
     <a
      href="https://twitter.com/cyphrsylph"
      className="home__social-icon"
      target="_blank"
      rel="noreferrer"
     >
      <FiTwitter />
     </a>
     <a
      href="https://www.github.com/kmaalig"
      className="home__social-icon"
      target="_blank"
      rel="noreferrer"
     >
      <FiGithub />
     </a>
     <a
      href="https://www.linkedin.com/in/kmaalig/"
      className="home__social-icon"
      target="_blank"
      rel="noreferrer"
     >
      <FiLinkedin />
     </a>
    </div>
    <span className="footer__copy">© 2023 HUNTER PADGETT</span>
   </div>
  </footer>
 );
};

export default Footer;
