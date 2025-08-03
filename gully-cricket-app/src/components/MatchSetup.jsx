import React, { useState, useContext } from 'react';
import { MatchContext } from '../context/MatchContext';
import { useNavigate } from 'react-router-dom';
import { generateMatchCode } from '../utils/generateCode';

const MatchSetup = () => {
  const { setMatch } = useContext(MatchContext);
  const navigate = useNavigate();

  const [teams, setTeams] = useState({ team1: '', team2: '' });
  const [overs, setOvers] = useState(5);
  const [players, setPlayers] = useState(6);
  const [isHost, setIsHost] = useState(true);

  const startMatch = () => {
    const code = generateMatchCode();
    const matchData = {
      id: code,
      teams,
      overs,
      players,
      isHost,
      innings: [{ balls: [], score: 0, wickets: 0 }],
      currentInning: 0,
      currentBall: 0,
      hostId: isHost ? 'player1' : null,
    };
    setMatch(matchData);
    navigate(`/match/${code}`);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">🏏 Gully Cricket Match</h1>
      <input
        className="w-full p-2 mb-2 border rounded"
        placeholder="Team 1"
        value={teams.team1}
        onChange={(e) => setTeams({ ...teams, team1: e.target.value })}
      />
      <input
        className="w-full p-2 mb-2 border rounded"
        placeholder="Team 2"
        value={teams.team2}
        onChange={(e) => setTeams({ ...teams, team2: e.target.value })}
      />
      <div className="mb-2">
        <label>Overs: </label>
        <input
          type="number"
          value={overs}
          onChange={(e) => setOvers(Number(e.target.value))}
          className="border p-1 rounded w-16"
        />
      </div>
      <div className="mb-2">
        <label>Players per team: </label>
        <input
          type="number"
          value={players}
          onChange={(e) => setPlayers(Number(e.target.value))}
          className="border p-1 rounded w-16"
        />
      </div>
      <div className="mb-4 flex items-center">
        <label className="mr-2">I am host</label>
        <div
          onClick={() => setIsHost(!isHost)}
          className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${isHost ? 'bg-green-500' : 'bg-gray-400'}`}
        >
          <div className={`bg-white w-4 h-4 rounded-full transform transition-transform ${isHost ? 'translate-x-6' : ''}`}></div>
        </div>
      </div>
      <button
        onClick={startMatch}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Start Match
      </button>
    </div>
  );
};

export default MatchSetup;