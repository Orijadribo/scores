import React from "react";
import { profile_pic } from "../../assets";

const Player = ({ playerData }) => {
 
  return (
    <div>
      <div className="flex gap-4 p-5">
        <div className="flex flex-col gap-4">
          <img src={profile_pic} alt="person" />

          <p>{playerData.PLAYER}</p>
        </div>
        <div className="flex items-center justify-center text-3xl font-titleFont flex-grow">
          round 1 Score Card
        </div>
      </div>
    </div>
  );
};

export default Player;
