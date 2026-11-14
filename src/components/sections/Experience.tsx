"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function Experience() {
  const { experiences } = portfolioData;

  if (!experiences || experiences.length === 0) return null;

  return (
    <section id="experience" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <Reveal>
          <div className="flex flex-col items-start mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-rose-500 mb-2">
              03 // KINH NGHIỆM THỰC CHIẾN
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Hành trình tích lũy kinh nghiệm kỹ thuật
            </h2>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8">
              {/* Timeline Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-rose-500 flex items-center justify-center">
                {exp.isCurrent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                )}
              </div>

              <Reveal delay={index * 0.1}>
                <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 backdrop-blur-sm">
                  {/* Role & Current status */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2">
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/30">
                          Hiện tại
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        {exp.startDate} — {exp.endDate || "Hiện tại"}
                      </span>
                    </div>
                  </div>

                  {/* Company & Location */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 mb-4">
                    <span className="flex items-center gap-1.5 text-rose-400 font-medium">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.organization}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1 text-zinc-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    )}
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mb-6 space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                        Thành tựu nổi bật:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((ach, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-800/60">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-800/60 text-zinc-300 border border-zinc-700/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

