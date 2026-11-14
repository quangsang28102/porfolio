"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Printer, ExternalLink, FileText, Download } from "lucide-react";
import Link from "next/link";
import { PaperCvContent } from "@/components/cv/PaperCvContent";
import { useLanguage } from "@/context/LanguageContext";

interface PaperCvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PaperCvModal({ isOpen, onClose }: PaperCvModalProps) {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 dark:bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl z-10 overflow-hidden"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-rose-500" />
                <span className="font-semibold text-sm text-zinc-900 dark:text-white">
                  {language === "en" ? "Paper CV Preview (A4 Standard)" : "Xem trước CV giấy (Chuẩn A4)"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/cv"
                  target="_blank"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-200/80 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-xs font-medium text-zinc-800 dark:text-zinc-200 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{language === "en" ? "Full Screen" : "Mở toàn màn hình"}</span>
                </Link>

                <a
                  href={language === "en" ? "/files/Nguyen_Do_Quang_Sang_CV_EN.pdf" : "/files/Nguyen_Do_Quang_Sang_CV.pdf"}
                  download={language === "en" ? "Nguyen_Do_Quang_Sang_CV_EN.pdf" : "Nguyen_Do_Quang_Sang_CV.pdf"}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-xs font-semibold text-white transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t("cv.download")}</span>
                </a>

                <button
                  onClick={() => window.print()}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-200/80 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-xs font-medium text-zinc-800 dark:text-zinc-200 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{t("cv.printPdf")}</span>
                </button>

                <button
                  onClick={onClose}
                  aria-label="Đóng cửa sổ"
                  className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ml-2 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Document Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-zinc-200/50 dark:bg-zinc-900/60 flex justify-center">
              <div className="w-full max-w-[800px] shadow-2xl">
                <PaperCvContent />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
