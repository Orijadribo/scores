import React, { useEffect, useState } from "react";
import Player from "./Player";
import { yardsData, parData, round } from "../../constants";
import Eagle from "./Eagle";
import Birdie from "./Birdie";
import Bogey from "./Bogey";
import DBogey from "./DBogey";

const Score = ({ playerData }) => {
  const [hideScore, setHideScore] = useState(false);

  return (
    <div className="rounded-md bg-[#f1f1f1]">
      <Player playerData={playerData} />
      <div className="flex flex-col justify-between capitalize p-5 ">
        <table className="table-auto border">
          <thead className="bg-[#0B6623]/[0.5]">
            <tr className="">
              <th className="text-left p-2">hole</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>out</th>
              <th>10</th>
              <th>11</th>
              <th>12</th>
              <th>13</th>
              <th>14</th>
              <th>15</th>
              <th>16</th>
              <th>17</th>
              <th>18</th>
              <th>in</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left p-2">par</td>
              <td>{parData.hole1}</td>
              <td>{parData.hole2}</td>
              <td>{parData.hole3}</td>
              <td>{parData.hole4}</td>
              <td>{parData.hole5}</td>
              <td>{parData.hole6}</td>
              <td>{parData.hole7}</td>
              <td>{parData.hole8}</td>
              <td>{parData.hole9}</td>
              <td className="bg-[#FAFAD2]">36</td>
              <td>{parData.hole10}</td>
              <td>{parData.hole11}</td>
              <td>{parData.hole12}</td>
              <td>{parData.hole13}</td>
              <td>{parData.hole14}</td>
              <td>{parData.hole15}</td>
              <td>{parData.hole16}</td>
              <td>{parData.hole17}</td>
              <td>{parData.hole18}</td>
              <td className="bg-[#A45A52]">35</td>
              <td>71</td>
            </tr>
            <tr>
              <td className="text-left p-2">yards</td>
              <td>{yardsData.hole1}</td>
              <td>{yardsData.hole2}</td>
              <td>{yardsData.hole3}</td>
              <td>{yardsData.hole4}</td>
              <td>{yardsData.hole5}</td>
              <td>{yardsData.hole6}</td>
              <td>{yardsData.hole7}</td>
              <td>{yardsData.hole8}</td>
              <td>{yardsData.hole9}</td>
              <td className="bg-[#FAFAD2]">3600</td>
              <td>{yardsData.hole10}</td>
              <td>{yardsData.hole11}</td>
              <td>{yardsData.hole12}</td>
              <td>{yardsData.hole13}</td>
              <td>{yardsData.hole14}</td>
              <td>{yardsData.hole15}</td>
              <td>{yardsData.hole16}</td>
              <td>{yardsData.hole17}</td>
              <td>{yardsData.hole18}</td>
              <td className="bg-[#A45A52]">3500</td>
              <td>7100</td>
            </tr>
            <tr className="bg-[#90EE90]/[0.2]">
              <td className="text-left p-2">round</td>
              <td className="relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Birdie hideScore={hideScore} hole1={round.hole1} />
                </div>
              </td>
              <td>{round.hole2}</td>
              <td>{round.hole3}</td>
              <td>{round.hole4}</td>
              <td>{round.hole5}</td>
              <td>{round.hole6}</td>
              <td>{round.hole7}</td>
              <td>{round.hole8}</td>
              <td>{round.hole9}</td>
              <td className="bg-[#FAFAD2]">{round.out}</td>
              <td>{round.hole10}</td>
              <td>{round.hole11}</td>
              <td>{round.hole12}</td>
              <td>{round.hole13}</td>
              <td>{round.hole14}</td>
              <td>{round.hole15}</td>
              <td>{round.hole16}</td>
              <td>{round.hole17}</td>
              <td>{round.hole18}</td>
              <td className="bg-[#A45A52]">{round.in}</td>
              <td>{round.total}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center justify-center gap-4 pt-5">
          <Eagle />
          <Birdie hideScore={true} />
          <Bogey />
          <DBogey />
        </div>
      </div>
    </div>
  );
};

export default Score;
