import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomePage from "./components/HomePage";
import ComputerPage from "./components/ComputerPage";
import MusicPage from "./components/MusicPage";
import CVPage from "./components/CVPage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/computer" element={<ComputerPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/cv" element={<CVPage />} />
          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
