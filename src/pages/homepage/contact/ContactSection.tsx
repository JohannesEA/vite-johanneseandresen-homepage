import "./ContactSection.scss";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiMap } from "react-icons/bi";

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <h3 className="large-margin-bottom">Kontakt meg</h3>

      <div className="contact-info__banners large-margin-top large-margin-bottom">
        <div className="banner__container">
          <div className="banner">
            <AiOutlineMail size={35} className="icon" />
            <a
              className="phone__link"
              href={`mailto:johannes.erdahl.andresen@gmail.com`}
            >
              johannes.erdahl.andresen@gmail.com
            </a>
          </div>
        </div>
        <div className="banner__container">
          <div className="banner">
            <AiOutlinePhone size={35} className="icon" />
            <a className="phone__link" href={`tel:+47 99509035`}>
              +47 99509035
            </a>
          </div>
        </div>
        <div className="banner__container">
          <div className="banner">
            <BiMap size={35} className="icon" />
            <p>Oslo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
