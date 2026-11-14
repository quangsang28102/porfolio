import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/ui/Icons";

export function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <span className="text-rose-500 font-mono font-bold text-lg">&lt;/&gt;</span>
            <span className="text-white font-semibold">{personal.fullName}</span>
          </div>
          <p className="text-xs text-zinc-500 font-mono">
            {personal.role} • Next.js, React &amp; Three.js
          </p>
        </div>

        {/* Center message */}
        <div className="text-xs text-zinc-400 text-center flex items-center gap-1.5">
          <span>Thiết kế & phát triển với</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          <span>trên nền tảng Next.js & Tailwind CSS</span>
        </div>

        {/* Right social links */}
        <div className="flex items-center gap-3">
          {personal.social.github && (
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {personal.social.linkedin && (
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}
          {personal.social.facebook && (
            <a
              href={personal.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          )}
          {personal.email && (
            <a
              href={`mailto:${personal.email}`}
              aria-label="Gửi email"
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-zinc-900 text-center text-zinc-600 text-[11px] font-mono">
        © {currentYear} {personal.fullName}. Tất cả quyền được bảo lưu.
      </div>
    </footer>
  );
}
