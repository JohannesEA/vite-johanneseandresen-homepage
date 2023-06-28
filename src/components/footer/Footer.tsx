import "./Footer.scss";
import {
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h4 className="medium-margin-bottom">Kontaktinformasjon</h4>
          <ul className="footer__section-contact-info">
            <li>johannes.erdahl.andresen@gmail.com</li>
            <li>+47 99509035</li>
            <li>Oslo</li>
          </ul>
        </div>
        <div className="footer__section ">
          <h4 className="medium-margin-bottom">Sosiale lenker</h4>
          <ul>
            <li>
              <a
                className="footer__section-link"
                href="https://github.com/JohannesEA"
              >
                <AiOutlineGithub />
              </a>
            </li>
            <li>
              <a
                className="footer__section-link"
                href="https://github.com/JohannesEA"
              >
                <AiOutlineFacebook />
              </a>
            </li>
            <li>
              <a
                className="footer__section-link"
                href="https://github.com/JohannesEA"
              >
                <AiOutlineInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} Erdahl Andresen IT</p>
      </div>
    </footer>
  );
}

export default Footer;
