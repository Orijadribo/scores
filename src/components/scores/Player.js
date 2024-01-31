import React from "react";
import { profile_pic } from "../../assets";

const Player = ({ playerData }) => {
  return (
    <div>
      <div className="flex gap-4 p-5">
        <div className="flex flex-col">
          <img src={profile_pic} alt={profile_pic} className="" />
          <div className="text-left">
            <p className="p-1">{playerData.PLAYER}</p>
            <p className="p-1">HCP : {playerData.hcp}</p>
          </div>
        </div>
        <div className="flex items-center justify-center text-3xl font-titleFont flex-grow">
          round 1 Score Card
        </div>
      </div>
    </div>
  );
};

export default Player;
