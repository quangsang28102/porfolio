"use client";

import React from "react";
import Link from "next/link";
import { getPortfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Heart, Palette, FileText } from "lucide-react";
import { GithubIcon, FacebookIcon } from "@/components/ui/Icons";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  const { language, t } = useLanguage();
  const currentData = getPortfolioData(language);
  const { personal } = currentData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <BrandLogo size={28} />
            <span className="text-zinc-950 dark:text-white font-semibold">
              {language === "vi" ? "Quang Sáng" : "Quang Sang"}
            </span>
          </div>
          <p className="text-xs text-zinc-500 font-mono">
            {personal.role} • Next.js, React &amp; Three.js
          </p>
        </div>

        {/* Center message */}
        <div className="text-xs text-zinc-600 dark:text-zinc-400 text-center flex items-center gap-1.5">
          <span>{t("footer.builtWith")}</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          <span>{t("footer.andOn")}</span>
        </div>

        {/* Right social links */}
        <div className="flex items-center gap-3">
          {personal.social.github && (
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {personal.social.facebook && (
            <a
              href={personal.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          )}
          {personal.email && (
            <a
              href={`mailto:${personal.email}`}
              aria-label="Gửi email"
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 dark:text-zinc-600 text-[11px] font-mono">
        <div>
          © {currentYear} {personal.fullName}. {t("footer.rights")}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/design-system"
            className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center gap-1"
          >
            <Palette className="w-3.5 h-3.5 text-rose-500" />
            <span>Design System v1.0</span>
          </Link>
          <span>•</span>
          <Link
            href="/cv"
            className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5 text-rose-500" />
            <span>{t("nav.viewCv")}</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
