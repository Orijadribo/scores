import React from "react";
import Birdie from "./Birdie";
import Eagle from "./Eagle";
import Bogey from "./Bogey";
import DBogey from "./DBogey";

const ScoreType = ({ hideScore, hole, parData }) => {
  const getScoreType = () => {
    if (hole <= parData - 2) {
      return <Eagle hideScore={hideScore} hole={hole} />;
    } else if (hole === parData - 1) {
      return <Birdie hideScore={hideScore} hole={hole} />;
    } else if (hole === parData) {
      return (
        <div className="flex items-center justify-center gap-4">{hole}</div>
      );
    } else if (hole === parData + 1) {
      return <Bogey hideScore={hideScore} hole={hole} />;
    } else if (hole >= parData + 2) {
      return <DBogey hideScore={hideScore} hole={hole} />;
    } else {
      return "-";
    }
  };

  return <div>{getScoreType()}</div>;
};

export default ScoreType;
