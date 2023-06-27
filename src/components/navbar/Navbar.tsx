import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [theme, toggleTheme] = useTheme("dark");

  return (
    <nav className={isOpen ? "navbar navbar--open" : "navbar"}>
      <div className="navbar__logo">Logo</div>
      <div className="navbar__theme-switch" onClick={toggleTheme}>
        {theme === "dark" ? <FaMoon /> : <FaSun />}
      </div>
      <div
        className={
          isOpen ? "navbar__links navbar__links--open" : "navbar__links"
        }
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="navbar__hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
