import React from "react";
import { Dock, DockIcon } from "./magicui/dock";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";
import { 
  Home, 
  Computer, 
  Music, 
  Heart, 
  GraduationCap, 
  User 
} from "lucide-react";

const HomePage = ({ onNavigate }) => {
  const navigationItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: Computer, label: "Computer & I", id: "computer" },
    { icon: Music, label: "Music & I", id: "music" },
    { icon: Heart, label: "Hobbies & I", id: "hobbies" },
    { icon: GraduationCap, label: "My Academics", id: "academics" },
    { icon: User, label: "My Life", id: "life" },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Top Navigation Bar */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-4">
          <Dock className="bg-white/20 backdrop-blur-lg border-white/30">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <DockIcon
                  key={item.id}
                  className={`${
                    item.id === 'home' 
                      ? 'bg-blue-500/50 text-white' 
                      : 'bg-gray-200/30 dark:bg-gray-900/30 hover:bg-gray-300/40 dark:hover:bg-gray-800/40 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <IconComponent size={20} />
                </DockIcon>
              );
            })}
          </Dock>
          
          {/* Theme Toggler */}
          <AnimatedThemeToggler />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-8 pt-20">
        <div className="text-center mb-12 w-[90%] max-w-[1800px] mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to My World
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Explore my journey through technology, music, hobbies, academics, and life experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
