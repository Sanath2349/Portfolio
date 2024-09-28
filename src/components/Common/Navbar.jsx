import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo-no-background.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const constant = <span style={{ color: "#C778DD" }}>#</span>;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="navLogo">
        <img src={logo} alt="" />
      </div>
      <div className={`navLinks ${isMenuOpen ? "active" : ""}`}>
        <ul className="links">
          <li>
            <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
              {constant}home
            </Link>
          </li>
          <li>
            <Link to="works" smooth={true} duration={500} onClick={toggleMenu}>
              {constant}works
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
              {constant}about me
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              {constant}contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
