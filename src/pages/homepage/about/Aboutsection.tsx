import "./AboutSection.scss";
const AboutSection = () => {
  return (
    <div id="about" className="about">
      <h3 className="about__title">Om</h3>
      <div className="about__content">
        <div className="about__info">
          <h4 className="about__name">Johannes Erdahl Andresen</h4>
          <ul className="about__list">
            <li className="about__item">Alder: 25 år</li>
            <li className="about__item">Utdannelse: Data ingeniørr</li>
            <li className="about__item">Lokasjon: Oslo</li>
            <li className="about__item">
              Arbeidserfaring: 2 år som fullstack utvikler
            </li>
            <li className="about__item">Arbeidsgiver: Eika</li>
          </ul>
        </div>
        <div className="about__image-container">
          <img
            className="about__image"
            src="src/assets/images/johannes.png"
            alt="Johannes"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
