import React from "react";

const Eagle = ({ hideScore, hole }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex items-center justify-center w-6 h-6 border border-black rounded-full">
        <div className="flex items-center justify-center w-5 h-5 border border-black rounded-full">
          {hole}
        </div>
      </div>
      <p className={hideScore ? "block" : "hidden"}>eagle or better</p>
    </div>
  );
};

export default Eagle;
