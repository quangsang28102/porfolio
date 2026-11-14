import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    fullName: "Nguyễn Đỗ Quang Sáng",
    role: "Frontend Developer",
    headline: "Xây dựng trải nghiệm Web hiện đại, hiệu năng cao & Đồ họa 3D tương tác.",
    shortBio:
      "Lập trình viên Frontend với 2 năm kinh nghiệm thực chiến phát triển ứng dụng web, hệ thống quản lý trực tuyến và trải nghiệm 3D với Three.js / React. Thành thạo chuyển đổi thiết kế Figma pixel-perfect, tối ưu Core Web Vitals và tích hợp WebSockets / APIs thời gian thực.",
    aboutParagraphs: [
      "Xin chào! Tôi là Nguyễn Đỗ Quang Sáng, một Frontend Developer tốt nghiệp chuyên ngành Công nghệ Phần mềm tại Đại học Ngoại ngữ & Tin học TP.HCM (HUFLIT) với GPA 8.3/10.",
      "Tôi có hơn 2 năm kinh nghiệm xây dựng, bảo trì và nâng cấp hiệu năng website trên các nền tảng ReactJS, Next.js, JavaScript/TypeScript thuần và WordPress. Điểm đặc biệt trong hành trình kỹ thuật của tôi là khả năng làm chủ đồ họa WebGL với Three.js (xây dựng hình học 3D procedural, widget chatbot 3D) và tích hợp mạng thời gian thực (WebSockets Colyseus, LiveKit Voice SDK).",
      "Với nền tảng thiết kế UI/UX vững chắc (Figma, Photoshop) cùng việc chủ động áp dụng AI vào quy trình làm việc hàng ngày, tôi luôn đảm bảo tốc độ triển khai nhanh chóng, giao diện chỉn chu và độ chính xác cao nhất.",
    ],
    strengths: [
      {
        title: "Frontend & UI/UX Engineering",
        description:
          "Thành thạo ReactJS, Next.js App Router, Tailwind CSS, chuyển đổi thiết kế Figma pixel-perfect và tối ưu chuẩn SEO & Core Web Vitals.",
        icon: "Layout",
      },
      {
        title: "3D Web & Interactive Graphics",
        description:
          "Xây dựng mô hình 3D procedural bằng Three.js (BufferGeometry), Flat shading, xuất GLTF/OBJ và tích hợp widget 3D tương tác vào website doanh nghiệp.",
        icon: "Sparkles",
      },
      {
        title: "Realtime Systems & APIs",
        description:
          "Kinh nghiệm làm việc với Colyseus WebSockets, LiveKit Voice Chat phân vùng âm thanh, RESTful APIs Node.js/Express và Google Sheets API.",
        icon: "Server",
      },
    ],
    location: "TP. Hồ Chí Minh, Việt Nam",
    email: "qsang.dev@gmail.com",
    phone: "0336554902",
    availableForWork: true,
    cvPath: "/files/cv.pdf",
    social: {
      github: "https://github.com/QuangSang",
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
      website: "https://quangsang.dev",
    },
  },
  skills: [
    // Frontend
    { name: "ReactJS", category: "Frontend", featured: true },
    { name: "Next.js (App Router)", category: "Frontend", featured: true },
    { name: "Three.js / WebGL", category: "Frontend", featured: true },
    { name: "Tailwind CSS", category: "Frontend", featured: true },
    { name: "HTML5 & CSS3", category: "Frontend", featured: false },
    { name: "jQuery", category: "Frontend", featured: false },
    { name: "WordPress (Custom Themes)", category: "Frontend", featured: true },

    // Languages
    { name: "TypeScript", category: "Languages", featured: true },
    { name: "JavaScript (ES6+)", category: "Languages", featured: true },

    // Backend
    { name: "Node.js & Express.js", category: "Backend", featured: true },
    { name: "RESTful APIs", category: "Backend", featured: true },
    { name: "Colyseus (WebSockets)", category: "Backend", featured: true },
    { name: "LiveKit SDK (Voice Chat)", category: "Backend", featured: false },

    // Database & Tools
    { name: "Git & GitHub", category: "DevOps & Tools", featured: true },
    { name: "Postman", category: "DevOps & Tools", featured: false },
    { name: "Google Sheets API", category: "DevOps & Tools", featured: true },
    { name: "Figma & Adobe XD", category: "DevOps & Tools", featured: true },
    { name: "Adobe Photoshop", category: "DevOps & Tools", featured: false },
    { name: "Vite", category: "DevOps & Tools", featured: false },
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Lập trình viên Web & Ứng dụng",
      organization: "Công ty TNHH Ô tô Hiệp Phát",
      location: "TP. Hồ Chí Minh",
      startDate: "09/2024",
      endDate: "Hiện tại",
      isCurrent: true,
      description:
        "Chịu trách nhiệm thiết kế, phát triển và vận hành hệ thống cổng thông tin đào tạo lái xe, tích hợp widget 3D và số hóa quy trình thi sát hạch.",
      achievements: [
        "Thiết kế Landing Page và xây dựng Design System hoàn chỉnh trên Figma; tạo layout trang web tĩnh chuẩn responsive đa màn hình.",
        "Xây dựng ứng dụng số hóa kỳ thi tốt nghiệp đào tạo lái xe ô tô: chuyển đổi từ hình thức thi giấy thủ công sang hệ thống trực tuyến, cấu hình đề thi, giám sát tiến trình làm bài realtime, in bài thi tự động và xuất báo cáo thống kê.",
        "Phát triển và tích hợp widget Robot Chatbot 3D tương tác vào website chính bằng TypeScript và Three.js.",
        "Tối ưu hiệu năng tải trang, cấu hình metadata SEO tổng thể và xây dựng hệ thống tra cứu chứng chỉ, hồ sơ bằng mã QR.",
        "Tái cấu trúc code và tùy biến theme quản trị WordPress, xây dựng các kịch bản tự động tối ưu tác vụ văn phòng nội bộ.",
      ],
      technologies: ["TypeScript", "Three.js", "HTML5/CSS3", "WordPress", "JavaScript", "Figma", "SEO"],
    },
    {
      id: "exp-2",
      role: "Lập trình viên Frontend",
      organization: "Quốc Bảo Software",
      location: "TP. Hồ Chí Minh",
      startDate: "04/2024",
      endDate: "07/2024",
      isCurrent: false,
      description:
        "Tham gia phát triển giao diện ứng dụng web và tùy biến các giải pháp website doanh nghiệp theo yêu cầu khách hàng.",
      achievements: [
        "Thu thập yêu cầu khách hàng, phác thảo wireframe và thiết kế giao diện UI/UX tối ưu trải nghiệm người dùng trên Figma/Adobe XD.",
        "Chuyển đổi các bản vẽ thiết kế thành mã nguồn giao diện web tĩnh chuẩn responsive pixel-perfect.",
        "Tùy biến và phát triển tính năng trên các theme WordPress mẫu đáp ứng đúng nghiệp vụ và tiến độ cam kết.",
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "WordPress", "Figma", "Adobe XD"],
    },
    {
      id: "exp-3",
      role: "Thực tập sinh Lập trình Web (Fresher)",
      organization: "Quốc Bảo Software",
      location: "TP. Hồ Chí Minh",
      startDate: "01/2024",
      endDate: "04/2024",
      isCurrent: false,
      description:
        "Tiếp cận quy trình phát triển phần mềm chuyên nghiệp, rèn luyện kỹ năng cắt layout và làm việc trực tiếp với khách hàng.",
      achievements: [
        "Hoàn thành xuất sắc kỳ thực tập doanh nghiệp với điểm đánh giá cao từ ban lãnh đạo công ty.",
        "Tham gia xây dựng 3 dự án website doanh nghiệp tĩnh và theme WordPress thực tế.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "Git"],
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "NightHowler — Đấu Trường Ma Sói 3D Thời Gian Thực",
      category: "Fullstack",
      featured: true,
      summary:
        "Hệ thống trò chơi Ma Sói 3D đa người chơi thời gian thực với kiến trúc Monorepo, kết hợp đồ họa WebGL/Three.js và mạng phân vùng âm thanh voice chat.",
      role: "Lead Fullstack & 3D Web Developer",
      problem:
        "Các tựa game Ma Sói trên web truyền thống thiếu tính nhập vai không gian 3D và gặp khó khăn trong việc điều phối luồng trò chuyện thoại bí mật giữa các phe phái (dân làng vs phe sói vào ban đêm).",
      solution:
        "Kiến trúc Monorepo gồm 3 package (`shared`, `server`, `client`). Sử dụng React 19, Three.js, React Three Fiber và Colyseus WebSocket engine để đồng bộ state game; tích hợp LiveKit Server SDK để phân vùng kênh voice chat/text chat độc lập (phòng chờ, cộng đồng ban ngày, kênh kín của phe Sói).",
      features: [
        "Đồ họa 3D phong cách Stylized Low-Poly với hiệu ứng đổ bóng, camera tương tác động và post-processing",
        "Kênh voice chat & text chat phân vùng động tự động chuyển quyền nói/nghe theo từng giai đoạn ngày/đêm",
        "Đồng bộ trạng thái bàn chơi thời gian thực (state sync) qua giao thức Colyseus WebSocket độ trễ cực thấp",
        "Kịch bản kiểm thử mô phỏng bot tự động (`botSimulation.ts`) hỗ trợ test tải và logic game",
      ],
      technologies: [
        "React 19",
        "Three.js",
        "@react-three/fiber",
        "Colyseus",
        "LiveKit SDK",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      images: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "",
      githubUrl: "https://github.com/QuangSang/NightHowler",
      results: "Đạt chuẩn kiến trúc Monorepo mở rộng, hỗ trợ nhiều phòng chơi đồng thời với chất lượng voice chat WebRTC ổn định.",
    },
    {
      id: "proj-2",
      title: "Procedural 3D Character Collection — Three.js Low-Poly Stylized",
      category: "Web",
      featured: true,
      summary:
        "Dự án sáng tạo mô hình nhân vật 3D hoàn toàn bằng hình học thủ tục (Three.js Procedural BufferGeometry), không sử dụng tệp 3D dựng sẵn nặng nề.",
      role: "3D Web Creative Developer",
      problem:
        "Việc tải các file 3D thông thường (FBX, OBJ nặng hàng chục MB) khiến tốc độ tải trang web bị chậm và tiêu tốn nhiều băng thông của người dùng.",
      solution:
        "Tự tay lập trình và điêu khắc từng đỉnh hình học `BufferGeometry`, phối màu Flat shading, tính toán vệt sáng Fresnel và ánh sáng studio cho 5 nhân vật (Tiên tri Seer, Người Sói Werewolf, Hiệp sĩ Guard, Phù thủy Witch, Thợ săn Hunter). Hỗ trợ xoay 360°, đổi 4 tư thế và xuất trực tiếp ra chuẩn `.GLB`/`.OBJ`.",
      features: [
        "Tạo hình học procedural 100% bằng code JavaScript thuần kết hợp toán vector",
        "Hiệu ứng phát sáng quả cầu phép Fresnel, đai giáp kim loại và nón chiến binh T-Visor",
        "Hỗ trợ 4 tư thế nhân vật tương tác: `idle`, `cast`, `meditate`, `t-pose`",
        "Xuất file trực tiếp sang chuẩn glTF 2.0 Binary (`.glb`) siêu nhẹ (~125KB - 290KB) sẵn sàng đưa vào Game Engine",
        "Trang đối chiếu trực quan 1:1 (`comparison.html`) giữa mô hình 3D thực tế và concept art 2D",
      ],
      technologies: ["Three.js", "WebGL", "BufferGeometry", "JavaScript ES6+", "HTML5/CSS3"],
      images: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "",
      githubUrl: "https://github.com/QuangSang/3D-shape",
      results: "Dung lượng mô hình cực nhẹ (<300KB) giúp hiển thị tức thì trên trình duyệt mà không cần bước tải trước nặng nề.",
    },
    {
      id: "proj-3",
      title: "Football Pay — Hệ Thống Quản Lý Trận Đấu & Quyết Toán Chi Phí",
      category: "Fullstack",
      featured: true,
      summary:
        "Ứng dụng web tự động hóa chia tiền sân bãi, quản lý thành viên và theo dõi công nợ đội bóng với 2 luồng phân quyền Admin và Member.",
      role: "Fullstack Developer",
      problem:
        "Quản lý chi phí sân bóng, tiền nước và thu tiền từng cầu thủ sau mỗi trận đấu bằng sổ sách hoặc ghi chú thủ công thường xuyên xảy ra nhầm lẫn, sót nợ.",
      solution:
        "Xây dựng ứng dụng Next.js (App Router) với React 19 và Tailwind CSS. Hệ thống tự động tính chi phí trung bình trên đầu người, cập nhật trạng thái nợ của từng cầu thủ, sinh mã QR chuyển khoản VietQR/Momo động và đồng bộ trực tiếp với Google Sheets.",
      features: [
        "Quản lý danh sách thành viên (CRUD) và trạng thái tham gia thi đấu",
        "Quản lý trận đấu: tự động tính chi phí sân, nước uống và phân bổ số tiền mỗi người cần đóng",
        "Sinh mã QR động kèm thông tin số tài khoản và nội dung chuyển khoản tự động",
        "Đồng bộ dữ liệu hai chiều với Google Sheets qua Google APIs và xuất báo cáo bảng tính Excel (.xlsx)",
        "Bảng điều khiển Dashboard thống kê tổng quan: tổng trận, tổng chi phí, số tiền đã thu và nợ còn tồn",
      ],
      technologies: [
        "Next.js",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Google Sheets API",
        "TanStack Table",
        "XLSX",
      ],
      images: [
        "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "",
      githubUrl: "https://github.com/QuangSang/football-admin",
      results: "Giúp ban quản trị tiết kiệm 80% thời gian tính toán và đối soát tiền sân bãi sau mỗi trận đấu.",
    },
    {
      id: "proj-4",
      title: "Cổng Thông Tin & Quản Lý Thi Sát Hạch — Hiệp Phát Auto (HPO)",
      category: "Web",
      featured: true,
      summary:
        "Cổng thông tin đào tạo lái xe toàn diện tích hợp hệ thống số hóa thi tốt nghiệp, tra cứu QR và widget trợ lý ảo Robot 3D.",
      role: "Frontend & 3D Widget Developer",
      problem:
        "Trung tâm đào tạo cần chuyển đổi số quy trình thi sát hạch lý thuyết từ giấy sang online, đồng thời muốn tăng tính hiện đại và hỗ trợ học viên tương tác trên website.",
      solution:
        "Xây dựng trang web doanh nghiệp tối ưu hiệu năng và cấu hình SEO đa trang; tích hợp widget Robot 3D tương tác độc lập (phát triển bằng TypeScript & Three.js); lập trình phần mềm quản lý bài thi số hóa với tính năng in bài và xuất báo cáo tự động.",
      features: [
        "Số hóa quy trình thi tốt nghiệp: cấu hình đề thi, giám sát tiến trình thời gian thực và in bài tự động",
        "Widget Robot Chatbot 3D tương tác trực tiếp trên giao diện trang chủ bằng Three.js WebGL",
        "Mô-đun tra cứu học viên và chứng chỉ thông qua mã QR trực tuyến nhanh chóng",
        "Cấu trúc trang tin tức, học phí, ôn tập 600 câu hỏi với điểm SEO và Core Web Vitals tối ưu",
      ],
      technologies: ["TypeScript", "Three.js", "HTML5", "CSS3", "JavaScript", "WordPress", "SEO"],
      images: [
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "",
      githubUrl: "https://github.com/QuangSang/WEB-HPO-V2",
      results: "Số hóa thành công 100% quy trình thi sát hạch, phục vụ hàng nghìn lượt học viên và lượt thi mỗi tháng.",
    },
    {
      id: "proj-5",
      title: "BITCO Tuy Nen — Landing Page Doanh Nghiệp Vật Liệu Xây Dựng",
      category: "Web",
      featured: false,
      summary:
        "Website giới thiệu thương hiệu và sản phẩm vật liệu xây dựng cao cấp với hiệu ứng thị giác tương tác mượt mà và chuẩn SEO.",
      role: "Frontend Developer & UI Designer",
      problem:
        "Doanh nghiệp sản xuất vật liệu truyền thống cần một diện mạo số hiện đại để tiếp cận các nhà thầu và dự án công trình lớn.",
      solution:
        "Thiết kế giao diện từ con số không và lập trình mã nguồn thuần với cấu trúc CSS module hóa; xây dựng các hiệu ứng Parallax, card glow và bộ đếm chỉ số năng lực sản xuất.",
      features: [
        "Hiệu ứng Hero Parallax, Scroll Brick Drop animation và ScrollReveal sinh động",
        "Bộ lọc sản phẩm dạng tab tương tác mượt mà (Gạch nung Tuy Nen, Gạch không nung AAC, Tấm Panel ALC)",
        "Bộ đếm thống kê thành tựu và năng lực sản xuất tự động chạy khi cuộn tới",
        "Biểu mẫu liên hệ tư vấn kèm kiểm tra dữ liệu đầu vào (form validation)",
        "Tối ưu hóa thẻ meta SEO, Open Graph và tải nhanh trên mọi thiết bị di động",
      ],
      technologies: ["HTML5", "CSS3 (Modular)", "JavaScript ES6+", "FontAwesome", "Responsive Design"],
      images: [
        "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "",
      githubUrl: "https://github.com/QuangSang/TuyNen",
      results: "Đạt điểm Google PageSpeed cao, giao diện ấn tượng nâng tầm hình ảnh thương hiệu trong mắt đối tác.",
    },
  ],
  education: [
    {
      id: "edu-1",
      institution: "Đại học Ngoại ngữ & Tin học TP.HCM (HUFLIT)",
      degree: "Cử nhân Kỹ thuật Phần mềm",
      major: "Công nghệ Thông tin — Chuyên ngành Công nghệ Phần mềm",
      startDate: "09/2020",
      endDate: "04/2024",
      score: "GPA: 8.3 / 10 (Tốt nghiệp loại Giỏi)",
      description:
        "Đào tạo chính quy bài bản về Kỹ thuật phần mềm, Cấu trúc dữ liệu & Giải thuật, Phát triển ứng dụng Web, Kiến trúc cơ sở dữ liệu và Quản lý dự án phần mềm.",
    },
  ],
  certifications: [
    {
      id: "cert-1",
      title: "Chứng chỉ Tiếng Anh Quốc tế TOEIC 590",
      issuer: "Educational Testing Service (ETS)",
      issuedAt: "2024",
      credentialUrl: "",
    },
  ],
};
