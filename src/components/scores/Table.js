import React, { useEffect, useState } from "react";
import { golfData } from "../../constants";
import Score from "./Score";

const Table = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const openScore = (id) => {
    setIsOpen(!isOpen);
    isOpen ? setCurrentPlayer(null) : setCurrentPlayer(id);
  };

  useEffect(() => {
    // console.log("Updated isOpen:", isOpen);
    console.log("Updated currentPlayer:", currentPlayer);
  }, [isOpen, currentPlayer]);

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
      <div>
        {sortedGolfData.map((playerData) => (
          <div
            key={playerData.id}
            className="grid-rows-2 uppercase text-center"
          >
            <div className="grid grid-cols-8 border-b mx-1">
              <p className=" p-2">{playerData.POS}</p>
              <p
                className=" flex items-center gap-4 col-span-3 p-2 pl-10 text-left cursor-pointer hover:underline decoration-[#0B6623]"
                onClick={() => openScore(playerData.id)}
              >
                {playerData.PLAYER}
              </p>
              <p className="p-2">{playerData["TO PAR"]}</p>
              <p className="p-2">{playerData.THRU}</p>
              <p className="p-2 ">{playerData.ROUND}</p>
              <p className="p-2 ">{playerData.GROSS}</p>
            </div>
            <div>{isOpen && <Score playerData={playerData} />}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
