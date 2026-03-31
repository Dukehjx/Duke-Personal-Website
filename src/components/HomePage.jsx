import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hls from "hls.js";
import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

const ROLES = ["Developer", "AI Enthusiast", "Security Researcher", "Musician"];

const PROJECTS = [
  {
    title: "NeuroAegis",
    subtitle: "AI Healthcare",
    image: "/projects/neuroaegis.png",
    href: "https://www.neuroaegis.com/",
    tag: "AI / Health",
  },
  {
    title: "ShanghaiWalk",
    subtitle: "Cultural Heritage",
    image: "/projects/shanghaiwalk.png",
    href: "https://shanghaiwalk.vercel.app/",
    tag: "Culture",
  },
  {
    title: "SoiMenu",
    subtitle: "Digital Menu",
    image: "/projects/soimenu.png",
    href: "https://online-ordering-website.vercel.app/",
    tag: "E-commerce",
  },
  {
    title: "Public Matters",
    subtitle: "Governance",
    image: "/projects/public-matters.png",
    href: "https://public-matters.vercel.app/",
    tag: "Civic Tech",
  },
  {
    title: "AP Researcher",
    subtitle: "Academic Platform",
    image: "/projects/ap-researcher.png",
    href: "https://ap-researcher.vercel.app/",
    tag: "Education",
  },
];

const GALLERY_COL1 = [
  { image: "/ICO-2025/ICO2025-1.jpg", title: "ICO 2025 — Award Ceremony" },
  { image: "/Banquet%202025/Banquet%201.jpeg", title: "Annual Banquet 2025" },
  { image: "/Med%20Art%20Show/Med%20Art%201.jpg", title: "Med Art Show" },
];

const GALLERY_COL2 = [
  { image: "/ICS%20Got%20Talent/Got%20Talent%201.jpg", title: "ICS Got Talent" },
  { image: "/K-village%20Kids%20Show/Kids%20Show%201.jpg", title: "K-Village Kids Show" },
  { image: "/ICO-2025/ICO2025-3.jpg", title: "ICO 2025 — Competition" },
];

const STATS = [
  { value: "5+", label: "Projects Shipped" },
  { value: "15+", label: "Technologies" },
  { value: "ICO '25", label: "Bronze Medalist" },
];

const SOCIALS = [
  { name: "GitHub", href: "https://github.com/Dukehjx" },
  { name: "X", href: "https://x.com/DukeHu0111" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/junxi-hu" },
  { name: "Facebook", href: "https://www.facebook.com/duke.hu.2025/" },
];

const TRAVEL_ENTRIES = [
  { title: "First Adventure", desc: "The journey of a thousand miles begins with a single step.", date: "Coming Soon" },
  { title: "City Explorations", desc: "Discovering urban landscapes and hidden gems around the world.", date: "Coming Soon" },
  { title: "Cultural Encounters", desc: "Meeting new perspectives, traditions, and cuisines.", date: "Coming Soon" },
  { title: "Nature & Beyond", desc: "Exploring the great outdoors and finding peace in nature.", date: "Coming Soon" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
};

function initHls(videoEl) {
  if (!videoEl) return null;
  if (Hls.isSupported()) {
    const hls = new Hls({ enableWorker: false });
    hls.loadSource(HLS_SRC);
    hls.attachMedia(videoEl);
    return hls;
  }
  if (videoEl.canPlayType("application/vnd.apple.mpegurl")) {
    videoEl.src = HLS_SRC;
  }
  return null;
}

const GradientRing = ({ className = "" }) => (
  <span
    className={`absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${className}`}
    style={{ background: "linear-gradient(90deg, #89AACC, #4E85BF)" }}
  />
);

const ProjectCard = ({ project, index }) => (
  <motion.a
    href={project.href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative overflow-hidden rounded-2xl border group cursor-pointer block"
    style={{
      borderColor: "#1f1f1f",
      backgroundColor: "#141414",
      aspectRatio: "16/10",
    }}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{
      duration: 0.7,
      delay: index * 0.07,
      ease: [0.25, 0.1, 0.25, 1],
    }}
  >
    <img
      src={project.image}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
    {/* always-visible bottom label */}
    <div
      className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center justify-between"
      style={{
        background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 100%)",
      }}
    >
      <div>
        <p className="text-sm font-medium leading-tight" style={{ color: "#f5f5f5" }}>
          {project.title}
        </p>
        <p className="text-xs" style={{ color: "#878787" }}>
          {project.subtitle}
        </p>
      </div>
      <span
        className="text-[10px] px-2 py-0.5 rounded-full border"
        style={{ borderColor: "rgba(137,170,204,0.3)", color: "#89AACC" }}
      >
        {project.tag}
      </span>
    </div>
    {/* hover overlay */}
    <div className="absolute inset-0 bg-[#0a0a0a]/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="relative">
        <span
          className="absolute inset-[-2px] rounded-full"
          style={{ background: "linear-gradient(90deg, #89AACC, #4E85BF)" }}
        />
        <span className="relative block px-5 py-2.5 rounded-full bg-white text-[#0a0a0a] text-sm font-medium">
          View — <span className="font-display italic">{project.title}</span>
        </span>
      </div>
    </div>
  </motion.a>
);

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(
    () => !sessionStorage.getItem("hasVisited")
  );
  const [scrollY, setScrollY] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const navigate = useNavigate();

  const heroRef = useRef(null);
  const heroVideoRef = useRef(null);
  const footerVideoRef = useRef(null);
  const marqueeRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2000
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    const h1 = initHls(heroVideoRef.current);
    const h2 = initHls(footerVideoRef.current);
    return () => {
      h1?.destroy();
      h2?.destroy();
    };
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      );
      tl.fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        0.3
      );

      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          duration: 40,
          ease: "none",
          repeat: -1,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [isLoading]);

  const { scrollYProgress: galleryProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });
  const col1Y = useTransform(galleryProgress, [0, 1], [100, -150]);
  const col2Y = useTransform(galleryProgress, [0, 1], [-100, 150]);

  const scrollTo = useCallback((href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={() => {
          sessionStorage.setItem("hasVisited", "1");
          setIsLoading(false);
        }} />
      )}

      <div className="font-body" style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5" }}>
        <Navbar />

        {/* ═══════════════ HERO ═══════════════ */}
        <section
          id="hero"
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <video
              ref={heroVideoRef}
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div
              className="absolute bottom-0 left-0 right-0 h-48"
              style={{ background: "linear-gradient(to top, #0a0a0a, transparent)" }}
            />
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p
              className="blur-in text-xs uppercase tracking-[0.3em] mb-8"
              style={{ color: "#878787" }}
            >
              Portfolio &rsquo;26
            </p>

            <h1
              className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight mb-6"
            >
              Duke Hu
            </h1>

            <p className="blur-in text-lg md:text-xl mb-4" style={{ color: "#878787" }}>
              A{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  className="inline-block font-display italic"
                  style={{ color: "#f5f5f5" }}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>{" "}
              based in Shanghai.
            </p>

            <p
              className="blur-in text-sm md:text-base max-w-md mx-auto mb-12"
              style={{ color: "#878787" }}
            >
              Building digital experiences at the intersection of development,
              artificial intelligence, and cybersecurity.
            </p>

            <div className="blur-in inline-flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollTo("#works")}
                className="group relative rounded-full hover:scale-105 transition-transform duration-300"
              >
                <GradientRing />
                <span
                  className="relative block rounded-full text-sm px-7 py-3.5 transition-colors duration-300 bg-[#f5f5f5] text-[#0a0a0a] group-hover:bg-[#0a0a0a] group-hover:text-[#f5f5f5]"
                >
                  See Works
                </span>
              </button>

              <a
                href="mailto:hjxduke080111@gmail.com"
                className="group relative rounded-full hover:scale-105 transition-transform duration-300 inline-flex"
              >
                <GradientRing />
                <span className="relative block rounded-full text-sm px-7 py-3.5 bg-[#0a0a0a] text-[#f5f5f5] border-2 border-[#1f1f1f] group-hover:border-transparent transition-colors duration-300">
                  Reach out...
                </span>
              </a>
            </div>
          </div>

          <div
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-500 ${
              scrollY > 100 ? "opacity-0" : "opacity-100"
            }`}
          >
            <span
              className="text-xs uppercase tracking-[0.2em]"
              style={{ color: "#878787" }}
            >
              Scroll
            </span>
            <div
              className="relative w-px h-10 overflow-hidden"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              <div
                className="absolute inset-x-0 w-full h-3 animate-scroll-down"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, #89AACC, transparent)",
                }}
              />
            </div>
          </div>
        </section>

        {/* ═══════════════ SELECTED WORKS ═══════════════ */}
        <section id="works" className="py-12 md:py-16" style={{ backgroundColor: "#0a0a0a" }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
            <motion.div
              {...fadeInUp}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px" style={{ backgroundColor: "#1f1f1f" }} />
                  <span
                    className="text-xs uppercase tracking-[0.3em]"
                    style={{ color: "#878787" }}
                  >
                    Selected Work
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                  Featured{" "}
                  <span className="font-display italic">projects</span>
                </h2>
                <p
                  className="mt-3 text-sm md:text-base max-w-md"
                  style={{ color: "#878787" }}
                >
                  A selection of projects I&rsquo;ve built, from concept to launch.
                </p>
              </div>

              <button
                onClick={() => navigate("/computer")}
                className="group relative hidden md:inline-flex items-center gap-2 rounded-full text-sm shrink-0 hover:scale-105 transition-transform duration-300"
              >
                <GradientRing />
                <span
                  className="relative flex items-center gap-2 rounded-full px-5 py-2.5 border transition-colors duration-300"
                  style={{
                    borderColor: "#1f1f1f",
                    backgroundColor: "#0a0a0a",
                    color: "#f5f5f5",
                  }}
                >
                  View all work{" "}
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </button>
            </motion.div>

            {/* Row 1: 3 equal cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
              {PROJECTS.slice(0, 3).map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
            {/* Row 2: 2 wider cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROJECTS.slice(3).map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i + 3} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ TRAVEL JOURNAL (Placeholder) ═══════════════ */}
        <section
          id="travel"
          className="py-16 md:py-24"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
            <motion.div
              {...fadeInUp}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px" style={{ backgroundColor: "#1f1f1f" }} />
                  <span
                    className="text-xs uppercase tracking-[0.3em]"
                    style={{ color: "#878787" }}
                  >
                    Travel Journal
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                  World{" "}
                  <span className="font-display italic">wanderings</span>
                </h2>
                <p
                  className="mt-3 text-sm md:text-base max-w-md"
                  style={{ color: "#878787" }}
                >
                  Adventures and stories from around the globe. Stay tuned.
                </p>
              </div>

              <span
                className="hidden md:inline-flex items-center gap-2 rounded-full text-sm px-5 py-2.5 border"
                style={{ borderColor: "#1f1f1f", color: "#878787" }}
              >
                Coming Soon
              </span>
            </motion.div>

            <div className="space-y-4">
              {TRAVEL_ENTRIES.map((entry, i) => (
                <motion.div
                  key={entry.title}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 rounded-[20px] sm:rounded-full border transition-colors duration-300"
                  style={{
                    borderColor: "#1f1f1f",
                    backgroundColor: "rgba(20,20,20,0.3)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${
                        ["#89AACC", "#4E85BF", "#89AACC", "#4E85BF"][i]
                      }22, ${
                        ["#4E85BF", "#89AACC", "#4E85BF", "#89AACC"][i]
                      }22)`,
                      border: "1px solid rgba(137,170,204,0.15)",
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-medium truncate">
                      {entry.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm truncate"
                      style={{ color: "#878787" }}
                    >
                      {entry.desc}
                    </p>
                  </div>
                  <span
                    className="text-xs shrink-0 px-3 py-1 rounded-full border"
                    style={{ borderColor: "#1f1f1f", color: "#878787" }}
                  >
                    {entry.date}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ MOMENTS — Parallax Gallery ═══════════════ */}
        <section
          id="moments"
          ref={galleryRef}
          className="py-16 md:py-24 overflow-hidden"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
            <motion.div {...fadeInUp} className="text-center mb-12 md:mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ backgroundColor: "#1f1f1f" }} />
                <span
                  className="text-xs uppercase tracking-[0.3em]"
                  style={{ color: "#878787" }}
                >
                  Moments
                </span>
                <div className="w-8 h-px" style={{ backgroundColor: "#1f1f1f" }} />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-3">
                Visual{" "}
                <span className="font-display italic">memories</span>
              </h2>
              <p
                className="text-sm md:text-base max-w-md mx-auto"
                style={{ color: "#878787" }}
              >
                Highlights from events, competitions, and performances.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-[900px] mx-auto">
              <motion.div className="flex flex-col gap-6" style={{ y: col1Y }}>
                {GALLERY_COL1.map((item) => (
                  <motion.div
                    key={item.title}
                    className="group relative aspect-square max-w-[400px] w-full mx-auto overflow-hidden rounded-2xl border"
                    style={{ borderColor: "#1f1f1f", backgroundColor: "#141414" }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-sm font-medium">{item.title}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col gap-6 md:mt-20"
                style={{ y: col2Y }}
              >
                {GALLERY_COL2.map((item) => (
                  <motion.div
                    key={item.title}
                    className="group relative aspect-square max-w-[400px] w-full mx-auto overflow-hidden rounded-2xl border"
                    style={{ borderColor: "#1f1f1f", backgroundColor: "#141414" }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-sm font-medium">{item.title}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════ STATS ═══════════════ */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#0a0a0a" }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center py-8 md:py-12 border-t"
                  style={{ borderColor: "#1f1f1f" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <div className="text-5xl md:text-6xl lg:text-7xl font-display italic mb-3">
                    {stat.value}
                  </div>
                  <div
                    className="text-sm uppercase tracking-[0.2em]"
                    style={{ color: "#878787" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ CONTACT / FOOTER ═══════════════ */}
        <footer
          id="contact"
          className="relative pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div style={{ transform: "scaleY(-1)" }} className="absolute inset-0">
              <video
                ref={footerVideoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10">
            {/* Marquee */}
            <div className="overflow-hidden mb-12 md:mb-16">
              <div
                ref={marqueeRef}
                className="flex whitespace-nowrap"
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <span
                    key={i}
                    className="text-5xl md:text-7xl lg:text-[9rem] font-display italic uppercase tracking-tight mx-4 shrink-0 select-none"
                    style={{ color: "rgba(245,245,245,0.05)" }}
                  >
                    Building the Future • Duke Hu •{" "}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mb-12 md:mb-16">
              <motion.div {...fadeInUp}>
                <a
                  href="mailto:hjxduke080111@gmail.com"
                  className="group relative inline-flex rounded-full hover:scale-105 transition-transform duration-300"
                >
                  <span
                    className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(90deg, #89AACC, #4E85BF)",
                    }}
                  />
                  <span
                    className="relative flex items-center gap-3 rounded-full px-8 py-4 text-base md:text-lg border transition-colors duration-300"
                    style={{
                      borderColor: "#1f1f1f",
                      backgroundColor: "#0a0a0a",
                      color: "#f5f5f5",
                    }}
                  >
                    hjxduke080111@gmail.com
                    <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      ↗
                    </span>
                  </span>
                </a>
              </motion.div>
            </div>

            {/* Footer bar */}
            <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
              <div
                className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t"
                style={{ borderColor: "#1f1f1f" }}
              >
                <div className="flex items-center gap-6">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors duration-200 hover:text-[#f5f5f5]"
                      style={{ color: "#878787" }}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-sm" style={{ color: "#878787" }}>
                    Available for projects
                  </span>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-xs" style={{ color: "rgba(135,135,135,0.5)" }}>
                  © 2025 Duke Hu. Built with React, GSAP & Framer Motion.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
