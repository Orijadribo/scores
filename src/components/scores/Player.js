import React from "react";
import { profile_pic } from "../../assets";

const Player = ({ playerData }) => {
  return (
    <div>
      <div className="flex gap-4 px-5 pt-10">
        <div className="flex flex-col md:flex-row">
          <img src={profile_pic} alt={profile_pic} className="" />
          <div className="text-left">
            <p className="p-1 text-3xl font-titleFont">{playerData.PLAYER}</p>
            <p className="p-1">Handicap index: {playerData.hcp}</p>
            <p className="p-1">Playing Handicap : {playerData.hcp}</p>
          </div>
        </div>
        {/* <div className="flex items-center justify-center text-3xl font-titleFont flex-grow">
          round 1 Score Card
        </div> */}
      </div>
    </div>
  );
};

export default Player;
