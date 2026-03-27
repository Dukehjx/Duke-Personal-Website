import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Dock, DockIcon } from "./magicui/dock";
import { BentoGrid, BentoCard } from "./magicui/bento-grid";
import Marquee from "./magicui/marquee";
import { IconCloud } from "./magicui/icon-cloud";
import { 
  Home, 
  Computer, 
  Music, 
  FileText, 
  Cpu,
  Database,
  Bot,
  Workflow,
  Wand2,
  Brain,
  Zap,
  Sparkles,
  Shield,
  Search,
  Sword,
  Mail
} from "lucide-react";

const ComputerPage = () => {
  const navigate = useNavigate();

  const neuralLines = useMemo(() => 
    Array.from({ length: 4 }, () => ({
      x1: `${Math.random() * 100}%`,
      y1: `${Math.random() * 100}%`,
      x2: `${Math.random() * 100}%`,
      y2: `${Math.random() * 100}%`,
      duration: `${3 + Math.random() * 3}s`,
      delay: `${Math.random() * 2}s`,
    })),
  []);

  const matrixLines = useMemo(() => 
    Array.from({ length: 5 }, (_, i) => ({
      left: `${10 + i * 20}%`,
      duration: `${5 + Math.random() * 5}s`,
      delay: `${Math.random() * 5}s`,
    })),
  []);

  const particles = useMemo(() => {
    const colors = ['#D00252', '#174DE3', '#D7D7D7'];
    return Array.from({ length: 12 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      background: colors[Math.floor(Math.random() * 3)],
      duration: `${3 + Math.random() * 4}s`,
      delay: `${Math.random() * 5}s`,
    }));
  }, []);
  
  const navigationItems = [
    { icon: Home, label: "Home", id: "home", path: "/" },
    { icon: Computer, label: "Computer & I", id: "computer", path: "/computer" },
    { icon: Music, label: "Music & I", id: "music", path: "/music" },
    // { icon: Heart, label: "Hobbies & I", id: "hobbies", path: "/hobbies" },
    { icon: FileText, label: "CV", id: "cv", path: "/cv" },
    // { icon: User, label: "My Life", id: "life", path: "/life" },
  ];

  const handleNavClick = (path) => {
    navigate(path);
  };

  const techStackRow1 = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Magic UI", logo: "https://magicui.design/icon.png" },
    { name: "Material UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" },
    { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" }
  ];

  const techStackRow2 = [
    { name: "Flask", logo: "https://icon.icepanel.io/Technology/svg/Flask.svg" },
    { name: "FastAPI", logo: "https://icon.icepanel.io/Technology/svg/FastAPI.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "ClickHouse", logo: "https://avatars.githubusercontent.com/u/54801242?s=200&v=4" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "DBeaver", logo: "https://dbeaver.io/wp-content/uploads/2015/09/beaver-head.png" }
  ];

  const techStackRow3 = [
    { name: "Alibaba Cloud", logo: "https://www.svgrepo.com/show/473520/alibabacloud.svg" },
    { name: "Vercel", logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vercel.svg" },
    { name: "GitHub Pages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
    { name: "Cloudflare", logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/cloudflare.svg" },
    { name: "Ubuntu", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-plain.svg" },
    { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "GitHub Desktop", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] relative overflow-hidden">
      {/* Advanced AI/Tech background */}
      <div className="absolute inset-0" style={{ contain: 'layout style paint' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0d0d0d]" />
        
        {/* Glowing orbs — GPU-composited with will-change */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[130px]" style={{ willChange: 'opacity, background-color', animation: 'colorRotate1 40s ease-in-out infinite, pulse 10s ease-in-out infinite' }} />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[110px]" style={{ willChange: 'opacity, background-color', animation: 'colorRotate2 40s ease-in-out infinite, pulse 15s ease-in-out infinite', animationDelay: '0s, 2s' }} />
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full mix-blend-screen filter blur-[90px]" style={{ willChange: 'opacity, background-color', animation: 'colorRotate3 40s ease-in-out infinite, pulse 20s ease-in-out infinite', animationDelay: '0s, 4s' }} />
        
        {/* Neural network connections (reduced 8→4) */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D00252" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#174DE3" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {neuralLines.map((line, i) => (
            <line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="url(#lineGradient1)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDuration: line.duration, animationDelay: line.delay }}
            />
          ))}
        </svg>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-[#D00252]/30 rotate-45" style={{ willChange: 'transform', animation: 'spin 20s linear infinite' }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-[#D7D7D7]/20" style={{ willChange: 'transform', animation: 'spin 15s linear infinite' }} />
        
        {/* Matrix-style falling code (reduced 10→5) */}
        <div className="absolute inset-0 opacity-5" style={{ contain: 'strict' }}>
          {matrixLines.map((line, i) => (
            <div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-transparent via-[#174DE3] to-transparent"
              style={{
                left: line.left,
                willChange: 'transform',
                animation: `matrixFall ${line.duration} linear infinite`,
                animationDelay: line.delay
              }}
            />
          ))}
        </div>
        
        {/* Data nodes/particles (reduced 30→12) */}
        <div className="absolute inset-0" style={{ contain: 'strict' }}>
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                top: p.top,
                left: p.left,
                background: p.background,
                willChange: 'opacity, transform',
                animation: `dataNode ${p.duration} infinite`,
                animationDelay: p.delay
              }}
            />
          ))}
        </div>
        
        {/* Scanline effect */}
        <div className="absolute inset-0 opacity-5" style={{ contain: 'strict' }}>
          <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#D00252] to-transparent" style={{ willChange: 'transform', animation: 'scanline 8s linear infinite' }} />
        </div>
      </div>

      {/* Noise texture overlay — static, no animation needed */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{ contain: 'strict', backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')" }} />
      
      {/* Top Navigation Bar */}
      <div className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 px-2">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
          <Dock className="bg-[#1a1a1a]/90 backdrop-blur-2xl border border-[#D00252]/30 shadow-2xl shadow-[#D00252]/20">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <DockIcon
                  key={item.id}
                  className={
                    item.id === 'computer'
                    ? 'bg-gradient-to-br from-[#D00252] to-[#174DE3] hover:from-[#e00262] hover:to-[#275de8] text-white shadow-lg shadow-[#D00252]/40 font-bold'
                    : 'bg-[#1a1a1a]/80 hover:bg-[#2a2a2a]/90 text-[#D7D7D7] hover:text-white border border-[#D7D7D7]/20 hover:border-[#D7D7D7]/40'
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
      <div className="relative px-2 sm:px-4 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
          {/* Page Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="relative inline-block mb-6">
              {/* Animated glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D00252] via-[#174DE3] to-[#D00252] rounded-full blur-xl opacity-60 animate-pulse" style={{ animationDuration: '3s' }} />
              
              <div className="relative inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a]/90 backdrop-blur-md rounded-full border-2 border-[#D00252]/50 shadow-lg">
                <Computer size={24} className="text-[#174DE3] animate-pulse" style={{ animationDuration: '2s' }} />
                <span className="text-base font-bold bg-gradient-to-r from-[#D00252] via-[#174DE3] to-[#D00252] bg-clip-text text-transparent">
                  Tech Journey
                </span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#D7D7D7] via-[#174DE3] to-[#D00252] bg-clip-text text-transparent animate-pulse" style={{ animationDuration: '4s' }}>
                Computer & I
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#D7D7D7]/80 max-w-3xl mx-auto px-2 leading-relaxed font-medium">
              My journey through the world of technology, AI, and digital innovation.
            </p>
          </div>

           {/* Full Stack Dev Tech Stack Marquee */}
           <div className="mb-12 sm:mb-16 md:mb-20">
           <div className="text-center sm:text-left mb-8 sm:mb-10 md:mb-12 px-2">
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#D7D7D7] via-[#174DE3] to-[#D00252] bg-clip-text text-transparent mb-3">
               Full Stack Dev Tech Stack
             </h2>
             <div className="w-28 h-1.5 bg-gradient-to-r from-[#D00252] to-[#174DE3] rounded-full mx-auto sm:mx-0 shadow-lg shadow-[#D00252]/30" />
           </div>
             
             <div className="space-y-6">
              {/* First Row */}
              <Marquee className="[--duration:30s]" pauseOnHover repeat={2}>
                {techStackRow1.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center mx-2 sm:mx-3 md:mx-4 group">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 overflow-hidden rounded-xl mb-2 sm:mb-3 border-2 border-[#174DE3]/40 bg-[#1a1a1a]/80 backdrop-blur-sm shadow-lg group-hover:shadow-xl group-hover:shadow-[#174DE3]/30 group-hover:border-[#174DE3]/60 transition-all duration-300">
                      <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-[#1a1a1a] to-[#174DE3]/20 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={tech.logo} 
                          alt={tech.name}
                          className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-center font-semibold text-white max-w-[70px] sm:max-w-[80px] md:max-w-[90px] leading-tight group-hover:text-[#174DE3] transition-colors duration-200">{tech.name}</span>
                  </div>
                ))}
              </Marquee>

              {/* Second Row - Reverse direction */}
              <Marquee className="[--duration:35s]" reverse pauseOnHover repeat={2}>
                {techStackRow2.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center mx-2 sm:mx-3 md:mx-4 group">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 overflow-hidden rounded-xl mb-2 sm:mb-3 border-2 border-[#D00252]/40 bg-[#1a1a1a]/80 backdrop-blur-sm shadow-lg group-hover:shadow-xl group-hover:shadow-[#D00252]/30 group-hover:border-[#D00252]/60 transition-all duration-300">
                      <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-[#1a1a1a] to-[#D00252]/20 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={tech.logo} 
                          alt={tech.name}
                          className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-center font-semibold text-white max-w-[70px] sm:max-w-[80px] md:max-w-[90px] leading-tight group-hover:text-[#D00252] transition-colors duration-200">{tech.name}</span>
                  </div>
                ))}
              </Marquee>

              {/* Third Row */}
              <Marquee className="[--duration:40s]" pauseOnHover repeat={2}>
                {techStackRow3.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center mx-2 sm:mx-3 md:mx-4 group">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 overflow-hidden rounded-xl mb-2 sm:mb-3 border-2 border-[#D7D7D7]/30 bg-[#1a1a1a]/80 backdrop-blur-sm shadow-lg group-hover:shadow-xl group-hover:shadow-[#D7D7D7]/20 group-hover:border-[#D7D7D7]/50 transition-all duration-300">
                      <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-[#1a1a1a] to-[#D7D7D7]/10 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={tech.logo} 
                          alt={tech.name}
                          className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-center font-semibold text-white max-w-[70px] sm:max-w-[80px] md:max-w-[90px] leading-tight group-hover:text-[#D7D7D7] transition-colors duration-200">{tech.name}</span>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>

          {/* AI App & Research Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center sm:text-left mb-8 sm:mb-10 md:mb-12 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#D7D7D7] via-[#D00252] to-[#174DE3] bg-clip-text text-transparent mb-3">
                AI App & Research
              </h2>
              <div className="w-28 h-1.5 bg-gradient-to-r from-[#D00252] to-[#174DE3] rounded-full mx-auto sm:mx-0 shadow-lg shadow-[#D00252]/30" />
            </div>
            
            <BentoGrid className="grid w-full auto-rows-[14rem] sm:auto-rows-[16rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {/* Agents Building */}
              <BentoCard
                name="Agents Building"
                className="relative col-span-1 group overflow-hidden rounded-2xl border-2 border-[#174DE3]/50 bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl hover:border-[#174DE3]/70 hover:shadow-xl hover:shadow-[#174DE3]/20 transition-all duration-300"
                background={
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#174DE3]/20 to-[#174DE3]/10" />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 flex gap-1 sm:gap-1.5 md:gap-2 opacity-70">
                      <img 
                        src="https://openai.com/favicon.ico" 
                        alt="GPT"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
                        loading="lazy"
                      />
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Qwen_logo.svg/330px-Qwen_logo.svg.png?_=20250327025131" 
                        alt="Qwen"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
                        loading="lazy"
                      />
                    </div>
                  </div>
                }
                Icon={Bot}
                description="Building intelligent agents with LLM models for automated workflows and intelligent decision making."
                cta="Explore Agents"
              />

              {/* Workflow Building */}
              <BentoCard
                name="Workflow Building"
                className="relative col-span-1 group overflow-hidden rounded-2xl border-2 border-[#D7D7D7]/40 bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl hover:border-[#D7D7D7]/60 hover:shadow-xl hover:shadow-[#D7D7D7]/10 transition-all duration-300"
                background={
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D7D7D7]/20 to-[#D7D7D7]/10" />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 opacity-70">
                      <img 
                        src="https://n8n.io/favicon.ico" 
                        alt="n8n"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
                        loading="lazy"
                      />
                    </div>
                  </div>
                }
                Icon={Workflow}
                description="Designing complex automation workflows using n8n for seamless data processing and task orchestration."
                cta="View Workflows"
              />

              {/* Vibe Coding */}
              <BentoCard
                name="Vibe Coding"
                className="relative col-span-1 group overflow-hidden rounded-2xl border-2 border-[#D00252]/50 bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl hover:border-[#D00252]/70 hover:shadow-xl hover:shadow-[#D00252]/20 transition-all duration-300"
                background={
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D00252]/20 to-[#D00252]/10" />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 flex gap-1 sm:gap-1.5 md:gap-2 opacity-70">
                      <img 
                        src="https://cursor.sh/favicon.ico" 
                        alt="Cursor"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
                        loading="lazy"
                      />
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/copilot-color.png" 
                        alt="Copilot"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
                        loading="lazy"
                      />
                      <img 
                        src="https://www.svgrepo.com/show/341819/firebase.svg" 
                        alt="Firebase"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        loading="lazy"
                      />
                    </div>
                  </div>
                }
                Icon={Wand2}
                description="Intensive and enhanced coding experience with leading AI coding IDEs for intelligent code assistance."
                cta="Code Smarter"
              />

              {/* ML/DL */}
              <BentoCard
                name="ML/DL"
                className="relative col-span-1 sm:col-span-2 group border-2 border-[#D00252]/50 bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl hover:border-[#D00252]/70 hover:shadow-xl hover:shadow-[#D00252]/20 transition-all duration-300"
                background={
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D00252]/20 to-[#D00252]/10" />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 flex gap-1 sm:gap-1.5 md:gap-2 opacity-70 flex-wrap">
                      <img 
                        src="https://pytorch.org/favicon.ico" 
                        alt="PyTorch"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
                        loading="lazy"
                      />
                      <img 
                        src="https://colab.research.google.com/img/colab_favicon_256px.png" 
                        alt="Google Colab"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
                        loading="lazy"
                      />
                      <img 
                        src="https://ollama.ai/public/ollama.png" 
                        alt="Ollama"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
                        loading="lazy"
                      />
                      <img 
                        src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" 
                        alt="HuggingFace"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        loading="lazy"
                      />
                    </div>
                  </div>
                }
                Icon={Brain}
                description="Deep learning and machine learning projects for model training and deployment."
                cta="Explore Models"
              />

              {/* API Usage */}
              <BentoCard
                name="API Usage"
                className="relative col-span-1 sm:col-span-1 group overflow-hidden rounded-2xl border-2 border-[#174DE3]/50 bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl hover:border-[#174DE3]/70 hover:shadow-xl hover:shadow-[#174DE3]/20 transition-all duration-300"
                background={
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#174DE3]/20 to-[#174DE3]/10" />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 flex gap-1 sm:gap-1.5 md:gap-2 opacity-70 flex-wrap">
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gemini-color.png" 
                        alt="Gemini"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
                        loading="lazy"
                      />
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude-color.png" 
                        alt="Claude"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
                        loading="lazy"
                      />
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/deepseek-color.png" 
                        alt="DeepSeek"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
                        loading="lazy"
                      />
                    </div>
                  </div>
                }
                Icon={Zap}
                description="Leveraging OpenAI SDK and various AI APIs to integrate powerful language models into applications."
                cta="View APIs"
              />

              {/* Others */}
              <BentoCard
                name="Others"
                className="relative col-span-1 sm:col-span-2 group border-2 border-[#D7D7D7]/40 bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl hover:border-[#D7D7D7]/60 hover:shadow-xl hover:shadow-[#D7D7D7]/10 transition-all duration-300"
                background={
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D7D7D7]/20 to-[#D7D7D7]/10" />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 flex gap-1 sm:gap-1.5 md:gap-2 opacity-70 flex-wrap">
                      <img 
                        src="https://openai.com/favicon.ico" 
                        alt="ChatGPT"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
                        loading="lazy"
                      />
                      <img 
                        src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" 
                        alt="Gemini"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        loading="lazy"
                      />
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/grok.png" 
                        alt="Grok"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
                        loading="lazy"
                      />
                    </div>
                  </div>
                }
                Icon={Sparkles}
                description="Prompt Engineering, Generative AI usage, and MCP tools for comprehensive AI ecosystem exploration."
                cta="Discover More"
              />
            </BentoGrid>
          </div>

          {/* Cybersecurity Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center sm:text-left mb-8 sm:mb-10 md:mb-12 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#D7D7D7] via-[#D00252] to-[#174DE3] bg-clip-text text-transparent mb-3">
                Cybersecurity
              </h2>
              <div className="w-28 h-1.5 bg-gradient-to-r from-[#D00252] to-[#174DE3] rounded-full mx-auto sm:mx-0 shadow-lg shadow-[#D00252]/30" />
            </div>
            
            <BentoGrid className="grid w-full auto-rows-[18rem] sm:auto-rows-[20rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {/* Red Team Platform */}
              <BentoCard
                name="Red Team Platform"
                className="relative col-span-1 group overflow-hidden rounded-2xl border-2 border-[#D00252]/60 bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl hover:border-[#D00252]/80 hover:shadow-xl hover:shadow-[#D00252]/30 transition-all duration-300"
                background={
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D00252]/20 to-[#D00252]/10" />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 flex flex-wrap gap-1 opacity-70 max-w-[120px] sm:max-w-[140px] md:max-w-[160px]">
                      {/* Kali Linux */}
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kali-dragon-icon.svg/1280px-Kali-dragon-icon.svg.png?_=20211125065834" alt="Kali" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" loading="lazy" />
                      </div>
                      {/* Metasploit */}
                      <div>
                        <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/metasploit-h33wivgvlvgtk3wmoejxq.png/metasploit-rkuireddk3p5vdgf5mil5.png?_a=DATAg1AAZAA0" alt="metasploit" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" loading="lazy" />
                      </div>
                      {/* Wireshark */}
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg" alt="Wireshark" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" loading="lazy" />
                      </div>
                      {/* Burp Suite */}
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/BurpSuite_Comunity_Edition.svg/640px-BurpSuite_Comunity_Edition.svg.png" alt="Burp Suite" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" loading="lazy" />
                      </div>
                    </div>
                  </div>
                }
                Icon={Shield}
                description="Comprehensive red team toolkit for penetration testing and security assessments."
                cta="Explore Red Team"
              />

              {/* Forensics & Cryptography */}
              <BentoCard
                name="Forensics & Cryptography"
                className="relative col-span-1 group overflow-hidden rounded-2xl border-2 border-[#174DE3]/50 bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl hover:border-[#174DE3]/70 hover:shadow-xl hover:shadow-[#174DE3]/20 transition-all duration-300"
                background={
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#174DE3]/20 to-[#174DE3]/10" />
                    <div className="absolute top-4 right-4 flex flex-wrap gap-1 opacity-70">
                      {/* Autopsy */}
                      <div>
                        <img src="https://avatars.githubusercontent.com/u/856501?v=4" alt="Autopsy" className="w-8 h-8" loading="lazy" />
                      </div>
                      {/* Volatility */}
                      <div>
                        <img src="https://miro.medium.com/1*Ini2Q3kb1xACFMILHrattg.jpeg" alt="Volatility" className="w-8 h-8" loading="lazy" />
                      </div>
                      {/* 010 Editor */}
                      <div>
                        <img src="https://w1.pngwing.com/pngs/839/178/png-transparent-text-editor-yellow-hex-editor-hexadecimal-editing-computer-software-source-code-editor-binary-file-plain-text-thumbnail.png" alt="010 Editor" className="w-8 h-8" loading="lazy" />
                      </div>
                      {/* ExifTool */}
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/ExifTool_logo.svg/1200px-ExifTool_logo.svg.png?20250306210924" alt="ExifTool" className="w-8 h-8" loading="lazy" />
                      </div>
                    </div>
                  </div>
                }
                Icon={Search}
                  description="Advanced digital forensics, cryptography tools and steganography tools"
              />

              {/* Offensive Security */}
              <BentoCard
                name="Offensive Security"
                className="relative col-span-1 group overflow-hidden rounded-2xl border-2 border-[#D00252]/50 bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl hover:border-[#D00252]/70 hover:shadow-xl hover:shadow-[#D00252]/20 transition-all duration-300"
                background={
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D00252]/20 to-[#D00252]/10" />
                    <div className="absolute top-4 right-4 flex flex-wrap gap-1 opacity-70">
                      {/* sqlmap */}
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Sqlmap_logo.png?20180709082002" alt="sqlmap" className="w-8 h-8" loading="lazy" />
                      </div>
                      {/* John the Ripper */}
                      <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWJDGaaaPKKzzNZaX_yaz4g9sVqH5d_vk5w&s" alt="John the Ripper" className="w-8 h-8" loading="lazy" />
                      </div>
                      {/* Hashcat */}
                      <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJzkDKpUyJ0aNjvFw4yH0DZGxfTqymkNilA&s" alt="Hashcat" className="w-8 h-8" loading="lazy" />
                      </div>
                      {/* GoBuster */}
                      <div>
                        <img src="https://www.kali.org/tools/gobuster/images/gobuster-logo.svg" alt="Gobuster" className="w-8 h-8" loading="lazy" />
                      </div>
                    </div>
                  </div>
                }
                Icon={Sword}
                description="Comprehensive offensive security arsenal including web application testing, binary exploitation, password cracking, and network enumeration tools."
                cta="Launch Attack"
              />

              {/* International Cybersecurity Olympiad 2025 - Custom Layout */}
              <div className="relative col-span-1 sm:col-span-2 lg:col-span-3 group overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl border-2 border-[#D00252]/50 hover:border-[#D00252]/70 shadow-xl hover:shadow-2xl hover:shadow-[#D00252]/30 transition-all duration-300">
                {/* Background */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D00252]/20 to-[#174DE3]/20" />
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 opacity-70 z-20">
                    {/* Medal */}
                    <div className="text-2xl sm:text-3xl md:text-4xl">🥉</div>
                    {/* Trophy */}
                    <div className="text-2xl sm:text-3xl md:text-4xl">🏆</div>
                  </div>
                  <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 text-[#D00252]/40 font-bold text-2xl sm:text-3xl md:text-4xl z-10">
                    2025
                  </div>
                </div>

                {/* Content Layout */}
                <div className="relative z-10 h-full flex flex-col lg:flex-row-reverse">
                  {/* Left side - Text content */}
                  <div className="lg:flex-[1.5] flex flex-col justify-between p-4 sm:p-5 md:p-6 lg:pl-8">
                    <div className="pointer-events-none transform-gpu flex flex-col gap-1 transition-all duration-300 group-hover:-translate-y-2">
                      <Shield className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 origin-left transform-gpu text-[#D7D7D7] transition-all duration-300 ease-in-out group-hover:scale-75" />
                      <h3 className="text-lg sm:text-xl font-semibold text-[#D7D7D7] leading-tight">
                        International Cybersecurity Olympiad 2025
                      </h3>
                      <p className="text-sm sm:text-base text-[#D7D7D7]/70 leading-relaxed">
                        🏆 Bronze Medal Winner at the International Cybersecurity Olympiad 2025
                      </p>
                    </div>

                    <div className="mt-4">
                      <button className="pointer-events-auto bg-neutral-800 dark:bg-neutral-100 text-white dark:text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors">
                        View Achievement
                      </button>
                    </div>
                  </div>

                  {/* Right side - Photo Marquee */}
                  <div className="lg:flex-[2.5] flex items-center justify-center p-2 sm:p-3 md:p-4 lg:pr-8 pt-0 lg:pt-4">
                    <div className="w-full h-full flex justify-center items-center min-h-[150px] sm:min-h-[180px] md:min-h-[200px] max-w-[700px]">
                      <Marquee className="[--duration:25s]" pauseOnHover>
                        {[
                          { src: "/ICO-2025/ICO2025-1.jpg", alt: "International Cybersecurity Olympiad 2025 - Award Ceremony" },
                          { src: "/ICO-2025/ICO2025-2.jpg", alt: "International Cybersecurity Olympiad 2025 - Team Photo" },
                          { src: "/ICO-2025/ICO2025-3.jpg", alt: "International Cybersecurity Olympiad 2025 - Competition Moment" },
                          { src: "/ICO-2025/ICO2025-4.jpg", alt: "International Cybersecurity Olympiad 2025 - Bronze Medal Achievement" }
                        ].map((photo, index) => (
                          <div key={index} className="mx-2 sm:mx-3">
                            <div className="relative w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-40 lg:w-64 lg:h-48 xl:w-72 xl:h-52 overflow-hidden rounded-xl shadow-xl">
                              <img 
                                src={photo.src} 
                                alt={photo.alt}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 rounded-xl ring-1 ring-black/5 pointer-events-none"></div>
                            </div>
                          </div>
                        ))}
                      </Marquee>
                    </div>
                  </div>
                </div>


                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
              </div>
            </BentoGrid>
          </div>

          {/* Other Computer Skills Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center sm:text-left mb-8 sm:mb-10 md:mb-12 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#D7D7D7] via-[#174DE3] to-[#D00252] bg-clip-text text-transparent mb-3">
                Other Computer Skills
              </h2>
              <div className="w-28 h-1.5 bg-gradient-to-r from-[#174DE3] to-[#D00252] rounded-full mx-auto sm:mx-0 shadow-lg shadow-[#174DE3]/30" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              {/* Icon Cloud */}
              <div className="flex justify-center lg:justify-end self-center">
                <div className="relative w-full max-w-md h-[360px] sm:h-[420px] md:h-[460px]">
                  <IconCloud
                    images={[
                      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
                      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
                      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                      "https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg",
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/74px-Google_Sheets_logo_%282014-2020%29.svg.png?20201024100414",
                      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Google_Slides_logo_%282014-2020%29.svg",
                      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
                      "https://upload.wikimedia.org/wikipedia/commons/e/e8/Microsoft_Office_Word_%282025%E2%80%93present%29.svg",
                      "https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_PowerPoint_%282025%E2%80%93present%29.svg",
                      "https://upload.wikimedia.org/wikipedia/commons/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg",
                      "https://cdn.simpleicons.org/assemblyscript/007AAC",
                      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                    ]}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col justify-center self-start space-y-5 sm:space-y-4">
                <div className="bg-[#1a1a1a]/80 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border-2 border-[#174DE3]/50 hover:border-[#174DE3]/70 hover:shadow-xl hover:shadow-[#174DE3]/20 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <Cpu size={20} className="text-[#174DE3] mr-2" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#D7D7D7]">
                      Programming Languages
                    </h3>
                  </div>
                  <div className="space-y-2 text-[#D7D7D7]/80">
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-[#174DE3] rounded-full mr-2"></span>
                      <strong>C++, Java, Python</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-[#1a1a1a]/80 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border-2 border-[#D00252]/50 hover:border-[#D00252]/70 hover:shadow-xl hover:shadow-[#D00252]/20 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <Database size={20} className="text-[#D00252] mr-2" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#D7D7D7]">
                      Office & Productivity
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#D7D7D7]/80">
                    <div>
                      <p className="font-medium mb-1">Google Workspace</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Microsoft Office</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a1a1a]/80 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border-2 border-[#D00252]/50 hover:border-[#D00252]/70 hover:shadow-xl hover:shadow-[#D00252]/20 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <Cpu size={20} className="text-[#D00252] mr-2" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#D7D7D7]">
                      Embedded Systems
                    </h3>
                  </div>
                  <p className="text-[#D7D7D7]/80 leading-relaxed">
                    Currently studying <strong>embedded systems programming</strong> with a focus on 
                    <strong> 8051 microcontroller (MCU)</strong> architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Showcase Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center sm:text-left mb-8 sm:mb-10 md:mb-12 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#D7D7D7] via-[#174DE3] to-[#D00252] bg-clip-text text-transparent mb-3">
                Project Showcase
              </h2>
              <div className="w-28 h-1.5 bg-gradient-to-r from-[#174DE3] to-[#D00252] rounded-full mx-auto sm:mx-0 shadow-lg shadow-[#174DE3]/30" />
            </div>

            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              {/* NeuroAegis */}
              <div className="group">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-start">
                  {/* Image Box on Left */}
                  <div className="lg:col-span-2 relative bg-[#1a1a1a]/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border-2 border-[#174DE3]/50 hover:border-[#174DE3]/70 hover:shadow-2xl hover:shadow-[#174DE3]/20 transition-all duration-300">
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src="/projects/neuroaegis.png" 
                        alt="NeuroAegis Project Screenshot"
                        className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  {/* Description on Right (Outside Box) */}
                  <div className="lg:col-span-1 space-y-6 flex flex-col justify-center">
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D7D7D7] mb-4">
                        NeuroAegis
                      </h3>
                      <p className="text-base sm:text-lg text-[#D7D7D7]/70 leading-relaxed mb-6">
                        AI-powered platform for Dementia and Alzheimer's Disease Detection and Rehabilitation.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-4 py-2 bg-[#174DE3]/20 text-[#174DE3] border border-[#174DE3]/40 text-sm sm:text-base rounded-full font-medium backdrop-blur-xl">AI/NLP</span>
                      <span className="px-4 py-2 bg-[#D00252]/20 text-[#D00252] border border-[#D00252]/40 text-sm sm:text-base rounded-full font-medium backdrop-blur-xl">Cognitive Health</span>
                      <span className="px-4 py-2 bg-[#D7D7D7]/20 text-[#D7D7D7] border border-[#D7D7D7]/40 text-sm sm:text-base rounded-full font-medium backdrop-blur-xl">Real-time</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="https://www.neuroaegis.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#D00252] to-[#174DE3] text-white text-base font-medium rounded-lg hover:from-[#e00262] hover:to-[#275de8] shadow-lg shadow-[#D00252]/30 hover:shadow-xl hover:shadow-[#D00252]/40 transition-all duration-200"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ShanghaiWalk */}
              <div className="group">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-start">
                  {/* Image Box on Left */}
                  <div className="lg:col-span-2 relative bg-[#1a1a1a]/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border-2 border-[#174DE3]/50 hover:border-[#174DE3]/70 hover:shadow-2xl hover:shadow-[#174DE3]/20 transition-all duration-300">
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src="/projects/shanghaiwalk.png" 
                        alt="ShanghaiWalk Project Screenshot"
                        className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  {/* Description on Right (Outside Box) */}
                  <div className="lg:col-span-1 space-y-6 flex flex-col justify-center">
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D7D7D7] mb-4">
                        ShanghaiWalk
                      </h3>
                      <p className="text-base sm:text-lg text-[#D7D7D7]/70 leading-relaxed mb-6">
                        A comprehensive cultural exploration platform showcasing Shanghainese culture, traditions, language, and history.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-4 py-2 bg-[#D00252]/20 text-[#D00252] border border-[#D00252]/40 text-sm sm:text-base rounded-full font-medium backdrop-blur-xl">Cultural</span>
                      <span className="px-4 py-2 bg-[#174DE3]/20 text-[#174DE3] border border-[#174DE3]/40 text-sm sm:text-base rounded-full font-medium backdrop-blur-xl">Language</span>
                      <span className="px-4 py-2 bg-[#D7D7D7]/20 text-[#D7D7D7] border border-[#D7D7D7]/40 text-sm sm:text-base rounded-full font-medium backdrop-blur-xl">Interactive</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="https://shanghaiwalk.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white text-base font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* AP Researcher */}
              <div className="group">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-start">
                  {/* Image Box on Left */}
                  <div className="lg:col-span-2 relative bg-[#1a1a1a]/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border-2 border-[#174DE3]/50 hover:border-[#174DE3]/70 hover:shadow-2xl hover:shadow-[#174DE3]/20 transition-all duration-300">
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src="/projects/ap-researcher.png" 
                        alt="AP Researcher Project Screenshot"
                        className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  {/* Description on Right (Outside Box) */}
                  <div className="lg:col-span-1 space-y-6 flex flex-col justify-center">
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D7D7D7] mb-4">
                        AP Researcher
                      </h3>
                      <p className="text-base sm:text-lg text-[#D7D7D7]/70 leading-relaxed mb-6">
                        A comprehensive platform designed for AP students and educators to publish their academic writings.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-4 py-2 bg-[#174DE3]/20 text-[#174DE3] border border-[#174DE3]/40 text-sm sm:text-base rounded-full font-medium backdrop-blur-xl">Education</span>
                      <span className="px-4 py-2 bg-[#D00252]/20 text-[#D00252] border border-[#D00252]/40 text-sm sm:text-base rounded-full font-medium backdrop-blur-xl">Research</span>
                      <span className="px-4 py-2 bg-[#D7D7D7]/20 text-[#D7D7D7] border border-[#D7D7D7]/40 text-sm sm:text-base rounded-full font-medium backdrop-blur-xl">Academic</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="https://ap-researcher.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white text-base font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* SoiMenu */}
              <div className="group">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-start">
                  {/* Image Box on Left */}
                  <div className="lg:col-span-2 relative bg-[#1a1a1a]/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border-2 border-[#174DE3]/50 hover:border-[#174DE3]/70 hover:shadow-2xl hover:shadow-[#174DE3]/20 transition-all duration-300">
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src="/projects/soimenu.png" 
                        alt="SoiMenu Project Screenshot"
                        className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  {/* Description on Right (Outside Box) */}
                  <div className="lg:col-span-1 space-y-6 flex flex-col justify-center">
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D7D7D7] mb-4">
                        SoiMenu
                      </h3>
                      <p className="text-base sm:text-lg text-[#D7D7D7]/70 leading-relaxed mb-6">
                        A modern online food menu platform for customers to order without language barriers. Display the dishes with clarity and detailed information.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-4 py-2 bg-[#D00252]/20 text-[#D00252] border border-[#D00252]/40 text-sm sm:text-base rounded-full font-medium backdrop-blur-xl">E-commerce</span>
                      <span className="px-4 py-2 bg-[#174DE3]/20 text-[#174DE3] border border-[#174DE3]/40 text-sm sm:text-base rounded-full font-medium backdrop-blur-xl">Multilingual</span>
                      <span className="px-4 py-2 bg-[#D7D7D7]/20 text-[#D7D7D7] border border-[#D7D7D7]/40 text-sm sm:text-base rounded-full font-medium backdrop-blur-xl">Community</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="https://online-ordering-website.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white text-base font-medium rounded-lg hover:bg-orange-700 transition-colors duration-200"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Public Matters */}
              <div className="group">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-start">
                  {/* Image Box on Left */}
                  <div className="lg:col-span-2 relative bg-[#1a1a1a]/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border-2 border-[#174DE3]/50 hover:border-[#174DE3]/70 hover:shadow-2xl hover:shadow-[#174DE3]/20 transition-all duration-300">
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src="/projects/public-matters.png" 
                        alt="Public Matters Project Screenshot"
                        className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  {/* Description on Right (Outside Box) */}
                  <div className="lg:col-span-1 space-y-6 flex flex-col justify-center">
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D7D7D7] mb-4">
                        Public Matters
                      </h3>
                      <p className="text-base sm:text-lg text-[#D7D7D7]/70 leading-relaxed mb-6">
                        A specialized platform designed to enhance transparency and accessibility in public governance.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-4 py-2 bg-[#174DE3]/20 text-[#174DE3] border border-[#174DE3]/40 text-sm sm:text-base rounded-full font-medium backdrop-blur-xl">Governance</span>
                      <span className="px-4 py-2 bg-[#D00252]/20 text-[#D00252] border border-[#D00252]/40 text-sm sm:text-base rounded-full font-medium backdrop-blur-xl">Transparency</span>
                      <span className="px-4 py-2 bg-[#D7D7D7]/20 text-[#D7D7D7] border border-[#D7D7D7]/40 text-sm sm:text-base rounded-full font-medium backdrop-blur-xl">Public Access</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="https://public-matters.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#D00252] to-[#174DE3] text-white text-base font-medium rounded-lg hover:from-[#e00262] hover:to-[#275de8] shadow-lg shadow-[#D00252]/30 hover:shadow-xl hover:shadow-[#D00252]/40 transition-all duration-200"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 sm:mt-20 md:mt-24 border-t border-[#D00252]/30">
            <div className="pt-8 sm:pt-12 pb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Left side - Social Links */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a 
                    href="https://github.com/Dukehjx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-4 py-2 bg-[#1a1a1a]/90 hover:bg-[#2a2a2a]/90 text-[#D7D7D7] border-2 border-[#D7D7D7]/30 hover:border-[#D7D7D7]/50 rounded-lg backdrop-blur-xl hover:shadow-xl hover:shadow-[#D7D7D7]/10 transition-all duration-200 group"
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
                    className="inline-flex items-center gap-3 px-4 py-2 bg-[#1a1a1a]/90 hover:bg-[#2a2a2a]/90 text-[#D7D7D7] border-2 border-[#D7D7D7]/30 hover:border-[#D7D7D7]/50 rounded-lg backdrop-blur-xl hover:shadow-xl hover:shadow-[#D7D7D7]/10 transition-all duration-200 group"
                  >
                    <svg 
                      className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" 
                      fill="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    </svg>
                    <span className="font-medium">X</span>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/junxi-hu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-4 py-2 bg-[#1a1a1a]/90 hover:bg-[#2a2a2a]/90 text-[#D7D7D7] border-2 border-[#D7D7D7]/30 hover:border-[#D7D7D7]/50 rounded-lg backdrop-blur-xl hover:shadow-xl hover:shadow-[#D7D7D7]/10 transition-all duration-200 group"
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
                    className="inline-flex items-center gap-3 px-4 py-2 bg-[#1a1a1a]/90 hover:bg-[#2a2a2a]/90 text-[#D7D7D7] border-2 border-[#D7D7D7]/30 hover:border-[#D7D7D7]/50 rounded-lg backdrop-blur-xl hover:shadow-xl hover:shadow-[#D7D7D7]/10 transition-all duration-200 group"
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
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#D00252] to-[#174DE3] hover:from-[#e00262] hover:to-[#275de8] text-white rounded-lg shadow-lg shadow-[#D00252]/30 hover:shadow-xl hover:shadow-[#D00252]/40 transition-all duration-200 group"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium">Get in Touch</span>
                  </a>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-8 pt-6 border-t border-[#D7D7D7]/20 text-center">
                <p className="text-sm text-[#D7D7D7]/60">
                  © 2025 Duke Hu. Built with React & Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerPage;
