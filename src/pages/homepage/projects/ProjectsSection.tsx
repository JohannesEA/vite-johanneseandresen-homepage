import CardSwiper from "../../../components/swiper/CardSwiper";
import { projectDummyData } from "../../../development/data";
import "./ProjectSection.scss";
import "swiper/css";

const ProjectSection = () => {
  return (
    <div id="projects" className="project">
      <h3 className="extra-large-margin-bottom">Prosjeker</h3>
      <div className="project__cards">
        <CardSwiper cards={projectDummyData} includeLinks={true} />
      </div>
    </div>
  );
};

export default ProjectSection;
