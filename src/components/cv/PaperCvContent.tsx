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
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-zinc-700">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-zinc-900" />
                {personal.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-zinc-900" />
                {personal.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-zinc-900" />
                QuangSang
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-900" />
                {personal.location}
              </span>
            </div>
          </div>

          {/* Section: TÓM TẮT / SUMMARY */}
          <div className="mt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 pb-1 border-b border-zinc-300 mb-2.5">
              {isEn ? "PROFESSIONAL SUMMARY" : "TÓM TẮT"}
            </h2>
            <p className="text-xs sm:text-[13px] text-zinc-800 leading-relaxed text-justify">
              {isEn
                ? "Frontend Developer with 2+ years of hands-on experience building, maintaining, and performance-tuning web applications. Proficient in slicing complex W3C-compliant responsive layouts from Photoshop, Illustrator, Adobe XD, and Figma into HTML5/CSS3 and JavaScript/jQuery. Experienced in developing and converting static HTML into WordPress Custom Themes. Proactively integrates AI tools (Claude, ChatGPT, Copilot) into daily workflows to optimize speed and precision."
                : "Lập trình viên Frontend có hơn 2 năm kinh nghiệm thực tế xây dựng, bảo trì và nâng cấp hiệu năng website. Thành thạo việc cắt layout giao diện phức tạp chuẩn W3C & Responsive từ Photoshop, Illustrator, Adobe XD, Figma sang HTML5/CSS3 và JavaScript/jQuery. Có kinh nghiệm xây dựng và chuyển đổi Custom Theme WordPress từ source HTML tĩnh. Chủ động ứng dụng các công cụ AI (Claude, ChatGPT, Copilot) vào quy trình code để tối ưu hóa tiến độ và chất lượng sản phẩm."}
            </p>
          </div>

          {/* Section: HỌC VẤN / EDUCATION */}
          <div className="mt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 pb-1 border-b border-zinc-300 mb-3">
              {isEn ? "EDUCATION" : "HỌC VẤN"}
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-[13px]">
                  <div className="flex justify-between items-baseline font-bold text-zinc-950">
                    <span>{edu.institution}</span>
                    <span className="font-normal text-zinc-600 font-mono text-xs">
                      {edu.startDate} – {edu.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline text-zinc-800 italic">
                    <span>{edu.major}</span>
                    <span className="font-semibold text-zinc-950 not-italic text-xs">
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
              <div className="text-xs sm:text-[13px] pt-1">
                <div className="flex justify-between items-baseline font-bold text-zinc-950">
                  <span>{isEn ? "Enterprise Internship – Fresher" : "Thực tập doanh nghiệp – Fresher"}</span>
                  <span className="font-normal text-zinc-600 font-mono text-xs">
                    01/2024 – 07/2024
                  </span>
                </div>
                <div className="text-zinc-800 italic mb-1">Quốc Bảo Software</div>
                <ul className="list-disc list-inside text-xs text-zinc-700 pl-1 space-y-0.5">
                  <li>{isEn ? "Gathered and analyzed client requirements" : "Thu thập thông tin nhu cầu khách hàng"}</li>
                  <li>{isEn ? "Designed modern UI/UX for web and applications" : "Thiết kế UI/UX ứng dụng & website"}</li>
                  <li>{isEn ? "Developed responsive frontend websites" : "Lập trình giao diện Website"}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: KỸ NĂNG / SKILLS */}
          <div className="mt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 pb-1 border-b border-zinc-300 mb-2.5">
              {isEn ? "TECHNICAL SKILLS" : "KỸ NĂNG"}
            </h2>
            <div className="space-y-1.5 text-xs sm:text-[13px] text-zinc-800">
              <p>
                <strong className="text-zinc-950 font-semibold">Frontend &amp; UI:</strong>{" "}
                HTML5 (W3C Standard), CSS3, JavaScript (ES6+), jQuery, WordPress (Custom Themes &amp; Child Themes), Responsive Web Design, Tailwind CSS, ReactJS, Next.js
              </p>
              <p>
                <strong className="text-zinc-950 font-semibold">Design Tools:</strong>{" "}
                Figma, Adobe Photoshop, Adobe XD, Adobe Illustrator ({isEn ? "Layout slicing, asset export, UI/UX" : "Cắt layout, trích xuất assets, thiết kế UI/UX"})
              </p>
              <p>
                <strong className="text-zinc-950 font-semibold">{isEn ? "AI & Optimization:" : "Ứng dụng AI & Tối ưu:"}</strong>{" "}
                Claude, ChatGPT, GitHub Copilot, Core Web Vitals, Google PageSpeed, Cross-Browser Compatibility
              </p>
              <p>
                <strong className="text-zinc-950 font-semibold">{isEn ? "Backend & Version Control:" : "Backend & Quản lý mã nguồn:"}</strong>{" "}
                Node.js, Express.js, RESTful APIs, Git, GitHub, Postman
              </p>
            </div>
          </div>

          {/* Section: KINH NGHIỆM LÀM VIỆC / WORK EXPERIENCE */}
          <div className="mt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 pb-1 border-b border-zinc-300 mb-3">
              {isEn ? "WORK EXPERIENCE" : "KINH NGHIỆM LÀM VIỆC"}
            </h2>
            <div className="space-y-4">
              {experiences.slice(0, 2).map((exp) => (
                <div key={exp.id} className="text-xs sm:text-[13px]">
                  <div className="flex justify-between items-baseline font-bold text-zinc-950">
                    <span>{exp.organization}</span>
                    <span className="font-normal text-zinc-600 font-mono text-xs">
                      {exp.startDate} – {exp.endDate || (isEn ? "Present" : "Hiện tại")}
                    </span>
                  </div>
                  <div className="font-medium text-zinc-800 italic mb-1.5">
                    {exp.role}
                  </div>
                  <ul className="list-disc list-outside text-xs text-zinc-700 ml-4 space-y-1 text-justify">
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
            <span className="text-xs text-zinc-500 font-mono">{personal.email}</span>
          </div>

          {/* Section: DỰ ÁN CÁ NHÂN & THỰC TẾ */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 pb-1 border-b border-zinc-300 mb-4">
              {isEn ? "KEY & PERSONAL PROJECTS" : "DỰ ÁN NỔI BẬT & CÁ NHÂN"}
            </h2>

            <div className="space-y-4">
              {/* Dự án 1: BITCO TUY NEN */}
              <div className="text-xs sm:text-[13px]">
                <div className="flex justify-between items-baseline font-bold text-zinc-950">
                  <span className="text-sm text-zinc-950">
                    {isEn ? "BITCO TUY NEN — W3C ENTERPRISE LANDING PAGE" : "LANDING PAGE BITCO TUY NEN BÌNH ĐỊNH (CHUẨN W3C)"}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">HTML5 (W3C) • Modular CSS3 • jQuery/JS • Parallax</span>
                </div>
                <ul className="list-disc list-outside text-xs text-zinc-700 ml-4 mt-1 space-y-0.5 text-justify">
                  <li>
                    {isEn
                      ? "Slices pixel-perfect responsive layouts from design files into clean HTML5/CSS3 and JavaScript/jQuery with 100% W3C Validation compliance."
                      : "Chuyển đổi layout chuẩn pixel-perfect từ thiết kế sang HTML5/CSS3 và JavaScript/jQuery, tối ưu mã nguồn đáp ứng 100% tiêu chuẩn W3C Validation."}
                  </li>
                  <li>
                    {isEn
                      ? "Engineered fluid interactive effects: Hero Parallax, Scroll Brick Drop animation, tabbed product filters, and automated metrics counter."
                      : "Lập trình hiệu ứng thị giác tương tác mượt mà: Hero Parallax, Scroll Brick Drop animation, bộ lọc sản phẩm dạng Tab và bộ đếm thành tựu sản xuất tự động."}
                  </li>
                  <li>
                    {isEn
                      ? "Fully responsive across mobile/tablet/desktop breakpoints; optimized assets for sub-1.5s load times and high Google PageSpeed."
                      : "Tương thích hoàn hảo trên mọi thiết bị và đa trình duyệt; tối ưu tài nguyên đạt tốc độ tải dưới 1.5s và điểm số Google PageSpeed cao."}
                  </li>
                </ul>
              </div>

              {/* Dự án 2: HPO PORTAL & WORDPRESS CUSTOM CMS */}
              <div className="text-xs sm:text-[13px]">
                <div className="flex justify-between items-baseline font-bold text-zinc-950">
                  <span className="text-sm text-zinc-950">
                    {isEn ? "HPO DRIVER PORTAL & CUSTOM WORDPRESS THEME" : "CỔNG THÔNG TIN & THEME WORDPRESS TUỲ BIẾN (HPO PORTAL)"}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">WordPress • PHP • HTML5/CSS3 • SEO &amp; QR</span>
                </div>
                <ul className="list-disc list-outside text-xs text-zinc-700 ml-4 mt-1 space-y-0.5 text-justify">
                  <li>
                    {isEn
                      ? "Built and converted custom WordPress themes from static HTML sources, structuring clean template code for streamlined content & fee management."
                      : "Xây dựng và chuyển đổi Custom Theme WordPress từ source HTML tĩnh, cấu hình cấu trúc code sạch và quản trị nội dung khóa học, học phí thuận tiện."}
                  </li>
                  <li>
                    {isEn
                      ? "Configured full SEO metadata and Core Web Vitals optimizations; integrated real-time student credential verification via QR codes."
                      : "Cấu hình metadata SEO tổng thể, tối ưu hóa tốc độ tải trang (Core Web Vitals) và tích hợp module tra cứu hồ sơ học viên trực tuyến qua mã QR."}
                  </li>
                  <li>
                    {isEn
                      ? "Executed regular web maintenance, security hardening, and browser compatibility patches."
                      : "Thực hiện bảo trì hệ thống website định kỳ (Maintenance), rà soát bảo mật và đảm bảo tương thích ổn định lâu dài."}
                  </li>
                </ul>
              </div>

              {/* Dự án 3: FOOTBALL PAY */}
              <div className="text-xs sm:text-[13px]">
                <div className="flex justify-between items-baseline font-bold text-zinc-950">
                  <span className="text-sm text-zinc-950">
                    {isEn ? "FOOTBALL PAY — MATCH & EXPENSE SETTLEMENT PLATFORM" : "FOOTBALL PAY — HỆ THỐNG QUẢN LÝ THI ĐẤU & CHI PHÍ"}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">Next.js App Router • React 19 • Google Sheets API • VietQR</span>
                </div>
                <ul className="list-disc list-outside text-xs text-zinc-700 ml-4 mt-1 space-y-0.5 text-justify">
                  <li>
                    {isEn
                      ? "Designed and developed match scheduling and automated expense splitting system (pitch rental, beverages, sundries) per attendee."
                      : "Thiết kế và xây dựng ứng dụng quản lý lịch thi đấu, tự động hóa chia tiền sân bãi, nước uống và chi phí phát sinh trên từng đầu người."}
                  </li>
                  <li>
                    {isEn
                      ? "Configured dual Admin/Member workflows: Admin manages matches, rosters, and debts; Members inspect balances and settle payments."
                      : "Phân quyền 2 luồng Admin và Member: Admin quản lý trận, CRUD thành viên, theo dõi nợ; Member kiểm tra số dư và thanh toán."}
                  </li>
                  <li>
                    {isEn
                      ? "Integrated dynamic payment QR generator (VietQR/Momo), bidirectional Google Sheets sync, and Excel report export."
                      : "Tích hợp sinh mã QR thanh toán động VietQR / Momo theo cú pháp tự động; hỗ trợ đồng bộ hai chiều với Google Sheets và xuất báo cáo Excel (.xlsx)."}
                  </li>
                </ul>
              </div>

              {/* Dự án 4: NIGHT HOWLER & 3D INTERACTIVE */}
              <div className="text-xs sm:text-[13px]">
                <div className="flex justify-between items-baseline font-bold text-zinc-950">
                  <span className="text-sm text-zinc-950">
                    {isEn ? "NIGHT HOWLER & 3D PROCEDURAL GRAPHICS" : "NIGHT HOWLER & ĐỒ HỌA 3D PROCEDURAL"}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">React 19 • Three.js • Colyseus WebSockets • LiveKit</span>
                </div>
                <ul className="list-disc list-outside text-xs text-zinc-700 ml-4 mt-1 space-y-0.5 text-justify">
                  <li>
                    {isEn
                      ? "Demonstrates deep frontend technical competence: Built realtime multiplayer 3D game arena with partitioned spatial voice chat (LiveKit) and WebSocket state sync."
                      : "Minh chứng năng lực kỹ thuật và tư duy thuật toán frontend chuyên sâu: Xây dựng game Ma Sói 3D tương tác realtime với hệ thống voice chat phân vùng (LiveKit) và đồng bộ trạng thái bàn chơi qua WebSockets."}
                  </li>
                  <li>
                    {isEn
                      ? "Engineered procedural 3D BufferGeometry solely via Three.js (<300KB/model) with 360° interactive rotation, Fresnel glow shaders, and direct .GLB/.OBJ export."
                      : "Lập trình hình học thủ tục 3D (Procedural BufferGeometry) hoàn toàn bằng Three.js, tối ưu dung lượng siêu nhẹ (< 300KB/model), tương tác xoay 360° và xuất file .GLB/.OBJ."}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: NGOẠI NGỮ / LANGUAGES */}
          <div className="mt-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 pb-1 border-b border-zinc-300 mb-3">
              {isEn ? "LANGUAGES" : "NGOẠI NGỮ"}
            </h2>
            <p className="text-xs sm:text-[13px] text-zinc-800">
              <strong className="text-zinc-950 font-semibold">{isEn ? "English:" : "Tiếng Anh:"}</strong>{" "}
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
