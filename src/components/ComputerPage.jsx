import React from "react";
import { Dock, DockIcon } from "./magicui/dock";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";
import { BorderBeam } from "./magicui/border-beam";
import { ShineBorder } from "./magicui/shine-border";
import { BentoGrid, BentoCard } from "./magicui/bento-grid";
import Marquee from "./magicui/marquee";
import { 
  Home, 
  Computer, 
  Music, 
  Heart, 
  GraduationCap, 
  User,
  Code,
  Terminal,
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
  Sword
} from "lucide-react";

const ComputerPage = ({ onNavigate }) => {
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
    { name: "GitHub Desktop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
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
                    item.id === 'computer'
                    ? 'bg-blue-500/50 text-white'
                    : 'bg-gray-200/30 dark:bg-gray-900/30 hover:bg-gray-300/40 dark:hover:bg-gray-800/40 text-gray-700 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <IconComponent size={20} />
                </DockIcon>
              );
            })}
          </Dock>
          
          {/* Theme Toggler */}
          {/* <AnimatedThemeToggler /> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 pt-24 pb-12">
        <div className="w-[90%] max-w-[1800px] mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Computer size={48} className="text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Computer & I
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              My journey through the world of technology, programming, and digital innovation.
            </p>
          </div>

           {/* Full Stack Dev Tech Stack Marquee */}
           <div className="mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-left mb-12">
               Full Stack Dev Tech Stack
             </h2>
             
             <div className="space-y-6">
               {/* First Row */}
               <Marquee className="[--duration:30s]" pauseOnHover>
                 {techStackRow1.map((tech, index) => (
                   <div key={index} className="flex flex-col items-center mx-4">
                     <div className="relative w-16 h-16 overflow-hidden rounded-lg mb-3">
                       <BorderBeam
                         duration={6}
                         size={400}
                         colorFrom="#3b82f6"
                         colorTo="#8b5cf6"
                         borderWidth={2}
                       />
                       <BorderBeam
                         duration={6}
                         delay={3}
                         size={400}
                         colorFrom="#06b6d4"
                         colorTo="#3b82f6"
                         borderWidth={1}
                       />
                       <div className="flex items-center justify-center h-full w-full bg-transparent hover:scale-110 transition-transform duration-200 relative z-10">
                         <img 
                           src={tech.logo} 
                           alt={tech.name}
                           className="w-10 h-10"
                           onError={(e) => {
                             e.target.style.display = 'none';
                           }}
                         />
                       </div>
                     </div>
                     <span className="text-xs text-center font-medium text-gray-700 max-w-[80px]">{tech.name}</span>
                   </div>
                 ))}
               </Marquee>

               {/* Second Row - Reverse direction */}
               <Marquee className="[--duration:35s]" reverse pauseOnHover>
                 {techStackRow2.map((tech, index) => (
                   <div key={index} className="flex flex-col items-center mx-4">
                     <div className="relative w-16 h-16 overflow-hidden rounded-lg mb-3">
                       <BorderBeam
                         duration={7}
                         size={400}
                         colorFrom="#10b981"
                         colorTo="#f59e0b"
                         borderWidth={2}
                       />
                       <BorderBeam
                         duration={7}
                         delay={3.5}
                         size={400}
                         colorFrom="#ef4444"
                         colorTo="#10b981"
                         borderWidth={1}
                       />
                       <div className="flex items-center justify-center h-full w-full bg-transparent hover:scale-110 transition-transform duration-200 relative z-10">
                         <img 
                           src={tech.logo} 
                           alt={tech.name}
                           className="w-10 h-10"
                           onError={(e) => {
                             e.target.style.display = 'none';
                           }}
                         />
                       </div>
                     </div>
                     <span className="text-xs text-center font-medium text-gray-700 max-w-[80px]">{tech.name}</span>
                   </div>
                 ))}
               </Marquee>

               {/* Third Row */}
               <Marquee className="[--duration:40s]" pauseOnHover>
                 {techStackRow3.map((tech, index) => (
                   <div key={index} className="flex flex-col items-center mx-4">
                     <div className="relative w-16 h-16 overflow-hidden rounded-lg mb-3">
                       <BorderBeam
                         duration={8}
                         size={400}
                         colorFrom="#8b5cf6"
                         colorTo="#ec4899"
                         borderWidth={2}
                       />
                       <BorderBeam
                         duration={8}
                         delay={4}
                         size={400}
                         colorFrom="#06b6d4"
                         colorTo="#8b5cf6"
                         borderWidth={1}
                       />
                       <div className="flex items-center justify-center h-full w-full bg-transparent hover:scale-110 transition-transform duration-200 relative z-10">
                         <img 
                           src={tech.logo} 
                           alt={tech.name}
                           className="w-10 h-10"
                           onError={(e) => {
                             e.target.style.display = 'none';
                           }}
                         />
                       </div>
                     </div>
                     <span className="text-xs text-center font-medium text-gray-700 max-w-[80px]">{tech.name}</span>
                   </div>
                 ))}
               </Marquee>
            </div>
          </div>

          {/* AI App & Research Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-left mb-12">
              AI App & Research
            </h2>
            
            <BentoGrid className="grid w-full auto-rows-[16rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Agents Building */}
              <BentoCard
                name="Agents Building"
                className="relative col-span-1 group overflow-hidden rounded-2xl"
                background={
                  <div className="absolute inset-0">
                    <ShineBorder
                      className="w-full h-full"
                      shineColor={["#3b82f6", "#8b5cf6", "#06b6d4"]}
                      duration={12}
                      borderWidth={2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 " />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-70">
                      <img 
                        src="https://openai.com/favicon.ico" 
                        alt="GPT"
                        className="w-10 h-10 rounded"
                      />
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Qwen_logo.svg/300px-Qwen_logo.svg.png?20250327025131" 
                        alt="Qwen"
                        className="w-10 h-10 rounded"
                      />
                    </div>
                  </div>
                }
                Icon={Bot}
                description="Building intelligent agents with GPT and Qwen models for automated workflows and intelligent decision making."
                cta="Explore Agents"
              />

              {/* Workflow Building */}
              <BentoCard
                name="Workflow Building"
                className="relative col-span-1 group overflow-hidden rounded-2xl"
                background={
                  <div className="absolute inset-0">
                    <ShineBorder
                      className="w-full h-full"
                      shineColor={["#10b981", "#f59e0b", "#ef4444"]}
                      duration={14}
                      borderWidth={2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-orange-50/50 " />
                    <div className="absolute top-4 right-4 opacity-70">
                      <img 
                        src="https://n8n.io/favicon.ico" 
                        alt="n8n"
                        className="w-10 h-10 rounded"
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
                className="relative col-span-1 group overflow-hidden rounded-2xl"
                background={
                  <div className="absolute inset-0">
                    <ShineBorder
                      className="w-full h-full"
                      shineColor={["#8b5cf6", "#ec4899", "#06b6d4"]}
                      duration={10}
                      borderWidth={2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 " />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-70">
                      <img 
                        src="https://cursor.sh/favicon.ico" 
                        alt="Cursor"
                        className="w-10 h-10 rounded"
                      />
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/copilot-color.png" 
                        alt="Copilot"
                        className="w-10 h-10 rounded"
                      />
                      <img 
                        src="https://www.svgrepo.com/show/341819/firebase.svg" 
                        alt="Firebase"
                        className="w-10 h-10"
                      />
                    </div>
                  </div>
                }
                Icon={Wand2}
                description="Intensive and enhanced coding experience with Cursor, Copilot, Firebase Studio, and Claude for intelligent code assistance."
                cta="Code Smarter"
              />

              {/* ML/DL */}
              <BentoCard
                name="ML/DL"
                className="relative col-span-1 md:col-span-2 group"
                background={
                  <div className="absolute inset-0">
                    <ShineBorder
                      className="w-full h-full"
                      shineColor={["#f59e0b", "#ef4444", "#10b981"]}
                      duration={16}
                      borderWidth={2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50 " />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-70">
                      <img 
                        src="https://pytorch.org/favicon.ico" 
                        alt="PyTorch"
                        className="w-10 h-10 rounded"
                      />
                      <img 
                        src="https://colab.research.google.com/img/colab_favicon_256px.png" 
                        alt="Google Colab"
                        className="w-10 h-10 rounded"
                      />
                      <img 
                        src="https://ollama.ai/public/ollama.png" 
                        alt="Ollama"
                        className="w-10 h-10 rounded"
                      />
                      <img 
                        src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" 
                        alt="HuggingFace"
                        className="w-10 h-10"
                      />
                    </div>
                  </div>
                }
                Icon={Brain}
                description="Deep learning and machine learning projects using PyTorch, Google Colab, Ollama, and HuggingFace for model training and deployment."
                cta="Explore Models"
              />

              {/* API Usage */}
              <BentoCard
                name="API Usage"
                className="relative col-span-1 lg:row-span-2 group overflow-hidden rounded-2xl"
                background={
                  <div className="absolute inset-0">
                    <ShineBorder
                      className="w-full h-full"
                      shineColor={["#06b6d4", "#3b82f6", "#8b5cf6"]}
                      duration={13}
                      borderWidth={2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 " />
                    <div className="absolute top-4 right-4 opacity-70">
                      <img 
                        src="https://openai.com/favicon.ico" 
                        alt="OpenAI"
                        className="w-10 h-10 rounded"
                      />
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Qwen_logo.svg/300px-Qwen_logo.svg.png?20250327025131" 
                        alt="Qwen"
                        className="w-10 h-10 rounded"
                      />
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gemini-color.png" 
                        alt="Gemini"
                        className="w-10 h-10 rounded"
                      />
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude-color.png" 
                        alt="Claude"
                        className="w-10 h-10 rounded"
                      />
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/deepseek-color.png" 
                        alt="DeepSeek"
                        className="w-10 h-10 rounded"
                      />
                    </div>
                  </div>
                }
                Icon={Zap}
                description="Leveraging OpenAI SDK and various AI APIs, such as OpenAI, Qwen, Gemini, Claude and DeepSeek to integrate powerful language models into applications."
                cta="View APIs"
              />

              {/* Others */}
              <BentoCard
                name="Others"
                className="relative col-span-1 md:col-span-2 group"
                background={
                  <div className="absolute inset-0">
                    <ShineBorder
                      className="w-full h-full"
                      shineColor={["#ec4899", "#8b5cf6", "#06b6d4"]}
                      duration={18}
                      borderWidth={2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-purple-50/50 " />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-70">
                      <img 
                        src="https://openai.com/favicon.ico" 
                        alt="ChatGPT"
                        className="w-10 h-10 rounded"
                      />
                      <img 
                        src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" 
                        alt="Gemini"
                        className="w-10 h-10"
                      />
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/grok.png" 
                        alt="Grok"
                        className="w-10 h-10 rounded"
                      />
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/deepseek-color.png" 
                        alt="DeepSeek"
                        className="w-10 h-10 rounded"
                      />
                    </div>
                  </div>
                }
                Icon={Sparkles}
                description="Prompt Engineering, ChatGPT, Gemini, Grok, DeepSeek usage, and MCP tools for comprehensive AI ecosystem exploration."
                cta="Discover More"
              />
            </BentoGrid>
          </div>

          {/* Cybersecurity Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-left mb-12">
              Cybersecurity
            </h2>
            
            <BentoGrid className="grid w-full auto-rows-[20rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Red Team Platform */}
              <BentoCard
                name="Red Team Platform"
                className="relative col-span-1 group overflow-hidden rounded-2xl"
                background={
                  <div className="absolute inset-0">
                    <ShineBorder
                      className="w-full h-full"
                      shineColor={["#DC2626", "#EF4444", "#F87171"]}
                      duration={12}
                      borderWidth={2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-rose-50/50" />
                    <div className="absolute top-4 right-4 flex flex-wrap gap-1 opacity-70">
                      {/* Kali Linux */}
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kali-dragon-icon.svg/768px-Kali-dragon-icon.svg.png?20211125065834" alt="Kali" className="w-8 h-8" />
                      </div>
                      {/* Metasploit */}
                      <div>
                        <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/metasploit-h33wivgvlvgtk3wmoejxq.png/metasploit-rkuireddk3p5vdgf5mil5.png?_a=DATAg1AAZAA0" alt="metasploit" className="w-8 h-8" />
                      </div>
                      {/* Nmap */}
                      <div>
                        <img src="https://nmap.org/images/sitelogo-nmap.svg" alt="nmap" className="w-8 h-8" />
                      </div>
                      {/* Wireshark */}
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg" alt="Wireshark" className="w-8 h-8" />
                      </div>
                      {/* Burp Suite */}
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/BurpSuite_Comunity_Edition.svg/825px-BurpSuite_Comunity_Edition.svg.png" alt="Burp Suite" className="w-8 h-8" />
                      </div>
                      {/* Nikto */}
                      <div>
                        <img src="https://www.kali.org/tools/nikto/images/nikto-logo.svg" alt="Nikto" className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                }
                Icon={Shield}
                description="Comprehensive red team toolkit including Kali Linux, Metasploit, Nmap, Wireshark, Burp Suite, OpenVAS, Aircrack-ng, Kismet, Recon-ng, Netcat, Gobuster, and Nikto for penetration testing and security assessments."
                cta="Explore Red Team"
              />

              {/* Forensics & Cryptography */}
              <BentoCard
                name="Forensics & Cryptography"
                className="relative col-span-1 group overflow-hidden rounded-2xl"
                background={
                  <div className="absolute inset-0">
                    <ShineBorder
                      className="w-full h-full"
                      shineColor={["#2563EB", "#3B82F6", "#60A5FA"]}
                      duration={14}
                      borderWidth={2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50" />
                    <div className="absolute top-4 right-4 flex flex-wrap gap-1 opacity-70">
                      {/* GnuPG */}
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/GnuPG-Logo.svg/105px-GnuPG-Logo.svg.png?20070325143120" alt="GnuPG" className="w-8 h-8" />
                      </div>
                      {/* Autopsy */}
                      <div>
                        <img src="https://avatars.githubusercontent.com/u/856501?v=4" alt="Autopsy" className="w-8 h-8" />
                      </div>
                      {/* Volatility */}
                      <div>
                        <img src="https://miro.medium.com/1*Ini2Q3kb1xACFMILHrattg.jpeg" alt="Volatility" className="w-8 h-8" />
                      </div>
                      {/* 010 Editor */}
                      <div>
                        <img src="https://w1.pngwing.com/pngs/839/178/png-transparent-text-editor-yellow-hex-editor-hexadecimal-editing-computer-software-source-code-editor-binary-file-plain-text-thumbnail.png" alt="010 Editor" className="w-8 h-8" />
                      </div>
                      {/* Notepad++ */}
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Notepad%2B%2B_Logo.svg/768px-Notepad%2B%2B_Logo.svg.png" alt="Notepad++" className="w-8 h-8" />
                      </div>
                      {/* ExifTool */}
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/ExifTool_logo.svg/1200px-ExifTool_logo.svg.png?20250306210924" alt="ExifTool" className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                }
                Icon={Search}
                description="Advanced digital forensics and cryptography tools including OpenSSL, GnuPG, PyCryptodome, Cryptool, steganography tools (steghide, zsteg, stegsolve), forensic analyzers (Autopsy, Volatility, FTK Imager), and specialized editors."
                cta="Analyze Evidence"
              />

              {/* Offensive Security */}
              <BentoCard
                name="Offensive Security"
                className="relative col-span-1 group overflow-hidden rounded-2xl"
                background={
                  <div className="absolute inset-0">
                    <ShineBorder
                      className="w-full h-full"
                      shineColor={["#9333EA", "#A855F7", "#C084FC"]}
                      duration={16}
                      borderWidth={2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50" />
                    <div className="absolute top-4 right-4 flex flex-wrap gap-1 opacity-70">
                      {/* OWASP ZAP */}
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/OWASP_ZAP_logo.svg/877px-OWASP_ZAP_logo.svg.png?20250207171655" alt="ZAP" className="w-8 h-8" />
                      </div>
                      {/* sqlmap */}
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Sqlmap_logo.png?20180709082002" alt="sqlmap" className="w-8 h-8" />
                      </div>
                      {/* Ghidra */}
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ghidra_logo.svg/768px-Ghidra_logo.svg.png?20220727174502" alt="Ghidra" className="w-8 h-8" />
                      </div>
                      {/* John the Ripper */}
                      <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWJDGaaaPKKzzNZaX_yaz4g9sVqH5d_vk5w&s" alt="John the Ripper" className="w-8 h-8" />
                      </div>
                      {/* Hashcat */}
                      <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJzkDKpUyJ0aNjvFw4yH0DZGxfTqymkNilA&s" alt="Hashcat" className="w-8 h-8" />
                      </div>
                      {/* GoBuster */}
                      <div>
                        <img src="https://www.kali.org/tools/gobuster/images/gobuster-logo.svg" alt="Gobuster" className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                }
                Icon={Sword}
                description="Comprehensive offensive security arsenal including web application testing (Burp Suite, OWASP ZAP, sqlmap, XSStrike), binary exploitation (GDB, pwndbg, pwntools, Ghidra), password cracking (John the Ripper, Hashcat), and network enumeration tools."
                cta="Launch Attack"
              />

              {/* International Cybersecurity Olympiad 2025 - Custom Layout */}
              <div className="relative col-span-1 md:col-span-2 lg:col-span-3 group overflow-hidden rounded-2xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
                {/* Background */}
                <div className="absolute inset-0">
                  <ShineBorder
                    className="w-full h-full"
                    shineColor={["#CD7F32", "#D4A574", "#F4E4BC"]}
                    duration={20}
                    borderWidth={3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 to-orange-50/80" />
                  <div className="absolute top-4 right-4 flex flex-wrap gap-2 opacity-70 z-20">
                    {/* Thailand Flag */}
                    <div className="text-4xl">🇹🇭</div>
                    {/* Medal */}
                    <div className="text-4xl">🥉</div>
                    {/* Trophy */}
                    <div className="text-4xl">🏆</div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-amber-600/40 font-bold text-4xl z-10">
                    2025
                  </div>
                </div>

                {/* Content Layout */}
                <div className="relative z-10 h-full flex flex-col lg:flex-row-reverse">
                  {/* Left side - Text content */}
                  <div className="lg:flex-[1.5] flex flex-col justify-between p-6 lg:pl-8">
                    <div className="pointer-events-none transform-gpu flex flex-col gap-1 transition-all duration-300 group-hover:-translate-y-2">
                      <Shield className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 dark:text-neutral-300" />
                      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                        International Cybersecurity Olympiad 2025
                      </h3>
                      <p className="text-neutral-400">
                        🏆 Bronze Medal Winner at the International Cybersecurity Olympiad 2025, representing the Thai National Team. 
                        I am the only team member who secured a place in this prestigious international competition, showcasing advanced 
                        skills in penetration testing, digital forensics, cryptography, and incident response on a global stage.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button className="pointer-events-auto bg-neutral-800 dark:bg-neutral-100 text-white dark:text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors">
                        View Achievement
                      </button>
                    </div>
                  </div>

                  {/* Right side - Photo Marquee */}
                  <div className="lg:flex-[2.5] flex items-center justify-center p-4 lg:pr-8 pt-0 lg:pt-4">
                    <div className="w-full h-full flex justify-center items-center min-h-[200px] max-w-[700px]">
                      <Marquee className="[--duration:20s]" pauseOnHover>
                        {[
                          { src: "https://ico2025.sg/wp-content/uploads/2025/06/DSC00536.jpg", alt: "International Cybersecurity Olympiad 2025 - Award Ceremony" },
                          { src: "https://ico2025.sg/wp-content/uploads/2025/06/DSC00537.jpg", alt: "International Cybersecurity Olympiad 2025 - Team Photo" },
                          { src: "https://ico2025.sg/wp-content/uploads/2025/06/DSC00541.jpg", alt: "International Cybersecurity Olympiad 2025 - Competition Moment" },
                          { src: "https://ico2025.sg/wp-content/uploads/2025/06/DSC00552.jpg", alt: "International Cybersecurity Olympiad 2025 - Bronze Medal Achievement" }
                        ].map((photo, index) => (
                          <div key={index} className="mx-3">
                            <div className="relative w-56 h-40 sm:w-64 sm:h-48 lg:w-72 lg:h-52 overflow-hidden rounded-xl shadow-xl">
                              <img 
                                src={photo.src} 
                                alt={photo.alt}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
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

          {/* Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Code size={24} className="text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Programming Languages
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Languages I work with and enjoy coding in.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-700">• JavaScript/TypeScript</div>
                <div className="text-sm text-gray-700">• Python</div>
                <div className="text-sm text-gray-700">• React/Next.js</div>
                <div className="text-sm text-gray-700">• Node.js</div>
              </div>
            </div>

            {/* Development Tools */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Terminal size={24} className="text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Development Tools
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Tools and environments that power my development workflow.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-700">• VS Code</div>
                <div className="text-sm text-gray-700">• Git & GitHub</div>
                <div className="text-sm text-gray-700">• Docker</div>
                <div className="text-sm text-gray-700">• Terminal/CLI</div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Cpu size={24} className="text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Technologies
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Modern technologies and frameworks I love working with.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-700">• Vite & Webpack</div>
                <div className="text-sm text-gray-700">• Tailwind CSS</div>
                <div className="text-sm text-gray-700">• Framer Motion</div>
                <div className="text-sm text-gray-700">• REST APIs</div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="md:col-span-2 lg:col-span-3">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <Database size={24} className="text-blue-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Current Projects
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Here are some projects I'm currently working on or have recently completed.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Personal Website</h4>
                    <p className="text-sm text-gray-600">
                      Built with React 19, Vite, and Tailwind CSS v4. Features modern UI components and smooth animations.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Coming Soon...</h4>
                    <p className="text-sm text-gray-600">
                      More exciting projects are in development. Stay tuned!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerPage;
