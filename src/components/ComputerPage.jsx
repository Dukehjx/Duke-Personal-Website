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
  Sparkles
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
                        className="w-6 h-6 rounded"
                      />
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Qwen_logo.svg/300px-Qwen_logo.svg.png?20250327025131" 
                        alt="Qwen"
                        className="w-6 h-6 rounded"
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
                        className="w-6 h-6 rounded"
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
                        className="w-5 h-5 rounded"
                      />
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/copilot-color.png" 
                        alt="Copilot"
                        className="w-5 h-5 rounded"
                      />
                      <img 
                        src="https://www.svgrepo.com/show/341819/firebase.svg" 
                        alt="Firebase"
                        className="w-5 h-5"
                      />
                    </div>
                  </div>
                }
                Icon={Wand2}
                description="Enhanced coding experience with Cursor, Copilot, Firebase Studio, and Claude for intelligent code assistance."
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
                        className="w-6 h-6 rounded"
                      />
                      <img 
                        src="https://colab.research.google.com/img/colab_favicon_256px.png" 
                        alt="Google Colab"
                        className="w-6 h-6 rounded"
                      />
                      <img 
                        src="https://ollama.ai/public/ollama.png" 
                        alt="Ollama"
                        className="w-6 h-6 rounded"
                      />
                      <img 
                        src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" 
                        alt="HuggingFace"
                        className="w-6 h-6"
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
                        className="w-6 h-6 rounded"
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
                        className="w-5 h-5 rounded"
                      />
                      <img 
                        src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" 
                        alt="Gemini"
                        className="w-5 h-5"
                      />
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/grok.png" 
                        alt="Grok"
                        className="w-5 h-5 rounded"
                      />
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/deepseek-color.png" 
                        alt="DeepSeek"
                        className="w-5 h-5 rounded"
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
