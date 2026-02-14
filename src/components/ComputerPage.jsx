import React from "react";
import { useNavigate } from "react-router-dom";
import { Dock, DockIcon } from "./magicui/dock";
import { BentoGrid, BentoCard } from "./magicui/bento-grid";
import Marquee from "./magicui/marquee";
import { IconCloud } from "./magicui/icon-cloud";
import { 
  Home, 
  Computer, 
  Music, 
  Heart, 
  FileText, 
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
  Sword,
  Mail
} from "lucide-react";

const ComputerPage = () => {
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

  const Icons = {
    cpp: () => (
      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path fill="#00549d" fillRule="evenodd" d="M22.903 1.566a3.693 3.693 0 0 1 2.194 0l18.967 8.329c.896.394 1.436 1.287 1.436 2.378v23.454c0 1.091-.54 1.984-1.436 2.378l-18.967 8.329a3.693 3.693 0 0 1-2.194 0L3.936 37.105C3.04 36.711 2.5 35.818 2.5 34.727V11.273c0-1.091.54-1.984 1.436-2.378L22.903 1.566z"/>
        <path fill="#0086d4" d="M24 5.5L40.5 12.5v23L24 42.5 7.5 35.5v-23L24 5.5z"/>
        <path fill="#ffffff" d="M24 33.5c5.247 0 9.5-4.253 9.5-9.5s-4.253-9.5-9.5-9.5-9.5 4.253-9.5 9.5 4.253 9.5 9.5 9.5zm0-15c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5-5.5-2.462-5.5-5.5 2.462-5.5 5.5-5.5z"/>
        <path fill="#ffffff" d="M30.5 21.5h2v2h-2v2h-2v-2h-2v-2h2v-2h2v2zm4.5 0h2v2h-2v2h-2v-2h-2v-2h2v-2h2v2z"/>
      </svg>
    ),
    java: () => (
      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path fill="#f44336" d="M23.65 24.898a.678.678 0 0 1-.665-.832c.176-.906.584-1.74 1.18-2.415.596-.675 1.341-1.186 2.158-1.48l.033-.013c.707-.237 1.442-.338 2.181-.301.739.037 1.466.21 2.142.511.676.301 1.295.729 1.828 1.265.533.536.974 1.169 1.302 1.87.328.701.539 1.46.625 2.242.086.782.047 1.574-.115 2.338-.162.764-.447 1.49-.843 2.142-.396.652-.898 1.222-1.483 1.685-.585.463-1.244.815-1.948 1.038-.704.223-1.444.316-2.185.275-.741-.041-1.471-.21-2.156-.498-.685-.288-1.317-.7-1.868-1.218-.551-.518-1.016-1.133-1.374-1.818-.358-.685-.606-1.43-.733-2.202-.127-.772-.133-1.562-.019-2.337.114-.775.346-1.525.693-2.213.347-.688.803-1.305 1.348-1.822.545-.517 1.171-.928 1.849-1.214.678-.286 1.398-.446 2.127-.472.729-.026 1.456.089 2.146.34.69.251 1.333.634 1.898 1.133.565.499 1.044 1.105 1.414 1.79.37.685.626 1.438.756 2.222.13.784.133 1.588.009 2.375-.124.787-.368 1.547-.721 2.244-.353.697-.81 1.315-1.349 1.825-.539.51-1.153.906-1.814 1.168-.661.262-1.357.388-2.055.372-.698-.016-1.386-.178-2.029-.478-.643-.3-1.232-.735-1.738-1.284-.506-.549-.922-1.201-1.227-1.925-.305-.724-.495-1.508-.561-2.313-.066-.805-.007-1.62.174-2.403.181-.783.472-1.527.86-2.196.388-.669.867-1.254 1.416-1.728.549-.474 1.16-.832 1.807-1.058.647-.226 1.32-.319 1.994-.274.674.045 1.335.204 1.951.47.616.266 1.179.635 1.662 1.09.483.455.878.99 1.168 1.579.29.589.471 1.222.534 1.871.063.649.007 1.304-.165 1.933-.172.629-.449 1.222-.817 1.751-.368.529-.822.986-1.342 1.351-.52.365-1.097.635-1.706.797-.609.162-1.244.214-1.877.154-.633-.06-1.254-.235-1.83-.516-.576-.281-1.099-.667-1.544-1.14-.445-.473-.805-1.025-1.063-1.631-.258-.606-.411-1.254-.451-1.914-.04-.66.027-1.323.198-1.958.171-.635.444-1.232.806-1.764.362-.532.809-.99 1.32-1.351.511-.361 1.077-.621 1.673-.768.596-.147 1.213-.181 1.822-.1.609.081 1.198.273 1.738.567.54.294 1.022.686 1.424 1.158.402.472.717 1.016.93 1.608.213.592.32 1.221.317 1.853-.003.632-.116 1.258-.334 1.846-.218.588-.537 1.128-.942 1.595-.405.467-.887.854-1.425 1.143-.538.289-1.122.476-1.723.552-.601.076-1.211.04-1.802-.106-.591-.146-1.153-.396-1.66-.738-.507-.342-.952-.772-1.314-1.27-.362-.498-.636-1.057-.809-1.649-.173-.592-.243-1.208-.206-1.822.037-.614.18-1.217.423-1.778.243-.561.582-1.072.999-1.509.417-.437.904-.795 1.438-1.057.534-.262 1.107-.425 1.693-.481.586-.056 1.175-.003 1.739.157.564.16 1.094.419 1.564.765.47.346.873.773 1.189 1.262.316.489.541 1.031.664 1.601.123.57.143 1.159.059 1.737-.084.578-.272 1.136-.555 1.649-.283.513-.655.972-1.099 1.356-.444.384-.95.686-1.495.891-.545.205-1.121.31-1.702.31-.581 0-1.157-.105-1.702-.31-.545-.205-1.051-.507-1.495-.891-.444-.384-.816-.843-1.099-1.356-.283-.513-.471-1.071-.555-1.649-.084-.578-.064-1.167.059-1.737.123-.57.348-1.112.664-1.601.316-.489.719-.916 1.189-1.262.47-.346 1-.605 1.564-.765.564-.16 1.153-.213 1.739-.157.586.056 1.159.219 1.693.481.534.262 1.021.62 1.438 1.057.417.437.756.948.999 1.509.243.561.386 1.164.423 1.778.037.614-.033 1.23-.206 1.822-.173.592-.447 1.151-.809 1.649-.362.498-.807.928-1.314 1.27-.507.342-1.069.592-1.66.738-.591.146-1.201.182-1.802.106-.601-.076-1.185-.263-1.723-.552-.538-.289-1.02-.676-1.425-1.143-.405-.467-.724-1.007-.942-1.595-.218-.588-.331-1.214-.334-1.846-.003-.632.104-1.261.317-1.853.213-.592.528-1.136.93-1.608.402-.472.884-.864 1.424-1.158.54-.294 1.129-.486 1.738-.567.609-.081 1.226-.047 1.822.1.596.147 1.162.407 1.673.768.511.361.958.819 1.32 1.351.362.532.635 1.129.806 1.764.171.635.238 1.298.198 1.958-.04.66-.193 1.308-.451 1.914-.258.606-.618 1.158-1.063 1.631-.445.473-.968.859-1.544 1.14-.576.281-1.197.456-1.83.516-.633.06-1.268.008-1.877-.154-.609-.162-1.186-.432-1.706-.797-.52-.365-.974-.822-1.342-1.351-.368-.529-.645-1.122-.817-1.751-.172-.629-.228-1.284-.165-1.933.063-.649.244-1.282.534-1.871.29-.589.685-1.124 1.168-1.579.483-.455 1.046-.824 1.662-1.09.616-.266 1.277-.425 1.951-.47.674-.045 1.347.048 1.994.274.647.226 1.258.584 1.807 1.058.549.474 1.028 1.059 1.416 1.728.388.669.679 1.413.86 2.196.181.783.24 1.598.174 2.403-.066.805-.256 1.589-.561 2.313-.305.724-.721 1.376-1.227 1.925-.506.549-1.095.984-1.738 1.284-.643.3-1.331.462-2.029.478-.698.016-1.394-.11-2.055-.372-.661-.262-1.275-.658-1.814-1.168-.539-.51-.996-1.128-1.349-1.825-.353-.697-.597-1.457-.721-2.244-.124-.787-.121-1.591.009-2.375.13-.784.386-1.537.756-2.222.37-.685.849-1.291 1.414-1.79.565-.499 1.208-.882 1.898-1.133.69-.251 1.417-.366 2.146-.34.729.026 1.449.186 2.127.472.678.286 1.304.697 1.849 1.214.545.517 1.001 1.134 1.348 1.822.347.688.579 1.438.693 2.213.114.775.108 1.565-.019 2.337-.127.772-.375 1.517-.733 2.202-.358.685-.823 1.3-1.374 1.818-.551.518-1.183.93-1.868 1.218-.685.288-1.415.457-2.156.498-.741.041-1.481-.052-2.185-.275-.704-.223-1.363-.575-1.948-1.038-.585-.463-1.087-1.033-1.483-1.685-.396-.652-.681-1.378-.843-2.142-.162-.764-.201-1.556-.115-2.338.086-.782.297-1.541.625-2.242.328-.701.769-1.334 1.302-1.87.533-.536 1.152-.964 1.828-1.265.676-.301 1.403-.474 2.142-.511.739-.037 1.474.064 2.181.301l.033.013c.817.294 1.562.805 2.158 1.48.596.675 1.004 1.509 1.18 2.415a.678.678 0 0 1-.665.832z"/>
        <path fill="#ff9800" d="M17.538 32.947c.4.533.938.975 1.553 1.277.615.302 1.289.459 1.972.459.683 0 1.357-.157 1.972-.459.615-.302 1.153-.744 1.553-1.277.4-.533.669-1.149.777-1.804.108-.655.052-1.327-.163-1.966-.215-.639-.581-1.225-1.069-1.715-.488-.49-1.075-.862-1.715-1.087-.64-.225-1.316-.301-1.978-.223-.662.078-1.295.321-1.852.71-.557.389-1.025.911-1.368 1.527-.343.616-.553 1.307-.613 2.022-.06.715.049 1.434.316 2.104.267.67.667 1.271 1.169 1.758.502.487 1.095.851 1.735 1.064.64.213 1.315.271 1.976.169.661-.102 1.293-.357 1.849-.747.556-.39 1.023-.916 1.366-1.537.343-.621.553-1.318.613-2.04.06-.722-.049-1.448-.316-2.124-.267-.676-.667-1.283-1.169-1.775-.502-.492-1.095-.861-1.735-1.078-.64-.217-1.315-.279-1.976-.181-.661.098-1.293.348-1.849.732-.556.384-1.023.903-1.366 1.518-.343.615-.553 1.305-.613 2.02-.06.715.049 1.434.316 2.104.267.67.667 1.271 1.169 1.758z"/>
      </svg>
    ),
    python: () => (
      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <linearGradient id="python-a" x1="26.613" x2="21.827" y1="4.393" y2="37.849" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5A9FD4"/>
          <stop offset="1" stopColor="#306998"/>
        </linearGradient>
        <linearGradient id="python-b" x1="21.827" x2="26.613" y1="10.584" y2="43.849" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFD43B"/>
          <stop offset="1" stopColor="#FFE873"/>
        </linearGradient>
        <path fill="url(#python-a)" d="M24.047 5c-1.555.063-2.633.142-3.936.367-3.848.67-4.549 2.077-4.549 4.67V14h9v2H15.22c-2.65 0-4.972 1.592-5.696 4.625-.834 3.49-.872 5.676 0 9.398.652 2.777 2.204 4.625 4.854 4.625h3.134v-4.162c0-3.007 2.603-5.674 5.696-5.674h8.903c2.477 0 4.456-2.044 4.456-4.544V11.067c0-2.415-2.04-4.234-4.456-4.67C29.498 5.91 27.635 4.941 24.047 5zm-4.572 2.833c.924 0 1.676.757 1.676 1.688 0 .93-.752 1.688-1.676 1.688-.924 0-1.676-.757-1.676-1.688 0-.93.752-1.688 1.676-1.688z"/>
        <path fill="url(#python-b)" d="M23.078 43c1.555-.063 2.633-.142 3.936-.367 3.848-.67 4.549-2.077 4.549-4.67V34h-9v-2h9.343c2.65 0 4.972-1.592 5.696-4.625.834-3.49.872-5.676 0-9.398C36.95 15.2 35.398 13.352 32.748 13.352h-3.134v4.162c0 3.007-2.603 5.674-5.696 5.674h-8.903c-2.477 0-4.456 2.044-4.456 4.544v8.622c0 2.415 2.04 4.234 4.456 4.67C16.628 42.09 18.491 43.059 22.078 43zm4.572-2.833c-.924 0-1.676-.757-1.676-1.688 0-.93.752-1.688 1.676-1.688.924 0 1.676.757 1.676 1.688 0 .93-.752 1.688-1.676 1.688z"/>
      </svg>
    ),
    googleDocs: () => (
      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path fill="#2196f3" d="M37 45H11c-1.657 0-3-1.343-3-3V6c0-1.657 1.343-3 3-3h19l10 10v29c0 1.657-1.343 3-3 3z"/>
        <path fill="#bbdefb" d="M40 13L30 3v10h10z"/>
        <path fill="#1976d2" d="M30 13h10l-10-10v10z"/>
        <path fill="#ffffff" d="M14 23h20v2H14zm0 4h20v2H14zm0 4h15v2H14zm0 4h15v2H14z"/>
      </svg>
    ),
    googleSheets: () => (
      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path fill="#4caf50" d="M37 45H11c-1.657 0-3-1.343-3-3V6c0-1.657 1.343-3 3-3h19l10 10v29c0 1.657-1.343 3-3 3z"/>
        <path fill="#c8e6c9" d="M40 13L30 3v10h10z"/>
        <path fill="#2e7d32" d="M30 13h10l-10-10v10z"/>
        <path fill="#ffffff" d="M15 23v12h18V23H15zm2 2h4v2h-4v-2zm6 0h4v2h-4v-2zm6 0h4v2h-4v-2zm-12 4h4v2h-4v-2zm6 0h4v2h-4v-2zm6 0h4v2h-4v-2zm-12 4h4v2h-4v-2zm6 0h4v2h-4v-2zm6 0h4v2h-4v-2z"/>
      </svg>
    ),
    googleSlides: () => (
      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ff9800" d="M37 45H11c-1.657 0-3-1.343-3-3V6c0-1.657 1.343-3 3-3h19l10 10v29c0 1.657-1.343 3-3 3z"/>
        <path fill="#ffe0b2" d="M40 13L30 3v10h10z"/>
        <path fill="#f57c00" d="M30 13h10l-10-10v10z"/>
        <path fill="#ffffff" d="M15 23v12h18V23H15zm2 2h14v3H17v-3zm0 5h10v2H17v-2zm0 3h10v2H17v-2z"/>
      </svg>
    ),
    msWord: () => (
      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path fill="#1976d2" d="M14 44L8 40V8l6-4h20l6 4v32l-6 4H14z"/>
        <path fill="#1e88e5" d="M14 44L8 40V8l6-4v40z"/>
        <path fill="#1565c0" d="M34 4l6 4v32l-6 4V4z"/>
        <path fill="#42a5f5" d="M8 8h32v32H8V8z"/>
        <path fill="#ffffff" d="M16 20l2 8 2-8h2l2 8 2-8h2l-3 12h-2l-2-8-2 8h-2L16 20z"/>
      </svg>
    ),
    msPowerPoint: () => (
      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path fill="#d84315" d="M14 44L8 40V8l6-4h20l6 4v32l-6 4H14z"/>
        <path fill="#ff5722" d="M14 44L8 40V8l6-4v40z"/>
        <path fill="#bf360c" d="M34 4l6 4v32l-6 4V4z"/>
        <path fill="#ff7043" d="M8 8h32v32H8V8z"/>
        <path fill="#ffffff" d="M18 20v12h2v-4h3c2.2 0 4-1.8 4-4s-1.8-4-4-4h-5zm2 2h3c1.1 0 2 .9 2 2s-.9 2-2 2h-3v-4z"/>
      </svg>
    ),
    msExcel: () => (
      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path fill="#2e7d32" d="M14 44L8 40V8l6-4h20l6 4v32l-6 4H14z"/>
        <path fill="#4caf50" d="M14 44L8 40V8l6-4v40z"/>
        <path fill="#1b5e20" d="M34 4l6 4v32l-6 4V4z"/>
        <path fill="#66bb6a" d="M8 8h32v32H8V8z"/>
        <path fill="#ffffff" d="M20 20l4 4-4 4h2.5l2.5-2.5 2.5 2.5H30l-4-4 4-4h-2.5L25 22.5 22.5 20H20z"/>
      </svg>
    ),
    csv: () => (
      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path fill="#43a047" d="M37 45H11c-1.657 0-3-1.343-3-3V6c0-1.657 1.343-3 3-3h19l10 10v29c0 1.657-1.343 3-3 3z"/>
        <path fill="#c8e6c9" d="M40 13L30 3v10h10z"/>
        <path fill="#2e7d32" d="M30 13h10l-10-10v10z"/>
        <path fill="#ffffff" d="M13 23h22v2H13zm0 4h22v2H13zm0 4h22v2H13zm0 4h22v2H13z"/>
        <circle fill="#2e7d32" cx="17" cy="25" r="1"/>
        <circle fill="#2e7d32" cx="21" cy="25" r="1"/>
        <circle fill="#2e7d32" cx="25" cy="25" r="1"/>
        <circle fill="#2e7d32" cx="17" cy="29" r="1"/>
        <circle fill="#2e7d32" cx="21" cy="29" r="1"/>
        <circle fill="#2e7d32" cx="25" cy="29" r="1"/>
        <circle fill="#2e7d32" cx="17" cy="33" r="1"/>
        <circle fill="#2e7d32" cx="21" cy="33" r="1"/>
        <circle fill="#2e7d32" cx="25" cy="33" r="1"/>
      </svg>
    ),
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] relative overflow-hidden">
      {/* Advanced AI/Tech background */}
      <div className="absolute inset-0">
        {/* Deep tech gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0d0d0d]" />
        
        {/* Glowing orbs with rotating brand colors */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[130px]" style={{ animation: 'colorRotate1 40s ease-in-out infinite, pulse 10s ease-in-out infinite' }} />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[110px]" style={{ animation: 'colorRotate2 40s ease-in-out infinite, pulse 15s ease-in-out infinite', animationDelay: '0s, 2s' }} />
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full mix-blend-screen filter blur-[90px]" style={{ animation: 'colorRotate3 40s ease-in-out infinite, pulse 20s ease-in-out infinite', animationDelay: '0s, 4s' }} />
        
        {/* Neural network connections */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D00252" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#174DE3" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#lineGradient1)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDuration: `${3 + Math.random() * 3}s`, animationDelay: `${Math.random() * 2}s` }}
            />
          ))}
        </svg>
        
        {/* Floating geometric shapes - tech aesthetic */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-[#D00252]/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-40 right-20 w-16 h-16 border-2 border-[#174DE3]/30 rounded-lg rotate-12 animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-[#D7D7D7]/20 animate-spin" style={{ animationDuration: '15s' }} />
        
        {/* Matrix-style falling code effect (subtle) */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-transparent via-[#174DE3] to-transparent"
              style={{
                left: `${10 + i * 10}%`,
                animation: `matrixFall ${5 + Math.random() * 5}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Data nodes/particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: ['#D00252', '#174DE3', '#D7D7D7'][Math.floor(Math.random() * 3)],
                animation: `dataNode ${3 + Math.random() * 4}s infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Scanline effect for futuristic feel */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#D00252] to-transparent animate-scanline" />
        </div>
      </div>

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      
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
              <Marquee className="[--duration:30s]" pauseOnHover>
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
              <Marquee className="[--duration:35s]" reverse pauseOnHover>
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
              <Marquee className="[--duration:40s]" pauseOnHover>
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
                      />
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Qwen_logo.svg/300px-Qwen_logo.svg.png?20250327025131" 
                        alt="Qwen"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
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
                      />
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/copilot-color.png" 
                        alt="Copilot"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
                      />
                      <img 
                        src="https://www.svgrepo.com/show/341819/firebase.svg" 
                        alt="Firebase"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
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
                      />
                      <img 
                        src="https://colab.research.google.com/img/colab_favicon_256px.png" 
                        alt="Google Colab"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
                      />
                      <img 
                        src="https://ollama.ai/public/ollama.png" 
                        alt="Ollama"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
                      />
                      <img 
                        src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" 
                        alt="HuggingFace"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
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
                      />
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude-color.png" 
                        alt="Claude"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
                      />
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/deepseek-color.png" 
                        alt="DeepSeek"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
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
                      />
                      <img 
                        src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" 
                        alt="Gemini"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                      />
                      <img 
                        src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/grok.png" 
                        alt="Grok"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded"
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kali-dragon-icon.svg/768px-Kali-dragon-icon.svg.png?20211125065834" alt="Kali" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                      </div>
                      {/* Metasploit */}
                      <div>
                        <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/metasploit-h33wivgvlvgtk3wmoejxq.png/metasploit-rkuireddk3p5vdgf5mil5.png?_a=DATAg1AAZAA0" alt="metasploit" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                      </div>
                      {/* Wireshark */}
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg" alt="Wireshark" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                      </div>
                      {/* Burp Suite */}
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/BurpSuite_Comunity_Edition.svg/825px-BurpSuite_Comunity_Edition.svg.png" alt="Burp Suite" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
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
                      {/* ExifTool */}
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/ExifTool_logo.svg/1200px-ExifTool_logo.svg.png?20250306210924" alt="ExifTool" className="w-8 h-8" />
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
                    className="inline-flex items-center gap-3 px-4 py-2 bg-[#174DE3]/20 hover:bg-[#174DE3]/30 text-[#174DE3] border-2 border-[#174DE3]/50 hover:border-[#174DE3]/70 rounded-lg backdrop-blur-xl hover:shadow-xl hover:shadow-[#174DE3]/20 transition-all duration-200 group"
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
                    className="inline-flex items-center gap-3 px-4 py-2 bg-[#174DE3]/20 hover:bg-[#174DE3]/30 text-[#174DE3] border-2 border-[#174DE3]/50 hover:border-[#174DE3]/70 rounded-lg backdrop-blur-xl hover:shadow-xl hover:shadow-[#174DE3]/20 transition-all duration-200 group"
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
