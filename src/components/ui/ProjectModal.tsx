"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/portfolio";
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6 md:p-8 shadow-2xl shadow-rose-950/30 text-zinc-100 z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Đóng cửa sổ"
              className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-colors z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Project Image */}
            {project.images && project.images.length > 0 && (
              <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden mb-6 border border-zinc-800 bg-zinc-900">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              </div>
            )}

            {/* Category & Status */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800">
                Vai trò: {project.role}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
              {project.title}
            </h2>

            {/* Summary */}
            <p className="text-zinc-300 leading-relaxed mb-6 text-sm sm:text-base">
              {project.summary}
            </p>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <div className="flex items-center gap-2 text-rose-400 font-semibold mb-2 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>Vấn đề / Thách thức</span>
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-2 text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Giải pháp kỹ thuật</span>
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-3">
                  Tính năng cốt lõi
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Results */}
            {project.results && (
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-300 block mb-1">
                  Kết quả &amp; Hiệu năng
                </span>
                <p className="text-sm text-zinc-200">{project.results}</p>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Công nghệ sử dụng
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-800/80">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-rose-900/30"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Trải nghiệm trực tiếp</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 text-sm font-semibold transition-all duration-200"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Mã nguồn (GitHub)</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
