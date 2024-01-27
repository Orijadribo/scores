import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const HeaderBottom = () => {
  return (
    <div className="flex items-center justify-center gap-10 p-5">
      <p className="flex items-center gap-2">
        Scoring
        <FaChevronDown />
      </p>
      <p>Tee Times</p>
    </div>
  );
};

export default HeaderBottom;
