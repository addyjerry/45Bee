import React from "react";
import Header from "./components/Header/Header";
import Second from "./components/Second/Second";
import Game from "./components/Game/Game";
import Portfolio from "./components/Portfolio/Portfolio";
import Socials from "./components/Socials/Socials";

function App() {
  return (
    <>
      <Header />
      <Socials />
      <Second />
      <Game />
      <Portfolio />
    </>
  );
}

export default App;
