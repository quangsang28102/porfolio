"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { getPortfolioData } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export function PaperCvContent() {
  const { language } = useLanguage();
  const currentData = getPortfolioData(language);
  const { personal, education, experiences, projects } = currentData;
  const isEn = language === "en";

  return (
    <div className="paper-cv-root font-sans text-zinc-900 bg-white shadow-2xl max-w-[820px] mx-auto select-text leading-normal">
      {/* ==================== TRANG 1 ==================== */}
      <div className="paper-page p-10 sm:p-14 border-b-2 sm:border-b-4 border-zinc-200 bg-white relative print:p-8 print:border-none print:shadow-none min-h-[1100px] flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="text-center pb-5 border-b-2 border-zinc-900">
            <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-zinc-950 mb-1.5">
              {personal.fullName}
            </h1>
            <p className="text-base sm:text-lg font-bold uppercase tracking-wider text-zinc-800 mb-3.5">
              {personal.role}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-[13px] text-zinc-900 font-medium">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 hover:text-rose-600 transition-colors font-semibold underline decoration-zinc-300 hover:decoration-rose-500 underline-offset-2"
                title={`Gửi email đến ${personal.email}`}
              >
                <Mail className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
                <span>{personal.email}</span>
              </a>
              {personal.phone && (
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-1.5 hover:text-rose-600 transition-colors font-semibold"
                  title={`Gọi ${personal.phone}`}
                >
                  <Phone className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
                  <span>{personal.phone}</span>
                </a>
              )}
              <a
                href={personal.social.github || "https://github.com/quangsang28102"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-rose-600 transition-colors font-semibold underline decoration-zinc-300 hover:decoration-rose-500 underline-offset-2"
              >
                <GithubIcon className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
                quangsang28102
              </a>
              <span className="flex items-center gap-1.5 text-zinc-800">
                <MapPin className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
                {personal.location}
              </span>
            </div>
          </div>

          {/* Section: TÓM TẮT / SUMMARY */}
          <div className="mt-6">
            <h2 className="text-sm sm:text-[15px] font-extrabold uppercase tracking-wider text-zinc-950 pb-1 border-b-2 border-zinc-900 mb-2.5">
              {isEn ? "PROFESSIONAL SUMMARY" : "TÓM TẮT"}
            </h2>
            <p className="text-[13px] sm:text-[13.5px] text-zinc-900 font-medium leading-relaxed text-justify">
              {isEn
                ? "Frontend Developer with 2+ years of hands-on experience building, maintaining, and performance-tuning web applications. Proficient in slicing complex W3C-compliant responsive layouts from Photoshop, Illustrator, Adobe XD, and Figma into HTML5/CSS3 and JavaScript/jQuery. Experienced in developing and converting static HTML into WordPress Custom Themes. Proactively integrates AI tools (Claude, ChatGPT, Copilot) into daily workflows to optimize speed and precision."
                : "Lập trình viên Frontend có hơn 2 năm kinh nghiệm thực tế xây dựng, bảo trì và nâng cấp hiệu năng website. Thành thạo việc cắt layout giao diện phức tạp chuẩn W3C & Responsive từ Photoshop, Illustrator, Adobe XD, Figma sang HTML5/CSS3 và JavaScript/jQuery. Có kinh nghiệm xây dựng và chuyển đổi Custom Theme WordPress từ source HTML tĩnh. Chủ động ứng dụng các công cụ AI (Claude, ChatGPT, Copilot) vào quy trình code để tối ưu hóa tiến độ và chất lượng sản phẩm."}
            </p>
          </div>

          {/* Section: HỌC VẤN / EDUCATION */}
          <div className="mt-6">
            <h2 className="text-sm sm:text-[15px] font-extrabold uppercase tracking-wider text-zinc-950 pb-1 border-b-2 border-zinc-900 mb-3">
              {isEn ? "EDUCATION" : "HỌC VẤN"}
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-[13.5px]">
                  <div className="flex justify-between items-baseline font-bold text-zinc-950">
                    <span className="text-[13.5px] sm:text-[14px] font-bold">{edu.institution}</span>
                    <span className="font-semibold text-zinc-700 font-mono text-xs">
                      {edu.startDate} – {edu.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline text-zinc-900 font-medium italic">
                    <span>{edu.major}</span>
                    <span className="font-bold text-zinc-950 not-italic text-xs sm:text-[13px]">
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
              <div className="text-xs sm:text-[13.5px] pt-1">
                <div className="flex justify-between items-baseline font-bold text-zinc-950">
                  <span className="text-[13.5px] sm:text-[14px] font-bold">{isEn ? "Enterprise Internship – Fresher" : "Thực tập doanh nghiệp – Fresher"}</span>
                  <span className="font-semibold text-zinc-700 font-mono text-xs">
                    01/2024 – 07/2024
                  </span>
                </div>
                <div className="text-zinc-900 font-semibold italic mb-1">Quốc Bảo Software</div>
                <ul className="list-disc list-inside text-xs sm:text-[13px] text-zinc-900 pl-1 space-y-0.5 font-medium">
                  <li>{isEn ? "Gathered and analyzed client requirements" : "Thu thập thông tin nhu cầu khách hàng"}</li>
                  <li>{isEn ? "Designed modern UI/UX for web and applications" : "Thiết kế UI/UX ứng dụng & website"}</li>
                  <li>{isEn ? "Developed responsive frontend websites" : "Lập trình giao diện Website"}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: KỸ NĂNG / SKILLS */}
          <div className="mt-6">
            <h2 className="text-sm sm:text-[15px] font-extrabold uppercase tracking-wider text-zinc-950 pb-1 border-b-2 border-zinc-900 mb-2.5">
              {isEn ? "TECHNICAL SKILLS" : "KỸ NĂNG"}
            </h2>
            <div className="space-y-1.5 text-xs sm:text-[13.5px] text-zinc-900 font-medium leading-relaxed">
              <p>
                <strong className="text-zinc-950 font-bold">Frontend &amp; UI:</strong>{" "}
                HTML5 (W3C Standard), CSS3, JavaScript (ES6+), jQuery, WordPress (Custom Themes &amp; Child Themes), Responsive Web Design, Tailwind CSS, ReactJS, Next.js
              </p>
              <p>
                <strong className="text-zinc-950 font-bold">Design Tools:</strong>{" "}
                Figma, Adobe Photoshop, Adobe XD, Adobe Illustrator ({isEn ? "Layout slicing, asset export, UI/UX" : "Cắt layout, trích xuất assets, thiết kế UI/UX"})
              </p>
              <p>
                <strong className="text-zinc-950 font-bold">{isEn ? "AI & Optimization:" : "Ứng dụng AI & Tối ưu:"}</strong>{" "}
                Claude, ChatGPT, GitHub Copilot, Core Web Vitals, Google PageSpeed, Cross-Browser Compatibility
              </p>
              <p>
                <strong className="text-zinc-950 font-bold">{isEn ? "Backend & Version Control:" : "Backend & Quản lý mã nguồn:"}</strong>{" "}
                Node.js, Express.js, RESTful APIs, Git, GitHub, Postman
              </p>
            </div>
          </div>

          {/* Section: KINH NGHIỆM LÀM VIỆC / WORK EXPERIENCE */}
          <div className="mt-6">
            <h2 className="text-sm sm:text-[15px] font-extrabold uppercase tracking-wider text-zinc-950 pb-1 border-b-2 border-zinc-900 mb-3">
              {isEn ? "WORK EXPERIENCE" : "KINH NGHIỆM LÀM VIỆC"}
            </h2>
            <div className="space-y-4">
              {experiences.slice(0, 2).map((exp) => (
                <div key={exp.id} className="text-xs sm:text-[13.5px]">
                  <div className="flex justify-between items-baseline font-bold text-zinc-950">
                    <span className="text-[13.5px] sm:text-[14.5px] font-bold">{exp.organization}</span>
                    <span className="font-semibold text-zinc-700 font-mono text-xs">
                      {exp.startDate} – {exp.endDate || (isEn ? "Present" : "Hiện tại")}
                    </span>
                  </div>
                  <div className="font-semibold text-zinc-900 italic mb-1.5">
                    {exp.role}
                  </div>
                  <ul className="list-disc list-outside text-xs sm:text-[13px] text-zinc-900 ml-4 space-y-1 font-medium text-justify leading-relaxed">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Page 1 footer number */}
        <div className="text-center text-[10px] text-zinc-400 font-mono pt-4 mt-6 border-t border-zinc-100">
          {isEn ? "Page 1 of 2" : "Trang 1 / 2"}
        </div>
      </div>

      {/* ==================== TRANG 2 ==================== */}
      <div className="paper-page p-10 sm:p-14 bg-white relative print:p-8 print:shadow-none min-h-[1100px] flex flex-col justify-between">
        <div>
          {/* Header trang 2 nhỏ gọn */}
          <div className="flex justify-between items-center pb-3 border-b-2 border-zinc-900 mb-6">
            <span className="font-extrabold uppercase text-xs sm:text-sm tracking-tight text-zinc-950">
              {personal.fullName} — {isEn ? "CURRICULUM VITAE" : "HỒ SƠ NĂNG LỰC"}
            </span>
            <a
              href={`mailto:${personal.email}`}
              className="text-xs sm:text-[13px] text-zinc-900 hover:text-rose-600 font-mono font-semibold underline decoration-zinc-300 hover:decoration-rose-500 transition-colors"
              title={`Gửi email đến ${personal.email}`}
            >
              {personal.email}
            </a>
          </div>

          {/* Section: DỰ ÁN CÁ NHÂN & THỰC TẾ */}
          <div>
            <h2 className="text-sm sm:text-[15px] font-extrabold uppercase tracking-wider text-zinc-950 pb-1 border-b-2 border-zinc-900 mb-4">
              {isEn ? "PERSONAL PROJECTS" : "DỰ ÁN CÁ NHÂN"}
            </h2>

            <div className="space-y-4">
              {/* Dự án 1: BITCO TUY NEN */}
              <div className="text-xs sm:text-[13.5px]">
                <div className="flex flex-wrap justify-between items-baseline gap-1 font-bold text-zinc-950">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-[14.5px] text-zinc-950 font-bold">
                      {isEn ? "BITCO Tuy Nen Brick Corporation | Building Materials" : "Công ty Cổ phần Gạch Tuy Nen Bình Định - BITCO"}
                    </span>
                    <a
                      href="https://tuynen.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] sm:text-[10.5px] font-mono px-2 py-0.5 rounded bg-zinc-100 hover:bg-rose-50 text-rose-600 border border-zinc-300 hover:border-rose-400 font-bold"
                    >
                      tuynen.vercel.app ↗
                    </a>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-700 font-semibold">HTML5 (W3C) • Modular CSS3 • jQuery • Parallax</span>
                </div>
                <ul className="list-disc list-outside text-xs sm:text-[13px] text-zinc-900 ml-4 mt-1 space-y-1 font-medium text-justify leading-relaxed">
                  <li>
                    {isEn
                      ? "Slices pixel-perfect responsive layouts from design files into clean HTML5/CSS3 and JavaScript/jQuery with 100% W3C Validation compliance."
                      : "Cắt layout chuẩn pixel-perfect từ thiết kế sang HTML5/CSS3 và JavaScript/jQuery, tối ưu mã nguồn đáp ứng 100% tiêu chuẩn W3C Validation."}
                  </li>
                  <li>
                    {isEn
                      ? "Engineered fluid interactive effects: Hero Parallax, scroll animations, tabbed product filters, and sub-1.5s load times on Vercel."
                      : "Lập trình hiệu ứng Parallax, bộ lọc sản phẩm dạng Tab, bộ đếm tự động; responsive mọi màn hình và tải nhanh dưới 1.5s trên Vercel."}
                  </li>
                </ul>
              </div>

              {/* Dự án 2: HPO PORTAL & WORDPRESS CUSTOM CMS */}
              <div className="text-xs sm:text-[13.5px]">
                <div className="flex flex-wrap justify-between items-baseline gap-1 font-bold text-zinc-950">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-[14.5px] text-zinc-950 font-bold">
                      {isEn ? "HPO – Vocational Driving Education Center" : "HPO – Trung Tâm Giáo Dục Nghề Nghiệp Ô Tô Hiệp Phát"}
                    </span>
                    <a
                      href="https://hpo-edu-v2.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] sm:text-[10.5px] font-mono px-2 py-0.5 rounded bg-zinc-100 hover:bg-rose-50 text-rose-600 border border-zinc-300 hover:border-rose-400 font-bold"
                    >
                      hpo-edu-v2.vercel.app ↗
                    </a>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-700 font-semibold">WordPress • PHP • HTML5/CSS3 • SEO &amp; QR</span>
                </div>
                <ul className="list-disc list-outside text-xs sm:text-[13px] text-zinc-900 ml-4 mt-1 space-y-1 font-medium text-justify leading-relaxed">
                  <li>
                    {isEn
                      ? "Converted static HTML sources into a customized WordPress administration theme, structuring clean template code for course and fee management."
                      : "Chuyển đổi source HTML tĩnh sang Custom Theme WordPress, tối ưu code sạch và trang Admin giúp quản trị bài viết, học phí dễ dàng."}
                  </li>
                  <li>
                    {isEn
                      ? "Configured SEO metadata, Core Web Vitals optimizations, and real-time student credential verification via dynamic QR codes."
                      : "Cấu hình metadata SEO tổng thể, tối ưu Core Web Vitals và tích hợp module tra cứu hồ sơ học viên trực tuyến bằng mã QR."}
                  </li>
                </ul>
              </div>

              {/* Dự án 3: FOOTBALL PAY */}
              <div className="text-xs sm:text-[13.5px]">
                <div className="flex flex-wrap justify-between items-baseline gap-1 font-bold text-zinc-950">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-[14.5px] text-zinc-950 font-bold">
                      Football Payment Manager
                    </span>
                    <a
                      href="https://football-pay.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] sm:text-[10.5px] font-mono px-2 py-0.5 rounded bg-zinc-100 hover:bg-rose-50 text-rose-600 border border-zinc-300 hover:border-rose-400 font-bold"
                    >
                      football-pay.vercel.app ↗
                    </a>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-700 font-semibold">Next.js • React 19 • Google Sheets API • VietQR</span>
                </div>
                <ul className="list-disc list-outside text-xs sm:text-[13px] text-zinc-900 ml-4 mt-1 space-y-1 font-medium text-justify leading-relaxed">
                  <li>
                    {isEn
                      ? "Designed automated match scheduling, per-person expense splitting, dynamic VietQR payment code generation, and bidirectional Google Sheets API sync."
                      : "Xây dựng ứng dụng quản lý lịch thi đấu, tự động hóa chia tiền sân bãi trên từng người, sinh mã QR VietQR động và đồng bộ 2 chiều với Google Sheets API."}
                  </li>
                  <li>
                    {isEn
                      ? "Configured dual Admin/Member workflows: Admin manages matches, rosters, and debts; Members inspect balances and settle payments with instant QR."
                      : "Phân quyền 2 luồng: Admin quản lý trận, CRUD thành viên, theo dõi nợ; Member kiểm tra công nợ và thanh toán nhanh chóng."}
                  </li>
                </ul>
              </div>

              {/* Dự án 4: AVATAR 3D THREE.JS STUDIO */}
              <div className="text-xs sm:text-[13.5px]">
                <div className="flex flex-wrap justify-between items-baseline gap-1 font-bold text-zinc-950">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-[14.5px] text-zinc-950 font-bold">
                      {isEn ? "AVATAR COLLECTION (Three.js Low-Poly)" : "AVATAR COLLECTION (Three.js Low-Poly)"}
                    </span>
                    <span className="text-[10px] sm:text-[10.5px] font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-300 font-bold">
                      {isEn ? "In Progress" : "Đang phát triển"}
                    </span>
                    <a
                      href="https://avatar-three-rouge.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] sm:text-[10.5px] font-mono px-2 py-0.5 rounded bg-zinc-100 hover:bg-rose-50 text-rose-600 border border-zinc-300 hover:border-rose-400 font-bold"
                    >
                      avatar-three-rouge.vercel.app ↗
                    </a>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-700 font-semibold">Three.js • WebGL • BufferGeometry • glTF/OBJ</span>
                </div>
                <ul className="list-disc list-outside text-xs sm:text-[13px] text-zinc-900 ml-4 mt-1 space-y-1 font-medium text-justify leading-relaxed">
                  <li>
                    {isEn
                      ? "Constructed procedural 3D Werewolf game character geometries entirely in code via Three.js BufferGeometry (<250KB payload) with 360° orbital camera manipulation."
                      : "Lập trình dựng hình học 3D các nhân vật trên tựa game ma sói hoàn toàn bằng code (BufferGeometry procedural) siêu nhẹ (<250KB), xoay tương tác không gian 360 độ."}
                  </li>
                  <li>
                    {isEn
                      ? "Integrated real-time Fresnel glow shaders, customizable character attributes, and direct client-side export to standard .GLB and .OBJ formats."
                      : "Tích hợp shader ánh sáng Fresnel glow thời gian thực, tùy chỉnh thông số nhân vật và hỗ trợ xuất trực tiếp ra file .GLB và .OBJ."}
                  </li>
                </ul>
              </div>

              {/* Dự án 5: NIGHT HOWLER */}
              <div className="text-xs sm:text-[13.5px]">
                <div className="flex flex-wrap justify-between items-baseline gap-1 font-bold text-zinc-950">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-[14.5px] text-zinc-950 font-bold">
                      {isEn ? "NIGHT HOWLER — 3D MULTIPLAYER WEREWOLF ARENA" : "NIGHT HOWLER — ĐẤU TRƯỜNG MA SÓI 3D & VOICE CHAT"}
                    </span>
                    <span className="text-[10px] sm:text-[10.5px] font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-300 font-bold">
                      {isEn ? "In Progress" : "Đang phát triển"}
                    </span>
                    <a
                      href="https://github.com/quangsang28102/NightHowler"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] sm:text-[10.5px] font-mono px-2 py-0.5 rounded bg-zinc-100 hover:bg-rose-50 text-rose-600 border border-zinc-300 hover:border-rose-400 font-bold"
                    >
                      github.com/quangsang28102/NightHowler ↗
                    </a>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-700 font-semibold">React 19 • Three.js • Colyseus • LiveKit Spatial Audio</span>
                </div>
                <ul className="list-disc list-outside text-xs sm:text-[13px] text-zinc-900 ml-4 mt-1 space-y-1 font-medium text-justify leading-relaxed">
                  <li>
                    {isEn
                      ? "Realtime multiplayer 3D Werewolf gaming platform built with Monorepo architecture, WebGL/Three.js, Colyseus WebSockets state sync, and LiveKit spatial audio voice chat."
                      : "Hệ thống game 3D thời gian thực kiến trúc Monorepo, đồ họa WebGL Three.js, đồng bộ trạng thái bàn chơi qua WebSockets (Colyseus) và voice chat phân vùng theo phe qua LiveKit SDK."}
                  </li>
                  <li>
                    {isEn
                      ? "Demonstrates strong foundational architecture, fullstack state management, and mastery of advanced web technologies."
                      : "Minh chứng năng lực tư duy kiến trúc hệ thống, làm chủ công nghệ cao (WebSockets, WebRTC không gian) và giải quyết các bài toán kỹ thuật phức tạp."}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: NGOẠI NGỮ / LANGUAGES */}
          <div className="mt-8">
            <h2 className="text-sm sm:text-[15px] font-extrabold uppercase tracking-wider text-zinc-950 pb-1 border-b-2 border-zinc-900 mb-3">
              {isEn ? "LANGUAGES" : "NGOẠI NGỮ"}
            </h2>
            <p className="text-xs sm:text-[13.5px] text-zinc-900 font-medium leading-relaxed">
              <strong className="text-zinc-950 font-bold">{isEn ? "English:" : "Tiếng Anh:"}</strong>{" "}
              {isEn
                ? "TOEIC 590 — Proficient in reading specialized technical documentation and communicating effectively in technology workplaces."
                : "TOEIC 590 — Có khả năng đọc hiểu tài liệu kỹ thuật chuyên ngành và giao tiếp cơ bản trong môi trường làm việc công nghệ."}
            </p>
          </div>
        </div>

        {/* Page 2 footer number */}
        <div className="text-center text-[10px] text-zinc-400 font-mono pt-4 mt-8 border-t border-zinc-100">
          {isEn ? "Page 2 of 2" : "Trang 2 / 2"}
        </div>
      </div>
    </div>
  );
}
