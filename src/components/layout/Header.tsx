"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Menu, X, FileText, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Kỹ năng", href: "#skills" },
  { label: "Kinh nghiệm", href: "#experience" },
  { label: "Dự án", href: "#projects" },
  { label: "Học vấn", href: "#education" },
  { label: "Liên hệ", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { personal } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

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
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-white font-mono text-lg font-bold tracking-tight"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-600/20 text-rose-500 border border-rose-500/30 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
            &lt;/&gt;
          </span>
          <span className="group-hover:text-rose-400 transition-colors">
            {personal.fullName}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/80 px-3 py-1.5 rounded-full backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-rose-600/20 border border-rose-500/40 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {personal.cvPath && (
            <a
              href={personal.cvPath}
              download
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-zinc-700/80 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5 text-rose-500" />
              <span>CV</span>
            </a>
          )}
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-[0_0_15px_rgba(225,29,72,0.35)] hover:shadow-[0_0_22px_rgba(225,29,72,0.6)] transition-all duration-300"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Liên hệ</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Chuyển đổi menu di động"
          className="md:hidden p-2 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-zinc-950/95 border-b border-zinc-800 px-6 py-5 overflow-hidden backdrop-blur-xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm py-2 px-3 rounded-lg font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                      : "text-zinc-300 hover:bg-zinc-900"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-zinc-800 flex gap-2">
                {personal.cvPath && (
                  <a
                    href={personal.cvPath}
                    download
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold"
                  >
                    <FileText className="w-3.5 h-3.5 text-rose-500" />
                    <span>Tải CV</span>
                  </a>
                )}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-rose-600 text-white text-xs font-semibold"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Liên hệ ngay</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

