// Card.tsx

import React from "react";
import "./Card.scss";

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
    </div>
  );
};

export default Card;
