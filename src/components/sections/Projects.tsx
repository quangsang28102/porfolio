"use client";

import React, { useState } from "react";
import { getPortfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Project } from "@/types/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Image from "next/image";

export function Projects() {
  const { language, t } = useLanguage();
  const currentData = getPortfolioData(language);
  const { projects } = currentData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Fullstack", "Web", "3D & WebGL"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 border-t border-zinc-200 dark:border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-rose-600 dark:text-rose-500 mb-2 block">
                {t("proj.badge")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
                {t("proj.heading")}
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors cursor-pointer ${activeFilter === cat
                      ? "bg-rose-600 text-white border border-rose-500 font-semibold shadow-sm"
                      : "bg-white dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 shadow-sm"
                    }`}
                >
                  {cat === "All" ? t("proj.all") : cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <SpotlightCard
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer flex flex-col justify-between h-full hover:-translate-y-2 transition-transform duration-300"
              >
                <div>
                  {/* Image Preview */}
                  {project.images && project.images.length > 0 && (
                    <div className="relative w-full h-52 rounded-xl overflow-hidden mb-5 border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-zinc-950 via-transparent to-transparent" />

                      {project.featured && (
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-rose-600 text-white flex items-center gap-1 shadow-lg shadow-rose-950/50">
                          <Sparkles className="w-3 h-3" />
                          <span>{t("proj.featured")}</span>
                        </div>
                      )}

                      {project.inProgress && (
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-400 text-zinc-950 flex items-center gap-1.5 shadow-lg shadow-amber-950/40 border border-amber-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 animate-ping" />
                          <span>{t("proj.inProgress")}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Category, Live Demo Badge, and Role */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                        {project.category}
                      </span>
                      {project.inProgress && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                          <span>{t("proj.inProgress")}</span>
                        </span>
                      )}
                      <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
                        • {project.role}
                      </span>
                    </div>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all shadow-sm"
                        title={project.demoUrl}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{project.demoUrl.replace("https://", "").replace(/\/$/, "")} ↗</span>
                      </a>
                    )}
                  </div>

                  {/* Title & Arrow */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/60 text-zinc-500 dark:text-zinc-400 group-hover:text-rose-600 dark:group-hover:text-rose-400 group-hover:bg-rose-500/10 transition-all duration-300 shrink-0">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-6">
                    {project.summary}
                  </p>
                </div>

                {/* Footer: Tech Stack and quick action */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800/40 text-zinc-500">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800/60 text-xs font-mono">
                    <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1 group-hover:underline">
                      {t("proj.viewDetail")}
                    </span>
                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-sm shadow-emerald-950/20 hover:scale-105"
                          aria-label="Demo Trực Tiếp"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/90 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white border border-zinc-200 dark:border-zinc-700/80 transition-all"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
