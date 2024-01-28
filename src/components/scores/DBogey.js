import React from "react";

const DBogey = ({ hideScore, hole1 }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex items-center justify-center w-6 h-6 border border-black">
        <div className="flex items-center justify-center w-5 h-5 border border-black">
          {hole1}
        </div>
      </div>
      <p className={hideScore ? "block" : "hidden"}>double bogey or better</p>
    </div>
  );
};

export default DBogey;
