import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
 return (
  <div className="project__card" key={item.id}>
   <img className="project__img" src={item.image} alt="" />
   <h3 className="project__title">{item.title}</h3>
   <a href="#projects" className="project__button">
    Demo <HiOutlineArrowSmRight className="project__button-icon" />
   </a>
   <a
    href={item.github}
    target="_blank"
    rel="noreferrer"
    className="project__button"
   >
    GitHub <HiOutlineArrowSmRight className="project__button-icon" />
   </a>
  </div>
 );
};

export default ProjectItems;
