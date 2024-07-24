import React from "react";
import "./style.css";

const Card = ({ imgSrc, description, title }) => {
  return (
    <article className="card__article">
      <img src={imgSrc} alt={title} className="card__img" />
      <div className="card__data">
        <span className="card__description">{description}</span>
        <h2 className="card__title">{title}</h2>
        <a href="#" className="card__button">Read More</a>
      </div>
    </article>
  );
};

export default Card;
