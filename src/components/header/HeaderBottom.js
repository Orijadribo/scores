import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const HeaderBottom = () => {
  const [showGross, setShowGross] = useState(false);

  const showScoring = () => {
    setShowGross(!showGross);
  };
  return (
    <div className="flex items-center justify-center gap-10 p-5">
      <div className="flex items-center gap-2 relative">
        Scoring
        {/* TO add a transition effect to the drop down  */}
        <FaChevronDown
          className={`cursor-pointer transition-transform duration-500 transform ${
            showGross ? "rotate-180" : "rotate-0"
          }`}
          onClick={showScoring}
        />
        {showGross && (
          <ul className="bg-white border rounded-md px-1 absolute top-7 w-full">
            <li className="p-2 cursor-pointer">Gross</li>
            <li className="p-2 border-t cursor-pointer">Net</li>
          </ul>
        )}
      </div>
      <p className="cursor-pointer">Tee Times</p>
    </div>
  );
};

export default HeaderBottom;
