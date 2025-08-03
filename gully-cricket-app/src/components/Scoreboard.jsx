import React, { useContext } from 'react';
import { MatchContext } from '../context/MatchContext';

const Scoreboard = () => {
  const { match } = useContext(MatchContext);
  const inning = match.innings[match.currentInning];

  return (
    <div className="p-4 bg-gray-100 rounded shadow text-center">
      <h2 className="text-xl font-bold">{match.teams.team1} vs {match.teams.team2}</h2>
      <p className="text-3xl font-mono">{inning.score}/{inning.wickets}</p>
      <p className="text-sm">Overs: {Math.floor(match.currentBall / 6)}.{match.currentBall % 6}</p>
    </div>
  );
};

export default Scoreboard;