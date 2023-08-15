import CardSwiper from "../../../components/swiper/CardSwiper";
import { educationAndExperienceDummyDate } from "../../../development/data";
import "./CvSection.scss";
import "swiper/css";

const CvSection = () => {
  return (
    <section id="cv" className="cv">
      <h3 className="extra-large-margin-bottom">Utdannelse og erfaring</h3>
      <div className="cv__cards">
        <CardSwiper
          cards={educationAndExperienceDummyDate}
          includeLinks={false}
        />
      </div>
    </section>
  );
};

export default CvSection;
