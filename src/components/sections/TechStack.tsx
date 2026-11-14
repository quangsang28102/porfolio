"use client";

import React, { useState } from "react";
import { getPortfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { SkillCategory } from "@/types/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { Code2, Layers, Database, Cpu, TerminalSquare, Sparkles } from "lucide-react";

export function TechStack() {
  const { language, t } = useLanguage();
  const currentData = getPortfolioData(language);
  const { skills } = currentData;
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | "All">("All");

  const categories: { label: string; value: SkillCategory | "All" }[] = [
    { label: t("skills.all"), value: "All" },
    { label: "Frontend", value: "Frontend" },
    { label: "Backend", value: "Backend" },
    { label: "Languages", value: "Languages" },
    { label: "Database", value: "Database" },
    { label: "DevOps & Tools", value: "DevOps & Tools" },
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Layers className="w-3.5 h-3.5" />;
      case "Backend":
        return <Cpu className="w-3.5 h-3.5" />;
      case "Languages":
        return <Code2 className="w-3.5 h-3.5" />;
      case "Database":
        return <Database className="w-3.5 h-3.5" />;
      case "DevOps & Tools":
        return <TerminalSquare className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-zinc-200 dark:border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <Reveal>
          <div className="flex flex-col items-start mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-rose-600 dark:text-rose-500 mb-2">
              {t("skills.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
              {t("skills.heading")}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
              {t("skills.sub")}
            </p>
          </div>
        </Reveal>

        {/* Marquee animation */}
        <div className="mb-12">
          <TechMarquee skills={skills} />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-rose-600 text-white shadow-md shadow-rose-950/20 border border-rose-500 font-semibold"
                    : "bg-white dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-800 shadow-sm"
                }`}
              >
                {cat.value !== "All" && getCategoryIcon(cat.value)}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {filteredSkills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 0.04}>
              <div className="group relative p-4 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:border-rose-400 dark:hover:border-rose-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/90 transition-all duration-300 flex flex-col justify-between h-24 shadow-sm">
                <div className="flex items-start justify-between">
                  <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    {getCategoryIcon(skill.category)}
                  </span>
                  {skill.featured && (
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors truncate">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {skill.category}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
