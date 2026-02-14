import React from 'react';
import { Dock, DockIcon } from "./magicui/dock";
import {
  Home,
  Computer,
  Music,
  Heart,
  FileText,
  User,
  Mail
} from "lucide-react";

const MusicPage = ({ onNavigate }) => {
  const navigationItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: Computer, label: "Computer & I", id: "computer" },
    { icon: Music, label: "Music & I", id: "music" },
    // { icon: Heart, label: "Hobbies & I", id: "hobbies" },
    { icon: FileText, label: "CV", id: "cv" },
    // { icon: User, label: "My Life", id: "life" },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
  };
  const PhotoCard = ({ image, name, className = "" }) => (
    <div className={`relative overflow-hidden cursor-pointer group rounded-lg ${className}`}>
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg" />
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-purple-950 dark:to-pink-950 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184/0.05)_1px,transparent_0)] [background-size:24px_24px] pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }} />
      </div>

      {/* Top Navigation Bar */}
      <div className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 px-2">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
          <Dock className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl border-white/40 dark:border-slate-700/40 shadow-lg">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <DockIcon
                  key={item.id}
                  className={
                    item.id === 'music' 
                      ? 'bg-purple-500/50 text-white' 
                      : 'bg-gray-200/30 dark:bg-gray-900/30 hover:bg-gray-300/40 dark:hover:bg-gray-800/40 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white'
                  }
                  onClick={() => handleNavClick(item.id)}
                >
                  <IconComponent size={16} className="sm:w-5 sm:h-5" />
                </DockIcon>
              );
            })}
          </Dock>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto space-y-16 sm:space-y-20 pt-20 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-full border border-white/40 dark:border-slate-700/40 mb-4">
            <Music size={20} className="text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Musical Journey</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-900 via-pink-700 to-red-600 dark:from-purple-200 dark:via-pink-200 dark:to-red-200 bg-clip-text text-transparent">
              Music & Performance
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A collection of memorable moments from various music shows and performances I've attended
          </p>
        </div>

        {/* Performances Section */}
        <div className="space-y-10 sm:space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-900 to-purple-800 dark:from-white dark:to-purple-200 bg-clip-text text-transparent">
                Performances
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
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
              <PhotoCard image="/ICS Got Talent/Got Talent 1.jpg" name="Performance 1" />
              <PhotoCard image="/ICS Got Talent/Got Talent 2.jpg" name="Performance 2" />
              <PhotoCard image="/ICS Got Talent/Got Talent 3.jpg" name="Performance 3" />
              <PhotoCard image="/ICS Got Talent/Got Talent 4.jpg" name="Performance 4" />
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
              <PhotoCard image="/Banquet 2025/Banquet 1.jpeg" name="Banquet Moment 1" />
              <div className="grid grid-rows-2 gap-1">
                <PhotoCard image="/Banquet 2025/Banquet 2.jpeg" name="Banquet Moment 2" />
                <PhotoCard image="/Banquet 2025/Banquet 3.jpeg" name="Banquet Moment 3" />
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
              <PhotoCard image="/K-village Kids Show/Kids Show 1.jpg" name="Kids Show 1" />
              <PhotoCard image="/K-village Kids Show/Kids Show 2.jpg" name="Kids Show 2" />
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
              <PhotoCard image="/Med Art Show/Med Art 1.jpg" name="Med Art Performance" />
            </div>
          </div>
        </div>
        </div>

        {/* Social Media Section */}
        <div className="space-y-10 sm:space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
                Social Media
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            
            {/* Bilibili */}
            <a 
              href="https://space.bilibili.com/1878416700?spm_id_from=333.1007.0.0"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-2xl p-6 border border-white/40 dark:border-slate-700/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A1D6]/5 to-[#FB7299]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex flex-col items-center space-y-4">
                  {/* Bilibili Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00A1D6] to-[#FB7299] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-[#00A1D6] dark:group-hover:text-[#FB7299] transition-colors duration-200">
                      Bilibili
                    </h3>
                    <p className="text-[#00A1D6] dark:text-[#FB7299] font-semibold">
                      Dukehjx
                    </p>
                  </div>
                </div>
              </div>
            </a>

            {/* YouTube */}
            <a 
              href="https://www.youtube.com/@dukeh0111"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-2xl p-6 border border-white/40 dark:border-slate-700/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex flex-col items-center space-y-4">
                  {/* YouTube Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">
                      YouTube
                    </h3>
                    <p className="text-red-600 dark:text-red-400 font-semibold">
                      Duke Hu
                    </p>
                  </div>
                </div>
              </div>
            </a>

            {/* Douyin */}
            <a 
              href="https://www.douyin.com/user/MS4wLjABAAAAAsiWcyLVs2g-NBREDArnZwoJDSg6bnS9g9MmNv1MapQlYRXbU_HdsakxaMV2x5UJ?from_tab_name=main"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-2xl p-6 border border-white/40 dark:border-slate-700/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-gray-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex flex-col items-center space-y-4">
                  {/* Douyin/TikTok Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-black to-gray-800 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" fill="#EE1D52"/>
                      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" fill="#69C9D0"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200">
                      Douyin
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 font-semibold">
                      dkh111.
                    </p>
                  </div>
                </div>
              </div>
            </a>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 sm:mt-20 md:mt-24 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="pt-8 sm:pt-12 pb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Left side - Social Links */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a 
                  href="https://github.com/Dukehjx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors duration-200 group"
                >
                  <svg 
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="font-medium">GitHub</span>
                </a>
                
                <a 
                  href="https://x.com/DukeHu0111" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2 bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black rounded-lg transition-colors duration-200 group"
                >
                  <svg 
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                  <span className="font-medium">Twitter</span>
                </a>

                <a 
                  href="https://www.linkedin.com/in/junxi-hu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2 bg-[#0077B5] hover:bg-[#006399] text-white rounded-lg transition-colors duration-200 group"
                >
                  <svg 
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="font-medium">LinkedIn</span>
                </a>

                <a 
                  href="https://www.facebook.com/duke.hu.2025/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-lg transition-colors duration-200 group"
                >
                  <svg 
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="font-medium">Facebook</span>
                </a>
              </div>

              {/* Right side - Get in Touch Button */}
              <div className="flex items-center gap-3">
                <a 
                  href="mailto:hjxduke080111@gmail.com" 
                  className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">Get in Touch</span>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-6 border-t border-gray-200/30 dark:border-gray-700/30 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2025 Duke Hu. Built with React & Tailwind CSS.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MusicPage;
