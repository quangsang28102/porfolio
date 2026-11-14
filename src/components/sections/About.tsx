"use client";

import React from "react";
import { getPortfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Layout, Server, ShieldCheck, MapPin, CheckCircle, Sparkles } from "lucide-react";

export function About() {
  const { language, t } = useLanguage();
  const currentData = getPortfolioData(language);
  const { personal } = currentData;

  const getStrengthIcon = (icon: string) => {
    switch (icon) {
      case "Layout":
        return <Layout className="w-6 h-6 text-rose-500" />;
      case "Server":
        return <Server className="w-6 h-6 text-rose-500" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-rose-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-rose-500" />;
      default:
        return <CheckCircle className="w-6 h-6 text-rose-500" />;
    }
  };

  return (
    <section id="about" className="py-24 border-t border-zinc-200 dark:border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <Reveal>
          <div className="flex flex-col items-start mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-rose-600 dark:text-rose-500 mb-2">
              {t("about.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
              {t("about.heading")}
            </h2>
          </div>
        </Reveal>

        {/* About Bio text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8 space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed text-base">
            {personal.aboutParagraphs.map((p, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <p>{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="pt-2 flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-mono text-xs">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>
                  {t("about.location")}: {personal.location}
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.2}>
              <div className="p-6 rounded-2xl bg-zinc-100/90 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-md shadow-sm">
                <h3 className="text-sm font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 font-bold mb-4">
                  {t("about.philosophy")}
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>
                      <strong className="text-zinc-900 dark:text-white">{t("about.phil1.title")}</strong>{" "}
                      {t("about.phil1.desc")}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>
                      <strong className="text-zinc-900 dark:text-white">{t("about.phil2.title")}</strong>{" "}
                      {t("about.phil2.desc")}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>
                      <strong className="text-zinc-900 dark:text-white">{t("about.phil3.title")}</strong>{" "}
                      {t("about.phil3.desc")}
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3 Pillars / Strengths Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personal.strengths.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.15}>
              <SpotlightCard className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-5">
                    {getStrengthIcon(item.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
