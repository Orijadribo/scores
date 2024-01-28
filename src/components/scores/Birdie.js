import React from "react";

const Birdie = ({ hideScore, hole1 }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex items-center justify-center w-6 h-6 border border-black rounded-full">{hole1}</div>
      <p className={hideScore ? "block" : "hidden"}>birdie</p>
    </div>
  );
};

export default Birdie;
