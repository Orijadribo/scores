import React, { useEffect, useState } from "react";
import { golfData, parData, yardsData } from "../../constants";
import Score from "./Score";

const Table = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const frontNine = Array.from({ length: 9 }, (_, index) => index + 1);
  const backNine = Array.from({ length: 9 }, (_, index) => index + 10);
  const allHoles = Array.from({ length: 18 }, (_, index) => index + 1);

  const getGrossFront = (playerData) => {
    return frontNine.reduce((acc, holeNumber) => {
      const holeScore = playerData.round[`hole${holeNumber}`];
      return acc + (Number.isFinite(holeScore) ? holeScore : 0);
    }, 0);
  };

  const getGrossBack = (playerData) => {
    return backNine.reduce((acc, holeNumber) => {
      const holeScore = playerData.round[`hole${holeNumber}`];
      return acc + (Number.isFinite(holeScore) ? holeScore : 0);
    }, 0);
  };

  const getGross = (playerData) => {
    const totalGross = getGrossFront(playerData) + getGrossBack(playerData);
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

  // Create an array to store positions
  const positions = sortedGolfData.map((_, index) => index + 1);

  // Check for tied positions
  let currentPosition = 1;
  let previousScoreToPar = null;

  positions.forEach((position, index) => {
    const currentScoreToPar = scoreToPar(sortedGolfData[index]);

    if (
      previousScoreToPar !== null &&
      currentScoreToPar !== previousScoreToPar
    ) {
      currentPosition = index + 1;
    }

    positions[index] = currentPosition;
    previousScoreToPar = currentScoreToPar;
  });

  // Add "T" prefix to tied positions
  const tiedPositions = new Set();
  positions.forEach((position, index) => {
    if (index > 0 && positions[index] === positions[index - 1]) {
      tiedPositions.add(position);
    }
  });

  tiedPositions.forEach((tiedPosition) => {
    const tiedIndices = positions.reduce((acc, position, index) => {
      if (position === tiedPosition) {
        acc.push(index);
      }
      return acc;
    }, []);

    if (tiedIndices.length > 1) {
      tiedIndices.forEach((index) => {
        positions[index] = "T" + tiedPosition;
      });
    }
  });

  const findThru = (playerData) => {
    let lastValidHole = null;

    allHoles.map((holeNumber) => {
      const currentHole = playerData.round[`hole${holeNumber}`];
      if (typeof currentHole === "number" && !isNaN(currentHole)) {
        lastValidHole = holeNumber;
      }
    });

    if (lastValidHole) {
      if (lastValidHole === 18) {
        lastValidHole = "F";
      }
      // console.log("Last hole with a valid score:", lastValidHole);
    } else {
      return playerData.teeOffTime;
    }

    return lastValidHole;
  };

  const openScore = (id) => {
    setIsOpen(id !== currentPlayer);
    setCurrentPlayer(id === currentPlayer ? null : id);
  };

  useEffect(() => {
    // console.log("Updated isOpen:", isOpen);
    // console.log("Updated currentPlayer:", currentPlayer);
  }, [isOpen, currentPlayer]);

  const getScoreColorClass = (score) => {
    if (score < 0) {
      return "text-red-500";
    } else if (score === 0) {
      return "text-green-500";
    } else {
      return "text-black";
    }
  };

  return (
    <div className="text-sm md:text-base px-4 md:px-0 relative">
      <div className="grid grid-cols-8 uppercase text-center text-white bg-[#0B6623] rounded-t-md p-2 sticky top-[148px] md:top-[90px]">
        <p className="md:p-3 flex items-center justify-center">pos</p>
        <p className="col-span-3 md:p-3 flex text-left md:pl-10 items-center">
          player
        </p>
        <p className="md:p-3 flex items-center justify-center">to par</p>
        <p className="md:p-3 flex items-center justify-center">thru</p>
        <div className="md:p-3 flex items-center justify-center">
          <p className="hidden md:block">round</p>
          <p className="md:hidden block">rnd</p>
        </div>
        <p className="md:p-3 flex items-center justify-center">gross</p>
      </div>
      <div>
        {sortedGolfData.map((playerData, index) => (
          <div
            key={playerData.id}
            className="grid-rows-2 uppercase text-center "
          >
            <div className="grid grid-cols-8 hover:bg-[#90EE90]/[0.1] rounded-md">
              <p className="flex items-center justify-center gap-4 p-2">
                {playerData.round.hole1 !== undefined ? positions[index] : "-"}
              </p>
              <p
                className=" flex items-center gap-4 col-span-3 p-2 md:pl-10 text-left cursor-pointer hover:underline decoration-[#0B6623]"
                onClick={() => openScore(playerData.id)}
              >
                {playerData.PLAYER}
              </p>
              <p
                className={`flex items-center justify-center gap-4 p-2 ${getScoreColorClass(
                  scoreToPar(playerData)
                )}`}
              >
                {(scoreToPar(playerData) === 0 &&
                  (playerData.round.hole1 !== undefined ? "E" : "-")) ||
                  scoreToPar(playerData)}
              </p>
              <p className="flex items-center justify-center gap-4 p-2">
                {findThru(playerData)}
              </p>
              <p className="flex items-center justify-center gap-4 p-2 ">
                {(scoreToPar(playerData) === 0 &&
                  (playerData.round.hole1 !== undefined ? "E" : "-")) ||
                  scoreToPar(playerData)}
              </p>
              <p className="flex items-center justify-center gap-4 p-2 ">
                {getGross(playerData) !== 0 ? getGross(playerData) : "-"}
              </p>
            </div>
            <div>
              {currentPlayer === playerData.id && isOpen && (
                <Score
                  playerData={playerData}
                  playerId={playerData.id}
                  totalGross={getGross(playerData)}
                  frontNine={frontNine}
                  backNine={backNine}
                  grossFront={getGrossFront(playerData)}
                  grossBack={getGrossBack(playerData)}
                />
              )}
            </div>
            <hr className="mx-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
