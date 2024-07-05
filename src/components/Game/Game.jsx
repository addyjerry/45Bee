import React, { useState } from "react";
import "./Game.css";
import yeah from "../../assets/yeah.png";
const Game = () => {
  const [num1, showNum1] = useState(0);
  const [num2, showNum2] = useState(0);
  const [num3, showNum3] = useState(0);

  const handleNum = () => {
    showNum1(Math.floor(Math.random() * 9));
    showNum2(Math.floor(Math.random() * 9));
    showNum3(Math.floor(Math.random() * 9));
    if (num1 == num2 && num2 == num3) {
      return handlePlay();
    }
  };

  const [play, setPlay] = useState(true);
  const handlePlay = () => {
    setPlay(!play);
  };

  return (
    <div id="Game">
      <h2>GAME</h2>
      <p>Get the same number in all three boxes</p>
      {play ? (
        <div>
          <div id="boxes">
            <div id="box1">{num1}</div>
            <div id="box2">{num2}</div>
            <div id="box3">{num3}</div>
          </div>
          <button onClick={handleNum} id="button">
            PLAY
          </button>
        </div>
      ) : (
        <>
            <img src={yeah} alt="yeah" />
            <button onClick={handlePlay} id="button">
              PLAY
            </button>
        </>
      )}
    </div>
  );
};

export default Game;
