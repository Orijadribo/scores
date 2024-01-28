import React from "react";
import Header from "../components/header/Header";
import HeaderBottom from "../components/header/HeaderBottom";
import Scores from "../components/scores/Scores";

const Main = () => {
  return (
    <div className="pb-20">
      <Header />
      <HeaderBottom />
      <Scores/>
    </div>
  );
};

export default Main;
