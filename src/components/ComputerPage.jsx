import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoCard } from "./magicui/bento-grid";
import Marquee from "./magicui/marquee";
import { IconCloud } from "./magicui/icon-cloud";
import Navbar from "./Navbar";
import { Bot, Wand2, Brain, Shield, Cpu, Database, Mail } from "lucide-react";

const ACCENT_1 = "#89AACC";
const ACCENT_2 = "#4E85BF";
const MUTED = "#878787";
const BORDER = "#1f1f1f";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
};

const TECH_STACK_ROW_1 = [
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
  { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
];

const TECH_STACK_ROW_2 = [
  { name: "Flask", logo: "https://icon.icepanel.io/Technology/svg/Flask.svg" },
  { name: "FastAPI", logo: "https://icon.icepanel.io/Technology/svg/FastAPI.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "ClickHouse", logo: "https://avatars.githubusercontent.com/u/54801242?s=200&v=4" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "DBeaver", logo: "https://dbeaver.io/wp-content/uploads/2015/09/beaver-head.png" },
];

const TECH_STACK_ROW_3 = [
  { name: "Alibaba Cloud", logo: "https://www.svgrepo.com/show/473520/alibabacloud.svg" },
  { name: "Vercel", logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vercel.svg" },
  { name: "GitHub Pages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
  { name: "Cloudflare", logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/cloudflare.svg" },
  { name: "Ubuntu", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-plain.svg" },
  { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "GitHub Desktop", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
];

const AI_CARDS = [
  {
    name: "Agents & Automation",
    Icon: Bot,
    logos: [
      { src: "https://openai.com/favicon.ico", alt: "GPT" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Qwen_logo.svg/330px-Qwen_logo.svg.png?_=20250327025131", alt: "Qwen" },
      { src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude-color.png", alt: "Claude" },
      { src: "https://n8n.io/favicon.ico", alt: "n8n" },
      { src: "https://dify.ai/favicon.ico", alt: "Dify" },
    ],
    description: "Building LLM-powered agents and automated workflows with n8n and Dify. Integrating AI APIs to connect models into real applications.",
  },
  {
    name: "AI-Assisted Coding",
    Icon: Wand2,
    logos: [
      { src: "https://cursor.sh/favicon.ico", alt: "Cursor" },
      { src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/copilot-color.png", alt: "Copilot" },
      { src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/grok.png", alt: "Grok" },
    ],
    description: "Coding with AI IDEs like Cursor and Copilot, alongside prompt engineering and MCP tools for everyday AI use.",
  },
  {
    name: "ML/DL",
    Icon: Brain,
    logos: [
      { src: "https://pytorch.org/favicon.ico", alt: "PyTorch" },
      { src: "https://colab.research.google.com/img/colab_favicon_256px.png", alt: "Google Colab" },
      { src: "https://ollama.ai/public/ollama.png", alt: "Ollama" },
      { src: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", alt: "HuggingFace" },
    ],
    description: "Learning and researching about machine learning and deep learning, from model training to deployment.",
  },
];

const ICO_PHOTOS = [
  { src: "/ICO-2025/ICO2025-1.jpg", alt: "International Cybersecurity Olympiad 2025 - Award Ceremony" },
  { src: "/ICO-2025/ICO2025-2.jpg", alt: "International Cybersecurity Olympiad 2025 - Team Photo" },
  { src: "/ICO-2025/ICO2025-3.jpg", alt: "International Cybersecurity Olympiad 2025 - Competition Moment" },
  { src: "/ICO-2025/ICO2025-4.jpg", alt: "International Cybersecurity Olympiad 2025 - Bronze Medal Achievement" },
];

const OTHER_SKILLS = [
  { Icon: Cpu, title: "Programming Languages", content: "C++, Java, Python" },
  { Icon: Database, title: "Office & Productivity", content: "Google Workspace, Microsoft Office" },
  { Icon: Cpu, title: "Embedded Systems", content: "Studying embedded systems programming, focused on 8051 microcontroller (MCU) architecture." },
];

const ICON_CLOUD_IMAGES = [
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
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
];

const PROJECTS = [
  {
    title: "NeuroAegis",
    description: "AI-powered platform for Dementia and Alzheimer's Disease Detection and Rehabilitation.",
    image: "/projects/neuroaegis.png",
    tags: ["AI/NLP", "Cognitive Health"],
    href: "https://www.neuroaegis.com/",
    paused: true,
  },
  {
    title: "ShanghaiWalk",
    description: "A cultural exploration platform showcasing Shanghainese culture, traditions, language, and history.",
    image: "/projects/shanghaiwalk.png",
    tags: ["Cultural", "Language"],
    href: "https://shanghaiwalk.vercel.app/",
  },
  {
    title: "SoiMenu",
    description: "A modern online food menu platform for customers to order without language barriers.",
    image: "/projects/soimenu.png",
    tags: ["E-commerce", "Multilingual"],
    href: "https://online-ordering-website.vercel.app/",
  },
  {
    title: "Public Matters",
    description: "A specialized platform designed to enhance transparency and accessibility in public governance.",
    image: "/projects/public-matters.png",
    tags: ["Governance", "Transparency"],
    href: "https://public-matters.vercel.app/",
  },
];

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/Dukehjx",
    path: "M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
  },
  {
    name: "X",
    href: "https://x.com/DukeHu0111",
    path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/junxi-hu",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/duke.hu.2025/",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

const SectionHeader = ({ label, title, italic, description }) => (
  <motion.div {...fadeInUp} className="mb-8 sm:mb-10 md:mb-12 px-2">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px" style={{ backgroundColor: BORDER }} />
      <span className="text-xs uppercase tracking-[0.3em]" style={{ color: MUTED }}>
        {label}
      </span>
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
      {title} <span className="font-display italic">{italic}</span>
    </h2>
    {description && (
      <p className="mt-3 text-sm sm:text-base max-w-md" style={{ color: MUTED }}>
        {description}
      </p>
    )}
  </motion.div>
);

const ComputerPage = () => {
  return (
    <div
      className="relative min-h-screen overflow-hidden font-body"
      style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5" }}
    >
      {/* Ambient background — matches CV & Home pages */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full filter blur-[130px] opacity-10"
          style={{ backgroundColor: ACCENT_1 }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full filter blur-[110px] opacity-[0.08]"
          style={{ backgroundColor: ACCENT_2 }}
        />
      </div>

      <Navbar />

      {/* Main Content */}
      <div className="relative px-2 sm:px-4 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
          {/* Page Header */}
          <motion.div {...fadeInUp} className="text-center mb-14 sm:mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ backgroundColor: BORDER }} />
              <span className="text-xs uppercase tracking-[0.3em]" style={{ color: MUTED }}>
                Tech Journey
              </span>
              <div className="w-8 h-px" style={{ backgroundColor: BORDER }} />
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display italic leading-[0.95] mb-4">
              Computer &amp; I
            </h1>

            <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto" style={{ color: MUTED }}>
              My journey through the world of technology, AI, and digital innovation.
            </p>
          </motion.div>

          {/* Full Stack Dev Tech Stack Marquee */}
          <div className="mb-14 sm:mb-16 md:mb-20">
            <SectionHeader label="Foundations" title="Full Stack Dev" italic="Tech Stack" />

            <div className="space-y-6">
              <Marquee className="[--duration:30s]" pauseOnHover repeat={2}>
                {TECH_STACK_ROW_1.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center mx-2 sm:mx-3 md:mx-4 group">
                    <div
                      className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 overflow-hidden rounded-xl mb-2 sm:mb-3 border transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: "#141414", borderColor: "rgba(137,170,204,0.25)" }}
                    >
                      <div className="flex items-center justify-center h-full w-full">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain"
                          loading="lazy"
                          onError={(e) => { e.target.style.display = "none"; }}
                        />
                      </div>
                    </div>
                    <span
                      className="text-xs text-center font-medium max-w-[70px] sm:max-w-[80px] md:max-w-[90px] leading-tight transition-colors duration-200 group-hover:text-[#89AACC]"
                      style={{ color: "#f5f5f5" }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </Marquee>

              <Marquee className="[--duration:35s]" reverse pauseOnHover repeat={2}>
                {TECH_STACK_ROW_2.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center mx-2 sm:mx-3 md:mx-4 group">
                    <div
                      className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 overflow-hidden rounded-xl mb-2 sm:mb-3 border transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: "#141414", borderColor: "rgba(78,133,191,0.3)" }}
                    >
                      <div className="flex items-center justify-center h-full w-full">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain"
                          loading="lazy"
                          onError={(e) => { e.target.style.display = "none"; }}
                        />
                      </div>
                    </div>
                    <span
                      className="text-xs text-center font-medium max-w-[70px] sm:max-w-[80px] md:max-w-[90px] leading-tight transition-colors duration-200 group-hover:text-[#4E85BF]"
                      style={{ color: "#f5f5f5" }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </Marquee>

              <Marquee className="[--duration:40s]" pauseOnHover repeat={2}>
                {TECH_STACK_ROW_3.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center mx-2 sm:mx-3 md:mx-4 group">
                    <div
                      className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 overflow-hidden rounded-xl mb-2 sm:mb-3 border transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: "#141414", borderColor: BORDER }}
                    >
                      <div className="flex items-center justify-center h-full w-full">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain"
                          loading="lazy"
                          onError={(e) => { e.target.style.display = "none"; }}
                        />
                      </div>
                    </div>
                    <span
                      className="text-xs text-center font-medium max-w-[70px] sm:max-w-[80px] md:max-w-[90px] leading-tight transition-colors duration-200 group-hover:text-[#f5f5f5]"
                      style={{ color: MUTED }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>

          {/* AI App & Research Section */}
          <div className="mb-14 sm:mb-16 md:mb-20">
            <SectionHeader label="Building" title="AI App &" italic="Research" />

            <BentoGrid className="grid w-full auto-rows-[15rem] sm:auto-rows-[16rem] grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {AI_CARDS.map((card) => (
                <BentoCard
                  key={card.name}
                  name={card.name}
                  className="relative col-span-1 group overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300"
                  style={{ backgroundColor: "rgba(20,20,20,0.6)", borderColor: "rgba(137,170,204,0.25)" }}
                  background={
                    <div className="absolute inset-0">
                      <div className="absolute top-3 right-3 md:top-4 md:right-4 flex gap-1.5 opacity-70 flex-wrap justify-end max-w-[130px]">
                        {card.logos.map((logo) => (
                          <img
                            key={logo.alt}
                            src={logo.src}
                            alt={logo.alt}
                            className="w-6 h-6 sm:w-7 sm:h-7 rounded"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    </div>
                  }
                  Icon={card.Icon}
                  description={card.description}
                />
              ))}
            </BentoGrid>
          </div>

          {/* Cybersecurity Section */}
          <div className="mb-14 sm:mb-16 md:mb-20">
            <SectionHeader label="Practicing" title="Cyber" italic="security" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              {/* Security Toolkit */}
              <div
                className="relative rounded-2xl border backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between min-h-[16rem] sm:min-h-[18rem] transition-all duration-300 hover:border-[rgba(137,170,204,0.5)]"
                style={{ backgroundColor: "rgba(20,20,20,0.6)", borderColor: "rgba(137,170,204,0.25)" }}
              >
                <div className="flex items-start justify-between">
                  <Shield className="h-9 w-9 sm:h-11 sm:w-11" style={{ color: ACCENT_1 }} />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kali-dragon-icon.svg/1280px-Kali-dragon-icon.svg.png?_=20211125065834"
                    alt="Kali Linux"
                    className="w-9 h-9 sm:w-11 sm:h-11 opacity-80"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "#f5f5f5" }}>
                    Security Toolkit
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: MUTED }}>
                    Hands-on red teaming, digital forensics, and offensive security using Kali Linux. Practicing penetration testing, cryptography, and exploitation across real-world scenarios.
                  </p>
                </div>
              </div>

              {/* International Cybersecurity Olympiad 2025 */}
              <div
                className="relative rounded-2xl border backdrop-blur-xl overflow-hidden flex flex-col min-h-[16rem] sm:min-h-[18rem] transition-all duration-300 hover:border-[rgba(137,170,204,0.5)]"
                style={{ backgroundColor: "rgba(20,20,20,0.6)", borderColor: "rgba(137,170,204,0.25)" }}
              >
                <div className="p-5 sm:p-6 pb-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">🏆</span>
                    <span className="text-xs uppercase tracking-[0.2em]" style={{ color: MUTED }}>2025</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold leading-tight" style={{ color: "#f5f5f5" }}>
                    International Cybersecurity Olympiad
                  </h3>
                  <p className="text-sm mt-1" style={{ color: MUTED }}>
                    Bronze Medal Winner
                  </p>
                </div>

                <div className="flex-1 flex items-center justify-center p-4 sm:p-5">
                  <Marquee className="[--duration:25s]" pauseOnHover>
                    {ICO_PHOTOS.map((photo, index) => (
                      <div key={index} className="mx-2 sm:mx-3">
                        <div className="relative w-28 h-20 sm:w-36 sm:h-28 md:w-40 md:h-32 overflow-hidden rounded-xl">
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>

          {/* Other Computer Skills Section */}
          <div className="mb-14 sm:mb-16 md:mb-20">
            <SectionHeader label="Also Using" title="Other Computer" italic="Skills" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              {/* Icon Cloud */}
              <div className="flex justify-center lg:justify-end self-center">
                <div className="relative w-full max-w-md h-[360px] sm:h-[420px] md:h-[460px]">
                  <IconCloud images={ICON_CLOUD_IMAGES} />
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col justify-center self-start space-y-4">
                {OTHER_SKILLS.map((skill) => (
                  <div
                    key={skill.title}
                    className="rounded-2xl p-4 sm:p-5 border transition-all duration-300 hover:border-[rgba(137,170,204,0.4)]"
                    style={{ backgroundColor: "rgba(26,26,26,0.4)", borderColor: "rgba(137,170,204,0.2)" }}
                  >
                    <div className="flex items-center mb-2">
                      <skill.Icon size={20} className="mr-2" style={{ color: ACCENT_1 }} />
                      <h3 className="text-base sm:text-lg font-semibold" style={{ color: "#f5f5f5" }}>
                        {skill.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: MUTED }}>
                      {skill.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Showcase Section */}
          <div className="mb-14 sm:mb-16 md:mb-20">
            <SectionHeader label="Shipping" title="Project" italic="Showcase" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {PROJECTS.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl border overflow-hidden flex flex-col transition-colors duration-300 hover:border-[rgba(137,170,204,0.4)]"
                  style={{ borderColor: BORDER, backgroundColor: "#141414" }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} Project Screenshot`}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${project.paused ? "opacity-60" : ""}`}
                      loading="lazy"
                    />
                    {project.paused && (
                      <span
                        className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full border backdrop-blur-xl"
                        style={{ backgroundColor: "rgba(10,10,10,0.85)", borderColor: BORDER, color: "#f5f5f5" }}
                      >
                        Temporarily Paused
                      </span>
                    )}
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="text-lg sm:text-xl font-display italic mb-2" style={{ color: "#f5f5f5" }}>
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full border"
                          style={{ borderColor: BORDER, color: MUTED }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span
                      className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                      style={{ color: ACCENT_1 }}
                    >
                      Visit Website
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 sm:mt-20 md:mt-24 border-t" style={{ borderColor: BORDER }}>
            <div className="pt-8 sm:pt-12 pb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Left side - Social Links */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border transition-all duration-200 group"
                      style={{ backgroundColor: "rgba(26,26,26,0.5)", borderColor: "rgba(137,170,204,0.3)", color: ACCENT_1 }}
                    >
                      <svg
                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d={social.path} />
                      </svg>
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>

                {/* Right side - Get in Touch Button */}
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:hjxduke080111@gmail.com"
                    className="group relative inline-flex rounded-full hover:scale-105 transition-transform duration-300"
                  >
                    <span
                      className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(90deg, #89AACC, #4E85BF)" }}
                    />
                    <span
                      className="relative flex items-center gap-3 rounded-full px-6 py-3 border transition-colors duration-300"
                      style={{ borderColor: BORDER, backgroundColor: "#0a0a0a", color: "#f5f5f5" }}
                    >
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium">Get in Touch</span>
                    </span>
                  </a>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-8 pt-6 border-t text-center" style={{ borderColor: "rgba(137,170,204,0.1)" }}>
                <p className="text-sm" style={{ color: MUTED }}>
                  © 2025 Duke Hu. Built with React &amp; Tailwind CSS.
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
