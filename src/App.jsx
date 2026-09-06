import { useLayoutEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { Footer } from "./components/SiteElements";
import HomePage from "./components/HomePage";
import ComputerPage from "./components/ComputerPage";
import MusicPage from "./components/MusicPage";
import CVPage from "./components/CVPage";

const titles = {
  "/": "Duke Hu — Developer, Researcher & Musician",
  "/computer": "Work & Research — Duke Hu",
  "/music": "Music & Performances — Duke Hu",
  "/cv": "Curriculum Vitae — Junxi (Duke) Hu",
};

function Site() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  useLayoutEffect(() => {
    document.title = titles[pathname] || titles["/"];
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      target?.scrollIntoView();
      target?.focus({ preventScroll: true });
    } else if (navigationType !== "POP") {
      window.scrollTo(0, 0);
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
  }, [pathname, hash, navigationType]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/computer" element={<ComputerPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}
