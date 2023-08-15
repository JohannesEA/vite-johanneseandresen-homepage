import LinkButton from "../../../components/button/LinkButton";
import { ButtonTypes } from "../../../general/Types";
import "./AboutSection.scss";
const AboutSection = () => {
  return (
    <section id="about" className="about">
      <h3 className="about__title">Om</h3>
      <div className="about__content">
        <div className="about__info">
          <h4 className="about__name">Johannes Erdahl Andresen</h4>
          <ul className="about__list">
            <li className="about__item">
              <b>Alder:</b> 25 år
            </li>
            <li className="about__item">
              <b>Utdannelse:</b> Data ingeniør
            </li>
            <li className="about__item">
              <b>Lokasjon:</b> Oslo
            </li>
            <li className="about__item">
              <b>Arbeidserfaring:</b> 2 år som fullstack utvikler
            </li>
            <li className="about__item">
              <b>Arbeidsgiver:</b> Eika
            </li>
          </ul>
          <LinkButton
            title="Github"
            url="https://github.com/JohannesEA"
            type={ButtonTypes.PRIMARY}
            className="about__button"
            download={false}
          />
        </div>
        <div className="about__image-container">
          <img
            className="about__image"
            src="/assets/images/johannes.png"
            alt="Johannes"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
