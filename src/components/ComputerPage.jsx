import React from "react";
import { Dock, DockIcon } from "./magicui/dock";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";
import { BorderBeam } from "./magicui/border-beam";
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
  Database
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
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Magic UI", logo: "https://magicui.design/icon.png" },
    { name: "Material UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" },
    { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" }
  ];

  const techStackRow2 = [
    { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
    { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "ClickHouse", logo: "https://avatars.githubusercontent.com/u/54801242?s=200&v=4" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "DBeaver", logo: "https://dbeaver.io/wp-content/uploads/2015/09/beaver-head.png" }
  ];

  const techStackRow3 = [
    { name: "Alibaba Cloud", logo: "https://www.alibabacloud.com/favicon.ico" },
    { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" },
    { name: "GitHub Pages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
    { name: "Cloudflare", logo: "https://www.cloudflare.com/img/cf-facebook-card.png" },
    { name: "Namecheap", logo: "https://www.namecheap.com/assets/img/nc-icon/light/nc-icon-light.svg" },
    { name: "Ubuntu", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-plain.svg" },
    { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "GitHub Desktop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Google Analytics", logo: "https://www.google.com/analytics/static/img/analytics-logo.svg" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
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
                      : 'bg-white/30 hover:bg-white/50 text-gray-700 hover:text-gray-900'
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <IconComponent size={20} />
                </DockIcon>
              );
            })}
          </Dock>
          
          {/* Theme Toggler */}
          <AnimatedThemeToggler />
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Computer size={48} className="text-blue-600 dark:text-blue-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Computer & I
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My journey through the world of technology, programming, and digital innovation.
            </p>
          </div>

                     {/* Full Stack Dev Tech Stack Marquee */}
           <div className="mb-16">
             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
               Full Stack Dev Tech Stack
             </h2>
             
             <div className="space-y-6">
               {/* First Row */}
               <Marquee className="[--duration:30s]" pauseOnHover>
                 {techStackRow1.map((tech, index) => (
                   <div
                     key={index}
                     className="relative w-32 h-32 mx-2 overflow-hidden rounded-lg"
                   >
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
                     <div className="flex flex-col items-center justify-center h-full w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 hover:scale-105 transition-transform duration-200 p-4">
                       <img 
                         src={tech.logo} 
                         alt={tech.name}
                         className="w-12 h-12 mb-3"
                         onError={(e) => {
                           e.target.style.display = 'none';
                         }}
                       />
                       <span className="text-sm text-center font-medium leading-tight">{tech.name}</span>
                     </div>
                   </div>
                 ))}
               </Marquee>

               {/* Second Row - Reverse direction */}
               <Marquee className="[--duration:35s]" reverse pauseOnHover>
                 {techStackRow2.map((tech, index) => (
                   <div
                     key={index}
                     className="relative w-32 h-32 mx-2 overflow-hidden rounded-lg"
                   >
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
                     <div className="flex flex-col items-center justify-center h-full w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 hover:scale-105 transition-transform duration-200 p-4">
                       <img 
                         src={tech.logo} 
                         alt={tech.name}
                         className="w-12 h-12 mb-3"
                         onError={(e) => {
                           e.target.style.display = 'none';
                         }}
                       />
                       <span className="text-sm text-center font-medium leading-tight">{tech.name}</span>
                     </div>
                   </div>
                 ))}
               </Marquee>

               {/* Third Row */}
               <Marquee className="[--duration:40s]" pauseOnHover>
                 {techStackRow3.map((tech, index) => (
                   <div
                     key={index}
                     className="relative w-32 h-32 mx-2 overflow-hidden rounded-lg"
                   >
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
                     <div className="flex flex-col items-center justify-center h-full w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 hover:scale-105 transition-transform duration-200 p-4">
                       <img 
                         src={tech.logo} 
                         alt={tech.name}
                         className="w-12 h-12 mb-3"
                         onError={(e) => {
                           e.target.style.display = 'none';
                         }}
                       />
                       <span className="text-sm text-center font-medium leading-tight">{tech.name}</span>
                     </div>
                   </div>
                 ))}
               </Marquee>
             </div>
           </div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Code size={24} className="text-green-600 dark:text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Programming Languages
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Languages I work with and enjoy coding in.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-700 dark:text-gray-200">• JavaScript/TypeScript</div>
                <div className="text-sm text-gray-700 dark:text-gray-200">• Python</div>
                <div className="text-sm text-gray-700 dark:text-gray-200">• React/Next.js</div>
                <div className="text-sm text-gray-700 dark:text-gray-200">• Node.js</div>
              </div>
            </div>

            {/* Development Tools */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Terminal size={24} className="text-purple-600 dark:text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Development Tools
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Tools and environments that power my development workflow.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-700 dark:text-gray-200">• VS Code</div>
                <div className="text-sm text-gray-700 dark:text-gray-200">• Git & GitHub</div>
                <div className="text-sm text-gray-700 dark:text-gray-200">• Docker</div>
                <div className="text-sm text-gray-700 dark:text-gray-200">• Terminal/CLI</div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Cpu size={24} className="text-orange-600 dark:text-orange-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Technologies
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Modern technologies and frameworks I love working with.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-700 dark:text-gray-200">• Vite & Webpack</div>
                <div className="text-sm text-gray-700 dark:text-gray-200">• Tailwind CSS</div>
                <div className="text-sm text-gray-700 dark:text-gray-200">• Framer Motion</div>
                <div className="text-sm text-gray-700 dark:text-gray-200">• REST APIs</div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="md:col-span-2 lg:col-span-3">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <Database size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Current Projects
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Here are some projects I'm currently working on or have recently completed.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Personal Website</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Built with React 19, Vite, and Tailwind CSS v4. Features modern UI components and smooth animations.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Coming Soon...</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
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
