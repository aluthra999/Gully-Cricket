// src/components/Scoreboard.jsx
import React from "react";

export default function Scoreboard({ scoreData, overs }) {
  const totalBalls = overs * 6;
  const ballsRemaining = totalBalls - scoreData.balls;
  const currentOver = Math.floor(scoreData.balls / 6);
  const currentBall = scoreData.balls % 6;
  const runRate = scoreData.balls > 0 ? (scoreData.totalRuns / (scoreData.balls / 6)).toFixed(2) : 0.0;

  return (
    <div className="bg-white rounded-xl shadow p-4 text-center space-y-2">
      <h2 className="text-xl font-bold">🏏 Scoreboard</h2>
      <p>
        <strong>Runs:</strong> {scoreData.totalRuns} / {scoreData.wickets}
      </p>
      <p>
        <strong>Overs:</strong> {currentOver}.{currentBall} / {overs}
      </p>
      <p>
        <strong>Run Rate:</strong> {runRate}
      </p>
      <p>
        <strong>Balls Remaining:</strong> {ballsRemaining}
      </p>
    </div>
  );
}
