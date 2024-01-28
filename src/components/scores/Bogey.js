import React from 'react'

const Bogey = ({ hideScore, hole1 }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex items-center justify-center w-6 h-6 border border-black">
        {hole1}
      </div>
      <p className={hideScore ? "block" : "hidden"}>bogey</p>
    </div>
  );
};
export default Bogey