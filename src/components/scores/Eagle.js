import React from "react";

const Eagle = ({ hideScore, hole1 }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex items-center justify-center w-6 h-6 border border-black rounded-full">
        <div className="flex items-center justify-center w-5 h-5 border border-black rounded-full">
          {hole1}
        </div>
      </div>
      <p className={hideScore ? "block" : "hidden"}>eagle or better</p>
    </div>
  );
};

export default Eagle;
