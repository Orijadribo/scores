import React, { useEffect, useState } from 'react';
import { parData, yardsData } from '../../constants';
import Score from './Score';

const Table = ({ playerSelected, tournamentData, players, draw }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  // Combine data to create the golfData object
  const golfData = draw
    .map((drawEntry) => {
      const tournament = tournamentData.find((t) => t.id === drawEntry.id);

      return drawEntry.draw.map((playerDraw) => {
        const player = players.find(
          (p) =>
            p &&
            p.firstName &&
            p.lastName &&
            playerDraw.player.includes(p.firstName) &&
            playerDraw.player.includes(p.lastName)
        );

        if (tournament && tournament.scores) {
          const playerName = `${player.firstName.toLowerCase()}`;
          const playerScores = tournament.scores[playerName];

          return {
            id: player ? player.id : null, // Use player ID as the unique identifier
            PLAYER: player ? `${player.firstName} ${player.lastName}` : '',
            hcp: player ? parseFloat(player.handicapIndex) : 0,
            teeOffTime: playerDraw.time,
            round: playerScores || {},
          };
        } else {
          // Handle the case when tournament or tournament.scores is undefined
          return null;
        }
      });
    })
    .flat()
    .filter((entry) => entry !== null); // Remove entries where tournament or tournament.scores is undefined

  //An array to create the different numbers of holes ie 1-9, 10-18 and 1-18 respectively
  const frontNine = Array.from({ length: 9 }, (_, index) => index + 1);
  const backNine = Array.from({ length: 9 }, (_, index) => index + 10);
  const allHoles = Array.from({ length: 18 }, (_, index) => index + 1);

  //Function to return the gross score for the front 9 holes depending on the player
  const getGrossFront = (playerData) => {
    return frontNine.reduce((acc, holeNumber) => {
      const holeScore = playerData.round[`hole${holeNumber}`];
      return acc + (Number.isFinite(holeScore) ? holeScore : 0);
    }, 0);
  };

  //Function to return the gross score for the back 9 holes depending on the player
  const getGrossBack = (playerData) => {
    return backNine.reduce((acc, holeNumber) => {
      const holeScore = playerData.round[`hole${holeNumber}`];
      return acc + (Number.isFinite(holeScore) ? holeScore : 0);
    }, 0);
  };

  //Function to return the total gross score for the entire 18 holes for a particular player
  const getGross = (playerData) => {
    const totalGross = getGrossFront(playerData) + getGrossBack(playerData);
    return totalGross;
  };

  const scoreToPar = (playerData) => {
    if (playerData.round && playerData.round.hole1 !== undefined) {
      const scoreToPar = allHoles.reduce((acc, holeNumber) => {
        const holeScore =
          playerData.round[`hole${holeNumber}`] - parData[`hole${holeNumber}`];
        return acc + (Number.isFinite(holeScore) ? holeScore : 0);
      }, 0);

      return scoreToPar;
    } else if (playerData.round === null) {
      return Infinity; // Use Infinity for cases where the score is not applicable
    } else {
      return Infinity; // Use Infinity for cases where the round data is not available
    }
  };

  //Function to sort the player according to their score to par in ascending order with the lowest first
  const sortedGolfData = [...golfData].sort(
    (a, b) => scoreToPar(a) - scoreToPar(b)
  );

  // Create an array to store positions of the players
  const positions = sortedGolfData.map((_, index) => index + 1);

  // Check for tied positions
  let currentPosition = 1;
  let previousScoreToPar = null;

  //Provide each player with a position from the sortedgolfdata
  positions.forEach((position, index) => {
    const currentScoreToPar = scoreToPar(sortedGolfData[index]);

    if (
      previousScoreToPar !== null &&
      currentScoreToPar !== previousScoreToPar
    ) {
      currentPosition = index + 1;
    }

    positions[index] = currentPosition;
    previousScoreToPar = currentScoreToPar;
  });

  // Add "T" prefix to tied positions
  const tiedPositions = new Set();
  positions.forEach((position, index) => {
    if (index > 0 && positions[index] === positions[index - 1]) {
      tiedPositions.add(position);
    }
  });

  tiedPositions.forEach((tiedPosition) => {
    const tiedIndices = positions.reduce((acc, position, index) => {
      if (position === tiedPosition) {
        acc.push(index);
      }
      return acc;
    }, []);

    if (tiedIndices.length > 1) {
      tiedIndices.forEach((index) => {
        positions[index] = 'T' + tiedPosition;
      });
    }
  });

  //Find the last hole with a valid score in the round to give each a player the hole number they are on
  const findThru = (playerData) => {
    let lastValidHole = null;

    allHoles.map((holeNumber) => {
      const currentHole = playerData.round[`hole${holeNumber}`];
      //If type of currentHole is a number and it is a number, ...
      if (typeof currentHole === 'number' && !isNaN(currentHole)) {
        lastValidHole = holeNumber;
      }
    });

    //If the last hole is valid and equal to 18, return an "F" for finished else return the player's teetime
    if (lastValidHole) {
      if (lastValidHole === 18) {
        lastValidHole = 'F';
      }
    } else {
      return playerData.teeOffTime;
    }
    return lastValidHole;
  };

  //Open the selected player's scorecard
  const openScore = (id) => {
    setIsOpen(id !== currentPlayer);
    setCurrentPlayer(id === currentPlayer ? null : id);
  };

  //Rerender the page when the following states are changed
  useEffect(() => {
    // console.log("Updated isOpen:", isOpen);
    // console.log("Updated currentPlayer:", currentPlayer);
  }, [isOpen, currentPlayer]);

  //Return a color of the score depending on whether it is an under(red), over(black) or level(green)
  const getScoreColorClass = (score) => {
    if (score < 0) {
      return 'text-red-500';
    } else if (score === 0) {
      return 'text-green-500';
    } else {
      return 'text-black';
    }
  };

  return (
    <div className='text-sm md:text-base px-4 md:px-0 relative'>
      <div className='grid grid-cols-8 uppercase text-center text-white bg-[#0B6623] rounded-t-md py-2 sticky top-[147px] md:top-[90px]'>
        <p className='md:p-3 flex items-center justify-center'>pos</p>
        <p className='col-span-3 p-2 md:p-3 flex text-left md:pl-10 items-center'>
          player
        </p>
        <p className='md:p-3 flex items-center justify-center'>to par</p>
        <p className='md:p-3 flex items-center justify-center'>thru</p>
        <div className='md:p-3 flex items-center justify-center'>
          <p className='hidden md:block'>round</p>
          <p className='md:hidden block'>rnd</p>
        </div>
        <p className='md:p-3 flex items-center justify-center'>gross</p>
      </div>
      <div>
        {sortedGolfData.map((playerData, index) => (
          <div
            key={playerData.id}
            className='grid-rows-2 uppercase text-center '
          >
            <div className='grid grid-cols-8 hover:bg-[#90EE90]/[0.1] rounded-md'>
              <p className='flex items-center justify-center gap-4 p-2'>
                {playerData.round && playerData.round.hole1 !== undefined
                  ? positions[index]
                  : '-'}
              </p>
              <p
                className=' flex items-center gap-4 col-span-3 p-2 md:pl-10 text-left cursor-pointer hover:underline decoration-[#0B6623]'
                onClick={() => openScore(playerData.id)}
              >
                {playerData.PLAYER}
              </p>
              <p
                className={`flex items-center justify-center gap-4 p-2 ${getScoreColorClass(
                  scoreToPar(playerData)
                )}`}
              >
                {scoreToPar(playerData) === 0 &&
                playerData.round.hole1 !== undefined &&
                scoreToPar(playerData) !== Infinity
                  ? 'E'
                  : scoreToPar(playerData) === Infinity
                  ? '-'
                  : scoreToPar(playerData)}
              </p>
              <p className='flex items-center justify-center gap-4 p-2'>
                {findThru(playerData)}
              </p>
              <p
                className={`flex items-center justify-center gap-4 p-2 ${getScoreColorClass(
                  scoreToPar(playerData)
                )}`}
              >
                {scoreToPar(playerData) === 0 &&
                playerData.round.hole1 !== undefined &&
                scoreToPar(playerData) !== Infinity
                  ? 'E'
                  : scoreToPar(playerData) === Infinity
                  ? '-'
                  : scoreToPar(playerData)}
              </p>
              <p className='flex items-center justify-center gap-4 p-2 '>
                {getGross(playerData) !== 0 ? getGross(playerData) : '-'}
              </p>
            </div>
            <div>
              {currentPlayer === playerData.id && isOpen && (
                <Score
                  playerData={playerData}
                  playerId={playerData.id}
                  totalGross={getGross(playerData)}
                  frontNine={frontNine}
                  backNine={backNine}
                  grossFront={getGrossFront(playerData)}
                  grossBack={getGrossBack(playerData)}
                  golfData={golfData}
                />
              )}
            </div>
            <hr className='mx-1' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
