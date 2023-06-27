import CardSwiper from "../../../components/swiper/CardSwiper";
import { cardData } from "../../../development/data";
import "./ProjectSection.scss";
import "swiper/css";

const ProjectSection = () => {
  return (
    <div className="project">
      <h2 className="extra-large-margin-bottom">Mine prosjeker</h2>
      <div className="project__cards">
        <CardSwiper cards={cardData} />
      </div>
    </div>
  );
};

export default ProjectSection;
