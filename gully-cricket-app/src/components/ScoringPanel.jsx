import React, { useContext } from 'react';
import { MatchContext } from '../context/MatchContext';

const ScoringPanel = () => {
  const { match, setMatch } = useContext(MatchContext);

  const addBall = (type, value) => {
    const newMatch = { ...match };
    const currentInning = newMatch.innings[newMatch.currentInning];

    if (type === 'run') {
      currentInning.score += value;
      if (value % 2 === 1) switchStrike();
    } else if (type === 'wide' || type === 'noball') {
      currentInning.score += value;
    } else if (type === 'wicket') {
      currentInning.wickets += 1;
      switchStrike();
    }

    currentInning.balls.push({ type, value });
    newMatch.currentBall += 1;

    setMatch(newMatch);
  };

  const switchStrike = () => {
    // Logic to rotate strike
  };

  const undo = () => {
    const newMatch = { ...match };
    const currentInning = newMatch.innings[newMatch.currentInning];
    const lastBall = currentInning.balls.pop();
    if (!lastBall) return;

    if (lastBall.type === 'run') {
      currentInning.score -= lastBall.value;
    } else if (lastBall.type === 'wide' || lastBall.type === 'noball') {
      currentInning.score -= lastBall.value;
    } else if (lastBall.type === 'wicket') {
      currentInning.wickets -= 1;
    }

    newMatch.currentBall -= 1;
    setMatch(newMatch);
  };

  return (
    <div className="p-4 grid grid-cols-3 gap-2">
      {[0, 1, 2, 3, 4, 6].map((run) => (
        <button
          key={run}
          onClick={() => addBall('run', run)}
          className="py-3 bg-green-500 text-white rounded"
        >
          {run}
        </button>
      ))}
      <button onClick={() => addBall('wide', 1)} className="py-3 bg-yellow-500 text-white rounded">Wide</button>
      <button onClick={() => addBall('noball', 1)} className="py-3 bg-purple-500 text-white rounded">No Ball</button>
      <button onClick={() => addBall('wicket', 0)} className="py-3 bg-red-500 text-white rounded">Wicket</button>
      <button onClick={undo} className="col-span-3 py-2 bg-gray-700 text-white rounded">Undo Last Ball</button>
    </div>
  );
};

export default ScoringPanel;