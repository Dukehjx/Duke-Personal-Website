import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

export const AnimatedThemeToggler = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const handleClick = () => {
    console.log('Theme toggler clicked, current theme:', theme);
    toggleTheme();
  };

  return (
    <motion.button
      onClick={handleClick}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full",
        "bg-white/30 dark:bg-black/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/20",
        "hover:bg-white/50 dark:hover:bg-black/50 transition-colors duration-200",
        "focus:outline-none focus:ring-2 focus:ring-blue-500/50",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <motion.div
          className="absolute"
          animate={{
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          <Sun size={18} className="text-yellow-500" />
        </motion.div>
        
        <motion.div
          className="absolute"
          animate={{
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          <Moon size={18} className="text-blue-400" />
        </motion.div>
      </motion.div>
    </motion.button>
  );
};
