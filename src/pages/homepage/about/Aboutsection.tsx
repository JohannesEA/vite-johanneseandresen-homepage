import CardSwiper from "../../../components/swiper/CardSwiper";
import { cardData } from "../../../development/data";
import "./AboutSection.scss";
import "swiper/css";

const AboutSection = () => {
  return (
    <div className="about">
      <h2>Utdannelse</h2>

      <div className="about__cards">
        <CardSwiper cards={cardData} />
      </div>
    </div>
  );
};

export default AboutSection;
