import React from "react";
import "./Footer.css";
import linkedin from '../../Assets/mdi--linkedin.svg'
import gmail from '../../Assets/mdi--gmail.svg'
import logo from '../../Assets/logo-no-background.png'

const Footer = () => {
  return (
    <div className="Footer">
      <hr />
      <div className="footerflex">
        <div className="FooterContent">
        <img src={logo} alt="" />
        </div>
        <div className="FooterLinks">
            <h2>media</h2>
          <a
            href="https://linkedin.com/in/sanath-reddy-74931223b"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="mailto:sanathreddyg42@gmail.com" target="_blank">
            <img src={gmail} alt="" />
          </a>
        </div>
      </div>
      <p style={{textAlign:"center"}}>&#169; copyright 2024. Made by Sanath </p>
    </div>
  );
};

export default Footer;
