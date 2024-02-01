import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Table from "./Table";
import { golfData } from "../../constants";

const Scores = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value;

    setSearchQuery(query);

    // Set searchOpen to true only if there's something typed in the input
    setSearchOpen(query.trim() !== "");
  };

  const filteredData = golfData.filter((player) =>
    player.PLAYER.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4 max-w-5xl m-auto p-4 md:p-10 border rounded-xl bg-white">
      <div className="md:flex items-center justify-between pb-6">
        <p className="text-[28px] pb-6 md:pb-0">Leaderboard</p>
        <div className="flex items-center justify-between border px-5 py-2 rounded-full relative">
          <input
            type="text"
            placeholder="Search Players"
            className="border-none outline-none"
            value={searchQuery}
            onChange={handleSearch}
          ></input>
          <FaSearch className="text-[#E1E1E1]" />
          {searchOpen && (
            <ul className="absolute bg-white rounded-md p-2 top-12 left-0 border w-full max-h-40 overflow-y-auto">
              {filteredData.map((player) => (
                <li
                  key={player.id}
                  className="cursor-pointer hover:bg-[#90EE90]/[0.1] p-2 rounded-md"
                >
                  {filteredData.length === 0
                    ? "No results found"
                    : player.PLAYER}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Scores;
