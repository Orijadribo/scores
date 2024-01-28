import React, { useEffect, useState } from "react";
import Player from "./Player";
import { yardsData, parData, round } from "../../constants";
import Eagle from "./Eagle";
import Birdie from "./Birdie";
import Bogey from "./Bogey";
import DBogey from "./DBogey";
import ScoreType from "./ScoreType";

const Score = ({ playerData }) => {
  const [hideScore, setHideScore] = useState(false);

  const frontNine = Array.from({ length: 9 }, (_, index) => index + 1);
  const backNine = Array.from({ length: 9 }, (_, index) => index + 10);

  return (
    <div className="rounded-md bg-[#f1f1f1]">
      <Player playerData={playerData} />
      <div className="flex flex-col justify-between capitalize p-5 ">
        <table className="table-auto border">
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
              <td className="bg-[#FAFAD2]">36</td>
              {backNine.map((holeNumber) => (
                <td key={holeNumber}>{parData[`hole${holeNumber}`]}</td>
              ))}
              <td className="bg-[#A45A52]">35</td>
              <td>71</td>
            </tr>
            <tr>
              <td className="text-left p-2">yards</td>
              {frontNine.map((holeNumber) => (
                <td key={holeNumber}>{yardsData[`hole${holeNumber}`]}</td>
              ))}
              <td className="bg-[#FAFAD2]">3600</td>
              {backNine.map((holeNumber) => (
                <td key={holeNumber}>{yardsData[`hole${holeNumber}`]}</td>
              ))}
              <td className="bg-[#A45A52]">3500</td>
              <td>7100</td>
            </tr>
            <tr className="bg-[#90EE90]/[0.2]">
              <td className="text-left p-2">round</td>
              {frontNine.map((holeNumber) => (
                <td key={holeNumber} className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <ScoreType
                      hideScore={hideScore}
                      hole1={round[`hole${holeNumber}`]}
                      parData={parData[`hole${holeNumber}`]}
                    />
                  </div>
                </td>
              ))}
              <td className="bg-[#FAFAD2]">{round.out}</td>
              {backNine.map((holeNumber) => (
                <td key={holeNumber} className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <ScoreType
                      hideScore={hideScore}
                      hole1={round[`hole${holeNumber}`]}
                      parData={parData[`hole${holeNumber}`]}
                    />
                  </div>
                </td>
              ))}
              <td className="bg-[#A45A52]">{round.in}</td>
              <td>{round.total}</td>
            </tr>
          </tbody>
        </table>
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
