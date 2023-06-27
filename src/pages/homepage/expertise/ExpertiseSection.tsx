import { FC } from "react";
import { Expertise } from "../../../general/Types";
import FillContent from "../../../components/fillcontent/FillContent";
import "./ExpertiseSection.scss";

export interface ExpertiseProps {
  expertise: Expertise;
}
const ExpertiseComponent: FC<ExpertiseProps> = ({ expertise }) => {
  return (
    <div className="expertise-container">
      <div className="level-bar level-bar__item">
        <FillContent level={expertise.level} title={expertise.title} />
      </div>
    </div>
  );
};

export interface ExpertisSectioneProps {
  expertiseList: Expertise[];
}

const ExpertiseSection: FC<ExpertisSectioneProps> = ({ expertiseList }) => {
  return (
    <div className="expertise">
      <h3 className="extra-large-margin-bottom">Kunnskap</h3>
      <div className="expertise__list">
        {expertiseList.map((expertise, index) => (
          <div key={expertise.id} className={"test"}>
            <ExpertiseComponent expertise={expertise} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;
