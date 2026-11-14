"use client";

import React from "react";
import { Skill } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface TechMarqueeProps {
  skills: Skill[];
  className?: string;
}

export function TechMarquee({ skills, className }: TechMarqueeProps) {
  // Duplicate for seamless endless marquee loop
  const marqueeItems = [...skills, ...skills, ...skills];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden py-4 select-none mask-gradient",
        className
      )}
    >
      {/* Side gradient fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-50 dark:from-[#09090b] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-50 dark:from-[#09090b] to-transparent z-10" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 items-center">
        {marqueeItems.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-sm font-mono backdrop-blur-sm transition-all duration-200 hover:border-rose-400 dark:hover:border-rose-500/50 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/80 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>{skill.name}</span>
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 border-l border-zinc-200 dark:border-zinc-700/60 pl-2">
              {skill.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
