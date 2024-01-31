import React from "react";
import Header from "../components/header/Header";
import HeaderBottom from "../components/header/HeaderBottom";
import Scores from "../components/scores/Scores";
import Footer from "../components/footer/Footer";

const Main = () => {
  return (
    <div className="">
      <Header />
      <HeaderBottom />
      <Scores/>
      <Footer/>
    </div>
  );
};

export default Main;
