import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MatchProvider } from './context/MatchContext';
import MatchSetup from './components/MatchSetup';
import Scoreboard from './components/Scoreboard';
import ScoringPanel from './components/ScoringPanel';
import HostSwitcher from './components/HostSwitcher';

function App() {
  return (
    <MatchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MatchSetup />} />
          <Route path="/match/:code" element={
            <div>
              <Scoreboard />
              <ScoringPanel />
              <HostSwitcher />
            </div>
          } />
        </Routes>
      </Router>
    </MatchProvider>
  );
}

export default App;