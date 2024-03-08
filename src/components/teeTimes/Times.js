import React, { useEffect, useState } from 'react';
import db from '../../api/firebaseConfig';
import { getDocs, collection } from 'firebase/firestore';

const Times = ({ draw }) => {
  const [actualDraw, setActualDraw] = useState([]);

  const drawCollectionRef = collection(db, 'draw');

  useEffect(() => {
    const getDraw = async () => {
      try {
        const data = await getDocs(drawCollectionRef);
        const drawData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const drawTitles = drawData.map((eachDraw) => eachDraw.id);

        // Check if draw is present in drawData
        const indexOfDraw = drawTitles.indexOf(draw);

        if (indexOfDraw !== -1) {
          setActualDraw([drawData[indexOfDraw]]);
        } else {
          setActualDraw([]); // Set to an empty array if not found
        }
      } catch (err) {
        console.error(err);
      }
    };

    getDraw();
  }, [draw]);

  useEffect(() => {
    console.log('Actual Draw:', actualDraw);

    // This will only run when actualDraw is updated
    actualDraw.forEach((drawData) => {
      drawData.draw.forEach((playerData) => {
        console.log(playerData.player);
        console.log(playerData.time);
      });
    });
  }, [actualDraw]);

  return (
    <div className='text-sm md:text-base px-4 md:px-0 relative'>
      <div className='grid grid-cols-3 uppercase text-center text-white bg-[#0B6623] rounded-t-md p-2  sticky top-[147px] md:top-[90px]'>
        <p className='col-span-2 md:p-3 flex items-center text-left md:pl-16 px-1'>
          player
        </p>
        <p className='md:p-3 flex justify-center items-center'>time</p>
      </div>
      <div>
        {actualDraw.map((drawData, index) => {
          return drawData.draw.map((playerData, playerIndex) => (
            <div key={index + playerIndex} className=''>
              <div className='grid grid-cols-3 hover:bg-[#90EE90]/[0.1] rounded-md p-1'>
                <p className='flex items-center gap-4 col-span-2 p-2 md:pl-16 text-left cursor-pointer hover:underline decoration-[#0B6623] capitalize'>
                  {playerData.player}
                </p>
                <p className='flex items-center justify-center gap-4 p-2'>
                  {playerData.time}
                </p>
              </div>
              <hr className='mx-1' />
            </div>
          ));
        })}
      </div>
    </div>
  );
};

export default Times;
