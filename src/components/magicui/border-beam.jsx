import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BorderBeam({
  className,
  size = 50,
  duration = 6,
  delay = 0,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
  ...props
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden rounded-lg",
        className
      )}
      style={style}
      {...props}
    >
      <motion.div
        className="absolute -inset-2"
        initial={{ rotate: initialOffset }}
        animate={{
          rotate: reverse ? initialOffset - 360 : initialOffset + 360,
        }}
        transition={{
  duration,
  delay,
  repeat: Infinity,
  ease: "linear",
  ...(transition || {}),
}}
        style={{
          background: `conic-gradient(from 0deg, transparent, ${colorFrom}, ${colorTo}, transparent)`,
          borderRadius: "inherit",
        }}
      />
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background: "inherit",
          borderRadius: "inherit",
          padding: `${borderWidth}px`,
        }}
      >
        <div
          className="h-full w-full rounded-lg"
          style={{
            background: "var(--background, white)",
            borderRadius: "inherit",
          }}
        />
      </div>
    </div>
  );
}
