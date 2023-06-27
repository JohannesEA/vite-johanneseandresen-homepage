import CardSwiper from "../../../components/swiper/CardSwiper";
import { educationAndExperienceDummyDate } from "../../../development/data";
import "./AboutSection.scss";
import "swiper/css";

const AboutSection = () => {
  return (
    <div className="about">
      <h3 className="extra-large-margin-bottom">Utdannelse og erfaring</h3>
      <div className="about__cards">
        <CardSwiper
          cards={educationAndExperienceDummyDate}
          includeLinks={false}
        />
      </div>
    </div>
  );
};

export default AboutSection;
