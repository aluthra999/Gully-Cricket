import React, { useContext } from 'react';
import { MatchContext } from '../context/MatchContext';

const HostSwitcher = () => {
  const { match, setMatch } = useContext(MatchContext);

  const transferHost = () => {
    const newMatch = { ...match };
    newMatch.isHost = !newMatch.isHost;
    setMatch(newMatch);
  };

  return (
    <div className="p-4">
      <button onClick={transferHost} className="w-full bg-indigo-600 text-white py-2 rounded">
        Transfer Host
      </button>
    </div>
  );
};

export default HostSwitcher;