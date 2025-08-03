import React, { createContext, useState, useEffect } from 'react';

export const MatchContext = createContext();

export const MatchProvider = ({ children }) => {
  const [match, setMatch] = useState(() => {
    const saved = localStorage.getItem("match");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem("match", JSON.stringify(match));
  }, [match]);

  return (
    <MatchContext.Provider value={{ match, setMatch }}>
      {children}
    </MatchContext.Provider>
  );
};