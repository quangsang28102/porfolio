"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Printer,
  ArrowLeft,
  FileText,
  Image as ImageIcon,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Share2,
  Check,
  Sun,
  Moon,
} from "lucide-react";
import { PaperCvContent } from "@/components/cv/PaperCvContent";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export default function CvPage() {
  const [viewMode, setViewMode] = useState<"digital" | "scan">("digital");
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [copied, setCopied] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 10, 140));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 10, 70));
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col print:bg-white print:text-black transition-colors duration-300">
      {/* Top Floating Control Bar */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-4 py-3 print:hidden shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Back button */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-rose-600 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-rose-500" />
            <span>{t("cv.back")}</span>
          </Link>

          {/* Mode Switcher */}
          <div className="flex items-center p-1 rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs">
            <button
              onClick={() => setViewMode("digital")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                viewMode === "digital"
                  ? "bg-rose-600 text-white shadow-sm font-semibold"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t("cv.digitalMode")}</span>
            </button>
            <button
              onClick={() => setViewMode("scan")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                viewMode === "scan"
                  ? "bg-rose-600 text-white shadow-sm font-semibold"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200"
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>{t("cv.scanMode")}</span>
            </button>
          </div>

          {/* Language, Theme, Zoom & Print Actions */}
          <div className="flex items-center gap-2">
            {/* Language switch */}
            <div className="flex items-center p-0.5 rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono font-semibold">
              <button
                onClick={() => setLanguage("vi")}
                className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                  language === "vi"
                    ? "bg-white dark:bg-rose-600 text-rose-600 dark:text-white shadow-sm"
                    : "text-zinc-500 dark:text-zinc-400"
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-white dark:bg-rose-600 text-rose-600 dark:text-white shadow-sm"
                    : "text-zinc-500 dark:text-zinc-400"
                }`}
              >
                EN
              </button>
            </div>

            {/* Dark / Light toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Chuyển chế độ Sáng / Tối"
              className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700" />
              )}
            </button>

            {/* Zoom controls (desktop only) */}
            <div className="hidden sm:flex items-center gap-1 bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-1 text-zinc-600 dark:text-zinc-400">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 70}
                className="p-1 hover:text-zinc-950 dark:hover:text-white disabled:opacity-40 cursor-pointer"
                title="Thu nhỏ"
                aria-label="Thu nhỏ"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono px-1 w-10 text-center">
                {zoomLevel}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 140}
                className="p-1 hover:text-zinc-950 dark:hover:text-white disabled:opacity-40 cursor-pointer"
                title="Phóng to"
                aria-label="Phóng to"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1 hover:text-zinc-950 dark:hover:text-white ml-1 border-l border-zinc-200 dark:border-zinc-800 pl-1 cursor-pointer"
                title="Đặt lại 100%"
                aria-label="Đặt lại 100%"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>

            {/* Share Link button */}
            <button
              onClick={handleShare}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-200/80 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-medium transition-colors cursor-pointer"
              title="Sao chép liên kết chia sẻ CV"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-medium">{t("cv.copied")}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{t("cv.shareLink")}</span>
                </>
              )}
            </button>

            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-md shadow-rose-950/30 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t("cv.printPdf")}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main CV View Area */}
      <main className="flex-1 py-8 px-4 sm:px-6 overflow-x-auto flex justify-center bg-zinc-200/50 dark:bg-zinc-900/40 print:bg-white print:p-0">
        <div
          style={{
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: "top center",
            transition: "transform 0.15s ease",
          }}
          className="w-full max-w-[850px]"
        >
          {viewMode === "digital" ? (
            /* Mode 1: Digital A4 Paper Layout */
            <div className="print:shadow-none">
              <PaperCvContent />
            </div>
          ) : (
            /* Mode 2: Scan Images of original CV */
            <div className="space-y-8 max-w-[820px] mx-auto print:hidden">
              <div className="rounded-xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400 flex justify-between">
                  <span>{t("cv.page1Notice")}</span>
                  <span>cv-page-1.jpg</span>
                </div>
                <div className="relative w-full aspect-[1/1.414]">
                  <Image
                    src="/images/cv-page-1.jpg"
                    alt="CV Nguyễn Đỗ Quang Sáng - Trang 1"
                    fill
                    className="object-contain bg-zinc-50 dark:bg-zinc-900"
                    priority
                  />
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400 flex justify-between">
                  <span>{t("cv.page2Notice")}</span>
                  <span>cv-page-2.png</span>
                </div>
                <div className="relative w-full aspect-[1/1.414]">
                  <Image
                    src="/images/cv-page-2.png"
                    alt="CV Nguyễn Đỗ Quang Sáng - Trang 2"
                    fill
                    className="object-contain bg-zinc-50 dark:bg-zinc-900"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Print Footer Notice */}
      <div className="py-6 text-center text-xs text-zinc-500 font-mono print:hidden">
        {t("cv.tip")}
      </div>
    </div>
  );
}
