import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";
import { Link } from "react-scroll";

import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [theme, toggleTheme] = useTheme("light");

  return (
    <nav className={isOpen ? "navbar navbar--open" : "navbar"}>
      <div className="navbar__inner-container">
        <div className="navbar__theme-switch" onClick={toggleTheme}>
          {theme === "dark" ? <FaMoon /> : <FaSun />}
        </div>
        <div
          className={
            isOpen ? "navbar__links navbar__links--open" : "navbar__links"
          }
        >
          <Link
            activeClass="active"
            className="navbar__link"
            to="hero"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            className="navbar__link"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setOpen(false)}
          >
            Om
          </Link>
          <Link
            activeClass="active"
            className="navbar__link"
            to="expertice"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setOpen(false)}
          >
            Kunnskap
          </Link>

          <Link
            activeClass="active"
            className="navbar__link"
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setOpen(false)}
          >
            Prosjekter
          </Link>
          <Link
            activeClass="active"
            className="navbar__link"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setOpen(false)}
          >
            Kontakt
          </Link>
        </div>

        <div className="navbar__hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
