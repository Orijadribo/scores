import React from 'react';
import { profile_pic } from '../../assets';

const Player = ({ playerData }) => {
  const getPlayingHandicap = (handicapIndex) => {
    if (handicapIndex >= -5.0 && handicapIndex < -4.9) return +7;
    if (handicapIndex >= -4.9 && handicapIndex < -4.0) return +6;
    if (handicapIndex >= -4.0 && handicapIndex < -3.2) return +5;
    if (handicapIndex >= -3.2 && handicapIndex < -2.3) return +4;
    if (handicapIndex >= -2.3 && handicapIndex < -1.4) return +3;
    if (handicapIndex >= -1.4 && handicapIndex < -0.6) return +2;
    if (handicapIndex >= -0.6 && handicapIndex < 0.3) return +1;
    if (handicapIndex >= 0.3 && handicapIndex < 1.2) return 0;
    if (handicapIndex >= 1.2 && handicapIndex < 2.0) return 1;
    if (handicapIndex >= 2.0 && handicapIndex < 2.9) return 2;
    if (handicapIndex >= 2.9 && handicapIndex < 3.7) return 3;
    if (handicapIndex >= 3.7 && handicapIndex < 4.6) return 4;
    if (handicapIndex >= 4.6 && handicapIndex < 5.5) return 5;
    if (handicapIndex >= 5.5 && handicapIndex < 6.3) return 6;
    if (handicapIndex >= 6.3 && handicapIndex < 7.2) return 7;
    if (handicapIndex >= 7.2 && handicapIndex < 8.1) return 8;
    if (handicapIndex >= 8.1 && handicapIndex < 8.9) return 9;
    if (handicapIndex >= 8.9 && handicapIndex < 9.8) return 10;
    if (handicapIndex >= 9.8 && handicapIndex < 10.6) return 11;
    if (handicapIndex >= 10.6 && handicapIndex < 11.5) return 12;
    if (handicapIndex >= 11.5 && handicapIndex < 12.4) return 13;
    if (handicapIndex >= 12.4 && handicapIndex < 13.2) return 14;
    if (handicapIndex >= 13.2 && handicapIndex < 14.1) return 15;
    if (handicapIndex >= 14.1 && handicapIndex < 15.0) return 16;
    if (handicapIndex >= 15.0 && handicapIndex < 15.8) return 17;
    if (handicapIndex >= 15.8 && handicapIndex < 16.7) return 18;
    if (handicapIndex >= 16.7 && handicapIndex < 17.5) return 19;
    if (handicapIndex >= 17.5 && handicapIndex < 18.4) return 20;
    if (handicapIndex >= 18.4 && handicapIndex < 19.3) return 21;
    if (handicapIndex >= 19.3 && handicapIndex < 20.1) return 22;
    if (handicapIndex >= 20.1 && handicapIndex < 21.0) return 23;
    if (handicapIndex >= 21.0 && handicapIndex < 21.9) return 24;
    if (handicapIndex >= 21.9 && handicapIndex < 22.7) return 25;
    if (handicapIndex >= 22.7 && handicapIndex < 23.6) return 26;
    if (handicapIndex >= 23.6 && handicapIndex < 24.4) return 27;
    if (handicapIndex >= 24.4 && handicapIndex < 25.3) return 28;
    if (handicapIndex >= 25.3 && handicapIndex < 26.2) return 29;
    if (handicapIndex >= 26.2 && handicapIndex < 27.0) return 30;
    if (handicapIndex >= 27.0 && handicapIndex < 27.9) return 31;
    if (handicapIndex >= 27.9 && handicapIndex < 28.8) return 32;
    if (handicapIndex >= 28.8 && handicapIndex < 29.6) return 33;
    if (handicapIndex >= 29.6 && handicapIndex < 30.5) return 34;
    if (handicapIndex >= 30.5 && handicapIndex < 31.3) return 35;
    if (handicapIndex >= 31.3 && handicapIndex < 32.2) return 36;
    if (handicapIndex >= 32.2 && handicapIndex < 33.1) return 37;
    if (handicapIndex >= 33.1 && handicapIndex < 33.9) return 38;
    if (handicapIndex >= 33.9 && handicapIndex < 34.8) return 39;
    if (handicapIndex >= 34.8 && handicapIndex < 35.7) return 40;
    if (handicapIndex >= 35.7 && handicapIndex < 36.5) return 41;
    if (handicapIndex >= 36.5 && handicapIndex < 37.4) return 42;
    if (handicapIndex >= 37.4 && handicapIndex < 38.2) return 43;
    if (handicapIndex >= 38.2 && handicapIndex < 39.1) return 44;
    if (handicapIndex >= 39.1 && handicapIndex < 40.0) return 45;
    if (handicapIndex >= 40.0 && handicapIndex < 40.8) return 46;
    if (handicapIndex >= 40.8 && handicapIndex < 41.7) return 47;
    if (handicapIndex >= 41.7 && handicapIndex < 42.6) return 48;
    if (handicapIndex >= 42.6 && handicapIndex < 43.4) return 49;
    if (handicapIndex >= 43.4 && handicapIndex < 44.3) return 50;
    if (handicapIndex >= 44.3 && handicapIndex < 45.1) return 51;
    if (handicapIndex >= 45.1 && handicapIndex < 46.0) return 52;
    if (handicapIndex >= 46.0 && handicapIndex < 46.9) return 53;
    if (handicapIndex >= 46.9 && handicapIndex < 47.7) return 54;
    if (handicapIndex >= 47.7 && handicapIndex < 48.6) return 55;
    if (handicapIndex >= 48.6 && handicapIndex < 49.5) return 56;
    if (handicapIndex >= 49.5 && handicapIndex < 50.3) return 57;
    if (handicapIndex >= 50.3 && handicapIndex < 51.2) return 58;
    if (handicapIndex >= 51.2 && handicapIndex < 52.1) return 59;
    if (handicapIndex >= 52.1 && handicapIndex < 52.9) return 60;
    if (handicapIndex >= 52.9 && handicapIndex < 53.8) return 61;
    if (handicapIndex >= 53.8 && handicapIndex <= 54.0) return 62;

    // Default case if the handicapIndex doesn't fall into any specified range
    return null;
  };

  return (
    <div>
      <div className='flex gap-4 px-5 pt-10'>
        <div className='flex flex-col md:flex-row'>
          <img src={profile_pic} alt={profile_pic} className='' />
          <div className='text-left'>
            <p className='p-1 text-3xl font-titleFont'>{playerData.PLAYER}</p>
            <p className='p-1'>Handicap index: {playerData.hcp}</p>
            <p className='p-1'>
              Playing Handicap: {getPlayingHandicap(playerData.hcp)}
            </p>
          </div>
        </div>
        {/* <div className="flex items-center justify-center text-3xl font-titleFont flex-grow">
          round 1 Score Card
        </div> */}
      </div>
    </div>
  );
};

export default Player;
