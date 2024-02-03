import React from "react";
import { golfData } from "../../constants";

const Times = () => {
  // Sort golfData based on teeOffTime
  const sortedGolfData = [...golfData].sort((a, b) => {
    const timeA = new Date("1970-01-01 " + a.teeOffTime);
    const timeB = new Date("1970-01-01 " + b.teeOffTime);
    return timeA - timeB;
  });

  return (
    <div className="text-sm md:text-base px-4 md:px-0 relative">
      <div className="grid grid-cols-3 uppercase text-center text-white bg-[#0B6623] rounded-t-md p-2  sticky top-[147px] md:top-[90px]">
        <p className="col-span-2 md:p-3 flex items-center text-left md:pl-16 px-1">
          player
        </p>
        <p className="md:p-3 flex justify-center items-center">time</p>
      </div>
      <div>
        {sortedGolfData.map((playerData, index) => (
          <div key={index} className="">
            <div className="grid grid-cols-3 hover:bg-[#90EE90]/[0.1] rounded-md p-1">
              <p className=" flex items-center gap-4 col-span-2 p-2 md:pl-16 text-left cursor-pointer hover:underline decoration-[#0B6623]">
                {playerData.PLAYER}
              </p>
              <p className="flex items-center justify-center gap-4 p-2">
                {playerData.teeOffTime}
              </p>
            </div>
            <hr className="mx-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Times;
