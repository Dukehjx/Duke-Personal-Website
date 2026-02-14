import React from "react";
import { cn } from "@/lib/utils";

const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[16rem] sm:auto-rows-[20rem] md:auto-rows-[22rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 sm:col-span-1 lg:col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-4 sm:p-5 md:p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 origin-left transform-gpu text-[#D7D7D7] transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">
        {name}
      </h3>
      <p className="max-w-lg text-sm sm:text-base text-[#D7D7D7]/70 leading-relaxed">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <button className="pointer-events-auto bg-gradient-to-r from-[#D00252] to-[#174DE3] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:from-[#e00262] hover:to-[#275de8] shadow-lg shadow-[#D00252]/30 transition-all">
        {cta}
      </button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoGrid, BentoCard };
