import React from "react";
import { golfData } from "../../constants";
import { FaChevronDown } from "react-icons/fa6";

const Table = () => {
  const sortedGolfData = [...golfData].sort((a, b) => a["TO PAR"] - b["TO PAR"]);

  return (
    <div>
      <div className="grid grid-cols-8 uppercase text-center text-white bg-[#0B6623] rounded-t-md">
        <p className="p-5">pos</p>
        <p className="col-span-2 p-5">player</p>
        <p className="p-5">to par</p>
        <p className="col-span-2 p-5">thru</p>
        <p className="p-5">round</p>
        <p className="p-5">gross</p>
      </div>
      <div className="border rounded-md">
        {sortedGolfData.map((player) => (
          <div
            key={player.id}
            className="grid grid-cols-8 uppercase text-center"
          >
            <p className=" p-2">{player.POS}</p>
            <p className=" flex items-center gap-4 col-span-2 border-l p-2 pl-10 text-left">
              {player.PLAYER}
              {/* <FaChevronDown /> */}
            </p>
            <p className="border-l p-2">{player["TO PAR"]}</p>
            <p className="col-span-2 border-l p-2">{player.THRU}</p>
            <p className="border-l p-2 ">{player.ROUND}</p>
            <p className="border-l p-2 ">{player.GROSS}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
