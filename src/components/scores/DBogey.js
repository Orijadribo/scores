import React from "react";

const DBogey = ({ hideScore, hole }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex items-center justify-center w-6 h-6 border border-black">
        <div className="flex items-center justify-center w-5 h-5 border border-black">
          {hole}
        </div>
      </div>
      <p className={hideScore ? "block" : "hidden"}>double bogey or worse</p>
    </div>
  );
};

export default DBogey;
