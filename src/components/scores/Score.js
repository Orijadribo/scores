import React, { useState } from "react";
import Player from "./Player";
import { yardsData, parData, golfData } from "../../constants";
import Eagle from "./Eagle";
import Birdie from "./Birdie";
import Bogey from "./Bogey";
import DBogey from "./DBogey";
import ScoreType from "./ScoreType";

const Score = ({
  playerData,
  playerId,
  totalGross,
  frontNine,
  backNine,
  grossFront,
  grossBack,
}) => {
  const [hideScore, setHideScore] = useState(false);

  // Find the player in the golfData array with the matching id passed in as a prop
  const selectedPlayer = golfData.find((player) => player.id === playerId);

  //An array to store the par data for each hole on the front 9
  const parValuesFront = Array.from(
    { length: 9 },
    (_, index) => parData[`hole${index + 1}`]
  );

  //An array to store the par data for each hole on the back 9
  const parValuesBack = Array.from(
    { length: 9 },
    (_, index) => parData[`hole${index + 10}`]
  );

  //Cumulative par data for front and back
  const totalParFront = parValuesFront.reduce((acc, val) => acc + val, 0);
  const totalParBack = parValuesBack.reduce((acc, val) => acc + val, 0);

  //Array containing the yards from the front 9
  const frontNineYards = frontNine.map(
    (holeNumber) => yardsData[`hole${holeNumber}`]
  );

  //Array containing the yards from the back 9
  const backNineYards = backNine.map(
    (holeNumber) => yardsData[`hole${holeNumber}`]
  );

  //Array containing cumulative value for the total of yard on the front
  const totalFrontNineYards = frontNineYards.reduce(
    (acc, yards) => acc + yards,
    0
  );

  //Array containing cumulative value for the total of yard on the back
  const totalBackNineYards = backNineYards.reduce(
    (acc, yards) => acc + yards,
    0
  );

  return (
    <div className="rounded-md bg-[#f1f1f1]">
      <Player playerData={playerData} />
      <div className="flex flex-col justify-between capitalize p-5">
        <p className="text-xl bg-[#cbcbcb] my-1 rounded-md p-1">scorecard</p>
        <div className="overflow-x-auto rounded-md">
          <table className="table-auto border w-full">
            <thead className="bg-[#0B6623]/[0.5]">
              <tr className="">
                <th className="text-left p-2">hole</th>
                {frontNine.map((holeNumber) => (
                  <th key={holeNumber}>{holeNumber}</th>
                ))}
                <th>out</th>
                {backNine.map((holeNumber) => (
                  <th key={holeNumber}>{holeNumber}</th>
                ))}
                <th>in</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left p-2">par</td>
                {frontNine.map((holeNumber) => (
                  <td key={holeNumber}>{parData[`hole${holeNumber}`]}</td>
                ))}
                <td className="bg-[#FAFAD2]">{totalParFront}</td>
                {backNine.map((holeNumber) => (
                  <td key={holeNumber}>{parData[`hole${holeNumber}`]}</td>
                ))}
                <td className="bg-[#A45A52]">{totalParBack}</td>
                <td>{totalParFront + totalParBack}</td>
              </tr>
              <tr>
                <td className="text-left p-2">yards</td>
                {frontNine.map((holeNumber) => (
                  <td key={holeNumber}>{yardsData[`hole${holeNumber}`]}</td>
                ))}
                <td className="bg-[#FAFAD2]">{totalFrontNineYards}</td>
                {backNine.map((holeNumber) => (
                  <td key={holeNumber}>{yardsData[`hole${holeNumber}`]}</td>
                ))}
                <td className="bg-[#A45A52]">{totalBackNineYards}</td>
                <td>{totalFrontNineYards + totalBackNineYards}</td>
              </tr>
              <tr className="bg-[#90EE90]/[0.2]">
                <td className="text-left p-2">round</td>
                {selectedPlayer &&
                  frontNine.map((holeNumber) => (
                    <td key={holeNumber} className="relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ScoreType
                          hideScore={hideScore}
                          hole={selectedPlayer.round[`hole${holeNumber}`]}
                          parData={parData[`hole${holeNumber}`]}
                        />
                      </div>
                    </td>
                  ))}

                <td className="bg-[#FAFAD2]">
                  {Number.isFinite(grossFront) ? grossFront : "-"}
                </td>
                {selectedPlayer &&
                  backNine.map((holeNumber) => (
                    <td key={holeNumber} className="relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ScoreType
                          hideScore={hideScore}
                          hole={selectedPlayer.round[`hole${holeNumber}`]}
                          parData={parData[`hole${holeNumber}`]}
                        />
                      </div>
                    </td>
                  ))}
                <td className="bg-[#A45A52]">
                  {Number.isFinite(grossBack) ? grossBack : "-"}
                </td>
                <td>{totalGross}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-start justify-center gap-4 pt-5">
          <div className="flex gap-4">
            <Eagle hideScore={true} />
            <Birdie hideScore={true} />
          </div>
          <div className="flex gap-4">
            <Bogey hideScore={true} />
            <DBogey hideScore={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
