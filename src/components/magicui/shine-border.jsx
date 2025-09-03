import React from "react";
import { cn } from "@/lib/utils";

export function ShineBorder({
  className,
  duration = 14,
  shineColor = "#ffffff",
  borderWidth = 0.1,
  style,
  ...props
}) {
  const shineColors = Array.isArray(shineColor) ? shineColor : [shineColor];
  
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-lg",
        className
      )}
      style={{
        background: `conic-gradient(from 0deg, transparent 0deg, ${shineColors.join(", ")} 60deg, transparent 120deg)`,
        animation: `shine ${duration}s linear infinite`,
        padding: `${borderWidth}px`,
        ...style,
      }}
      {...props}
    >
      <div className="h-full w-full rounded-lg bg-transparent" />
    </div>
  );
}
