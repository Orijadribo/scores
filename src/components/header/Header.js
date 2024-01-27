import React from "react";
import { WNGC_logo } from "../../assets";

const Header = () => {

  return (
    <div>
      <div className="flex items-center justify-center flex-col bg-[#f1f1f1] p-5 gap-4">
        <img src={WNGC_logo} alt="logo" className="w-20" />
        <h1 className="text-3xl font-titleFont">Easter Tournament</h1>
      </div>
      
      
    </div>
  );
};

export default Header;
