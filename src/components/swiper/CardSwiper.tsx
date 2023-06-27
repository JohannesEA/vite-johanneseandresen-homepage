// CardSwiper.tsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./CardSwiper.scss";
import ProjectCard from "../card/ProjectCard";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import Card from "../card/Card";

interface CardData {
  title: string;
  image: string;
  description: string;
}

interface CardSwiperProps {
  cards: CardData[];
  includeLinks: boolean;
}

const CardSwiper: React.FC<CardSwiperProps> = ({ cards, includeLinks }) => {
  const screenwidth = useWindowWidth();

  const calculateColumns = () => {
    if (screenwidth > 1200) {
      return 3;
    } else if (screenwidth >= 768 && screenwidth <= 1200) {
      return 2;
    } else {
      return 1;
    }
  };

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={calculateColumns()}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="swiper"
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          {includeLinks ? <ProjectCard {...card} /> : <Card {...card} />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSwiper;
