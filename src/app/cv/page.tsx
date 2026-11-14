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
  Download,
  Share2,
  Check,
} from "lucide-react";
import { PaperCvContent } from "@/components/cv/PaperCvContent";

export default function CvPage() {
  const [viewMode, setViewMode] = useState<"digital" | "scan">("digital");
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [copied, setCopied] = useState(false);

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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col print:bg-white print:text-black">
      {/* Top Floating Control Bar */}
      <header className="sticky top-0 z-50 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 px-4 py-3 print:hidden">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Back button */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-rose-500" />
            <span>Về Portfolio</span>
          </Link>

          {/* Mode Switcher */}
          <div className="flex items-center p-1 rounded-xl bg-zinc-950 border border-zinc-800 text-xs">
            <button
              onClick={() => setViewMode("digital")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                viewMode === "digital"
                  ? "bg-rose-600 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Bản in A4 Kỹ Thuật Số</span>
            </button>
            <button
              onClick={() => setViewMode("scan")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                viewMode === "scan"
                  ? "bg-rose-600 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Bản scan ảnh gốc (2 Trang)</span>
            </button>
          </div>

          {/* Zoom & Print Actions */}
          <div className="flex items-center gap-2">
            {/* Zoom controls (desktop only) */}
            <div className="hidden sm:flex items-center gap-1 bg-zinc-950 border border-zinc-800 rounded-lg p-1 text-zinc-400">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 70}
                className="p-1 hover:text-white disabled:opacity-40 cursor-pointer"
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
                className="p-1 hover:text-white disabled:opacity-40 cursor-pointer"
                title="Phóng to"
                aria-label="Phóng to"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1 hover:text-white ml-1 border-l border-zinc-800 pl-1 cursor-pointer"
                title="Đặt lại 100%"
                aria-label="Đặt lại 100%"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>

            {/* Share Link button */}
            <button
              onClick={handleShare}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors cursor-pointer"
              title="Sao chép liên kết chia sẻ CV"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Đã sao chép!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Chia sẻ link</span>
                </>
              )}
            </button>

            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-lg shadow-rose-950/40 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In / Lưu PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main CV View Area */}
      <main className="flex-1 py-8 px-4 sm:px-6 overflow-x-auto flex justify-center bg-zinc-900/40 print:bg-white print:p-0">
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
              <div className="rounded-xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-950">
                <div className="px-4 py-2 bg-zinc-900 border-b border-zinc-800 text-xs font-mono text-zinc-400 flex justify-between">
                  <span>Trang 1: Thông tin cá nhân, Học vấn, Kỹ năng, Kinh nghiệm</span>
                  <span>cv-page-1.jpg</span>
                </div>
                <div className="relative w-full aspect-[1/1.414]">
                  <Image
                    src="/images/cv-page-1.jpg"
                    alt="CV Nguyễn Đỗ Quang Sáng - Trang 1"
                    fill
                    className="object-contain bg-zinc-900"
                    priority
                  />
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-950">
                <div className="px-4 py-2 bg-zinc-900 border-b border-zinc-800 text-xs font-mono text-zinc-400 flex justify-between">
                  <span>Trang 2: Dự án cá nhân, Ngoại ngữ TOEIC</span>
                  <span>cv-page-2.png</span>
                </div>
                <div className="relative w-full aspect-[1/1.414]">
                  <Image
                    src="/images/cv-page-2.png"
                    alt="CV Nguyễn Đỗ Quang Sáng - Trang 2"
                    fill
                    className="object-contain bg-zinc-900"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Print Footer Notice */}
      <div className="py-6 text-center text-xs text-zinc-500 font-mono print:hidden">
        Mẹo: Nhấn nút &quot;In / Lưu PDF&quot; hoặc phím tắt <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">Ctrl + P</kbd> để xuất CV ra file PDF A4 chuẩn quốc tế.
      </div>
    </div>
  );
}

