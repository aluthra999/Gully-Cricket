// src/components/ScoringPanel.jsx
import React from "react";

export default function ScoringPanel({ onScore, onWicket, onUndo }) {
  const runOptions = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-4 mt-4">
      <h3 className="text-lg font-semibold">Scoring Panel</h3>

      <div className="flex flex-wrap gap-2">
        {runOptions.map((run) => (
          <button
            key={run}
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => onScore(run)}
          >
            {run} Run{run !== 1 ? "s" : ""}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        <button
          onClick={() => onWicket("Caught")}
          className="bg-red-500 text-white px-4 py-2 rounded w-full"
        >
          Wicket: Caught
        </button>
        <button
          onClick={() => onWicket("Bowled")}
          className="bg-red-500 text-white px-4 py-2 rounded w-full"
        >
          Wicket: Bowled
        </button>
        <button
          onClick={() => onWicket("Run Out")}
          className="bg-red-500 text-white px-4 py-2 rounded w-full"
        >
          Wicket: Run Out
        </button>
        <button
          onClick={onUndo}
          className="bg-yellow-500 text-black px-4 py-2 rounded w-full mt-4"
        >
          Undo Last Ball
        </button>
      </div>
    </div>
  );
}
