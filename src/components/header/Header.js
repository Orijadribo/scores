import React from "react";
import { WNGC_logo } from "../../assets";

const Header = ({ tournamentName }) => {
  return (
    <div>
      <div className='flex items-center justify-center flex-col bg-[#f1f1f1] p-5 gap-4'>
        <img src={WNGC_logo} alt='Wesnile Golf Club Logo' className='w-32' />
        <h1 className='text-3xl font-titleFont'>{tournamentName}</h1>
      </div>
    </div>
  );
};

export default Header;
