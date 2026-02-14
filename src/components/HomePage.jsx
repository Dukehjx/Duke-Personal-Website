import React from "react";
import { useNavigate } from "react-router-dom";
import { Dock, DockIcon } from "./magicui/dock";
import { 
  Home, 
  Computer, 
  Music, 
  Heart, 
  FileText, 
  User,
  Sparkles,
  Code,
  Brain,
  Keyboard
} from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();
  
  const navigationItems = [
    { icon: Home, label: "Home", id: "home", path: "/" },
    { icon: Computer, label: "Computer & I", id: "computer", path: "/computer" },
    { icon: Music, label: "Music & I", id: "music", path: "/music" },
    // { icon: Heart, label: "Hobbies & I", id: "hobbies", path: "/hobbies" },
    { icon: FileText, label: "CV", id: "cv", path: "/cv" },
    // { icon: User, label: "My Life", id: "life", path: "/life" },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Full Stack Developer",
      description: "Building modern web applications with React, Next.js, and cutting-edge technologies",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Exploring machine learning, LLMs, and intelligent automation systems",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Keyboard,
      title: "Cybersecurity",
      description: "International Cybersecurity Olympiad 2025 Bronze Medalist",
      color: "from-amber-400 to-orange-400"
    },
    {
      icon: Music,
      title: "Musician",
      description: "Performing at various shows and sharing music across platforms",
      color: "from-green-400 to-teal-400"
    }
  ];

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-slate-50 to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-gray-900">
      {/* Animated background elements - using pure CSS for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-slate-200/20 dark:bg-slate-700/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-200/20 dark:bg-gray-700/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-300/10 dark:bg-slate-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>

      {/* Top Navigation Bar */}
      <div className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 px-2 animate-in slide-in-from-top duration-500">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
          <Dock className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl border-white/40 dark:border-slate-700/40 shadow-lg">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <DockIcon
                  key={item.id}
                  className={
                    item.id === 'home' 
                      ? 'bg-blue-500/50 text-white' 
                      : 'bg-gray-200/30 dark:bg-gray-900/30 hover:bg-gray-300/40 dark:hover:bg-gray-800/40 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white'
                  }
                  onClick={() => handleNavClick(item.path)}
                >
                  <IconComponent size={16} className="sm:w-5 sm:h-5" />
                </DockIcon>
              );
            })}
          </Dock>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 w-full max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-full border border-white/40 dark:border-slate-700/40 mb-6 animate-in fade-in slide-in-from-top duration-700 delay-200">
            <Sparkles className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Welcome to my digital space</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom duration-700 delay-300 inline-block">
              Duke Hu
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-2 leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            Developer • AI Enthusiast • Cybersecurity Practitioner • Musician
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-700">
            <button
              onClick={() => navigate('/computer')}
              className="group px-6 py-3 bg-gradient-to-r from-slate-800 to-gray-900 hover:from-slate-900 hover:to-black text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-2">
                Explore My Work
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
              </span>
            </button>
            <button
              onClick={() => navigate('/cv')}
              className="px-6 py-3 bg-white/70 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl font-medium border border-slate-200 dark:border-slate-700 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              View Resume
            </button>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 border border-white/40 dark:border-slate-700/40 hover:border-white/60 dark:hover:border-slate-600/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-in {
          animation-fill-mode: both;
        }

        .fade-in {
          animation-name: fadeIn;
        }

        .slide-in-from-top {
          animation-name: slideInFromTop;
        }

        .slide-in-from-bottom {
          animation-name: slideInFromBottom;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .duration-200 { animation-duration: 200ms; }
        .duration-300 { animation-duration: 300ms; }
        .duration-500 { animation-duration: 500ms; }
        .duration-700 { animation-duration: 700ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
      `}</style>
    </div>
  );
};

export default HomePage;
