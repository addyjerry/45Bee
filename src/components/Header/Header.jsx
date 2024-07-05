import React, { useState } from "react";
import { SiDarkreader } from "react-icons/si";
import { MdOutlineLightMode } from "react-icons/md";
import mypic from "../../assets/image.png";
import banner from "../../assets/Banner.png";
import delivery from "../../assets/delivery.png";
import "./Header.css";
import { motion } from "framer-motion";

const Header = () => {
  const [mode, darkMode] = useState(true);
  const handleMode = () => {
    darkMode(!mode);
  };
  return (
    <div id="#Header">
      <img src={mypic} alt="profilepic" id="mine" />
      <motion.div
        initial={{ x: -150 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        id="bade"
      >
        <img src={banner} alt="Banner" id="Banner" />
        <SiDarkreader id="dark" />
        <img src={delivery} alt="motto" id="delivery" />
      </motion.div>
    </div>
  );
};

export default Header;
