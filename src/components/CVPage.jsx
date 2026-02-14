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
  Mail,
  Phone,
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
  Users,
  Code,
  Trophy,
  BookOpen,
  Target
} from "lucide-react";

const CVPage = () => {
  const navigate = useNavigate();
  
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

  const education = {
    school: "International Community School Bangkok",
    period: "2022 - Present",
    gpa: { unweighted: "3.92", weighted: "4.34" },
    apCourses: [
      { name: "Microeconomics", score: "5", note: "Self-study" },
      { name: "Macroeconomics", score: "5", note: "Self-study" },
      { name: "Pre-Calculus", score: "5", note: "Self-study" },
      { name: "Mandarin", score: "5", note: "Self-study" },
      { name: "Computer Science Principles", score: "4" },
      { name: "World History", score: "4" },
      { name: "Statistics", score: "4" },
      { name: "Calculus BC", score: "5" },
      { name: "Physics 1", score: "5" },
      { name: "Computer Science A", score: "5" },
      { name: "English Lang", score: "5" },
      { name: "Environmental Science", score: "5" },
      { name: "Comparative Government", score: "4" },
    ],
    currentAP: ["Chemistry", "Biology", "Physics 2", "English Lit", "Music Theory", "Psychology"],
    standardizedTests: {
      sat: "1550 (RW: 760, Math: 790)",
      duolingo: "N/A"
    }
  };

  const futureEducation = {
    school: "Northwestern University",
    period: "2026 - 2030",
    degree: "B.S. Computer Science",
    certificate: "Kellogg Certificate in Managerial Analytics (Expected)"
  };

  const leadership = [
    {
      title: "NeuroAegis",
      role: "Team Leader & Full-stack Website Developer",
      period: "2025 - Present",
      highlights: [
        "Developed full-stack NeuroAegis website using Whisper AI & GPT-5 for dementia detection and rehabilitation.",
        "Led 4-member team; Integrated 7+ cognitive games, quiz assessments, and research hub; Implemented 13 language support, real-time feedback, and accessibility features.",
        "Raised ~$5K; reached 3K+ users; partnered with local nursing and elderly centers; open-sourced on GitHub."
      ]
    },
    {
      title: "Capstone Project",
      role: "Project Founder",
      period: "2025 - Present",
      highlights: [
        "Surveyed local restaurants and customers to identify language and cultural barriers in menu ordering.",
        "Developed multilingual menu platform (SoiMenu) supporting 5 languages (TH/EN/ZH/KR/JP) with optimized UI for accessibility and clarity."
      ]
    },
    {
      title: "ShanghaiWalk",
      role: "Planner, Co-founder & Technology Manager",
      period: "2025 - Present",
      highlights: [
        "Initiative preserving and promoting Shanghainese culture and language.",
        "Developed ShanghaiWalk website showcasing cultural history, team profiles, and event plans; Built event registration system; Produced 30+ AI art pieces for cultural merchandise."
      ]
    },
    {
      title: "Academic Tutoring & Education Platforms",
      role: "Founder & Leader",
      period: "2024 - Present",
      highlights: [
        "Created a '90 Days to USACO Gold' online program with tutorials, code examples, and algorithm guides; 5K+ views on Rednote and GitHub resource sharing.",
        "Led development of AP Researcher website for AP Seminar/Research students",
        "Independently developed Public Matters website for sharing public events and insights"
      ]
    },
    {
      title: "AI Club",
      role: "Founder & President",
      period: "2025 - Present",
      highlights: [
        "Founded school's first AI club to teach middle and high school students to apply tools (LLM's, ML/DL, MCP's)",
        "Recruited 30+ members, organized workshops, mentored researches; Instagram account (100+ followers) to share AI news and student-authored content."
      ]
    },
    {
      title: "ICS Carnival Point System Design",
      role: "Committee leader",
      period: "2025",
      highlights: [
        "Led design of a probability-based points system for school carnival games to boost engagement and sales.",
        "Created data-collection form and prize model using math and psychology principles; managed booth check-ins and prize exchanges for 100+ students"
      ]
    }
  ];

  const academics = [
    {
      title: "Pioneer Academics",
      role: "Researcher & Advisory Board",
      period: "2025 Summer",
      description: "Independent research paper: 'Cross-Lingual Structural Priming in Chinese → English MT: Effects on Syntax and Translation Quality'; ~5000 words; working on publications. Pioneer Student Council, co-hosted 5+ online sessions and workshops."
    },
    {
      title: "Hangzhou Goodscity Culture & Technology Co. Ltd",
      role: "Intern",
      period: "2025 Summer",
      description: "Built and deployed full-stack data automation and visualization (n8n, ClickHouse, Flask, Docker); automated ETL, created 7 dashboards, used OpenAI for data enrichment, and optimized query performance to improve system responsiveness"
    },
    {
      title: "Carnegie Mellon University Summer Session",
      period: "2024 Summer",
      description: "15-112 Fundamentals of Programming (4 college credits) • 82-183 AI for humanities (3 college credits)"
    },
    {
      title: "Johns Hopkins University Pre-college Program",
      period: "2023 Summer",
      description: "AS.020.120 Intro to Laboratory Research Course (1 college credit)"
    },
    {
      title: "Stanford ULO Fall 2025 term",
      period: "2025 Fall",
      description: "XM 511 Linear Algebra Course (3 college units, final grade: A)"
    }
  ];

  const interests = [
    {
      title: "Duke Drum",
      role: "Individual",
      period: "2022 - Present",
      highlights: [
        "Composed, transcribed, and adapted 100+ drum notes; Recorded, edited, and uploaded productions on TikTok, Bilibili, and YouTube; Projected to release 100+ videos; 100k+ views.",
        "Led Jellyfish Jam Band performing 25+ drum pieces across school and community events for 700+ attendees.",
        "Arranged and performed original pieces for school banquet, mall art show, and kids' charity concert.",
        "Directed and performed in ICS Got Talent (200+ audience); created tribute video for graduating seniors."
      ]
    },
    {
      title: "Entrepreneurial Ventures",
      role: "Founder & Leader",
      period: "2022 - Present",
      highlights: [
        "Founded ventures in collectibles and merchandise resale across Japan, Thailand, and China.",
        "Generated $27K+ revenue & $9K+ profit through pricing, negotiation, logistics & market analysis.",
        "Built 200+ member TikTok & WeChat community; posted content (80K+ views) to drive engagement & sales.",
        "Led 3-member team to design and sell custom mystery sports card packs at school fair, raised $200."
      ]
    }
  ];

  const awards = [
    { name: "American Mathematics Competitions 12A top 5% (Thailand #4)", level: "International Level", year: "2025" },
    { name: "American Invitational Mathematics Examination (AIME) 10 points", level: "International Level", year: "2025" },
    { name: "MIT Global AI Hackathon Certificate of Participation", level: "International Level", year: "2025" },
    { name: "USACO Gold Division", level: "International Level", year: "2025" },
    { name: "International Cybersecurity Olympiad 2025 Bronze", level: "International Level", year: "2025" },
    { name: "2025 Vanda National Junior Science Olympiad Gold Medal (Global #25; Thailand #2)", level: "International Level", year: "2025" },
    { name: "John Locke Essay Competition High Commendation", level: "International Level", year: "2025" },
    { name: "AP Scholar with Distinction (twice)", level: "International Level", year: "2024 - 2025" },
    { name: "AP International Diploma", level: "International Level", year: "2025" },
  ];

  const computationalSkills = [
    {
      category: "AI tools applications",
      skills: "MCP tools, AI Agents, ChatGPT, Gemini; Machine Learning, Deep Learning, LLM Fine-tuning; Cursor AI, Copilot, Claude Code"
    },
    {
      category: "Full-stack development",
      skills: "Frontend (React, Next), backend (Flask, FastAPI, Django, Node.js), database management (MongoDB, MySQL, Clickhouse, PostgreSQL), website deployment (nginx, Docker), API testing (Postman)"
    },
    {
      category: "Programming Languages",
      skills: "Proficient in Python, Java, C++; Intermediate in Javascript and Typescript"
    },
    {
      category: "Cybersecurity Skills",
      skills: "Proficient in Kali Linux System, Cryptography, Steganography, Web Penetration & Exploitation, Binary Exploit, Digital Forensics, Cracking"
    },
    {
      category: "Computer skills",
      skills: "Proficient in using Google Docs, Sheets, Slides, Forms, Microsoft Docs, Excel, PPT, Canva, Github, Linux systems (Ubuntu and Fedora), Pandas, n8n workflows"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0e1a] overflow-hidden">
      {/* Dynamic gradient background with tech feel */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#161823] via-[#0a1628] to-[#000811]" />
        
        {/* Floating orbs with modern glow effects */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#3EEDE7] rounded-full mix-blend-normal filter blur-[120px] opacity-20 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#053154] rounded-full mix-blend-normal filter blur-[100px] opacity-30 animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[#3EEDE7] rounded-full mix-blend-normal filter blur-[90px] opacity-15 animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
        
        {/* Futuristic geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#3EEDE7]/10 rotate-45 rounded-lg animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-[#3EEDE7]/20 rounded-full animate-ping" style={{ animationDuration: '15s' }} />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-[#053154]/30 rotate-12 animate-pulse" style={{ animationDuration: '6s' }} />
        
        {/* Scanning line effect for tech feel */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#3EEDE7] to-transparent animate-scan" />
        </div>
        
        {/* Particle dots for depth */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#3EEDE7] rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${3 + Math.random() * 5}s infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Subtle noise texture overlay for depth */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>

      {/* Top Navigation Bar */}
      <div className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 px-2">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
          <Dock className="bg-[#0a0e1a]/80 backdrop-blur-2xl border border-[#3EEDE7]/30 shadow-xl shadow-[#3EEDE7]/20">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <DockIcon
                  key={item.id}
                  className={
                    item.id === 'cv'
                    ? 'bg-gradient-to-br from-[#3EEDE7] to-[#2dd4ce] hover:from-[#2dd4ce] hover:to-[#3EEDE7] text-[#0a0e1a] shadow-lg shadow-[#3EEDE7]/40 font-bold'
                    : 'bg-[#053154]/60 hover:bg-[#053154]/80 text-[#3EEDE7]/80 hover:text-[#3EEDE7] border border-[#3EEDE7]/10 hover:border-[#3EEDE7]/30'
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
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="relative inline-block mb-6 rounded-3xl overflow-hidden group">
              {/* Animated border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#3EEDE7] via-[#053154] to-[#3EEDE7] rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" style={{ animationDuration: '3s' }} />
              
              <div className="relative bg-gradient-to-br from-[#0a1628]/95 to-[#000811]/95 backdrop-blur-xl p-8 sm:p-10 md:p-12 border border-[#3EEDE7]/30 rounded-3xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
                  <span className="bg-gradient-to-r from-white via-[#3EEDE7] to-white bg-clip-text text-transparent animate-pulse" style={{ animationDuration: '4s' }}>
                    Junxi (Duke) Hu
                  </span>
                </h1>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base md:text-lg flex-wrap">
                  <div className="flex items-center gap-2 group/item">
                    <div className="p-2 rounded-lg bg-[#3EEDE7]/10 border border-[#3EEDE7]/30 group-hover/item:bg-[#3EEDE7]/20 transition-all duration-300">
                      <Phone size={18} className="text-[#3EEDE7]" />
                    </div>
                    <span className="text-white/80 group-hover/item:text-[#3EEDE7] transition-colors duration-200">+66 0642157590</span>
                  </div>
                  <div className="flex items-center gap-2 group/item">
                    <div className="p-2 rounded-lg bg-[#3EEDE7]/10 border border-[#3EEDE7]/30 group-hover/item:bg-[#3EEDE7]/20 transition-all duration-300">
                      <Mail size={18} className="text-[#3EEDE7]" />
                    </div>
                    <a href="mailto:hjxduke080111@gmail.com" className="text-white/80 hover:text-[#3EEDE7] transition-colors duration-200">
                      hjxduke080111@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Background Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-8 sm:mb-10 group">
              <div className="relative p-3 rounded-xl bg-gradient-to-br from-[#3EEDE7]/20 to-[#053154]/20 border border-[#3EEDE7]/40 group-hover:border-[#3EEDE7]/60 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3EEDE7]/0 via-[#3EEDE7]/20 to-[#3EEDE7]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <GraduationCap size={28} className="relative text-[#3EEDE7]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-white via-[#3EEDE7] to-white bg-clip-text text-transparent">
                  Education Background
                </span>
              </h2>
            </div>
            
            {/* International Community School Bangkok */}
            <div className="relative bg-gradient-to-br from-[#0a1628]/80 to-[#000811]/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-[#3EEDE7]/30 hover:border-[#3EEDE7]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#3EEDE7]/20 mb-6 group">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#3EEDE7]/30 rounded-tl-3xl group-hover:border-[#3EEDE7]/60 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#3EEDE7]/30 rounded-br-3xl group-hover:border-[#3EEDE7]/60 transition-all duration-300" />
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#3EEDE7]/20 pb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#3EEDE7]">{education.school}</h3>
                  <span className="text-base sm:text-lg text-white/80 font-medium">{education.period}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#161823]/40 rounded-xl p-4 border border-[#3EEDE7]/20">
                    <p className="text-sm font-semibold text-[#3EEDE7]/70 mb-2">GPA</p>
                    <p className="text-lg font-bold text-white">Unweighted: {education.gpa.unweighted}</p>
                    <p className="text-lg font-bold text-white">Weighted: {education.gpa.weighted}</p>
                  </div>
                  <div className="bg-[#161823]/40 rounded-xl p-4 border border-[#3EEDE7]/20">
                    <p className="text-sm font-semibold text-[#3EEDE7]/70 mb-2">Standardized Tests</p>
                    <p className="text-base font-medium text-white">SAT: {education.standardizedTests.sat}</p>
                  </div>
                </div>

                <div>
                  <p className="text-lg font-semibold text-white mb-3">AP Courses</p>
                  <div className="flex flex-wrap gap-2">
                    {education.apCourses.map((course, index) => (
                      <div key={index} className="inline-flex items-center gap-2 px-3 py-2 bg-[#3EEDE7]/10 border border-[#3EEDE7]/30 text-[#3EEDE7] rounded-full text-sm font-medium hover:bg-[#3EEDE7]/20 transition-all duration-200">
                        <span>{course.name}</span>
                        <span className="font-bold">({course.score})</span>
                        {course.note && <span className="text-xs opacity-75">• {course.note}</span>}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-lg font-semibold text-white mb-3">Current AP Courses</p>
                  <div className="flex flex-wrap gap-2">
                    {education.currentAP.map((course, index) => (
                      <span key={index} className="px-3 py-2 bg-[#053154]/50 border border-[#3EEDE7]/30 text-white rounded-full text-sm font-medium hover:bg-[#053154]/70 transition-all duration-200">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Northwestern University */}
            <div className="relative bg-gradient-to-br from-[#0a1628]/80 to-[#000811]/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-[#3EEDE7]/30 hover:border-[#3EEDE7]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#3EEDE7]/20 group">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#3EEDE7]/30 rounded-tl-3xl group-hover:border-[#3EEDE7]/60 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#3EEDE7]/30 rounded-br-3xl group-hover:border-[#3EEDE7]/60 transition-all duration-300" />
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#3EEDE7]/20 pb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#3EEDE7]">{futureEducation.school}</h3>
                  <span className="text-base sm:text-lg text-white/80 font-medium">{futureEducation.period}</span>
                </div>
                <div className="space-y-2">
                  <p className="text-base text-white">
                    <span className="font-semibold text-[#3EEDE7]/70">Degree:</span> {futureEducation.degree}
                  </p>
                  <p className="text-base text-white">
                    <span className="font-semibold text-[#3EEDE7]/70">Certificate:</span> {futureEducation.certificate}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Community & Leadership Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-8 sm:mb-10 group">
              <div className="relative p-3 rounded-xl bg-gradient-to-br from-[#3EEDE7]/20 to-[#053154]/20 border border-[#3EEDE7]/40 group-hover:border-[#3EEDE7]/60 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3EEDE7]/0 via-[#3EEDE7]/20 to-[#3EEDE7]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Users size={28} className="relative text-[#3EEDE7]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-white via-[#3EEDE7] to-white bg-clip-text text-transparent">
                  Community & Leadership
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {leadership.map((item, index) => (
                <div key={index} className="relative bg-gradient-to-br from-[#0a1628]/80 to-[#000811]/80 backdrop-blur-xl rounded-2xl p-6 border border-[#3EEDE7]/30 hover:border-[#3EEDE7]/50 hover:shadow-xl hover:shadow-[#3EEDE7]/20 transition-all duration-300">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#3EEDE7] mb-1">{item.title}</h3>
                      <p className="text-base text-white/80 font-medium mb-1">{item.role}</p>
                      <p className="text-sm text-white/60">{item.period}</p>
                    </div>
                    
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm text-white/90">
                          <Target size={16} className="text-[#3EEDE7] mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academics & Internship Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-8 sm:mb-10 group">
              <div className="relative p-3 rounded-xl bg-gradient-to-br from-[#3EEDE7]/20 to-[#053154]/20 border border-[#3EEDE7]/40 group-hover:border-[#3EEDE7]/60 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3EEDE7]/0 via-[#3EEDE7]/20 to-[#3EEDE7]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <BookOpen size={28} className="relative text-[#3EEDE7]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-white via-[#3EEDE7] to-white bg-clip-text text-transparent">
                  Academics & Internship
                </span>
              </h2>
            </div>
            
            <div className="space-y-4">
              {academics.map((item, index) => (
                <div key={index} className="relative bg-gradient-to-br from-[#0a1628]/80 to-[#000811]/80 backdrop-blur-xl rounded-xl p-6 border border-[#3EEDE7]/30 hover:border-[#3EEDE7]/50 hover:shadow-lg hover:shadow-[#3EEDE7]/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-[#3EEDE7]">{item.title}</h3>
                      {item.role && <p className="text-base text-white/80 font-medium">{item.role}</p>}
                    </div>
                    <span className="text-sm text-white/60 font-medium">{item.period}</span>
                  </div>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interests Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-8 sm:mb-10 group">
              <div className="relative p-3 rounded-xl bg-gradient-to-br from-[#3EEDE7]/20 to-[#053154]/20 border border-[#3EEDE7]/40 group-hover:border-[#3EEDE7]/60 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3EEDE7]/0 via-[#3EEDE7]/20 to-[#3EEDE7]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Heart size={28} className="relative text-[#3EEDE7]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-white via-[#3EEDE7] to-white bg-clip-text text-transparent">
                  Interests
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {interests.map((item, index) => (
                <div key={index} className="relative bg-gradient-to-br from-[#0a1628]/80 to-[#000811]/80 backdrop-blur-xl rounded-2xl p-6 border border-[#3EEDE7]/30 hover:border-[#3EEDE7]/50 hover:shadow-xl hover:shadow-[#3EEDE7]/20 transition-all duration-300">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#3EEDE7] mb-1">{item.title}</h3>
                      <p className="text-base text-white/80 font-medium mb-1">{item.role}</p>
                      <p className="text-sm text-white/60">{item.period}</p>
                    </div>
                    
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm text-white/90">
                          <Target size={16} className="text-[#3EEDE7] mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Honors Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-8 sm:mb-10 group">
              <div className="relative p-3 rounded-xl bg-gradient-to-br from-[#3EEDE7]/20 to-[#053154]/20 border border-[#3EEDE7]/40 group-hover:border-[#3EEDE7]/60 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3EEDE7]/0 via-[#3EEDE7]/20 to-[#3EEDE7]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Trophy size={28} className="relative text-[#3EEDE7]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-white via-[#3EEDE7] to-white bg-clip-text text-transparent">
                  Awards & Honors
                </span>
              </h2>
            </div>
            
            <div className="relative bg-gradient-to-br from-[#0a1628]/80 to-[#000811]/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-[#3EEDE7]/30">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {awards.map((award, index) => (
                  <div key={index} className="bg-[#161823]/40 rounded-xl p-4 border border-[#3EEDE7]/30 hover:border-[#3EEDE7]/50 hover:shadow-md hover:shadow-[#3EEDE7]/10 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <Award size={20} className="text-[#3EEDE7] mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-white mb-1 leading-tight">{award.name}</h3>
                        <p className="text-xs text-white/60 mb-1">{award.level}</p>
                        <p className="text-xs text-[#3EEDE7]/80 font-medium">{award.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Computational Skills Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-8 sm:mb-10 group">
              <div className="relative p-3 rounded-xl bg-gradient-to-br from-[#3EEDE7]/20 to-[#053154]/20 border border-[#3EEDE7]/40 group-hover:border-[#3EEDE7]/60 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3EEDE7]/0 via-[#3EEDE7]/20 to-[#3EEDE7]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Code size={28} className="relative text-[#3EEDE7]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-white via-[#3EEDE7] to-white bg-clip-text text-transparent">
                  Computational Skills
                </span>
              </h2>
            </div>
            
            <div className="relative bg-gradient-to-br from-[#0a1628]/80 to-[#000811]/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-[#3EEDE7]/30">
              <div className="space-y-6">
                {computationalSkills.map((skill, index) => (
                  <div key={index} className="bg-[#161823]/40 rounded-xl p-5 border border-[#3EEDE7]/20 hover:border-[#3EEDE7]/40 transition-all duration-300">
                    <h3 className="text-lg font-bold text-[#3EEDE7] mb-3">{skill.category}</h3>
                    <p className="text-base text-white/90 leading-relaxed">{skill.skills}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 sm:mt-20 md:mt-24 border-t border-[#3EEDE7]/20">
            <div className="pt-8 sm:pt-12 pb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Left side - Social Links */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a 
                    href="https://github.com/Dukehjx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-4 py-2 bg-[#161823]/50 hover:bg-[#161823]/70 text-[#3EEDE7] border border-[#3EEDE7]/30 rounded-lg transition-all duration-200 group"
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
                    className="inline-flex items-center gap-3 px-4 py-2 bg-[#161823]/50 hover:bg-[#161823]/70 text-[#3EEDE7] border border-[#3EEDE7]/30 rounded-lg transition-all duration-200 group"
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
                    className="inline-flex items-center gap-3 px-4 py-2 bg-[#161823]/50 hover:bg-[#161823]/70 text-[#3EEDE7] border border-[#3EEDE7]/30 rounded-lg transition-all duration-200 group"
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
                    className="inline-flex items-center gap-3 px-4 py-2 bg-[#161823]/50 hover:bg-[#161823]/70 text-[#3EEDE7] border border-[#3EEDE7]/30 rounded-lg transition-all duration-200 group"
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
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#3EEDE7] hover:bg-[#3EEDE7]/80 text-[#161823] rounded-lg transition-all duration-200 group shadow-lg shadow-[#3EEDE7]/20 hover:shadow-xl hover:shadow-[#3EEDE7]/30"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium">Get in Touch</span>
                  </a>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-8 pt-6 border-t border-[#3EEDE7]/10 text-center">
                <p className="text-sm text-white/60">
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

export default CVPage;

