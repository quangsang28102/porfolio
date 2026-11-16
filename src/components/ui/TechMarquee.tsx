"use client";

import React from "react";
import { Skill } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface TechMarqueeProps {
  skills: Skill[];
  className?: string;
}

export function TechMarquee({ skills, className }: TechMarqueeProps) {
  // Ensure enough items in one track so it comfortably spans any screen width
  const trackItems = [...skills, ...skills];

  const renderBadge = (skill: Skill, index: number, prefix: string) => (
    <div
      key={`${prefix}-${skill.name}-${index}`}
      className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-sm font-mono backdrop-blur-sm transition-all duration-300 hover:border-rose-400 dark:hover:border-rose-500/60 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/90 hover:scale-[1.03] shadow-sm shrink-0 cursor-default"
    >
      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shrink-0" />
      <span className="whitespace-nowrap font-medium">{skill.name}</span>
      <span className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 border-l border-zinc-200 dark:border-zinc-700/60 pl-2 whitespace-nowrap">
        {skill.category}
      </span>
    </div>
  );

  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden py-4 select-none",
        className
      )}
    >
      {/* Side gradient fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-zinc-50 via-zinc-50/90 dark:from-[#09090b] dark:via-[#09090b]/90 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-zinc-50 via-zinc-50/90 dark:from-[#09090b] dark:via-[#09090b]/90 to-transparent z-10" />

      {/* Dual track infinite marquee with GPU acceleration */}
      <div className="flex w-max">
        {/* Track 1 */}
        <div className="flex shrink-0 items-center gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused] will-change-transform">
          {trackItems.map((skill, index) => renderBadge(skill, index, "track-1"))}
        </div>
        {/* Track 2 (Cloned for flawless seamless loop) */}
        <div
          className="flex shrink-0 items-center gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused] will-change-transform"
          aria-hidden="true"
        >
          {trackItems.map((skill, index) => renderBadge(skill, index, "track-2"))}
        </div>
      </div>
    </div>
  );
}
