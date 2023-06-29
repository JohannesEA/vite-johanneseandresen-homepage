import React from "react";
import "./Card.scss";

interface CardProps {
  title: string;
  image: string;
  description: string;
  year?: string;
}

const Card: React.FC<CardProps> = ({ title, image, description, year }) => {
  return (
    <div className="card">
      <div className="card__image-container">
        <img src={image} alt={title} className="card__image" />
      </div>
      <h4 className="card__title">{title}</h4>
      {year && <p>[{year}]</p>}
      <p className="card__description">{description}</p>
    </div>
  );
};

export default Card;
