import React from "react";
import { profile_pic } from "../../assets";

const Player = () => {
  return (
    <div>
      <div className="flex gap-4 p-5">
        <div className="flex flex-col gap-4">
          <img src={profile_pic} alt="person" />
          <p>Name</p>
        </div>
        <div className="flex items-center justify-center  flex-grow">round 1 Score Card</div>
      </div>
    </div>
  );
};

export default Player;
