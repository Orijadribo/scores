import React from 'react'
import { FaSearch } from "react-icons/fa";
import Table from './Table';

const Scores = () => {

  return (
    <div className="flex flex-col gap-4 max-w-5xl m-auto p-4 md:p-10 border rounded-xl bg-white">
      <div className="md:flex items-center justify-between pb-6">
        <p className="text-[28px] pb-6 md:pb-0">Leaderboard</p>
        <div className="flex items-center justify-between border px-5 py-2 rounded-full">
          <input
            type="text"
            placeholder="Search Players"
            className="border-none outline-none"
          ></input>
          <FaSearch className="text-[#E1E1E1]" />
        </div>
      </div>
      <Table/>
    </div>
  );
}

export default Scores