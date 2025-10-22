import React from 'react';
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

const MusicPage = ({ onNavigate }) => {
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
  const PhotoCard = ({ image, name, className = "" }) => (
    <div className={`relative overflow-hidden cursor-pointer group ${className}`}>
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 sm:p-6 lg:p-8">
      {/* Top Navigation Bar */}
      <div className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 px-2">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
          <Dock className="bg-white/20 backdrop-blur-lg border-white/30">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <DockIcon
                  key={item.id}
                  className={`${
                    item.id === 'music' 
                      ? 'bg-purple-500/50 text-white' 
                      : 'bg-gray-200/30 dark:bg-gray-900/30 hover:bg-gray-300/40 dark:hover:bg-gray-800/40 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <IconComponent size={16} className="sm:w-5 sm:h-5" />
                </DockIcon>
              );
            })}
          </Dock>
          
          <AnimatedThemeToggler className="bg-white/20 backdrop-blur-lg border-white/30" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 pt-16 sm:pt-20">
        
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Music & Performance
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A collection of memorable moments from various music shows and performances I've attended
          </p>
        </div>

        {/* First Row: Got Talent + Banquet */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* ICS Got Talent Section */}
          <div className="space-y-4">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                ICS Got Talent
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto lg:mx-0 rounded-full"></div>
            </div>
            {/* 2x2 grid with small gaps */}
            <div className="grid grid-cols-2 gap-1 h-[400px] sm:h-[500px]">
              <PhotoCard image="/src/assets/ICS Got Talent/Got Talent 1.PNG" name="Performance 1" />
              <PhotoCard image="/src/assets/ICS Got Talent/Got Talent 2.PNG" name="Performance 2" />
              <PhotoCard image="/src/assets/ICS Got Talent/Got Talent 3.PNG" name="Performance 3" />
              <PhotoCard image="/src/assets/ICS Got Talent/Got Talent 4.PNG" name="Performance 4" />
            </div>
          </div>

          {/* Banquet 2025 Section */}
          <div className="space-y-4">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                Banquet 2025
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto lg:mx-0 rounded-full"></div>
            </div>
            {/* Portrait photo on left, two horizontal photos stacked on right */}
            <div className="grid grid-cols-2 gap-1 h-[400px] sm:h-[500px]">
              <PhotoCard image="/src/assets/Banquet 2025/Banquet 1.jpeg" name="Banquet Moment 1" />
              <div className="grid grid-rows-2 gap-1">
                <PhotoCard image="/src/assets/Banquet 2025/Banquet 2.jpeg" name="Banquet Moment 2" />
                <PhotoCard image="/src/assets/Banquet 2025/Banquet 3.jpeg" name="Banquet Moment 3" />
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: K-village + Med Art */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* K-village Kids Show Section */}
          <div className="space-y-4">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                K-village Kids Show
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto lg:mx-0 rounded-full"></div>
            </div>
            {/* 2 horizontal photos stacked vertically */}
            <div className="grid grid-rows-2 gap-1 h-[400px] sm:h-[500px]">
              <PhotoCard image="/src/assets/K-village Kids Show/Kids Show 1.PNG" name="Kids Show 1" />
              <PhotoCard image="/src/assets/K-village Kids Show/Kids Show 2.jpg" name="Kids Show 2" />
            </div>
          </div>

          {/* Med Art Show Section */}
          <div className="space-y-4">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                Med Art Show
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto lg:mx-0 rounded-full"></div>
            </div>
            {/* Single photo */}
            <div className="h-[400px] sm:h-[500px]">
              <PhotoCard image="/src/assets/Med Art Show/Med Art 1.png" name="Med Art Performance" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MusicPage;
