import React, { useEffect, useState } from "react";
import { golfData, parData, yardsData } from "../../constants";
import Score from "./Score";

const Table = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const frontNine = Array.from({ length: 9 }, (_, index) => index + 1);
  const backNine = Array.from({ length: 9 }, (_, index) => index + 10);
  const allHoles = Array.from({ length: 18 }, (_, index) => index + 1);

  const getGross = (playerData) => {
    const totalFrontNineScores = frontNine.reduce((acc, holeNumber) => {
      const holeScore = playerData.round[`hole${holeNumber}`];
      return acc + (Number.isFinite(holeScore) ? holeScore : 0);
    }, 0);
    const totalBackNineScores = backNine.reduce((acc, holeNumber) => {
      const holeScore = playerData.round[`hole${holeNumber}`];
      return acc + (Number.isFinite(holeScore) ? holeScore : 0);
    }, 0);
    const totalGross = totalFrontNineScores + totalBackNineScores;
    return totalGross;
  };

  const scoreToPar = (playerData) => {
    const scoreToPar = allHoles.reduce((acc, holeNumber) => {
      const holeScore =
        playerData.round[`hole${holeNumber}`] - parData[`hole${holeNumber}`];
      return acc + (Number.isFinite(holeScore) ? holeScore : 0);
    }, 0);
    return scoreToPar;
  };

  const sortedGolfData = [...golfData].sort(
    (a, b) => scoreToPar(a) - scoreToPar(b)
  );

  const openScore = (id) => {
    setIsOpen(!isOpen);
    isOpen ? setCurrentPlayer(null) : setCurrentPlayer(id);
  };

  useEffect(() => {
    // console.log("Updated isOpen:", isOpen);
    // console.log("Updated currentPlayer:", currentPlayer);
  }, [isOpen, currentPlayer]);

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
            className="grid-rows-2 uppercase text-center hover:bg-[#90EE90]/[0.1]"
          >
            <div className="grid grid-cols-8 border-b mx-1 ">
              <p className=" p-2">{playerData.POS}</p>
              <p
                className=" flex items-center gap-4 col-span-3 p-2 pl-10 text-left cursor-pointer hover:underline decoration-[#0B6623]"
                onClick={() => openScore(playerData.id)}
              >
                {playerData.PLAYER}
              </p>
              <p className="p-2">{scoreToPar(playerData)}</p>
              <p className="p-2">{playerData.THRU}</p>
              <p className="p-2 ">{playerData.ROUND}</p>
              {/* <p className="p-2 ">{playerData.GROSS}</p> */}
              <p className="p-2 ">{getGross(playerData)}</p>
            </div>
            <div>
              {currentPlayer === playerData.id && isOpen && (
                <Score playerData={playerData} playerId={playerData.id} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
