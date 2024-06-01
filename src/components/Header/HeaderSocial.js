import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header_social">
      {/* <a href="https://linkedin.com" target="_blank">
        <BsLinkedin style={{ color: "#4db5ff" }} />
      </a> */}
      <a href="https://github.com/saeed-qujjah" target="_blank">
        <BsGithub style={{ color: "#4db5ff" }} />
      </a>
      {/* <a href="https://www.linkedin.com/in/saeed-qujjah/" target="_blank">
        <BsLinkedin style={{ color: "#4db5ff" }} />
      </a> */}
    </div>
  );
};

export default HeaderSocial;
