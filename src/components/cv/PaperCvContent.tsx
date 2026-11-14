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
                ? "Frontend Developer with 2+ years of hands-on experience building, maintaining, and performance-tuning web applications. Proficient in crafting complex responsive layouts and implementing fluid front-end logic with modern JavaScript/TypeScript, ReactJS, and Next.js. Solid foundation in Three.js / WebGL 3D graphics and custom WordPress architecture. Proactively integrates AI tools into daily workflows to optimize speed and precision."
                : "LTV Frontend có 2 năm kinh nghiệm xây dựng, bảo trì và nâng cấp hiệu năng website. Thành thạo việc cắt layout giao diện phức tạp và linh hoạt xử lý logic front-end với JavaScript/jQuery, ReactJS và Next.js. Có kinh nghiệm sâu sắc về Three.js / WebGL, tạo lập và tùy biến dự án WordPress từ con số không. Chủ động áp dụng AI vào quy trình làm việc hàng ngày để đảm bảo tiến độ nhanh chóng và độ chính xác tối đa."}
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
                HTML5, CSS3, JavaScript, TypeScript, ReactJS, Next.js, Three.js, Tailwind CSS, jQuery, WordPress
              </p>
              <p>
                <strong className="text-zinc-950 font-semibold">Backend &amp; APIs:</strong>{" "}
                Node.js, Express.js, RESTful APIs, Colyseus (WebSockets), LiveKit SDK
              </p>
              <p>
                <strong className="text-zinc-950 font-semibold">Design Tools:</strong>{" "}
                Figma, Adobe Photoshop, Adobe XD
              </p>
              <p>
                <strong className="text-zinc-950 font-semibold">Version Control &amp; Others:</strong>{" "}
                Git, GitHub, Postman, Google Sheets API
              </p>
            </div>
          </div>

          {/* Section: KINH NGHIỆM LÀM VIỆC / WORK EXPERIENCE */}
          <div className="mt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-950 pb-1 border-b border-zinc-300 mb-3">
              {isEn ? "WORK EXPERIENCE" : "KINH NGHIỆM LÀM VIỆC"}
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
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

            <div className="space-y-5">
              {/* Dự án 1: NIGHT HOWLER */}
              <div className="text-xs sm:text-[13px]">
                <div className="flex justify-between items-baseline font-bold text-zinc-950">
                  <span className="text-sm text-zinc-950">
                    {isEn ? "NIGHT HOWLER — 3D REALTIME MULTIPLAYER WEREWOLF GAME" : "NIGHT HOWLER — GAME MA SÓI 3D REALTIME"}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">React 19 • Three.js • Colyseus • LiveKit</span>
                </div>
                <ul className="list-disc list-outside text-xs text-zinc-700 ml-4 mt-1.5 space-y-1 text-justify">
                  <li>
                    {isEn
                      ? "Engineered partitioned spatial voice chat & text channels (lobby, daytime village, secret night werewolf channel) with LiveKit WebRTC SDK."
                      : "Xây dựng hệ thống kênh chat và voice chat phân vùng độc lập theo đối tượng (phòng chờ, cộng đồng ban ngày, kênh bí mật của phe Sói vào ban đêm) sử dụng LiveKit WebRTC SDK."}
                  </li>
                  <li>
                    {isEn
                      ? "Implemented authoritative realtime game state sync with Colyseus WebSockets; developed automated bot simulation script for stress testing."
                      : "Đồng bộ trạng thái bàn chơi thời gian thực (state sync) với độ trễ thấp thông qua Colyseus WebSockets; xây dựng kịch bản kiểm thử bot tự động mô phỏng tải."}
                  </li>
                  <li>
                    {isEn
                      ? "Built stylized 3D graphics and fluid orbit camera controls with React Three Fiber and post-processing effects."
                      : "Tương tác không gian đồ họa 3D phong cách Stylized Low-Poly với React Three Fiber và camera động."}
                  </li>
                </ul>
              </div>

              {/* Dự án 2: AVATAR / 3D PROCEDURAL */}
              <div className="text-xs sm:text-[13px]">
                <div className="flex justify-between items-baseline font-bold text-zinc-950">
                  <span className="text-sm text-zinc-950">
                    {isEn ? "AVATAR — THREE.JS PROCEDURAL 3D COLLECTION" : "AVATAR — BỘ SƯU TẬP 3D THREE.JS PROCEDURAL"}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">Three.js • WebGL • BufferGeometry • glTF</span>
                </div>
                <ul className="list-disc list-outside text-xs text-zinc-700 ml-4 mt-1.5 space-y-1 text-justify">
                  <li>
                    {isEn
                      ? "Conceptualized and crafted 5 stylized low-poly chibi 3D characters (Seer, Werewolf, Guard, Witch, Hunter)."
                      : "Lên concept, bố cục bối cảnh, thiết kế hình ảnh và hiệu ứng nhân vật 3D phong cách Low-Poly chủ đề Ma Sói (Tiên tri Seer, Người Sói, Hiệp Sĩ, Phù Thủy, Thợ Săn)."}
                  </li>
                  <li>
                    {isEn
                      ? "Generated procedural BufferGeometry solely in vanilla JavaScript/Three.js, eliminating heavy 3D assets (<300KB/model)."
                      : "Lập trình cấu trúc hình học thủ tục (Procedural BufferGeometry) hoàn toàn bằng Three.js, không phụ thuộc file 3D ngoài, giúp dung lượng siêu nhẹ (< 300KB)."}
                  </li>
                  <li>
                    {isEn
                      ? "Supported 360° rotation, 4 poses (idle, cast, meditate, t-pose), Fresnel glow shaders, and direct .GLB/.OBJ export."
                      : "Xây dựng tương tác xoay 360°, đổi 4 tư thế (idle, cast, meditate, t-pose), hiệu ứng phát sáng quả cầu phép Fresnel và xuất trực tiếp file .GLB / .OBJ cho Game Engine."}
                  </li>
                </ul>
              </div>

              {/* Dự án 3: FOOTBALL PAY */}
              <div className="text-xs sm:text-[13px]">
                <div className="flex justify-between items-baseline font-bold text-zinc-950">
                  <span className="text-sm text-zinc-950">
                    {isEn ? "FOOTBALL PAY — MATCH & EXPENSE SETTLEMENT PLATFORM" : "FOOTBALL PAY — HỆ THỐNG QUẢN LÝ THI ĐẤU & CHI PHÍ"}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">Next.js App Router • React 19 • Google Sheets API</span>
                </div>
                <ul className="list-disc list-outside text-xs text-zinc-700 ml-4 mt-1.5 space-y-1 text-justify">
                  <li>
                    {isEn
                      ? "Automated match schedules and fair fee splitting (pitch rental, beverages, miscellaneous expenses) per participant."
                      : "Thiết kế và xây dựng ứng dụng quản lý lịch thi đấu, tự động hóa chia tiền sân bãi, nước uống và chi phí phát sinh trên từng đầu người."}
                  </li>
                  <li>
                    {isEn
                      ? "Configured dual Admin/Member workflows: Admin manages matches, rosters, and debts; Members check balances and pay."
                      : "Phân quyền 2 luồng Admin và Member: Admin quản lý trận, CRUD thành viên, cấu hình tài khoản, theo dõi nợ; Member kiểm tra dư nợ và thanh toán."}
                  </li>
                  <li>
                    {isEn
                      ? "Integrated dynamic payment QR generator (VietQR/Momo), bidirectional Google Sheets sync, and Excel export."
                      : "Tích hợp sinh mã QR thanh toán động VietQR / Momo theo cú pháp tự động; hỗ trợ đồng bộ hai chiều với Google Sheets và xuất báo cáo Excel (.xlsx)."}
                  </li>
                </ul>
              </div>

              {/* Dự án 4: BITCO TUY NEN */}
              <div className="text-xs sm:text-[13px]">
                <div className="flex justify-between items-baseline font-bold text-zinc-950">
                  <span className="text-sm text-zinc-950">
                    {isEn ? "BITCO TUY NEN ENTERPRISE LANDING PAGE" : "LANDING PAGE BITCO TUY NEN BÌNH ĐỊNH"}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">HTML5 • Modular CSS3 • Parallax • Vanilla JS</span>
                </div>
                <ul className="list-disc list-outside text-xs text-zinc-700 ml-4 mt-1.5 space-y-1 text-justify">
                  <li>
                    {isEn
                      ? "Designed and developed corporate showcase for premium building materials (Tuy Nen bricks, AAC lightweight blocks)."
                      : "Thiết kế và xây dựng Website doanh nghiệp giới thiệu gạch nung Tuy Nen và vật liệu xanh (Gạch AAC, Tấm Panel ALC) chuẩn responsive."}
                  </li>
                  <li>
                    {isEn
                      ? "Created interactive visual interactions: Hero Parallax, Scroll Brick Drop animation, product tabs, and animated metrics."
                      : "Lập trình các hiệu ứng thị giác tương tác mượt mà: Hero Parallax, Scroll Brick Drop animation, bộ lọc sản phẩm dạng tab và bộ đếm thành tựu sản xuất tự động."}
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
