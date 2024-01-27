import React, { useState } from "react";
import { golfData } from "../../constants";
import { FaChevronDown } from "react-icons/fa6";
import Score from "./Score";

const Table = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openScore = () => {
    setIsOpen(!isOpen);
  };

  const sortedGolfData = [...golfData].sort(
    (a, b) => a["TO PAR"] - b["TO PAR"]
  );

  return (
    <div>
      <div className="grid grid-cols-8 uppercase text-center text-white bg-[#0B6623] rounded-t-md">
        <p className="p-5">pos</p>
        <p className="col-span-3 p-5">player</p>
        <p className="p-5">to par</p>
        <p className="p-5">thru</p>
        <p className="p-5">round</p>
        <p className="p-5">gross</p>
      </div>
      <div className="border rounded-md">
        {sortedGolfData.map((player) => (
          <div key={player.id} className="grid-rows-2 uppercase text-center">
            <div className="grid grid-cols-8">
              <p className=" p-2">{player.POS}</p>
              <p
                className=" flex items-center gap-4 col-span-3 border-l p-2 pl-10 text-left cursor-pointer hover:underline decoration-[#0B6623]"
                onClick={openScore}
              >
                {player.PLAYER}
                {/* <FaChevronDown /> */}
              </p>
              <p className="border-l p-2">{player["TO PAR"]}</p>
              <p className="border-l p-2">{player.THRU}</p>
              <p className="border-l p-2 ">{player.ROUND}</p>
              <p className="border-l p-2 ">{player.GROSS}</p>
            </div>
            <div>{isOpen && <Score />}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
