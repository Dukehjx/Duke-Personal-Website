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
      color: "from-[#174DE3] to-[#3EEDE7]"
    },
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Exploring machine learning, LLMs, and intelligent automation systems",
      color: "from-[#D00252] to-[#174DE3]"
    },
    {
      icon: Keyboard,
      title: "Cybersecurity",
      description: "International Cybersecurity Olympiad 2025 Bronze Medalist",
      color: "from-[#3EEDE7] to-[#174DE3]"
    },
    {
      icon: Music,
      title: "Musician",
      description: "Performing at various shows and sharing music across platforms",
      color: "from-[#174DE3] to-[#D00252]"
    }
  ];

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712]">
      {/* Advanced Animated SVG Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial gradient glow for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-[#174DE3]/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#D00252]/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        
        <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3EEDE7" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#174DE3" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#D00252" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#3EEDE7" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            
            <linearGradient id="line-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#D00252" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <pattern id="hex-pattern" width="60" height="103.923" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
               <path d="M30 0L60 17.32v34.64L30 69.28L0 51.96V17.32z" fill="none" stroke="url(#grid-grad)" strokeWidth="0.5"/>
               <path d="M30 103.923L60 86.602" fill="none" stroke="url(#grid-grad)" strokeWidth="0.5"/>
               <path d="M30 103.923L0 86.602" fill="none" stroke="url(#grid-grad)" strokeWidth="0.5"/>
            </pattern>
          </defs>

          {/* Hexagonal Background Pattern */}
          <rect width="100%" height="100%" fill="url(#hex-pattern)" />

          {/* Animated Data Paths */}
          <g filter="url(#glow)">
            <path 
              d="M -100,200 C 300,300 400,100 800,400 S 1200,300 1600,500" 
              fill="none" 
              stroke="url(#line-grad)" 
              strokeWidth="2" 
              className="animate-[dash_8s_linear_infinite]"
              strokeDasharray="200 800"
            />
            <path 
              d="M -100,600 C 400,500 500,800 900,600 S 1300,800 1800,500" 
              fill="none" 
              stroke="url(#line-grad-2)" 
              strokeWidth="1.5" 
              className="animate-[dash_12s_linear_infinite_reverse]"
              strokeDasharray="150 900"
            />
            <path 
              d="M 200,-100 C 300,300 100,500 400,900 S 600,1200 800,1600" 
              fill="none" 
              stroke="url(#line-grad)" 
              strokeWidth="2" 
              className="animate-[dash_10s_linear_infinite]"
              strokeDasharray="300 1000"
            />
          </g>

          {/* Floating abstract tech shapes */}
          <g className="animate-[spin_40s_linear_infinite]" style={{ transformOrigin: '50% 50%' }}>
            <circle cx="50%" cy="50%" r="20%" fill="none" stroke="#174DE3" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.5" />
            <circle cx="50%" cy="50%" r="28%" fill="none" stroke="#3EEDE7" strokeWidth="1" strokeDasharray="2 12" opacity="0.3" className="animate-[spin_30s_linear_infinite_reverse]" style={{ transformOrigin: '50% 50%' }} />
            <path d="M 50% 10% L 65% 30% L 65% 70% L 50% 90% L 35% 70% L 35% 30% Z" fill="none" stroke="#D00252" strokeWidth="0.5" opacity="0.2" className="animate-[pulse_4s_ease-in-out_infinite]" />
          </g>
        </svg>

        {/* Subtle gradient overlay to fade edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030712_80%)]" />
      </div>

      {/* Top Navigation Bar */}
      <div className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 px-2 animate-in slide-in-from-top duration-500">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
          <Dock className="bg-[#030712]/80 backdrop-blur-2xl border border-[#3EEDE7]/20 shadow-2xl shadow-[#174DE3]/20 ring-1 ring-white/5">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <DockIcon
                  key={item.id}
                  className={
                    item.id === 'home'
                      ? 'bg-gradient-to-br from-[#174DE3] to-[#3EEDE7] text-white shadow-lg shadow-[#174DE3]/40'
                      : 'bg-[#0d1117]/60 hover:bg-[#174DE3]/20 text-[#D7D7D7]/70 hover:text-[#3EEDE7] border border-[#3EEDE7]/10 hover:border-[#3EEDE7]/40'
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#030712]/80 backdrop-blur-md rounded-full border border-[#3EEDE7]/30 mb-6 animate-in fade-in slide-in-from-top duration-700 delay-200 shadow-[0_0_20px_rgba(62,237,231,0.15)]">
            <Sparkles className="w-4 h-4 text-[#3EEDE7] animate-pulse" />
            <span className="text-sm font-semibold tracking-widest uppercase text-[#3EEDE7]/80">Welcome to my digital space</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-[#3EEDE7] to-[#174DE3] bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom duration-700 delay-300 inline-block drop-shadow-sm">
              Duke Hu
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-[#D7D7D7]/80 max-w-3xl mx-auto px-2 leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-500 font-medium">
            Developer • AI Enthusiast • Cybersecurity Practitioner • Musician
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-700">
            <button
              onClick={() => navigate('/computer')}
              className="group px-6 py-3 bg-gradient-to-r from-[#D00252] to-[#174DE3] hover:from-[#e00262] hover:to-[#275de8] text-white rounded-xl font-medium shadow-lg shadow-[#D00252]/30 hover:shadow-xl hover:shadow-[#D00252]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="flex items-center gap-2">
                Explore My Work
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
              </span>
            </button>
            <button
              onClick={() => navigate('/cv')}
              className="px-6 py-3 bg-[#1a1a1a]/80 hover:bg-[#2a2a2a] text-[#D7D7D7] hover:text-white rounded-xl font-medium border-2 border-[#D7D7D7]/20 hover:border-[#3EEDE7]/50 backdrop-blur-sm shadow-md hover:shadow-[0_0_20px_rgba(62,237,231,0.2)] transition-all duration-300 hover:-translate-y-1"
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
                className="group relative bg-[#030712]/70 backdrop-blur-xl rounded-2xl p-6 border border-[#3EEDE7]/10 hover:border-[#3EEDE7]/40 shadow-lg hover:shadow-[0_0_30px_rgba(62,237,231,0.15)] transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                {/* Subtle corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl" style={{ background: 'radial-gradient(circle at top right, rgba(62,237,231,0.1), transparent 70%)' }} />
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#D7D7D7]/60 leading-relaxed">
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
