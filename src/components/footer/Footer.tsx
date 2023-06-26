import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3>Section 1</h3>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Section 2</h3>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Section 3</h3>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </div>
    </footer>
  );
}

export default Footer;
