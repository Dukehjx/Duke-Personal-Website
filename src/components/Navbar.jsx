import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Computer", href: "/computer" },
  { label: "Music", href: "/music" },
  { label: "CV", href: "/cv" },
];

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = useCallback(
    (href) => {
      if (href.startsWith("#")) {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(href);
      }
    },
    [navigate]
  );

  const isActive = (href) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 font-body">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 px-2 py-2 transition-shadow duration-300 ${
          scrollY > 100 ? "shadow-md shadow-black/20" : ""
        }`}
        style={{ backgroundColor: "rgba(20,20,20,0.85)" }}
      >
        {/* Logo */}
        <button
          onClick={() => handleClick("/")}
          className="group relative w-9 h-9 rounded-full flex items-center justify-center shrink-0 hover:scale-110 transition-transform duration-200"
        >
          <span
            className="absolute inset-0 rounded-full animate-gradient-shift"
            style={{
              background: "linear-gradient(90deg, #89AACC, #4E85BF, #89AACC)",
              backgroundSize: "200% 100%",
            }}
          />
          <span
            className="relative flex items-center justify-center rounded-full"
            style={{
              width: "calc(100% - 3px)",
              height: "calc(100% - 3px)",
              backgroundColor: "#0a0a0a",
            }}
          >
            <span className="font-display italic text-[13px] text-[#f5f5f5]">DH</span>
          </span>
        </button>

        <span
          className="hidden sm:block w-px h-5 mx-1"
          style={{ backgroundColor: "#1f1f1f" }}
        />

        {/* Nav links */}
        {NAV_LINKS.map((link) => (
          <button
            key={link.label}
            onClick={() => handleClick(link.href)}
            className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200"
            style={{
              color: isActive(link.href) ? "#f5f5f5" : "#878787",
              backgroundColor: isActive(link.href) ? "rgba(31,31,31,0.6)" : "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#f5f5f5";
              e.currentTarget.style.backgroundColor = "rgba(31,31,31,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = isActive(link.href) ? "#f5f5f5" : "#878787";
              e.currentTarget.style.backgroundColor = isActive(link.href) ? "rgba(31,31,31,0.6)" : "transparent";
            }}
          >
            {link.label}
          </button>
        ))}

        <span
          className="hidden sm:block w-px h-5 mx-1"
          style={{ backgroundColor: "#1f1f1f" }}
        />

        {/* Say hi */}
        <a
          href="mailto:hjxduke080111@gmail.com"
          className="group relative text-xs sm:text-sm rounded-full"
        >
          <span
            className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "linear-gradient(90deg, #89AACC, #4E85BF)" }}
          />
          <span
            className="relative flex items-center gap-1 rounded-full backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2"
            style={{ backgroundColor: "rgba(20,20,20,0.9)", color: "#f5f5f5" }}
          >
            Say hi{" "}
            <span className="inline-block group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              ↗
            </span>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
