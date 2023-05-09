import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <div className="project__img-container">
        <img className="project__img" src={item.image} alt={item.title} />
      </div>
      <div className="project__info">
        <h3 className="project__title">{item.title}</h3>
        <a
          href={item.demo ? item.demo : "#projects"}
          target={item.demo ? "_blank" : ""}
          rel="noreferrer"
          className="project__button"
        >
          Demo <HiOutlineArrowSmRight className="project__button-icon" />
        </a>
        <a
          href={item.github ? item.github : "#projects"}
          target={item.github ? "_blank" : ""}
          rel="noreferrer"
          className="project__button"
        >
          GitHub <HiOutlineArrowSmRight className="project__button-icon" />
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
