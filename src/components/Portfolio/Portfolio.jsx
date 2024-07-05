import React from "react";
import "./Portfolio.css";
import kessben from "../../assets/kessben.jpg";
import opemsuo from "../../assets/opemsuo.jpg";
import ishtari from "../../assets/ishtari.jpg";

const Portfolio = () => {
  return (
    <div id="Portfolio">
      <p id="visit">Visit Pages</p>
      <div id="first">
        <a href="https://kessbenonline.com/">
          <img src={kessben} alt="kessben" />
          <p>kessben.com</p>
        </a>
      </div>
      <div id="second">
        <a href="https://opemsuo.com/">
          <img src={opemsuo} alt="opemsuo" />
          <p>opemsuo.com</p>
        </a>
      </div>
      <div id="third">
        <a href="https://www.ishtari.com.gh/">
          <img src={ishtari} alt="ishtari" />
          <p>ishtari.com</p>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
