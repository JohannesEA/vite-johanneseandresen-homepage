import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./CardSwiper.scss";
import ProjectCard from "../card/ProjectCard";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import Card from "../card/Card";
import { Pagination } from "swiper/modules";

// Import the required module

interface CardData {
  title: string;
  image: string;
  description: string;
  year?: string;
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
      modules={[Pagination]}
      pagination={{ clickable: true }} // Enable clickable pagination
      spaceBetween={50}
      slidesPerView={calculateColumns()}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="swiper"
      resizeObserver={true}
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
