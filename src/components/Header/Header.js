import React from "react";
import CTA from "./CTA";
import "./Header.css";
import HeaderSocial from "./HeaderSocial";
// import me from "../../image/IMG_1609.png";
import cv from "../image/profile_basic1.png"
// import { CSSTransition } from 'react-transition-group';
import { Element, Link } from "react-scroll";
const Header = () => {
  return (
    <Element name="Home">
      <header>
        <div className="container header_container">
          <h5>Hello, My Name is</h5>
          <div>
            <h1>Saeed Qujjah</h1>
          </div>
          <h5 className="text-light">And I'm A Front End web Developer</h5>
          <CTA />
          <HeaderSocial />
          <div className="me">
            <img src={cv} alt="saeed" />
          </div>
          <Link to="About" className="scroll_down">
            Scroll Down
          </Link>
        </div>
      </header>
    </Element>
  );
};

export default Header;
