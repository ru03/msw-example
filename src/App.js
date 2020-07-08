// app.js
import React, { useState, useEffect } from 'react';
import { PlayerForm } from './components/PlayerForm';
import { Roster } from './components/Roster';
import { Teams } from './components/Teams';
import './App.css';

// Start Mock Server in DEV
if (process.env.NODE_ENV === 'development') {
  const { server } = require('./mocks/workerSetup');
  server.start();
}

function App() {
  const [teams, setTeams] = useState([]);
  const [roster, setRoster] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    const res = await fetch('/teams');
    const { teams } = await res.json();
    setTeams(teams);
  };

  const onTeamHandler = async (id) => {
    try {
      const res = await fetch(`/team/${id}`);
      const roster = await res.json();
      setRoster(roster);
      if (error) setError(false);
    } catch (e) {
      setError(true);
    }
  }

  const resetRoster = () => setRoster(null);

  return (
    <div className="App">
      <Teams teams={teams} onClickTeam={onTeamHandler} />
      {
        error && <div>ERROR LOADING ROSTER</div>
      }
      {
        roster && <Roster coach={roster.coach} players={roster.players} />
      }
      <PlayerForm />
      <button disabled={!roster} onClick={resetRoster}>Reset</button>
    </div>
  );
}

export default App;
