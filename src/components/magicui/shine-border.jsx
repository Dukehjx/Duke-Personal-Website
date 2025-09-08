import React from "react";
import { cn } from "@/lib/utils";

export function ShineBorder({
  className,
  duration = 14,            // seconds
  shineColor = "#8b5cf6",    // can pass array too
  borderWidth = 2,           // px
  radius = "1rem",           // px or any CSS length
  style,
  ...props
}) {
  const colors = Array.isArray(shineColor) ? shineColor : [shineColor];
  const gradient = `radial-gradient(transparent 35%, ${colors.join(
    ","
  )} 55%, transparent 72%)`;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[var(--shine-radius)]",
        className
      )}
      style={{
        "--shine-radius": typeof radius === "number" ? `${radius}px` : radius,
        ...style,
      }}
      {...props}
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          // texture that will move
          backgroundImage: gradient,
          backgroundSize: "300% 300%",
          // border thickness
          padding: `${borderWidth}px`,
          // ⬇︎ THE IMPORTANT PART: robust mask for ring-only effect
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          mask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          // animation
          animation: `shine ${duration}s linear infinite`,
        }}
      />
    </div>
  );
}
