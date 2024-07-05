import React, { useState } from "react";
import { FaReact, FaGithub, FaYoutube } from "react-icons/fa";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import "./Socials.css";

const Socials = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div id="Socials">
      <div id="btns">
        {show ? (
          <div id="one">
            <a href="https://www.linkedin.com/in/jerry-addy-193437249/">
              <BsLinkedin id="linked" />
            </a>
            <a href="https://github.com/addyjerry">
              <FaGithub id="git" />
            </a>
          </div>
        ) : (
          <>
            <div id="hidden"></div>
          </>
        )}
        <div id="center" onClick={handleShow}>
          <FaReact id="react" />
        </div>
        {show ? (
          <div id="two">
            <a href="https://x.com/JayCodes27?t=k513f8YOjzAOnOifSdw3mA&s=09">
              <BsTwitterX id="X" />
            </a>
            <a href="https://www.youtube.com/channel/UCQTMMDXCT1-w3UGNjLRr9VQ">
              <FaYoutube id="you" />
            </a>
          </div>
        ) : (
          <>
          </>
        )}
      </div>
    </div>
  );
};

export default Socials;
