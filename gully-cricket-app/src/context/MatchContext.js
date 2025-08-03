// src/context/MatchContext.js
import React, { createContext, useContext, useState } from "react";

const MatchContext = createContext();

export const MatchProvider = ({ children }) => {
  const [matchCode, setMatchCode] = useState(null);
  const [matchInfo, setMatchInfo] = useState({
    homeTeam: "",
    awayTeam: "",
    overs: 10,
    players: 11,
    rules: {},
    superOver: true,
    innings: [],
    currentInnings: 0,
  });
  const [scoreData, setScoreData] = useState({
    totalRuns: 0,
    wickets: 0,
    balls: 0,
    batters: [],
    bowlers: [],
    history: [],
  });
  const [host, setHost] = useState(null);

  return (
    <MatchContext.Provider
      value={{
        matchCode,
        setMatchCode,
        matchInfo,
        setMatchInfo,
        scoreData,
        setScoreData,
        host,
        setHost,
      }}
    >
      {children}
    </MatchContext.Provider>
  );
};

export const useMatch = () => useContext(MatchContext);
