// CardSwiper.tsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./CardSwiper.scss";
import Card from "../card/Card";

interface CardData {
  title: string;
  image: string;
  description: string;
}

interface CardSwiperProps {
  cards: CardData[];
}

const CardSwiper: React.FC<CardSwiperProps> = ({ cards }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="swiper"
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <Card {...card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSwiper;
