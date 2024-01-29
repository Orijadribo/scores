import React, { useState } from "react";
import Player from "./Player";
import { yardsData, parData, round, golfData } from "../../constants";
import Eagle from "./Eagle";
import Birdie from "./Birdie";
import Bogey from "./Bogey";
import DBogey from "./DBogey";
import ScoreType from "./ScoreType";

const Score = ({ playerData }) => {
  const [hideScore, setHideScore] = useState(false);

  const frontNine = Array.from({ length: 9 }, (_, index) => index + 1);
  const backNine = Array.from({ length: 9 }, (_, index) => index + 10);

  const parValuesFront = Array.from(
    { length: 9 },
    (_, index) => parData[`hole${index + 1}`]
  );
  const parValuesBack = Array.from(
    { length: 9 },
    (_, index) => parData[`hole${index + 1}`]
  );

  const totalParFront = parValuesFront.reduce((acc, val) => acc + val, 0);
  const totalParBack = parValuesBack.reduce((acc, val) => acc + val, 0);

  const frontNineYards = frontNine.map(
    (holeNumber) => yardsData[`hole${holeNumber}`]
  );
  const backNineYards = backNine.map(
    (holeNumber) => yardsData[`hole${holeNumber}`]
  );

  const totalFrontNineYards = frontNineYards.reduce(
    (acc, yards) => acc + yards,
    0
  );
  const totalBackNineYards = backNineYards.reduce(
    (acc, yards) => acc + yards,
    0
  );

  const totalFrontNineScores = frontNine.reduce((acc, holeNumber) => {
    const holeScore = round[`hole${holeNumber}`];
    return acc + (Number.isFinite(holeScore) ? holeScore : 0);
  }, 0);
  const totalBackNineScores = backNine.reduce((acc, holeNumber) => {
    const holeScore = round[`hole${holeNumber}`];
    return acc + (Number.isFinite(holeScore) ? holeScore : 0);
  }, 0);

  return (
    <div className="rounded-md bg-[#f1f1f1]">
      <Player playerData={playerData} />
      <div className="flex flex-col justify-between capitalize p-5">
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
                {frontNine.map((holeNumber) => (
                  <td key={holeNumber} className="relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <ScoreType
                        hideScore={hideScore}
                        // hole={round[`hole${holeNumber}`]}
                        parData={parData[`hole${holeNumber}`]}
                      />
                    </div>
                  </td>
                ))}
                <td className="bg-[#FAFAD2]">
                  {Number.isFinite(totalFrontNineScores)
                    ? totalFrontNineScores
                    : "-"}
                </td>
                {backNine.map((holeNumber) => (
                  <td key={holeNumber} className="relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <ScoreType
                        hideScore={hideScore}
                        hole={round[`hole${holeNumber}`]}
                        parData={parData[`hole${holeNumber}`]}
                      />
                    </div>
                  </td>
                ))}
                <td className="bg-[#A45A52]">
                  {Number.isFinite(totalBackNineScores)
                    ? totalBackNineScores
                    : "-"}
                </td>
                <td>{totalFrontNineScores + totalBackNineScores}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center gap-4 pt-5">
          <Eagle hideScore={true} />
          <Birdie hideScore={true} />
          <Bogey hideScore={true} />
          <DBogey hideScore={true} />
        </div>
      </div>
    </div>
  );
};

export default Score;
