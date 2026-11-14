"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getPortfolioData } from "@/data/portfolio";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, FileText, Send, Sun, Moon, Palette } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const currentData = getPortfolioData(language);
  const { personal } = currentData;

  const navItems = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.education"), href: "#education" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/80 py-2.5 shadow-sm dark:shadow-md dark:shadow-black/20"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Logo — Single line, no break */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-zinc-950 dark:text-white font-mono text-sm sm:text-base font-bold tracking-tight shrink-0 whitespace-nowrap"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-rose-500/10 dark:bg-rose-600/20 text-rose-600 dark:text-rose-500 border border-rose-500/25 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600 transition-all duration-300 shadow-sm">
            &lt;/&gt;
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
              {personal.fullName}
            </span>
            <span className="text-[10px] font-mono font-semibold text-rose-500 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20 hidden xl:inline-block">
              DEV
            </span>
          </div>
        </a>

        {/* Desktop Center Navigation — Clean Pill with whitespace-nowrap */}
        <nav className="hidden xl:flex items-center gap-0.5 bg-zinc-100/80 dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-white/10 px-1.5 py-1 rounded-full backdrop-blur-xl shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "text-rose-600 dark:text-white font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Utility Cluster: Language, Theme, CV, Contact */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Language Switcher Pill */}
          <div className="flex items-center p-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono font-semibold">
            <button
              onClick={() => setLanguage("vi")}
              className={`px-2 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                language === "vi"
                  ? "bg-rose-600 text-white shadow-sm"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
              }`}
              title="Tiếng Việt"
            >
              VI
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                language === "en"
                  ? "bg-rose-600 text-white shadow-sm"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Chuyển chế độ Sáng / Tối"
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-rose-600 dark:hover:text-rose-400 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer shadow-sm"
            title={theme === "dark" ? "Chuyển sang chế độ Sáng" : "Chuyển sang chế độ Tối"}
          >
            {theme === "dark" ? (
              <Sun className="w-3.5 h-3.5 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-zinc-700 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* GitHub Profile Link */}
          <a
            href="https://github.com/quangsang28102"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile @quangsang28102"
            title="GitHub: https://github.com/quangsang28102"
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-rose-600 dark:hover:text-rose-400 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer shadow-sm"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>

          {/* View Paper CV Link */}
          <Link
            href="/cv"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/90 dark:bg-zinc-900/80 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white text-xs font-medium whitespace-nowrap transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span>{t("nav.viewCv")}</span>
          </Link>

          {/* Design System Link */}
          <Link
            href="/design-system"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/90 dark:bg-zinc-900/80 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white text-xs font-medium whitespace-nowrap transition-all shadow-sm"
          >
            <Palette className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span>{t("nav.designSystem")}</span>
          </Link>

          {/* Contact CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-[0_0_15px_rgba(225,29,72,0.35)] hover:shadow-[0_0_22px_rgba(225,29,72,0.6)] transition-all whitespace-nowrap shrink-0"
          >
            <Send className="w-3.5 h-3.5 shrink-0" />
            <span>{t("nav.contactCta")}</span>
          </a>

          {/* Mobile Menu Hamburger (Visible below xl breakpoint) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Chuyển đổi menu di động"
            className="xl:hidden p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden bg-white/95 dark:bg-zinc-950/95 border-b border-zinc-200 dark:border-zinc-800 px-6 py-5 overflow-hidden backdrop-blur-2xl shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm py-2 px-3 rounded-xl font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 font-semibold"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
                <a
                  href="https://github.com/quangsang28102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 text-xs font-semibold hover:text-rose-500"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub @quangsang28102</span>
                </a>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    href="/design-system"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 text-xs font-semibold"
                  >
                    <Palette className="w-3.5 h-3.5 text-rose-500" />
                    <span>{t("nav.designSystem")}</span>
                  </Link>
                  <Link
                    href="/cv"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 text-xs font-semibold"
                  >
                    <FileText className="w-3.5 h-3.5 text-rose-500" />
                    <span>{t("nav.viewCv")}</span>
                  </Link>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-rose-600 text-white text-xs font-semibold"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t("nav.contactCta")}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
