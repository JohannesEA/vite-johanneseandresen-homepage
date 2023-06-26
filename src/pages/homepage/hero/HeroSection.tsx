import hackerman from "../../../assets/lottie/hackerman.json";
import Lottie from "lottie-react";
import "./HeroSection.scss";
import Button from "../../../components/button/Button";
import { ButtonTypes } from "../../../general/Types";

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1 className="hero__title">Velkommen</h1>
        <p className="hero__description">
          Jeg heter Johannes, og er en 25 år gamme dataingeniør. For tiden
          jobber jeg som fullstack utvikler hos Eika samtidig som jeg har flere
          prosjekter på siden.
        </p>
        <div className="hero__buttons">
          <Button
            title="Click me!"
            onClick={() => console.log("Hello world")}
            type={ButtonTypes.PRIMARY}
          />
          <Button
            title="Click me!"
            onClick={() => console.log("Hello world")}
            type={ButtonTypes.SECONDARY}
          />
        </div>
      </div>
      <div className="hero__lottie">
        <Lottie className="hero__animation" animationData={hackerman} />
      </div>
    </section>
  );
};
