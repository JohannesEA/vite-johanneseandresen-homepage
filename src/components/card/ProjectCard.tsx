// Card.tsx

import React from "react";
import "./Card.scss";
import Button from "../button/Button";
import { ButtonTypes } from "../../general/Types";

interface CardProps {
  title: string;
  image: string;
  description: string;
  url?: string;
}

const ProjectCard: React.FC<CardProps> = ({
  title,
  image,
  description,
  url,
}) => {
  return (
    <a href={url} className="project-card">
      <img src={image} alt={title} className="project-card__image" />
      <h4 className="project-card__title">{title}</h4>
      <p className="project-card__description">{description}</p>

      <Button
        title={"Se nettsiden"}
        onClick={() => console.log("Gå til ", title)}
        type={ButtonTypes.SECONDARY}
        className="extra-large-margin-top"
      />
    </a>
  );
};

export default ProjectCard;
