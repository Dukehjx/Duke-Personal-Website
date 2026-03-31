import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["Develop", "Create", "Secure"];
const DURATION_MS = 2700;

const LoadingScreen = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(Math.floor((elapsed / DURATION_MS) * 100), 100);
      setCount(progress);

      if (progress < 100) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setTimeout(() => onComplete(), 400);
      }
    };

    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [onComplete]);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col justify-between font-body"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <motion.div
        className="p-6 md:p-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span
          className="text-xs uppercase tracking-[0.3em]"
          style={{ color: "#878787" }}
        >
          Portfolio
        </span>
      </motion.div>

      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic"
            style={{ color: "rgba(245,245,245,0.8)" }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex justify-end mb-4">
          <span
            className="text-6xl md:text-8xl lg:text-9xl font-display italic tabular-nums"
            style={{ color: "#f5f5f5" }}
          >
            {String(count).padStart(3, "0")}
          </span>
        </div>

        <div
          className="h-[3px] w-full rounded-full"
          style={{ backgroundColor: "rgba(31,31,31,0.5)" }}
        >
          <div
            className="h-full rounded-full transition-transform duration-75 origin-left"
            style={{
              background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
              transform: `scaleX(${count / 100})`,
              boxShadow: "0 0 8px rgba(137,170,204,0.35)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
