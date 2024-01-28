import React from "react";
import { profile_pic } from "../../assets";

const Player = (props) => {
    // console.log(props.sortedGolfData);

    const playerData = props.playerData;
    console.log(playerData);

    // player.forEach((player) => {
    //   console.log(player.Player);
    // });

    // {
    //   sortedGolfData.map((playerData, index) => (
    //     console.log(playerData.PLAYER)
    //   ));
    // }
    
  return (
    <div>
      <div className="flex gap-4 p-5">
        <div className="flex flex-col gap-4">
          <img src={profile_pic} alt="person" />
          
            <p >{playerData.PLAYER}</p>
        </div>
        <div className="flex items-center justify-center  flex-grow">
          round 1 Score Card
        </div>
      </div>
    </div>
  );
};

export default Player;
