import React from "react";
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

const CVPage = ({ onNavigate }) => {
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

  const education = {
    school: "International Community School Bangkok",
    period: "G9 - Present",
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
      duolingo: "145"
    }
  };

  const leadership = [
    {
      title: "NeuroAegis",
      role: "Team Leader & Full-stack Website Developer",
      period: "G11 - Present",
      highlights: [
        "Developed full-stack NeuroAegis website using Whisper AI & GPT-4o for dementia detection and rehabilitation",
        "Led 4-member team; Integrated 7+ cognitive games, quiz assessments, and research hub",
        "Implemented 13 language support, real-time feedback, and accessibility features",
        "Raised ~$5K; reached 3K+ users; partnered with local nursing and elderly centers; open-sourced on GitHub"
      ]
    },
    {
      title: "Capstone Project - SoiMenu",
      role: "Project Founder",
      period: "G11 - Present",
      highlights: [
        "Surveyed local restaurants and customers to identify language and cultural barriers in menu ordering",
        "Developed multilingual menu platform supporting 5 languages (TH/EN/ZH/KR/JP) with optimized UI for accessibility"
      ]
    },
    {
      title: "ShanghaiWalk",
      role: "Planner, Co-founder & Technology Manager",
      period: "G11 - Present",
      highlights: [
        "Initiative preserving and promoting Shanghainese culture and language",
        "Developed ShanghaiWalk website showcasing cultural history, team profiles, and event plans",
        "Co-organized 'Opera Through Time: Sunrise' exhibition (300+ visitors); fostered community engagement (40+ WeChat members)"
      ]
    },
    {
      title: "Academic Tutoring & Education Platforms",
      role: "Founder & Leader",
      period: "G11 - Present",
      highlights: [
        "Tutored 5 peers in Social Studies, Science, Math, English, and Computer Science",
        "Created '90 Days to USACO Gold' online program; 5K+ views on Rednote and GitHub",
        "Led development of AP Researcher website for AP Seminar/Research students"
      ]
    },
    {
      title: "AI Club",
      role: "Founder & President",
      period: "G11 - Present",
      highlights: [
        "Founded school's first AI club to teach students to apply tools (LLM's, Cursor, MCP's)",
        "Recruited 30+ members, organized workshops; Instagram account (100+ followers) to share AI news"
      ]
    },
    {
      title: "Table Tennis Club",
      role: "Member (G11), President (G12)",
      period: "G11 - Present",
      highlights: [
        "Hosted weekly practices (with 20-30 attendees) for 70+ middle school and high school students and parents"
      ]
    }
  ];

  const academics = [
    {
      title: "Pioneer Academics",
      role: "Researcher & Advisory Board",
      period: "G11 Summer",
      description: "Independent research: 'Cross-Lingual Structural Priming in Chinese → English MT: Effects on Syntax and Translation Quality'; ~5000 words; working on publications"
    },
    {
      title: "Hangzhou Goodscity Culture & Technology Co. Ltd",
      role: "Intern",
      period: "G11 Summer",
      description: "Built and deployed full-stack data automation and visualization (n8n, ClickHouse, Flask, Docker); automated ETL, created 7 dashboards"
    },
    {
      title: "Carnegie Mellon University Summer Session",
      period: "G10 Summer",
      description: "15-112 Fundamentals of Programming (4 credits) • 82-183 AI for Humanities (3 credits)"
    },
    {
      title: "Johns Hopkins University Pre-college Program",
      period: "G9 Summer",
      description: "Intro to Laboratory Research Course (1 credit)"
    },
    {
      title: "Stanford ULO Fall 2025 term",
      period: "G12 - Present",
      description: "Linear Algebra Course"
    }
  ];

  const interests = [
    {
      title: "Duke Drum",
      role: "Individual",
      period: "G10 - Present",
      highlights: [
        "Composed, transcribed, and adapted 100+ drum notes",
        "Recorded and uploaded productions; 100k+ views across TikTok, Bilibili, and YouTube",
        "Led Jellyfish Jam Band performing 25+ pieces for 700+ attendees"
      ]
    },
    {
      title: "Entrepreneurial Ventures",
      role: "Founder & Leader",
      period: "G9 - Present",
      highlights: [
        "Founded ventures in collectibles and merchandise resale",
        "Generated $27K+ revenue & $9K+ profit through pricing, negotiation, logistics",
        "Built 200+ member community; 80K+ views on content"
      ]
    }
  ];

  const awards = [
    { name: "Honor Roll", level: "School Level", year: "G9 - Present" },
    { name: "American Mathematics Olympiad Bronze Award", level: "International Level", year: "G10" },
    { name: "Singapore Math Global Finals Honorable Award", level: "International Level", year: "G10" },
    { name: "11th HIPPO International English Language Olympiad Bronze", level: "International Level", year: "G10" },
    { name: "Trinity Drum Grade 7", level: "International Level", year: "G11" },
    { name: "AMC 12A top 5% (Thailand #4)", level: "International Level", year: "G11" },
    { name: "American Invitational Mathematics Examination (AIME) 10 points", level: "International Level", year: "G11" },
    { name: "MIT Global AI Hackathon Certificate of Participation", level: "International Level", year: "G11" },
    { name: "USACO Gold Division", level: "International Level", year: "G11" },
    { name: "International Cybersecurity Olympiad 2025 Bronze", level: "International Level", year: "G11" },
    { name: "Vanda National Junior Science Olympiad Gold (Global #25; Thailand #2)", level: "International Level", year: "G11" },
    { name: "John Locke Essay Competition High Commendation", level: "International Level", year: "G11" },
    { name: "AP Scholar with Distinction (twice)", level: "International Level", year: "G10 - 11" },
    { name: "AP International Diploma", level: "International Level", year: "G11" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
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
                    item.id === 'cv'
                    ? 'bg-blue-500/50 text-white'
                    : 'bg-gray-200/30 dark:bg-gray-900/30 hover:bg-gray-300/40 dark:hover:bg-gray-800/40 text-gray-700 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <IconComponent size={16} className="sm:w-5 sm:h-5" />
                </DockIcon>
              );
            })}
          </Dock>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-2 sm:px-4 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="relative inline-block mb-6 rounded-3xl overflow-hidden">
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 md:p-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3">
                  Junxi (Duke) Hu
                </h1>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base md:text-lg text-gray-600 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Phone size={18} className="text-blue-600" />
                    <span>+66 0642157590</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={18} className="text-blue-600" />
                    <a href="mailto:hjxduke080111@gmail.com" className="hover:text-blue-600 transition-colors">
                      hjxduke080111@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Background Section */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <GraduationCap size={32} className="text-blue-600" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Education Background
              </h2>
            </div>
            
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-blue-300">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-gray-200 pb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{education.school}</h3>
                  <span className="text-base sm:text-lg text-gray-600 font-medium">{education.period}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50/50 rounded-xl p-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">GPA</p>
                    <p className="text-lg font-bold text-gray-900">Unweighted: {education.gpa.unweighted}</p>
                    <p className="text-lg font-bold text-gray-900">Weighted: {education.gpa.weighted}</p>
                  </div>
                  <div className="bg-green-50/50 rounded-xl p-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Standardized Tests</p>
                    <p className="text-base font-medium text-gray-900">SAT: {education.standardizedTests.sat}</p>
                    <p className="text-base font-medium text-gray-900">Duolingo: {education.standardizedTests.duolingo}</p>
                  </div>
                </div>

                <div>
                  <p className="text-lg font-semibold text-gray-900 mb-3">AP Courses</p>
                  <div className="flex flex-wrap gap-2">
                    {education.apCourses.map((course, index) => (
                      <div key={index} className="inline-flex items-center gap-2 px-3 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                        <span>{course.name}</span>
                        <span className="font-bold">({course.score})</span>
                        {course.note && <span className="text-xs opacity-75">• {course.note}</span>}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-lg font-semibold text-gray-900 mb-3">Current AP Courses</p>
                  <div className="flex flex-wrap gap-2">
                    {education.currentAP.map((course, index) => (
                      <span key={index} className="px-3 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community & Leadership Section */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Users size={32} className="text-green-600" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Community & Leadership
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {leadership.map((item, index) => (
                <div key={index} className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-green-300 hover:shadow-xl transition-shadow duration-300">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-base text-blue-600 font-medium mb-1">{item.role}</p>
                      <p className="text-sm text-gray-600">{item.period}</p>
                    </div>
                    
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm text-gray-700">
                          <Target size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
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
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <BookOpen size={32} className="text-purple-600" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Academics & Internship
              </h2>
            </div>
            
            <div className="space-y-4">
              {academics.map((item, index) => (
                <div key={index} className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-300 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h3>
                      {item.role && <p className="text-base text-purple-600 font-medium">{item.role}</p>}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{item.period}</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interests Section */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Heart size={32} className="text-pink-600" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Interests
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {interests.map((item, index) => (
                <div key={index} className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-300 hover:shadow-xl transition-shadow duration-300">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-base text-pink-600 font-medium mb-1">{item.role}</p>
                      <p className="text-sm text-gray-600">{item.period}</p>
                    </div>
                    
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm text-gray-700">
                          <Target size={16} className="text-pink-600 mt-0.5 flex-shrink-0" />
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
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Trophy size={32} className="text-yellow-600" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Awards & Honors
              </h2>
            </div>
            
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-yellow-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {awards.map((award, index) => (
                  <div key={index} className="bg-gradient-to-br from-yellow-50/80 to-orange-50/80 rounded-xl p-4 border border-yellow-200/50 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <Award size={20} className="text-yellow-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-gray-900 mb-1 leading-tight">{award.name}</h3>
                        <p className="text-xs text-gray-600 mb-1">{award.level}</p>
                        <p className="text-xs text-blue-600 font-medium">{award.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 sm:mt-20 md:mt-24 border-t border-gray-200/50">
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
              <div className="mt-8 pt-6 border-t border-gray-200/30 text-center">
                <p className="text-sm text-gray-500">
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

