import hackerman from "../../../lottie/hackerman.json";
import Lottie from "lottie-react";
import "./HeroSection.scss";
import Button from "../../../components/button/Button";
import { ButtonTypes } from "../../../general/Types";
import LinkButton from "../../../components/button/LinkButton";
import { Link } from "react-scroll";

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1 className="hero__title">Velkommen</h1>
        <p className="hero__description extra-large-margin-top">
          Jeg er en svært motivert, sosial og pliktoppfyllende dataingeniør på
          25 år. For tiden jobber jeg som fullstack utvikler hos Eika samtidig
          som jeg har flere prosjekter på siden.
        </p>
        <div className="hero__buttons extra-large-margin-top">
          <Link
            activeClass="active"
            className="navbar__link"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <Button
              title="Kontakt meg"
              onClick={() => console.log("Hello world")}
              type={ButtonTypes.PRIMARY}
              className="hero__button--one"
            />
          </Link>

          <LinkButton
            title="Last ned CV"
            url="/assets/files/CV_johannes_2022.pdf"
            type={ButtonTypes.SECONDARY}
            className="hero__button--two"
            download
          />
        </div>
      </div>
      <div className="hero__lottie">
        <Lottie className="hero__animation" animationData={hackerman} />
      </div>
    </section>
  );
};
