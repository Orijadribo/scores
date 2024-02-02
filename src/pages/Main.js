import React, { useState } from "react";
import Header from "../components/header/Header";
import HeaderBottom from "../components/header/HeaderBottom";
import Scores from "../components/scores/Scores";
import Footer from "../components/footer/Footer";
import TeeTime from "../components/teeTimes/TeeTime";

const Main = () => {
  const [showTeeTimes, setShowTeeTimes] = useState(true);

  return (
    <div className="">
      <Header />
      <HeaderBottom
        showTeeTimes={showTeeTimes}
        setShowTeeTimes={setShowTeeTimes}
      />
      {showTeeTimes ? <Scores /> : <TeeTime />}
      <Footer />
    </div>
  );
};

export default Main;
