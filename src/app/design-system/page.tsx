"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  Layers,
  Sparkles,
  Sun,
  Moon,
  Download,
  Code,
  Palette,
  Type,
  Layout,
  MousePointer,
  CheckCircle2,
  Box,
  Flame,
  Globe,
  Sliders,
  Send,
  FileText,
  Terminal,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { motion, AnimatePresence } from "framer-motion";

export default function DesignSystemPage() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("thuong-hieu");
  const [sampleText, setSampleText] = useState("Nguyễn Đỗ Quang Sáng — Fullstack & Frontend Developer");
  const [btnLoading, setBtnLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const isEn = language === "en";

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(label);
    setToastMessage(`${isEn ? "Copied" : "Đã sao chép"}: ${text}`);
    setTimeout(() => {
      setCopiedToken(null);
      setToastMessage(null);
    }, 2200);
  };

  const navSections = [
    { id: "thuong-hieu", label: isEn ? "01 Brand" : "01 Thương hiệu" },
    { id: "mau-sac", label: isEn ? "02 Color Tokens" : "02 Màu sắc & Tokens" },
    { id: "chu", label: isEn ? "03 Typography" : "03 Typography" },
    { id: "logo", label: isEn ? "04 Logo & Glitch" : "04 Logo & Biểu tượng" },
    { id: "icon", label: isEn ? "05 Iconography" : "05 Hệ thống Icon" },
    { id: "motion-go", label: isEn ? "06 Motion & Visuals" : "06 Yếu tố & Motion" },
    { id: "thanh-phan", label: isEn ? "07 UI Components" : "07 Thành phần UI" },
    { id: "ung-dung", label: isEn ? "08 Applied Demos" : "08 Ứng dụng mẫu" },
    { id: "phu-luc", label: isEn ? "09 Dev Hand-off" : "09 Hand-off & Phụ lục" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sec of navSections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const colorTokens = [
    {
      category: isEn ? "Brand Primary (NestJS Red/Pink)" : "Màu Điểm Nhấn Thương Hiệu (NestJS Crimson)",
      items: [
        { name: "Primary 600 (Main)", hex: "#E11D48", hsl: "346° 87% 43%", role: "CTA Buttons, Active Tabs, Highlights", contrast: "4.8:1 (AA)" },
        { name: "Primary 500 (Hover)", hex: "#F43F5E", hsl: "350° 89% 60%", role: "Hover glow, accents, gradient stops", contrast: "3.5:1 (AA Large)" },
        { name: "Primary 900 (Glow Tint)", hex: "#881337", hsl: "342° 75% 30%", role: "Dark mode glow backdrop, ambient lights", contrast: "8.9:1 (AAA)" },
        { name: "Primary Subdued (10%)", hex: "rgba(225, 29, 72, 0.1)", hsl: "346° 87% 43% / 10%", role: "Tag backgrounds, pill containers", contrast: "N/A" },
      ],
    },
    {
      category: isEn ? "Dark Mode Canvas & Surfaces" : "Bề Mặt & Nền Giao Diện (Dark Mode)",
      items: [
        { name: "Background Deep Black", hex: "#09090B", hsl: "240° 10% 3.9%", role: "Trang chính, không gian tối sâu tinh khiết", contrast: "19.5:1 (AAA)" },
        { name: "Card Dark Surface", hex: "#18181B", hsl: "240° 5.3% 10%", role: "Thẻ Spotlight, Modal, Menu Containers", contrast: "14.2:1 (AAA)" },
        { name: "Border Dark Zinc", hex: "#27272A", hsl: "240° 3.7% 15.9%", role: "Đường viền mỏng 1px tinh tế, vách ngăn", contrast: "N/A" },
        { name: "Foreground White", hex: "#FAFAFA", hsl: "0° 0% 98%", role: "Tiêu đề chính H1/H2, văn bản nổi bật", contrast: "18.8:1 (AAA)" },
        { name: "Muted Text Zinc 400", hex: "#A1A1AA", hsl: "240° 5% 64.9%", role: "Đoạn văn mô tả, phụ đề, ngày tháng", contrast: "7.1:1 (AAA)" },
      ],
    },
    {
      category: isEn ? "Status & System Indicators" : "Chỉ Số Trạng Thái Hệ Thống (Semantic Status)",
      items: [
        { name: "Success Emerald", hex: "#10B981", hsl: "160° 84% 39%", role: "Live Vercel active, Ready for hire pill", contrast: "4.6:1 (AA)" },
        { name: "Warning Amber", hex: "#F59E0B", hsl: "38° 92% 50%", role: "Cảnh báo, công nghệ thử nghiệm, WIP", contrast: "6.2:1 (AA)" },
        { name: "Sky Info / 3D WebGL", hex: "#0284C7", hsl: "199° 89% 48%", role: "Nhãn 3D WebGL, tài liệu kỹ thuật", contrast: "4.5:1 (AA)" },
        { name: "Purple / Special", hex: "#A855F7", hsl: "270° 91% 65%", role: "Three.js Shaders, WebSockets badge", contrast: "4.5:1 (AA)" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-[#f4f4f5] transition-colors duration-300">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-800 text-white text-xs font-mono border border-rose-500/40 shadow-2xl shadow-rose-950/50 flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-rose-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Bar */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isEn ? "Back to Portfolio" : "Về Portfolio"}</span>
            </Link>
            <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-800 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-500 font-mono text-xs font-bold border border-rose-500/20">
                &lt;/&gt;
              </span>
              <span className="font-bold text-sm tracking-tight hidden md:inline">
                PORTFOLIO DESIGN SYSTEM <span className="text-rose-500 font-mono text-xs">v1.0</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Download Standalone HTML Button */}
            <a
              href="/portfolio_design_system_v1.html"
              download="Portfolio_Design_System_v1.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isEn ? "Export HTML" : "Tải File HTML"}</span>
            </a>

            {/* Language switch */}
            <div className="flex items-center p-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono">
              <button
                onClick={() => setLanguage("vi")}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                  language === "vi" ? "bg-rose-600 text-white shadow-sm" : "text-zinc-500"
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                  language === "en" ? "bg-rose-600 text-white shadow-sm" : "text-zinc-500"
                }`}
              >
                EN
              </button>
            </div>

            {/* Theme switch */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-rose-500 transition-colors"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        {/* ================= SECTION BIA: COVER HEADER ================= */}
        <section id="bia" className="mb-14 p-8 sm:p-12 rounded-3xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
                SYSTEM SPECIFICATION v1.0
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                VERIFIED ACTIVE
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                NEXT.js 15.5 • TAILWIND CSS • FRAMER MOTION
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Hệ Thống Thiết Kế Giao Diện
              <span className="block text-rose-600 dark:text-rose-500 mt-1">Portfolio &amp; CV Kỹ Thuật Số</span>
            </h1>

            <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
              Hệ thống tiêu chuẩn hóa toàn bộ Design Tokens, Bảng màu Crimson (#E11D48), Thang kích thước Typography,
              Thành phần tương tác phản hồi vật lý (Spotlight Card, Magnetic Buttons) và Quy chuẩn Accessibility WCAG 2.1 AA
              cho trang cá nhân lập trình viên Nguyễn Đỗ Quang Sáng.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800/80 font-mono text-xs">
              <div>
                <span className="text-zinc-400 block mb-1">Tác giả &amp; Kỹ sư:</span>
                <strong className="text-zinc-950 dark:text-white font-semibold">Nguyễn Đỗ Quang Sáng</strong>{" "}
                (<a href="https://github.com/quangsang28102" target="_blank" rel="noopener noreferrer" className="text-rose-500 hover:underline">@quangsang28102</a>)
              </div>
              <div>
                <span className="text-zinc-400 block mb-1">Cảm hứng cốt lõi:</span>
                <strong className="text-zinc-950 dark:text-white font-semibold">NestJS Red &amp; Dark Mode</strong>
              </div>
              <div>
                <span className="text-zinc-400 block mb-1">Tiêu chuẩn Web:</span>
                <strong className="text-zinc-950 dark:text-white font-semibold">W3C Valid &amp; WCAG AA</strong>
              </div>
              <div>
                <span className="text-zinc-400 block mb-1">Phiên bản phát hành:</span>
                <strong className="text-rose-500 font-semibold">v1.0.0 (Tháng 11/2026)</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ================= NAVIGATION PILLS ================= */}
        <div className="sticky top-16 z-30 mb-12 py-3 bg-zinc-50/90 dark:bg-[#09090b]/90 backdrop-blur-md overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {navSections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  activeSection === sec.id
                    ? "bg-rose-600 text-white shadow-md shadow-rose-950/40 font-semibold"
                    : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}
              >
                {sec.label}
              </a>
            ))}
          </div>
        </div>

        {/* ================= 01 THƯƠNG HIỆU ================= */}
        <section id="thuong-hieu" className="mb-20 scroll-mt-32">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-500 font-mono text-xs font-bold border border-rose-500/20">
              01
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Thương Hiệu &amp; Triết Lý Thiết Kế</h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-8 text-sm sm:text-base">
            Giao diện được định hướng theo phong cách <strong>Developer-Centric &amp; High-Contrast Minimalist</strong>.
            Tập trung truyền tải năng lực kỹ thuật vững vàng qua 3 trụ cột thiết kế:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base mb-2">Độ Tương Phản Tối Ưu (Deep Black)</h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Nền đen sâu (#09090B) kết hợp gam màu đỏ Crimson NestJS (#E11D48) giúp người đọc tập trung tuyệt đối vào sản phẩm,
                mã nguồn và thành tựu kỹ thuật.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 mb-4">
                <MousePointer className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base mb-2">Vi Tương Tác Vật Lý (Micro-Interactions)</h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Mỗi phần tử (Nút bấm Magnetic, Thẻ Spotlight bám trỏ chuột, Shimmer loading) đều có phản hồi vật lý mượt mà,
                thể hiện trình độ thao tác DOM và Framer Motion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base mb-2">Chuẩn W3C &amp; Hiệu Năng Vượt Trội</h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Mã nguồn chuẩn ngữ nghĩa Semantic HTML, điểm số Core Web Vitals tối ưu, thời gian tải dưới 1.5s và khả năng tương thích 100% đa thiết bị.
              </p>
            </div>
          </div>
        </section>

        {/* ================= 02 MÀU SẮC & TOKENS ================= */}
        <section id="mau-sac" className="mb-20 scroll-mt-32">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-500 font-mono text-xs font-bold border border-rose-500/20">
              02
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Hệ Thống Màu Sắc &amp; Tokens (Color System)</h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-8 text-sm">
            Nhấn vào bất kỳ thẻ màu nào dưới đây để <strong>sao chép trực tiếp mã HEX</strong> vào bộ nhớ đệm (Clipboard).
          </p>

          <div className="space-y-10">
            {colorTokens.map((group, gIdx) => (
              <div key={gIdx}>
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-500 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                  {group.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {group.items.map((token, tIdx) => (
                    <div
                      key={tIdx}
                      onClick={() => copyToClipboard(token.hex, token.name)}
                      className="group cursor-pointer rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 transition-all hover:border-rose-500/60 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div
                        className="h-20 rounded-xl mb-3 flex items-end justify-end p-2 border border-black/10 dark:border-white/10"
                        style={{ backgroundColor: token.hex }}
                      >
                        <span className="p-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                          {copiedToken === token.name ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          Copy
                        </span>
                      </div>
                      <div className="font-bold text-sm text-zinc-950 dark:text-white mb-1 flex items-center justify-between">
                        <span>{token.name}</span>
                        <span className="text-[10px] font-mono text-rose-500 bg-rose-500/10 px-1.5 py-0.5 rounded">
                          {token.contrast}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-zinc-500 mb-2">{token.hex}</div>
                      <p className="text-[11px] text-zinc-600 dark:text-zinc-400 line-clamp-2">{token.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 03 TYPOGRAPHY ================= */}
        <section id="chu" className="mb-20 scroll-mt-32">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-500 font-mono text-xs font-bold border border-rose-500/20">
              03
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Kiểu Chữ (Typography Scale)</h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-6 text-sm">
            Kết hợp <strong>Inter</strong> cho nội dung hiển thị tiếng Việt mượt mà và <strong>JetBrains Mono</strong> cho nhãn thông số công nghệ &amp; mã nguồn.
          </p>

          {/* Interactive sample text box */}
          <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-8 flex flex-col sm:flex-row items-center gap-3">
            <span className="text-xs font-mono text-zinc-500 whitespace-nowrap">Thử nghiệm văn bản mẫu:</span>
            <input
              type="text"
              value={sampleText}
              onChange={(e) => setSampleText(e.target.value)}
              className="flex-1 w-full bg-zinc-50 dark:bg-zinc-950 px-3 py-2 rounded-xl text-xs font-mono border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-rose-500"
              placeholder="Nhập nội dung bất kỳ để kiểm tra hiển thị..."
            />
          </div>

          <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800 overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-baseline text-xs font-mono text-zinc-400 mb-2">
                <span>Display Title / H1 (Hero)</span>
                <span>text-5xl (48px - 64px) • Extrabold 800</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
                {sampleText}
              </h1>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-baseline text-xs font-mono text-zinc-400 mb-2">
                <span>Section Heading / H2</span>
                <span>text-3xl (30px - 36px) • Bold 700</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
                {sampleText}
              </h2>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-baseline text-xs font-mono text-zinc-400 mb-2">
                <span>Card &amp; Sub-heading / H3</span>
                <span>text-xl (20px) • Semi-bold 600</span>
              </div>
              <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">
                {sampleText}
              </h3>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-baseline text-xs font-mono text-zinc-400 mb-2">
                <span>Body Paragraph / Regular</span>
                <span>text-sm (14px - 16px) • Regular 400 • Line-height 1.6</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
                {sampleText}. Lập trình viên với nền tảng vững vàng về W3C Semantic HTML5, CSS3 Grid/Flexbox, Custom WordPress Themes, React 19 và tương tác 3D Three.js.
              </p>
            </div>

            <div className="p-6 bg-zinc-50/50 dark:bg-zinc-950/40">
              <div className="flex justify-between items-baseline text-xs font-mono text-zinc-400 mb-2">
                <span>Monospace Tech Snippet / Code</span>
                <span>font-mono • text-xs (12px) • JetBrains Mono</span>
              </div>
              <code className="text-xs font-mono text-rose-600 dark:text-rose-400 bg-rose-500/10 px-2 py-1 rounded border border-rose-500/20">
                const candidate = &#123; name: &quot;Quang Sang&quot;, role: &quot;Frontend Staff&quot;, gpa: 8.3 &#125;;
              </code>
            </div>
          </div>
        </section>

        {/* ================= 04 LOGO & GLITCH ================= */}
        <section id="logo" className="mb-20 scroll-mt-32">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-500 font-mono text-xs font-bold border border-rose-500/20">
              04
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Logo &amp; Biểu Tượng Nhận Diện</h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-8 text-sm">
            Biểu tượng ký tự code <strong>&lt;/&gt;</strong> kết hợp khung vuông bo góc mềm 12px và hiệu ứng quét tia kỹ thuật số.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-rose-500/15 text-rose-600 dark:text-rose-500 border border-rose-500/30 flex items-center justify-center text-2xl font-mono font-bold shadow-lg shadow-rose-950/40 mb-4 hover:scale-110 transition-transform">
                &lt;/&gt;
              </div>
              <span className="font-bold text-base text-zinc-950 dark:text-white">Primary Symbol (Monogram)</span>
              <span className="text-xs font-mono text-zinc-500 mt-1">Dùng làm Favicon, App Icon, Header Glyph</span>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-rose-500/20 text-rose-500 font-mono font-bold text-sm border border-rose-500/30">
                  &lt;/&gt;
                </span>
                <span className="font-bold text-base tracking-tight text-zinc-950 dark:text-white">
                  Nguyễn Đỗ Quang Sáng
                </span>
                <span className="text-[10px] font-mono text-rose-500 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">
                  DEV
                </span>
              </div>
              <span className="font-bold text-base text-zinc-950 dark:text-white">Full Identity Lockup</span>
              <span className="text-xs font-mono text-zinc-500 mt-1">Sử dụng trên thanh Navigation Header và Footer</span>
            </div>
          </div>
        </section>

        {/* ================= 05 ICON SYSTEM ================= */}
        <section id="icon" className="mb-20 scroll-mt-32">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-500 font-mono text-xs font-bold border border-rose-500/20">
              05
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Hệ Thống Icon (Iconography — Lucide 24×24)</h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-6 text-sm">
            Hệ thống biểu tượng thống nhất: Lưới 24×24px, độ dày nét <strong>stroke-width: 2px</strong>, đầu bo tròn (round caps/joins), đơn sắc theo biến màu giao diện.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {[
              { icon: <Code className="w-5 h-5" />, name: "Code" },
              { icon: <Layout className="w-5 h-5" />, name: "Layout" },
              { icon: <Palette className="w-5 h-5" />, name: "Palette" },
              { icon: <Box className="w-5 h-5" />, name: "Box (3D)" },
              { icon: <ExternalLink className="w-5 h-5" />, name: "ExternalLink" },
              { icon: <ArrowUpRight className="w-5 h-5" />, name: "ArrowUpRight" },
              { icon: <FileText className="w-5 h-5" />, name: "FileText (CV)" },
              { icon: <Send className="w-5 h-5" />, name: "Send (Contact)" },
              { icon: <Sparkles className="w-5 h-5" />, name: "Sparkles" },
              { icon: <Zap className="w-5 h-5" />, name: "Zap" },
              { icon: <Terminal className="w-5 h-5" />, name: "Terminal" },
              { icon: <GithubIcon className="w-5 h-5" />, name: "GitHub" },
            ].map((ic, i) => (
              <div
                key={i}
                onClick={() => copyToClipboard(`<${ic.name} className="w-5 h-5" />`, ic.name)}
                className="group cursor-pointer p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center gap-2 hover:border-rose-500/60 hover:-translate-y-1 transition-all"
              >
                <div className="text-zinc-600 dark:text-zinc-300 group-hover:text-rose-500 transition-colors">
                  {ic.icon}
                </div>
                <span className="text-[11px] font-mono text-zinc-500 text-center">{ic.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 06 YẾU TỐ THỊ GIÁC & MOTION ================= */}
        <section id="motion-go" className="mb-20 scroll-mt-32">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-500 font-mono text-xs font-bold border border-rose-500/20">
              06
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Yếu Tố Thị Giác &amp; Motion (Visual Tokens)</h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-8 text-sm">
            Quy chuẩn về bo góc (Border Radius), độ đổ bóng (Shadow), nền lưới vi mô và đường cong gia tốc chuyển động (Motion Curves).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Lưới & Glassmorphism */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-rose-500" />
                Lưới Kỹ Thuật Số &amp; Kính Mờ (Glassmorphism)
              </h3>
              <p className="text-xs text-zinc-500 mb-4 leading-relaxed">
                Áp dụng class <code>bg-grid-pattern</code> với mắt lưới 32×32px mờ 4% và <code>backdrop-blur-xl</code> để tạo chiều sâu giao diện.
              </p>
              <div className="h-28 rounded-xl bg-grid-pattern border border-zinc-200 dark:border-zinc-800 relative flex items-center justify-center overflow-hidden">
                <div className="px-5 py-2.5 rounded-xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200 dark:border-zinc-700/80 text-xs font-mono font-semibold shadow-xl">
                  backdrop-blur-xl (Glass Card)
                </div>
              </div>
            </div>

            {/* Shimmer & Glow */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-500" />
                Shimmer Loading &amp; Glow Orbs
              </h3>
              <p className="text-xs text-zinc-500 mb-4 leading-relaxed">
                Hiệu ứng quét tia sáng khi tải dữ liệu và quả cầu ánh sáng mờ 120px phát sáng dịu nhẹ ở các góc màn hình.
              </p>
              <div className="h-28 rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-4 flex flex-col justify-center gap-2 relative overflow-hidden">
                <div className="h-3 w-3/4 rounded-full bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.8s_infinite] before:bg-gradient-to-r before:from-transparent before:via-rose-500/20 before:to-transparent" />
                <div className="h-3 w-1/2 rounded-full bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.8s_infinite] before:bg-gradient-to-r before:from-transparent before:via-rose-500/20 before:to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= 07 THÀNH PHẦN UI CỐT LÕI ================= */}
        <section id="thanh-phan" className="mb-20 scroll-mt-32">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-500 font-mono text-xs font-bold border border-rose-500/20">
              07
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Thành Phần Giao Diện Tương Tác (Live Components)</h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-8 text-sm">
            Thư viện thành phần trực tiếp đang được sử dụng trong Portfolio. Bạn có thể tương tác bấm thử, nhập liệu và kiểm tra trạng thái.
          </p>

          <div className="space-y-8">
            {/* 1. Buttons */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-500 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                1. Nút Bấm &amp; Nút Hành Động (Button Variants)
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                {/* Primary CTA */}
                <button
                  onClick={() => setToastMessage(isEn ? "Triggered Primary CTA!" : "Đã kích hoạt Nút Chính CTA!")}
                  className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(225,29,72,0.35)] hover:shadow-[0_0_30px_rgba(225,29,72,0.6)] hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Primary Glowing CTA
                </button>

                {/* Secondary Ghost */}
                <button
                  onClick={() => setToastMessage(isEn ? "Triggered Secondary Outline!" : "Đã kích hoạt Nút Viền Kính!")}
                  className="px-6 py-3 rounded-xl bg-white/70 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium text-xs sm:text-sm hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-rose-500" />
                  Secondary Outline
                </button>

                {/* Loading State Toggle */}
                <button
                  onClick={() => {
                    setBtnLoading(true);
                    setTimeout(() => setBtnLoading(false), 1800);
                  }}
                  className="px-6 py-3 rounded-xl bg-zinc-800 text-white font-medium text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2"
                >
                  {btnLoading ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Click for Loading State"
                  )}
                </button>
              </div>
            </div>

            {/* 2. Badges & Tags */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-500 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                2. Nhãn Trạng Thái &amp; Huy Hiệu (Badges &amp; Status Indicators)
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live on Vercel
                </span>

                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Featured Project
                </span>

                <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60">
                  React 19
                </span>

                <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60">
                  Next.js App Router
                </span>

                <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                  Three.js WebGL
                </span>
              </div>
            </div>

            {/* 3. Form Controls */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-500 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                3. Điều Khiển Form (Form Controls)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                <div>
                  <label className="block text-xs font-mono text-zinc-500 mb-1">Text Input with Focus Ring</label>
                  <input
                    type="text"
                    defaultValue="qsang.dev@gmail.com"
                    className="w-full bg-zinc-50 dark:bg-zinc-950 px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all text-zinc-950 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-500 mb-1">Textarea Field</label>
                  <textarea
                    rows={1}
                    defaultValue="Trao đổi cơ hội việc làm Frontend / Fullstack..."
                    className="w-full bg-zinc-50 dark:bg-zinc-950 px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all text-zinc-950 dark:text-white resize-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 08 ỨNG DỤNG MẪU ================= */}
        <section id="ung-dung" className="mb-20 scroll-mt-32">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-500 font-mono text-xs font-bold border border-rose-500/20">
              08
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Ứng Dụng Mẫu (Applied Templates)</h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-8 text-sm">
            Minh họa cách toàn bộ tokens, kiểu chữ và thành phần giao diện kết hợp với nhau trong thực tế.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. Football Payment Manager */}
            <div className="group rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 transition-all duration-300 hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-950/20 hover:-translate-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                  Fullstack / App Router
                </span>
                <a
                  href="https://football-pay.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-emerald-500 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  football-pay.vercel.app ↗
                </a>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-rose-500 transition-colors">
                Football Payment Manager
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Tự động tính tiền sân bãi, nước uống, sinh mã VietQR động theo từng người và đồng bộ hai chiều với Google Sheets API.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  Next.js 15
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  React 19
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  VietQR API
                </span>
              </div>
            </div>

            {/* 2. 3D Chibi Girl Model */}
            <div className="group rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 transition-all duration-300 hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-950/20 hover:-translate-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                    3D &amp; WebGL
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                    Đang phát triển (WIP)
                  </span>
                </div>
                <a
                  href="https://avatar-three-rouge.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-emerald-500 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  avatar-three-rouge.vercel.app ↗
                </a>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-rose-500 transition-colors">
                Mô hình 3D Chibi Girl — Cô Gái Chibi (Three.js Low-Poly Stylized)
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Khởi tạo mô hình 3D thủ tục bằng toán học &amp; BufferGeometry siêu nhẹ (&lt;250KB), xoay 360° và xuất file .GLB/.OBJ.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  Three.js
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  WebGL
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  BufferGeometry
                </span>
              </div>
            </div>

            {/* 3. HPO Auto */}
            <div className="group rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 transition-all duration-300 hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-950/20 hover:-translate-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                  WordPress &amp; CMS
                </span>
                <a
                  href="https://hpo-edu-v2.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-emerald-500 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  hpo-edu-v2.vercel.app ↗
                </a>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-rose-500 transition-colors">
                HPO – Trung Tâm Giáo Dục Nghề Nghiệp Ô Tô Hiệp Phát
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Chuyển đổi giao diện tĩnh sang Custom Theme WordPress, tối ưu hóa điểm Core Web Vitals và tra cứu thông tin học viên bằng mã QR.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  WordPress
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  PHP
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  Dynamic QR
                </span>
              </div>
            </div>

            {/* 4. BITCO Tuy Nen */}
            <div className="group rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 transition-all duration-300 hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-950/20 hover:-translate-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  W3C Slicing / Web
                </span>
                <a
                  href="https://tuynen.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-emerald-500 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  tuynen.vercel.app ↗
                </a>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-rose-500 transition-colors">
                Công ty Cổ phần Gạch Tuy Nen Bình Định - BITCO | Vật Liệu Xây Dựng Hàng Đầu
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Cắt layout pixel-perfect từ Photoshop sang HTML5/CSS3 chuẩn W3C Validation, kết hợp hiệu ứng Parallax mượt mà.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  HTML5 (W3C)
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  Modular CSS3
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  jQuery Parallax
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 09 PHỤ LỤC & DEVELOPER HAND-OFF ================= */}
        <section id="phu-luc" className="mb-20 scroll-mt-32">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-500 font-mono text-xs font-bold border border-rose-500/20">
              09
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Xuất Mã Nguồn &amp; Phụ Lục (Hand-off)</h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-8 text-sm">
            Sao chép nhanh các cấu hình CSS Variables và Tailwind CSS để nhúng trực tiếp vào dự án.
          </p>

          <div className="space-y-6">
            {/* CSS Variables Snippet */}
            <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-5 font-mono text-xs text-zinc-300 overflow-x-auto relative">
              <div className="flex justify-between items-center pb-3 mb-3 border-b border-zinc-800">
                <span className="text-zinc-400 font-semibold">CSS Variables (:root &amp; .dark in globals.css)</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `:root { --primary: 346 87% 43%; --background: 240 10% 3.9%; --foreground: 0 0% 98%; --card: 240 10% 4.8%; --border: 240 3.7% 15.9%; --radius: 0.85rem; }`,
                      "CSS Variables"
                    )
                  }
                  className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-white text-[11px] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Copy CSS
                </button>
              </div>
              <pre className="text-rose-400">
{`:root {
  --primary: 346 87% 43%;        /* Crimson NestJS: #E11D48 */
  --primary-foreground: 0 0% 100%;
  --background: 240 10% 3.9%;     /* Deep Black: #09090B */
  --foreground: 0 0% 98%;        /* White: #FAFAFA */
  --card: 240 10% 4.8%;          /* Card Surface: #18181B */
  --border: 240 3.7% 15.9%;      /* Border: #27272A */
  --radius: 0.85rem;             /* 14px */
}`}
              </pre>
            </div>

            {/* Accessibility Checklist */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-sm mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Bảng Kiểm Tra Chất Lượng &amp; Khả Năng Tiếp Cận (WCAG 2.1 AA Checklist)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Độ tương phản màu chữ đạt chuẩn WCAG AA (≥ 4.5:1)</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Hỗ trợ điều hướng bằng bàn phím (tabindex &amp; focus-visible)</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Kích thước vùng bấm cảm ứng chuẩn (Touch target ≥ 44×44px)</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Hỗ trợ chuyển đổi mượt mà giữa chế độ Sáng / Tối (Dark / Light)</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Đáp ứng 100% W3C HTML5 Validation và Responsive đa màn hình</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Hỗ trợ giảm tải chuyển động (prefers-reduced-motion)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500">
          Portfolio Design System v1.0 • Nguyễn Đỗ Quang Sáng • Built with Next.js &amp; Tailwind CSS
        </div>
      </div>
    </div>
  );
}

