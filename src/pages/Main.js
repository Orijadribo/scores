import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import HeaderBottom from '../components/header/HeaderBottom';
import Scores from '../components/scores/Scores';
import Footer from '../components/footer/Footer';
import TeeTime from '../components/teeTimes/TeeTime';
import db from '../api/firebaseConfig';
import { getDocs, collection, doc, onSnapshot } from 'firebase/firestore';

const Main = () => {
  const [showTeeTimes, setShowTeeTimes] = useState(false);
  const [tournamentName, setTournamentName] = useState('');
  const [tournamentData, setTournamentData] = useState([]);
  const [players, setPlayers] = useState([]);
  const [draw, setDraw] = useState([]);

  const tournamentsCollectionRef = collection(db, 'tournaments');
  const playersCollectionRef = collection(db, 'players');
  const drawCollectionRef = collection(db, 'draw');

  // Inside the first useEffect
  useEffect(() => {
    const getTournament = async () => {
      try {
        const data = await getDocs(tournamentsCollectionRef);
        const tournament = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTournamentData(tournament);

        if (tournament.length > 0) {
          setTournamentName(tournament[0].id);

          if (tournamentName) {
            // Set up real-time listener for the tournament document
            const tournamentDocRef = doc(
              tournamentsCollectionRef,
              tournamentName
            );
            const unsubscribe = onSnapshot(tournamentDocRef, (doc) => {
              // Handle changes to the tournament document here
              const updatedData = {
                ...doc.data(),
                id: doc.id,
              };
              // Update state with the updated data
              setTournamentData((prevData) =>
                prevData.map((item) =>
                  item.id === updatedData.id ? updatedData : item
                )
              );
            });

            // Remember to unsubscribe when the component unmounts
            return () => unsubscribe();
          }
        }
      } catch (err) {
        console.error(err);
      }
    };
    getTournament();
  }, []);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const data = await getDocs(playersCollectionRef);
        const playerData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPlayers(playerData);
      } catch (err) {
        console.error(err);
      }
    };
    getPlayers();
  }, []);

  useEffect(() => {
    const getDraw = async () => {
      try {
        const data = await getDocs(drawCollectionRef);
        const drawData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setDraw(drawData);
      } catch (err) {
        console.error(err);
      }
    };
    getDraw();
  }, []);

  return (
    <div className=''>
      <Header tournamentName={tournamentName} />
      <HeaderBottom
        showTeeTimes={showTeeTimes}
        setShowTeeTimes={setShowTeeTimes}
      />
      {/* Display either player scores or tee times depending on the selection */}
      {showTeeTimes ? (
        <TeeTime tournamentData={tournamentData} />
      ) : (
        <Scores tournamentData={tournamentData} players={players} draw={draw} />
      )}
      <Footer />
    </div>
  );
};

export default Main;
