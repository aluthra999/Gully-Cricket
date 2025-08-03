import React, { useState } from "react";

export default function MatchSetup() {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [overs, setOvers] = useState(6);
  const [players, setPlayers] = useState(6);
  const [superOver, setSuperOver] = useState(false);
  const [rules, setRules] = useState({
    wide: true,
    noBall: true,
    powerPlay: false,
    freeHit: true,
    lbw: false,
    overthrow: true,
    bye: false,
    legBye: false,
    stumping: true,
    hitWicket: true,
    mankading: false,
  });

  const toggleRule = (key) => {
    setRules({ ...rules, [key]: !rules[key] });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-semibold text-center">Match Setup</h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          className="border px-4 py-2 rounded"
          placeholder="Home Team"
          value={homeTeam}
          onChange={(e) => setHomeTeam(e.target.value)}
        />
        <input
          type="text"
          className="border px-4 py-2 rounded"
          placeholder="Away Team"
          value={awayTeam}
          onChange={(e) => setAwayTeam(e.target.value)}
        />
        <input
          type="number"
          className="border px-4 py-2 rounded"
          placeholder="Overs"
          value={overs}
          onChange={(e) => setOvers(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="border px-4 py-2 rounded"
          placeholder="# of Players"
          value={players}
          onChange={(e) => setPlayers(parseInt(e.target.value))}
        />
      </div>

      <div className="flex items-center justify-between">
        <span>Super Over?</span>
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={superOver}
            onChange={() => setSuperOver(!superOver)}
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-focus:ring-2 peer-checked:bg-green-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
        </label>
      </div>

      <div>
        <h3 className="font-semibold mt-4 mb-2">Rules</h3>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(rules).map(([rule, value]) => (
            <div key={rule} className="flex items-center justify-between">
              <span className="capitalize">{rule}</span>
              <label className="inline-flex relative items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={value}
                  onChange={() => toggleRule(rule)}
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-focus:ring-2 peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full bg-green-600 text-white py-2 rounded-xl mt-4">
        Continue to Player Setup
      </button>
    </div>
  );
}
