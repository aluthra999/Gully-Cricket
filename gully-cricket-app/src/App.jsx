import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MatchSetup from "./components/MatchSetup";
import MatchViewer from "./components/MatchViewer";
import ScoringScreen from "./components/ScoringScreen";
import { MatchProvider } from "./context/MatchContext";

export default function App() {
  return (
    <MatchProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/setup" element={<MatchSetup />} />
            <Route path="/match/:matchCode" element={<MatchViewer />} />
            <Route path="/score/:matchCode" element={<ScoringScreen />} />
          </Routes>
        </div>
      </Router>
    </MatchProvider>
  );
}

function Home() {
  const [matchCode, setMatchCode] = React.useState("");
  return (
    <div className="text-center space-y-6">
      <h1 className="text-3xl font-bold">🏏 Gully Cricket Scorer</h1>
      <div className="space-y-2">
        <a href="/setup" className="bg-green-600 text-white px-6 py-2 rounded-xl">Start Match</a>
      </div>
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Enter Match Code"
          className="border px-4 py-2 rounded"
          value={matchCode}
          onChange={(e) => setMatchCode(e.target.value)}
        />
        <a
          href={`/match/${matchCode}`}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl"
        >
          View Match
        </a>
      </div>
    </div>
  );
}
