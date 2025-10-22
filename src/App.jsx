import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomePage from "./components/HomePage";
import ComputerPage from "./components/ComputerPage";
import MusicPage from "./components/MusicPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (pageId) => {
    setCurrentPage(pageId);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigation} />;
      case "computer":
        return <ComputerPage onNavigate={handleNavigation} />;
      case "music":
        return <MusicPage onNavigate={handleNavigation} />;
      case "hobbies":
        return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4"><h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white text-center">Hobbies & I - Coming Soon</h1></div>;
      case "academics":
        return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4"><h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white text-center">My Academics - Coming Soon</h1></div>;
      case "life":
        return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4"><h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white text-center">My Life - Coming Soon</h1></div>;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <ThemeProvider>
      {renderCurrentPage()}
    </ThemeProvider>
  );
}

export default App;
