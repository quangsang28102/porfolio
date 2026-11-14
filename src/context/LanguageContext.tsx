"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "vi" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  vi: {
    // Nav
    "nav.about": "Giới thiệu",
    "nav.skills": "Kỹ năng",
    "nav.experience": "Kinh nghiệm",
    "nav.projects": "Dự án",
    "nav.education": "Học vấn",
    "nav.contact": "Liên hệ",
    "nav.viewCv": "Xem CV giấy",
    "nav.designSystem": "Design System",
    "nav.contactCta": "Liên hệ ngay",

    // Hero
    "hero.available": "Sẵn sàng tiếp nhận cơ hội mới",
    "hero.eyebrow": "Xin chào, tôi là",
    "hero.exploreProjects": "Khám phá dự án",
    "hero.getInTouch": "Liên hệ trao đổi",
    "hero.viewPaperCv": "Xem CV giấy (A4)",
    "hero.connect": "KẾT NỐI:",
    "hero.compiledIn": "Sẵn sàng: biên dịch trong 18ms",

    // About
    "about.badge": "01 // VỀ BẢN THÂN",
    "about.heading": "Đam mê kiến trúc chuẩn mực & Trải nghiệm mượt mà",
    "about.location": "Hoạt động tại",
    "about.philosophy": "Triết lý kỹ thuật",
    "about.phil1.title": "Performance First:",
    "about.phil1.desc": "Tối ưu hoá tải trang, Core Web Vitals và queries cơ sở dữ liệu.",
    "about.phil2.title": "Maintainable Code:",
    "about.phil2.desc": "Modular, tuân thủ SOLID và quy chuẩn Design System.",
    "about.phil3.title": "Continuous Learning:",
    "about.phil3.desc": "Nhanh chóng nắm bắt công nghệ mới và giải quyết bài toán cốt lõi.",

    // Skills
    "skills.badge": "02 // HỆ SINH THÁI CÔNG NGHỆ",
    "skills.heading": "Vũ khí công nghệ & Thư viện chuyên môn",
    "skills.sub": "Tập trung tối đa vào tính ổn định, hiệu năng và khả năng mở rộng của hệ thống.",
    "skills.all": "Tất cả",

    // Experience
    "exp.badge": "03 // KINH NGHIỆM THỰC CHIẾN",
    "exp.heading": "Hành trình tích lũy kinh nghiệm kỹ thuật",
    "exp.current": "Hiện tại",
    "exp.achievements": "Thành tựu nổi bật:",

    // Projects
    "proj.badge": "04 // SẢN PHẨM & DỰ ÁN",
    "proj.heading": "Các dự án đã xây dựng & hoàn thiện",
    "proj.all": "Tất cả",
    "proj.featured": "Nổi bật",
    "proj.inProgress": "Đang phát triển",
    "proj.viewDetail": "Xem chi tiết bài toán & giải pháp →",
    "proj.role": "Vai trò",
    "proj.problem": "Vấn đề / Thách thức",
    "proj.solution": "Giải pháp kỹ thuật",
    "proj.features": "Tính năng cốt lõi",
    "proj.results": "Kết quả & Hiệu năng",
    "proj.technologies": "Công nghệ sử dụng",
    "proj.liveDemo": "Trải nghiệm trực tiếp",
    "proj.sourceCode": "Mã nguồn (GitHub)",

    // Education
    "edu.badge": "05 // HỌC VẤN & CHỨNG CHỈ",
    "edu.heading": "Nền tảng đào tạo & Chứng chỉ chuyên môn",
    "edu.formal": "Học vấn chính quy",
    "edu.certs": "Chứng chỉ nghề nghiệp",
    "edu.verify": "Xác thực chứng chỉ",

    // Contact
    "contact.badge": "06 // LIÊN HỆ & HỢP TÁC",
    "contact.heading": "Cùng nhau kiến tạo sản phẩm tiếp theo",
    "contact.sub": "Tôi luôn sẵn sàng đón nhận các cơ hội việc làm, dự án phát triển web toàn diện hoặc trao đổi kỹ thuật.",
    "contact.cardHeading": "Gửi lời chào hoặc yêu cầu tư vấn",
    "contact.cardSub": "Bạn có thể gửi thư trực tiếp qua hộp thư cá nhân hoặc sao chép nhanh địa chỉ email dưới đây:",
    "contact.available": "Đang sẵn sàng cho các dự án mới",
    "contact.openEmail": "Mở ứng dụng Email",
    "contact.copySuccess": "Đã sao chép địa chỉ email vào clipboard!",
    "contact.copyFail": "Không thể tự động sao chép, vui lòng copy thủ công.",

    // Footer
    "footer.builtWith": "Thiết kế & phát triển với",
    "footer.andOn": "trên nền tảng Next.js & Tailwind CSS",
    "footer.rights": "Tất cả quyền được bảo lưu.",

    // CV Page
    "cv.back": "Về Portfolio",
    "cv.download": "Tải xuống CV",
    "cv.downloadPdf": "Tải xuống PDF",
    "cv.shareLink": "Chia sẻ link",
    "cv.copied": "Đã sao chép!",
    "cv.printPdf": "In / Lưu PDF",
    "cv.tip": "Mẹo: Nhấn nút \"Tải xuống CV\" hoặc \"In / Lưu PDF\" (Ctrl + P) để xuất CV ra file PDF A4 chuẩn quốc tế.",
    "cv.page": "Trang",
  },
  en: {
    // Nav
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.viewCv": "Paper CV",
    "nav.designSystem": "Design System",
    "nav.contactCta": "Get in Touch",

    // Hero
    "hero.available": "Available for new opportunities",
    "hero.eyebrow": "Hello, I am",
    "hero.exploreProjects": "Explore Projects",
    "hero.getInTouch": "Get in Touch",
    "hero.viewPaperCv": "View Paper CV (A4)",
    "hero.connect": "CONNECT:",
    "hero.compiledIn": "Ready: compiled in 18ms",

    // About
    "about.badge": "01 // ABOUT ME",
    "about.heading": "Passionate about Robust Architecture & Fluid Interactions",
    "about.location": "Based in",
    "about.philosophy": "Engineering Philosophy",
    "about.phil1.title": "Performance First:",
    "about.phil1.desc": "Optimizing page load speed, Core Web Vitals, and database queries.",
    "about.phil2.title": "Maintainable Code:",
    "about.phil2.desc": "Modular architecture adhering to SOLID and strict Design Systems.",
    "about.phil3.title": "Continuous Learning:",
    "about.phil3.desc": "Quickly adopting modern tech stacks to solve core business problems.",

    // Skills
    "skills.badge": "02 // TECH ECOSYSTEM",
    "skills.heading": "Technical Weapons & Specialized Libraries",
    "skills.sub": "Maximized focus on system stability, rendering speed, and scalability.",
    "skills.all": "All",

    // Experience
    "exp.badge": "03 // PROFESSIONAL EXPERIENCE",
    "exp.heading": "Engineering Journey & Proven Track Record",
    "exp.current": "Present",
    "exp.achievements": "Key Achievements:",

    // Projects
    "proj.badge": "04 // FEATURED PROJECTS",
    "proj.heading": "Crafted Solutions & Shipped Products",
    "proj.all": "All",
    "proj.featured": "Featured",
    "proj.inProgress": "In Progress (WIP)",
    "proj.viewDetail": "Explore problem & engineering solution →",
    "proj.role": "Role",
    "proj.problem": "Problem & Challenges",
    "proj.solution": "Technical Solution",
    "proj.features": "Core Features",
    "proj.results": "Impact & Performance",
    "proj.technologies": "Technologies Used",
    "proj.liveDemo": "Live Preview",
    "proj.sourceCode": "Source (GitHub)",

    // Education
    "edu.badge": "05 // EDUCATION & CERTS",
    "edu.heading": "Academic Background & Professional Certifications",
    "edu.formal": "Formal Education",
    "edu.certs": "Certifications",
    "edu.verify": "Verify Credential",

    // Contact
    "contact.badge": "06 // GET IN TOUCH",
    "contact.heading": "Let's Build the Next Big Thing Together",
    "contact.sub": "I am open to full-time engineering roles, freelance web applications, or technical collaborations.",
    "contact.cardHeading": "Drop a line or start a conversation",
    "contact.cardSub": "Reach out directly via email or quickly copy my address below:",
    "contact.available": "Currently open to new projects",
    "contact.openEmail": "Open Mail App",
    "contact.copySuccess": "Email address copied to clipboard!",
    "contact.copyFail": "Unable to copy automatically, please copy manually.",

    // Footer
    "footer.builtWith": "Designed & developed with",
    "footer.andOn": "powered by Next.js & Tailwind CSS",
    "footer.rights": "All rights reserved.",

    // CV Page
    "cv.back": "Back to Portfolio",
    "cv.download": "Download CV",
    "cv.downloadPdf": "Download PDF",
    "cv.shareLink": "Share Link",
    "cv.copied": "Copied!",
    "cv.printPdf": "Print / Save PDF",
    "cv.tip": "Tip: Click \"Download CV\" or \"Print / Save PDF\" (Ctrl + P) to export clean international standard A4 PDF.",
    "cv.page": "Page",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("vi");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-locale") as Language | null;
    if (saved === "vi" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio-locale", lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === "vi" ? "en" : "vi");
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

