import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const Dock = React.forwardRef(({
  className,
  children,
  direction = "middle",
  iconSize = 40,
  iconMagnification = 60,
  iconDistance = 140,
  disableMagnification = false,
  ...props
}, ref) => {
  const mouseX = useMotionValue(Infinity);

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        mouseX: mouseX,
        iconSize: iconSize,
        iconMagnification: iconMagnification,
        iconDistance: iconDistance,
        disableMagnification: disableMagnification,
      });
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      {...props}
      className={cn(
        "mx-auto flex h-[58px] w-max gap-2 rounded-2xl border p-2 backdrop-blur-md",
        "bg-white/10 border-white/20 dark:bg-black/30 dark:border-gray-700/30",
        {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        },
        className
      )}
    >
      {renderChildren()}
    </motion.div>
  );
});

Dock.displayName = "Dock";

export const DockIcon = ({
  size = 40,
  magnification = 60,
  distance = 140,
  mouseX,
  className,
  children,
  disableMagnification = false,
  ...props
}) => {
  const ref = useRef(null);

  const distanceCalc = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size]
  );

  let width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  if (disableMagnification) {
    width = useMotionValue(size);
  }

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      whileHover={{ scale: disableMagnification ? 1 : 1.1 }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        "bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800",
        "transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";
