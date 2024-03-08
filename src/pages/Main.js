import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import HeaderBottom from '../components/header/HeaderBottom';
import Scores from '../components/scores/Scores';
import Footer from '../components/footer/Footer';
import TeeTime from '../components/teeTimes/TeeTime';
import db from '../api/firebaseConfig';
import { getDocs, collection } from 'firebase/firestore';

const Main = () => {
  const [showTeeTimes, setShowTeeTimes] = useState(false);
  const [tournamentName, setTournamentName] = useState('');
  const [tournamentData, setTournamentData] = useState([]);

  const tournamentsCollectionRef = collection(db, 'tournaments');

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
        }
      } catch (err) {
        console.error(err);
      }
    };
    getTournament();
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
        <Scores tournamentData={tournamentData} />
      )}
      <Footer />
    </div>
  );
};

export default Main;
