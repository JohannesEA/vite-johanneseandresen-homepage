// Card.tsx

import React from "react";
import "./Card.scss";
import { FaPhone } from "react-icons/fa";

interface CardProps {
  info: string;
  url?: string;
}

const ContactCard: React.FC<CardProps> = ({ info, url }) => {
  return (
    <a href={url} className="card--contact">
      <FaPhone />
      <p className="card__description">{info}</p>
    </a>
  );
};

export default ContactCard;
