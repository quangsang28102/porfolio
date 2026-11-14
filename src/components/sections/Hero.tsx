"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, FileText, Mail, Sparkles, Terminal } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Hero() {
  const { personal } = portfolioData;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Badge */}
            {personal.availableForWork && (
              <motion.div variants={itemVariants} className="mb-6">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono font-medium backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                  </span>
                  <span>Sẵn sàng tiếp nhận cơ hội mới</span>
                </div>
              </motion.div>
            )}

            {/* Eyebrow */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm font-mono uppercase tracking-widest text-zinc-400 mb-3"
            >
              Xin chào, tôi là
            </motion.p>

            {/* Headline H1 with Gradient */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-5 text-white"
            >
              {personal.fullName}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-amber-200">
                {personal.role}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl mb-8"
            >
              {personal.shortBio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <MagneticButton strength={0.2}>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:shadow-[0_0_35px_rgba(225,29,72,0.6)] hover:-translate-y-0.5 active:scale-95 group"
                >
                  <span>Khám phá dự án</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-zinc-700/80 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-600 text-zinc-200 font-medium text-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4 text-rose-400" />
                  <span>Liên hệ trao đổi</span>
                </a>
              </MagneticButton>

              {personal.cvPath && (
                <a
                  href={personal.cvPath}
                  download
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800 text-zinc-400 hover:text-white text-sm font-medium transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Tải CV (PDF)</span>
                </a>
              )}
            </motion.div>

            {/* Social quick links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 text-xs font-mono text-zinc-500"
            >
              <span>KẾT NỐI:</span>
              <div className="flex items-center gap-3 text-zinc-400">
                {personal.social.github && (
                  <a
                    href={personal.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rose-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {personal.social.linkedin && (
                  <a
                    href={personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rose-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {personal.email && (
                  <a
                    href={`mailto:${personal.email}`}
                    className="hover:text-rose-400 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Code Editor Visual / Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing backdrop under code editor */}
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-600/30 via-rose-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-75 -z-10" />

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-zinc-400 text-[11px]">
                  <Terminal className="w-3.5 h-3.5 text-rose-500" />
                  <span>developer.config.ts</span>
                </div>
                <div className="w-10 text-right">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>

              {/* Code Content */}
              <div className="p-5 text-zinc-300 leading-relaxed space-y-2 overflow-x-auto">
                <p>
                  <span className="text-rose-400">const</span>{" "}
                  <span className="text-amber-200">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-zinc-500">name:</span>{" "}
                  <span className="text-emerald-300">&quot;{personal.fullName}&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-zinc-500">role:</span>{" "}
                  <span className="text-emerald-300">&quot;{personal.role}&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-zinc-500">primaryStack:</span> &#91;
                </p>
                <p className="pl-8 text-rose-300">
                  &quot;Next.js 15 (App Router)&quot;,
                </p>
                <p className="pl-8 text-rose-300">
                  &quot;NestJS (Microservices)&quot;,
                </p>
                <p className="pl-8 text-rose-300">
                  &quot;TypeScript &amp; Tailwind CSS&quot;,
                </p>
                <p className="pl-8 text-rose-300">
                  &quot;PostgreSQL &amp; Redis&quot;
                </p>
                <p className="pl-4">&#93;,</p>
                <p className="pl-4">
                  <span className="text-zinc-500">mindset:</span>{" "}
                  <span className="text-emerald-300">&quot;Clean Code &amp; User Centric&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-zinc-500">status:</span>{" "}
                  <span className="text-amber-300">&quot;Ready for High Impact Projects&quot;</span>
                </p>
                <p>&#125;;</p>

                <div className="pt-3 border-t border-zinc-800/80 text-[11px] text-zinc-500 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Sparkles className="w-3 h-3" /> Ready: compiled in 18ms
                  </span>
                  <span className="text-zinc-500">UTF-8</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
