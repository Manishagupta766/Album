import React from "react";
import "./style.css";

const Card = ({ imgSrc, description, title }) => {
  return (
    <article className="card__article shadow-lg rounded-lg overflow-hidden">
      <img src={imgSrc} alt={title} className="card__img w-full h-48 object-cover" />
      <div className="card__data p-4">
        <span className="card__description block text-gray-500 text-sm">{description}</span>
        <h2 className="card__title text-lg font-bold">{title}</h2>
        <a href="#" className="card__button text-blue-500 hover:underline">Read More</a>
      </div>
    </article>
  );
};

export default Card;
