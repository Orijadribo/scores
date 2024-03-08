import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import {} from 'react-icons/io5';
import { golfData } from '../../constants';
import Times from './Times';

const TeeTime = ({ tournamentData }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [playerSelected, setPlayerSelected] = useState('');
  const [draw, setDraw] = useState('');

  useEffect(() => {
    tournamentData.map((tournament) => setDraw(tournament.draw));
  }, []);

  //Handle search for tee times
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Set searchOpen to true only if there's something typed in the input
    setSearchOpen(query.trim() !== '');
  };

  //Handle clear function for the search input
  const handleClear = () => {
    setSearchQuery('');
    setSearchOpen(false);
  };

  //Filter the golfdata for players containing the search query
  const filteredData = golfData.filter((player) =>
    player.PLAYER.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //Store the player selected from the search dropdon
  const selection = (id) => {
    setPlayerSelected(id);
  };

  return (
    <div className='flex flex-col gap-0 max-w-5xl m-auto pb-4 md:p-10 border rounded-xl bg-white z-10'>
      <div className='md:flex items-center justify-between py-6 px-4 md:px-0 sticky top-0 bg-white z-10'>
        <p className='text-[28px] pb-4 md:pb-0'>Tee Times</p>
        <div className='flex items-center justify-between border px-5 py-2 rounded-full relative'>
          <input
            type='text'
            placeholder='Search Players'
            className='border-none outline-none'
            value={searchQuery}
            onChange={handleSearch}
          ></input>
          {!searchQuery ? (
            <FaSearch className='text-[#E1E1E1]' />
          ) : (
            <IoClose
              className='text-[#606060] cursor-pointer'
              onClick={handleClear}
            />
          )}
          {searchOpen && (
            <ul className='absolute bg-white rounded-md p-2 top-12 left-0 border w-full max-h-40 overflow-y-auto'>
              {filteredData.map((player) => (
                <li
                  key={player.id}
                  className='cursor-pointer hover:bg-[#90EE90]/[0.1] p-2 rounded-md'
                  onClick={() => selection(player.id)}
                >
                  {filteredData.length !== 0
                    ? player.PLAYER
                    : console.log('No results found')}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Times draw={draw} />
    </div>
  );
};

export default TeeTime;
