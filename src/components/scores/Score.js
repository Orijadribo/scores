import React from "react";
import Player from "./Player";

const Score = () => {
  return (
    <div className="border-t border-b">
      <Player />
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
              <td>5</td>
              <td>4</td>
              <td>3</td>
              <td>5</td>
              <td>4</td>
              <td>4</td>
              <td>3</td>
              <td>4</td>
              <td>4</td>
              <td className="bg-[#FAFAD2]">36</td>
              <td>4</td>
              <td>4</td>
              <td>3</td>
              <td>5</td>
              <td>4</td>
              <td>4</td>
              <td>3</td>
              <td>4</td>
              <td>4</td>
              <td className="bg-[#A45A52]">35</td>
              <td>71</td>
            </tr>
            <tr>
              <td className="text-left p-2">yards</td>
              <td>500</td>
              <td>400</td>
              <td>300</td>
              <td>500</td>
              <td>400</td>
              <td>400</td>
              <td>300</td>
              <td>400</td>
              <td>400</td>
              <td className="bg-[#FAFAD2]">3600</td>
              <td>400</td>
              <td>400</td>
              <td>300</td>
              <td>500</td>
              <td>400</td>
              <td>400</td>
              <td>300</td>
              <td>400</td>
              <td>400</td>
              <td className="bg-[#A45A52]">3500</td>
              <td>7100</td>
            </tr>
            <tr>
              <td className="text-left p-2">round</td>
              <td>5</td>
              <td>4</td>
              <td>3</td>
              <td>5</td>
              <td>4</td>
              <td>4</td>
              <td>3</td>
              <td>4</td>
              <td>4</td>
              <td className="bg-[#FAFAD2]">36</td>
              <td>4</td>
              <td>4</td>
              <td>3</td>
              <td>5</td>
              <td>4</td>
              <td>4</td>
              <td>3</td>
              <td>4</td>
              <td>4</td>
              <td className="bg-[#A45A52]">35</td>
              <td>71</td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center justify-center gap-4 pt-5">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center w-5 h-5 border border-black rounded-full">
              <div className=" w-4 h-4 bg-black  rounded-full"></div>
            </div>
            <p>eagle or better</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-5 h-5 bg-black rounded-full"></div>
            <p>birdie</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-5 h-5 bg-black"></div>
            <p>bogey</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center w-5 h-5 border border-black">
              <div className=" w-4 h-4 bg-black"></div>
            </div>
            <p>double bogey or better</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
