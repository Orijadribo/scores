import React from "react";
import Birdie from "./Birdie";
import Eagle from "./Eagle";
import Bogey from "./Bogey";
import DBogey from "./DBogey";

const ScoreType = ({ hideScore, hole1, parData }) => {
  const getScoreType = () => {
    if (hole1 <= parData - 2) {
      return <Eagle hideScore={hideScore} hole1={hole1} />;
    } else if (hole1 === parData - 1) {
      return <Birdie hideScore={hideScore} hole1={hole1} />;
    } else if (hole1 === parData) {
      return (
        <div className="flex items-center justify-center gap-4">{hole1}</div>
      );
    } else if (hole1 === parData + 1) {
      return <Bogey hideScore={hideScore} hole1={hole1} />;
    } else if (hole1 >= parData + 2) {
      return <DBogey hideScore={hideScore} hole1={hole1} />;
    } else {
      return "-";
    }
  };

  return <div>{getScoreType()}</div>;
};

export default ScoreType;
