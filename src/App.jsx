import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomePage from "./components/HomePage";
import ComputerPage from "./components/ComputerPage";

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
        return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Music & I - Coming Soon</h1></div>;
      case "hobbies":
        return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Hobbies & I - Coming Soon</h1></div>;
      case "academics":
        return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">My Academics - Coming Soon</h1></div>;
      case "life":
        return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">My Life - Coming Soon</h1></div>;
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
