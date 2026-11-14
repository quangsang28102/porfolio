import { PortfolioData } from "@/types/portfolio";

export const portfolioDataVi: PortfolioData = {
  personal: {
    fullName: "Nguyễn Đỗ Quang Sáng",
    role: "Staff Frontend Developer",
    headline: "Cắt Layout Pixel-Perfect (Figma / Photoshop / XD), Phát triển Custom Theme WordPress & Ứng dụng AI.",
    shortBio:
      "Lập trình viên Frontend với hơn 2 năm kinh nghiệm thực tế chuyên sâu về chuyển đổi thiết kế sang HTML5/CSS3 chuẩn W3C, xử lý logic front-end mượt mà với JavaScript/jQuery và xây dựng Custom Theme WordPress từ source HTML tĩnh. Tiên phong áp dụng các công cụ AI (ChatGPT, Claude, GitHub Copilot) vào quy trình code để tối ưu tốc độ và chất lượng sản phẩm.",
    aboutParagraphs: [
      "Xin chào! Tôi là Nguyễn Đỗ Quang Sáng, tốt nghiệp chuyên ngành Công nghệ Phần mềm tại Đại học Ngoại ngữ & Tin học TP.HCM (HUFLIT) với GPA 8.3/10 (Tốt nghiệp loại Giỏi).",
      "Tôi có hơn 2 năm kinh nghiệm thực chiến tại các doanh nghiệp phần mềm và dịch vụ số, đảm nhiệm trọn vẹn quy trình Frontend: từ việc tiếp nhận file thiết kế (Figma, Photoshop, Adobe XD, Illustrator) để cắt layout chuẩn responsive pixel-perfect, tối ưu theo tiêu chuẩn W3C, cho đến phát triển và tùy biến Custom Theme WordPress từ source HTML tĩnh đáp ứng đúng yêu cầu của khách hàng.",
      "Bên cạnh nền tảng kỹ thuật vững chắc, tôi luôn chủ động tích hợp các trợ lý AI (ChatGPT, Claude, Gemini, GitHub Copilot) vào công việc hàng ngày nhằm giải quyết bài toán nhanh hơn, viết code sạch (Clean Code), giảm thiểu lỗi và sẵn sàng bảo trì, nâng cấp hệ thống website lâu dài theo tiêu chuẩn khắt khe.",
    ],
    strengths: [
      {
        title: "Cắt Layout Pixel-Perfect & Chuẩn W3C",
        description:
          "Thành thạo chuyển đổi bản vẽ từ Photoshop, Adobe XD, Illustrator, Figma sang mã nguồn HTML5/CSS3 và JavaScript/jQuery chuẩn W3C, tương thích mọi trình duyệt và responsive 100%.",
        icon: "Layout",
      },
      {
        title: "Phát Triển Custom Theme WordPress",
        description:
          "Có khả năng xây dựng mới và chỉnh sửa Custom Theme WordPress từ source HTML tĩnh, cấu hình Advanced Custom Fields (ACF), tối ưu trang quản trị Admin và bảo trì hệ thống website.",
        icon: "Server",
      },
      {
        title: "Ứng Dụng AI & Mở Rộng Công Nghệ Cao",
        description:
          "Áp dụng thành thạo AI (ChatGPT, Claude, GitHub Copilot) tăng tốc độ phát triển x2; có nền tảng vững chắc để mở rộng sang ReactJS, Next.js và đồ họa tương tác Three.js khi dự án cần.",
        icon: "Sparkles",
      },
    ],
    location: "TP. Hồ Chí Minh, Việt Nam",
    email: "qsang.dev@gmail.com",
    phone: "0336554902",
    availableForWork: true,
    cvPath: "/files/cv.pdf",
    social: {
      github: "https://github.com/quangsang28102",
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
      website: "https://quangsang.dev",
    },
  },
  skills: [
    // Frontend Core & CMS
    { name: "HTML5 (Chuẩn W3C)", category: "Frontend", featured: true },
    { name: "CSS3 (Flexbox/Grid)", category: "Frontend", featured: true },
    { name: "JavaScript (ES6+)", category: "Frontend", featured: true },
    { name: "jQuery", category: "Frontend", featured: true },
    { name: "WordPress (Custom Theme)", category: "Frontend", featured: true },
    { name: "Responsive Web Design", category: "Frontend", featured: true },
    { name: "Tailwind CSS & Bootstrap", category: "Frontend", featured: false },
    { name: "ReactJS & Next.js", category: "Frontend", featured: true },
    { name: "Three.js / WebGL", category: "Frontend", featured: false },

    // Design & UI/UX Tools
    { name: "Figma", category: "DevOps & Tools", featured: true },
    { name: "Adobe Photoshop", category: "DevOps & Tools", featured: true },
    { name: "Adobe XD", category: "DevOps & Tools", featured: true },
    { name: "Adobe Illustrator", category: "DevOps & Tools", featured: false },

    // AI Tools & Engineering
    { name: "AI Coding (ChatGPT, Claude, Copilot)", category: "DevOps & Tools", featured: true },
    { name: "Git & GitHub", category: "DevOps & Tools", featured: true },
    { name: "SEO & Core Web Vitals", category: "DevOps & Tools", featured: true },
    { name: "Cross-Browser Testing", category: "DevOps & Tools", featured: false },
    { name: "Postman & RESTful APIs", category: "DevOps & Tools", featured: false },
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Lập trình viên Frontend & Ứng dụng",
      organization: "Công ty TNHH Ô tô Hiệp Phát",
      location: "TP. Hồ Chí Minh",
      startDate: "09/2024",
      endDate: "Hiện tại",
      isCurrent: true,
      description:
        "Chịu trách nhiệm thiết kế giao diện, phát triển cổng thông tin đào tạo lái xe, tùy biến theme WordPress quản trị và bảo trì nâng cấp hệ thống website.",
      achievements: [
        "Thiết kế Landing Page và xây dựng Design System hoàn chỉnh trên Figma; chuyển đổi thành công sang layout web tĩnh chuẩn responsive đa màn hình.",
        "Tái tổ chức cấu trúc code, cấu hình đường dẫn và điều chỉnh giao diện WordPress từ theme gốc, tối ưu hóa trang Admin phục vụ cập nhật nội dung thuận tiện.",
        "Thực hiện bảo trì định kỳ (Maintenance), tối ưu hóa tốc độ tải trang, cấu hình metadata SEO tổng thể đạt điểm Core Web Vitals cao.",
        "Xây dựng ứng dụng số hóa quy trình thi tốt nghiệp đào tạo lái xe ô tô: số hóa bài thi từ giấy sang trực tuyến, giám sát tiến trình realtime và in bài tự động.",
        "Chủ động ứng dụng AI (Claude, ChatGPT, Copilot) vào quy trình code để tự động hóa tác vụ văn phòng và rút ngắn 40% thời gian xử lý dữ liệu.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "Figma", "SEO & W3C", "AI Tools"],
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
        "Tham gia phát triển các dự án website doanh nghiệp, cắt layout từ thiết kế và xây dựng Custom Theme WordPress theo yêu cầu khách hàng.",
      achievements: [
        "Thực hiện chuyển đổi layout website từ các file thiết kế (Figma, Photoshop, Adobe XD) sang mã nguồn HTML5/CSS3 & jQuery/JavaScript đảm bảo chuẩn W3C và responsive 100%.",
        "Xây dựng và chuyển đổi Custom Theme WordPress từ source HTML tĩnh, cấu hình trường dữ liệu động và tối ưu giao diện theo đúng yêu cầu nghiệp vụ.",
        "Bảo trì, tối ưu hiệu năng và sửa lỗi hiển thị trên nhiều trình duyệt khác nhau (Chrome, Safari, Edge, Firefox).",
      ],
      technologies: ["HTML5", "CSS3", "jQuery", "JavaScript", "WordPress Custom Theme", "Photoshop", "Adobe XD", "Figma"],
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
        "Rèn luyện kỹ năng cắt layout chuẩn W3C, làm việc với các phần mềm thiết kế và làm quen với quy trình phát triển website thương mại.",
      achievements: [
        "Hoàn thành xuất sắc kỳ thực tập doanh nghiệp với điểm đánh giá cao từ ban lãnh đạo công ty.",
        "Cắt thành công hơn 10 layout web tĩnh từ file PSD/XD sang HTML/CSS chuẩn responsive.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Photoshop", "WordPress"],
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "Công ty Cổ phần Gạch Tuy Nen Bình Định - BITCO | Vật Liệu Xây Dựng Hàng Đầu",
      category: "Web",
      featured: true,
      summary:
        "Dự án tiêu biểu thể hiện kỹ năng cắt layout từ thiết kế sang HTML5/CSS3 chuẩn W3C, không dùng framework nặng, kết hợp hiệu ứng Parallax và tương thích đa trình duyệt.",
      role: "Frontend Developer & UI Slicer",
      problem:
        "Khách hàng cần một website doanh nghiệp tải nhanh, chuẩn W3C, chuẩn SEO và hiển thị mượt mà trên tất cả các loại màn hình từ điện thoại đến màn hình desktop lớn.",
      solution:
        "Cắt layout chính xác từng pixel từ bản vẽ, cấu trúc CSS dạng component độc lập (Modular CSS3), xử lý logic tương tác bằng Vanilla JavaScript ES6+ và jQuery; tích hợp hiệu ứng Hero Parallax và Scroll Brick Drop mượt mà.",
      features: [
        "Chuyển đổi layout chuẩn pixel-perfect từ thiết kế, tối ưu mã nguồn theo chuẩn W3C Validation",
        "Bộ lọc danh mục sản phẩm dạng Tab tương tác mượt mà (Gạch nung Tuy Nen, Gạch nhẹ AAC, Tấm Panel ALC)",
        "Hiệu ứng Hero Parallax và bộ đếm thống kê năng lực sản xuất tự động chạy khi cuộn",
        "Biểu mẫu liên hệ tư vấn kèm kiểm tra dữ liệu đầu vào (form validation)",
        "Tối ưu hóa hình ảnh, thẻ meta SEO, Open Graph và đạt điểm Google PageSpeed cao",
      ],
      technologies: ["HTML5 (W3C)", "Modular CSS3", "JavaScript ES6+", "jQuery", "Responsive Design", "Photoshop"],
      images: [
        "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "https://tuynen.vercel.app/",
      githubUrl: "https://github.com/quangsang28102/tuynen",
      results: "Website tải dưới 1.5 giây, đạt 95+ điểm Google PageSpeed trên thiết bị di động và đáp ứng 100% chuẩn W3C.",
    },
    {
      id: "proj-2",
      title: "HPO – Trung Tâm Giáo Dục Nghề Nghiệp Ô Tô Hiệp Phát",
      category: "Web",
      featured: true,
      summary:
        "Cổng thông tin đào tạo lái xe chuyển đổi từ source HTML tĩnh sang theme WordPress quản trị, tích hợp module tra cứu QR và tối ưu hóa SEO.",
      role: "Frontend & WordPress Theme Developer",
      problem:
        "Cần xây dựng một hệ thống website thông tin đa trang, dễ dàng cho ban quản trị cập nhật học phí, tin tức và theo dõi học viên mà vẫn giữ tốc độ tải trang nhanh.",
      solution:
        "Xây dựng layout web tĩnh chuẩn responsive, sau đó chuyển đổi sang Custom Theme WordPress, tối ưu hóa các hàm template và cơ sở dữ liệu; tích hợp module tra cứu mã QR trực tuyến.",
      features: [
        "Chuyển đổi giao diện tĩnh sang Custom Theme WordPress dễ dàng quản lý bài viết và học phí",
        "Module tra cứu thông tin học viên & chứng chỉ nhanh chóng qua mã QR trực tuyến",
        "Cấu trúc trang tin tức, ôn tập 600 câu hỏi với điểm SEO và Core Web Vitals tối ưu",
        "Bảo trì định kỳ, nâng cấp bảo mật và sửa lỗi tương thích trình duyệt",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress Custom Theme", "PHP", "Figma", "SEO"],
      images: [
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "https://hpo-edu-v2.vercel.app/",
      githubUrl: "https://github.com/quangsang28102/HPO.EDU.V2",
      results: "Phục vụ hàng nghìn lượt tra cứu học viên mỗi tháng với thời gian phản hồi trang dưới 1.2s.",
    },
    {
      id: "proj-3",
      title: "Football Payment Manager",
      category: "Fullstack",
      featured: true,
      summary:
        "Ứng dụng web tự động hóa chia tiền sân bãi, quản lý thành viên và theo dõi công nợ đội bóng với sinh mã VietQR động và đồng bộ hai chiều Google Sheets.",
      role: "Fullstack Developer (Logic & UI/UX)",
      problem:
        "Việc tính tiền sân bóng, nước uống và nhắc nợ thủ công thường xuyên xảy ra nhầm lẫn, mất nhiều thời gian đối soát sau mỗi trận đấu.",
      solution:
        "Xây dựng ứng dụng web với Next.js và Tailwind CSS. Hệ thống tự động chia đều chi phí trên từng người tham gia, sinh mã QR VietQR động kèm cú pháp chuyển khoản và đồng bộ dữ liệu hai chiều với Google Sheets qua Google APIs.",
      features: [
        "Quản lý danh sách thành viên (CRUD) và trạng thái tham gia thi đấu",
        "Tự động tính chi phí sân, nước và phân bổ số tiền mỗi người cần đóng",
        "Sinh mã QR động kèm thông tin số tài khoản và nội dung chuyển khoản tự động",
        "Đồng bộ hai chiều với Google Sheets API và xuất bảng tính Excel (.xlsx)",
      ],
      technologies: ["Next.js App Router", "React 19", "TypeScript", "Tailwind CSS", "Google Sheets API", "VietQR", "XLSX"],
      images: [
        "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "https://football-pay.vercel.app/",
      githubUrl: "https://github.com/quangsang28102/footballPay",
      results: "Giúp ban quản trị tiết kiệm 80% thời gian tính toán và đối soát chi phí sau mỗi trận.",
    },
    {
      id: "proj-4",
      title: "Mô hình 3D Chibi Girl — Cô Gái Chibi (Three.js Low-Poly Stylized)",
      category: "3D & WebGL",
      featured: true,
      summary:
        "Ứng dụng tương tác 3D WebGL trên trình duyệt: tạo dựng hình học nhân vật thủ tục (Procedural BufferGeometry) siêu nhẹ (<300KB), tương tác xoay 360 độ và xuất file .GLB/.OBJ.",
      role: "3D WebGL & Frontend Developer",
      problem:
        "Các mô hình 3D truyền thống tải qua file tĩnh khiến web load chậm và khó can thiệp tùy biến thông số kích thước, màu sắc trực tiếp theo thời gian thực.",
      solution:
        "Tính toán và dựng hình học nhân vật hoàn toàn bằng code (Three.js BufferGeometry procedural), tối ưu hoá draw calls, tích hợp bộ điều khiển xoay OrbitControls, shader glow và công cụ xuất file chuẩn glTF/OBJ.",
      features: [
        "Dựng mô hình 3D thủ tục bằng toán học & BufferGeometry không phụ thuộc asset tĩnh nặng",
        "Xoay đa chiều 360°, phóng to thu nhỏ mượt mà với Three.js OrbitControls",
        "Hiệu ứng ánh sáng Fresnel Glow và vật liệu phản xạ thời gian thực",
        "Hỗ trợ xuất trực tiếp mô hình ra file định dạng .GLB và .OBJ để import vào Blender/Game Engine",
      ],
      technologies: ["Three.js", "WebGL", "BufferGeometry", "OrbitControls", "glTF/OBJ Export", "Vite", "Tailwind CSS"],
      images: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "https://avatar-three-rouge.vercel.app/",
      githubUrl: "https://github.com/quangsang28102/AVATAR",
      results: "Tải mô hình 3D tức thì trong < 100ms với dung lượng dưới 250KB, duy trì tốc độ 60 FPS trên mọi trình duyệt.",
    },
    {
      id: "proj-5",
      title: "NightHowler — Đấu Trường Ma Sói 3D Thời Gian Thực & Voice Chat Không Gian",
      category: "Fullstack",
      featured: false,
      summary:
        "Game Ma Sói 3D thời gian thực với kiến trúc Monorepo, đồ họa WebGL/Three.js, đồng bộ trạng thái bàn chơi qua Colyseus WebSockets và voice chat phân vùng theo phe (LiveKit SDK).",
      role: "Lead 3D & Fullstack Developer",
      problem:
        "Các game web truyền thống thiếu tính nhập vai tương tác 3D và không thể phân quyền luồng đàm thoại bí mật thời gian thực giữa Dân làng và Ma sói.",
      solution:
        "Thiết kế kiến trúc Monorepo (shared, server, client) với React 19, Three.js, server Colyseus WebSockets quản lý phòng chơi, và tích hợp LiveKit SDK xử lý voice chat không gian phân vùng theo từng pha ngày/đêm.",
      features: [
        "Đồ họa 3D Stylized Low-Poly với camera tương tác không gian theo thời gian thực",
        "Phân vùng voice chat & text chat động giữa các phe (Dân làng, Ma sói, Phòng chờ)",
        "Đồng bộ hóa trạng thái bàn chơi và vote loại trừ thời gian thực độ trễ siêu thấp",
        "Kiến trúc Monorepo module hóa tối đa cho khả năng mở rộng quy mô phòng chơi",
      ],
      technologies: ["React 19", "Three.js", "Colyseus WebSockets", "LiveKit SDK", "TypeScript Monorepo", "Node.js"],
      images: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "",
      githubUrl: "https://github.com/quangsang28102/NightHowler",
      results: "Minh chứng khả năng làm chủ công nghệ cao: WebSockets realtime, xử lý âm thanh không gian WebRTC và đồ họa 3D tương tác.",
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
        "Đào tạo chính quy bài bản về Kỹ thuật phần mềm, Phát triển ứng dụng Web, Cấu trúc dữ liệu & Giải thuật, Thiết kế giao diện và Quản lý dự án phần mềm.",
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

export const portfolioDataEn: PortfolioData = {
  personal: {
    fullName: "Nguyen Do Quang Sang",
    role: "Staff Frontend Developer",
    headline: "Pixel-Perfect Layout Slicing (Figma / Photoshop / XD), Custom WordPress Theme & AI-Accelerated Coding.",
    shortBio:
      "Frontend Developer with 2+ years of hands-on experience specializing in converting UI designs into W3C-compliant HTML5/CSS3, implementing fluid frontend logic with JavaScript/jQuery, and developing custom WordPress themes from static HTML sources. Proactively leveraging AI tools (ChatGPT, Claude, GitHub Copilot) into daily coding workflows to maximize velocity and code precision.",
    aboutParagraphs: [
      "Hello! I am Nguyen Do Quang Sang, a Software Engineering graduate from Ho Chi Minh City University of Foreign Languages and Information Technology (HUFLIT) with a GPA of 8.3/10 (Honors degree).",
      "I have over 2 years of professional experience across digital software firms, mastering the complete frontend pipeline: taking design assets (Figma, Photoshop, Adobe XD, Illustrator), slicing pixel-perfect responsive layouts strictly compliant with W3C standards, and developing custom WordPress themes from static HTML sources tailored to business goals.",
      "Beyond strong core engineering foundations, I actively integrate AI coding companions (ChatGPT, Claude, Gemini, GitHub Copilot) into daily development to build clean, maintainable, and cross-browser compatible websites aligned with rigorous standards.",
    ],
    strengths: [
      {
        title: "Pixel-Perfect Layout & W3C Standards",
        description:
          "Proficient in translating designs from Photoshop, Adobe XD, Illustrator, and Figma into W3C-compliant HTML5/CSS3 and JavaScript/jQuery with 100% responsive cross-browser fidelity.",
        icon: "Layout",
      },
      {
        title: "Custom WordPress Theme Development",
        description:
          "Experienced in creating and customizing WordPress themes from static HTML sources, configuring ACF fields, optimizing admin panels, and maintaining production websites.",
        icon: "Server",
      },
      {
        title: "AI-Powered Workflow & Modern Tech",
        description:
          "Leveraging AI tools (ChatGPT, Claude, Copilot) to double engineering velocity; solid foundation to extend into ReactJS, Next.js, and interactive Three.js 3D when required.",
        icon: "Sparkles",
      },
    ],
    location: "Ho Chi Minh City, Vietnam",
    email: "qsang.dev@gmail.com",
    phone: "+84 336 554 902",
    availableForWork: true,
    cvPath: "/files/cv.pdf",
    social: {
      github: "https://github.com/quangsang28102",
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
      website: "https://quangsang.dev",
    },
  },
  skills: [
    // Frontend Core & CMS
    { name: "HTML5 (W3C Standard)", category: "Frontend", featured: true },
    { name: "CSS3 (Flexbox/Grid)", category: "Frontend", featured: true },
    { name: "JavaScript (ES6+)", category: "Frontend", featured: true },
    { name: "jQuery", category: "Frontend", featured: true },
    { name: "WordPress (Custom Theme)", category: "Frontend", featured: true },
    { name: "Responsive Web Design", category: "Frontend", featured: true },
    { name: "Tailwind CSS & Bootstrap", category: "Frontend", featured: false },
    { name: "ReactJS & Next.js", category: "Frontend", featured: true },
    { name: "Three.js / WebGL", category: "Frontend", featured: false },

    // Design & UI/UX Tools
    { name: "Figma", category: "DevOps & Tools", featured: true },
    { name: "Adobe Photoshop", category: "DevOps & Tools", featured: true },
    { name: "Adobe XD", category: "DevOps & Tools", featured: true },
    { name: "Adobe Illustrator", category: "DevOps & Tools", featured: false },

    // AI Tools & Engineering
    { name: "AI Coding (ChatGPT, Claude, Copilot)", category: "DevOps & Tools", featured: true },
    { name: "Git & GitHub", category: "DevOps & Tools", featured: true },
    { name: "SEO & Core Web Vitals", category: "DevOps & Tools", featured: true },
    { name: "Cross-Browser Testing", category: "DevOps & Tools", featured: false },
    { name: "Postman & RESTful APIs", category: "DevOps & Tools", featured: false },
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Frontend & Application Developer",
      organization: "Hiep Phat Auto Co., Ltd.",
      location: "Ho Chi Minh City",
      startDate: "09/2024",
      endDate: "Present",
      isCurrent: true,
      description:
        "Responsible for UI/UX implementation, driver education portal development, custom WordPress theme maintenance, and web performance optimization.",
      achievements: [
        "Designed landing pages and created a unified Design System in Figma; converted designs into pixel-perfect responsive static HTML/CSS templates.",
        "Refactored code structure, configured URL routing, and customized WordPress administration themes for streamlined content publishing.",
        "Performed routine web maintenance, optimized Core Web Vitals load speeds, and structured technical SEO metadata.",
        "Digitized the driving school graduation examination system: computerized questions from paper to online testing with real-time tracking.",
        "Applied AI tools (Claude, ChatGPT, Copilot) to automate office workflows and accelerate data processing by 40%.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "Figma", "SEO & W3C", "AI Tools"],
    },
    {
      id: "exp-2",
      role: "Frontend Developer",
      organization: "Quoc Bao Software",
      location: "Ho Chi Minh City",
      startDate: "04/2024",
      endDate: "07/2024",
      isCurrent: false,
      description:
        "Developed commercial web projects, sliced layouts from design assets, and built custom WordPress themes according to client specifications.",
      achievements: [
        "Converted website layouts from design mockups (Figma, Photoshop, Adobe XD) into W3C-compliant HTML5/CSS3 and jQuery/JavaScript with 100% responsive accuracy.",
        "Developed and converted custom WordPress themes from static HTML sources, configuring dynamic fields to fulfill business requirements.",
        "Conducted cross-browser compatibility testing and maintenance across Chrome, Safari, Edge, and Firefox.",
      ],
      technologies: ["HTML5", "CSS3", "jQuery", "JavaScript", "WordPress Custom Theme", "Photoshop", "Adobe XD", "Figma"],
    },
    {
      id: "exp-3",
      role: "Web Developer Intern (Fresher)",
      organization: "Quoc Bao Software",
      location: "Ho Chi Minh City",
      startDate: "01/2024",
      endDate: "04/2024",
      isCurrent: false,
      description:
        "Honed W3C-compliant layout slicing skills, practiced with design software, and engaged in commercial website development workflows.",
      achievements: [
        "Completed enterprise internship with high commendations from executive management.",
        "Successfully sliced over 10 responsive static web pages from PSD and XD files into clean HTML/CSS.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Photoshop", "WordPress"],
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "BITCO Tuy Nen Brick Corporation | Leading Building Materials",
      category: "Web",
      featured: true,
      summary:
        "Flagship showcase demonstrating W3C-compliant pixel-perfect layout slicing from design mockups into pure HTML5/CSS3 without heavy frameworks, featuring Parallax scroll and cross-browser reliability.",
      role: "Frontend Developer & UI Slicer",
      problem:
        "The client required a fast-loading corporate showcase compliant with W3C standards, optimized for SEO, and rendering smoothly across all mobile and desktop viewports.",
      solution:
        "Slices layouts with pixel-perfect fidelity from design files, structured modular CSS3 components, handled interactions with vanilla JavaScript/jQuery, and integrated smooth Parallax effects.",
      features: [
        "Pixel-perfect UI conversion from design files, verified against W3C Validation standards",
        "Interactive tabbed product filtering (Tuy Nen Clay Bricks, Autoclaved Aerated Concrete AAC, ALC Panels)",
        "Hero Parallax effect and automated production capacity counters on scroll",
        "Validated client inquiry contact form with input error checking",
        "Image optimization and meta tags achieving high Google PageSpeed scores",
      ],
      technologies: ["HTML5 (W3C)", "Modular CSS3", "JavaScript ES6+", "jQuery", "Responsive Design", "Photoshop"],
      images: [
        "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "https://tuynen.vercel.app/",
      githubUrl: "https://github.com/quangsang28102/tuynen",
      results: "Page loads under 1.5 seconds, scored 95+ on Google PageSpeed Mobile, and achieves 100% W3C compliance.",
    },
    {
      id: "proj-2",
      title: "HPO – Hiep Phat Vocational Driving Education Center",
      category: "Web",
      featured: true,
      summary:
        "Driver education portal converted from static HTML sources into a customized WordPress administration theme, featuring online QR lookup and SEO optimization.",
      role: "Frontend & WordPress Theme Developer",
      problem:
        "Required a multi-page portal enabling easy administration of fees and articles while maintaining blazing-fast load speeds.",
      solution:
        "Built responsive static web layouts, converted them into a Custom WordPress Theme, optimized template functions, and built an online QR code verification portal.",
      features: [
        "Converted static HTML to custom WordPress theme for easy content publishing",
        "Instant online student credential and permit verification via QR codes",
        "Structured multi-page site for course fees and 600-question theory review with high Core Web Vitals",
        "Routine maintenance, security hardening, and browser compatibility patches",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress Custom Theme", "PHP", "Figma", "SEO"],
      images: [
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "https://hpo-edu-v2.vercel.app/",
      githubUrl: "https://github.com/quangsang28102/HPO.EDU.V2",
      results: "Serving thousands of student lookups monthly with average page response times under 1.2s.",
    },
    {
      id: "proj-3",
      title: "Football Payment Manager",
      category: "Fullstack",
      featured: true,
      summary:
        "Web application automating pitch fee splitting, member rosters, and debt tracking with dynamic VietQR payment codes and Google Sheets sync.",
      role: "Fullstack Developer (Logic & UI/UX)",
      problem:
        "Manual pitch rental calculation and debt collection frequently caused accounting errors and prolonged weekly reconciliations.",
      solution:
        "Built with Next.js and Tailwind CSS. Automatically computes average fees per attendee, generates dynamic VietQR payment codes, and synchronizes two-way with Google Sheets API.",
      features: [
        "Member roster management (CRUD) and match attendance tracking",
        "Automated per-player fee calculation (pitch, beverages, sundries)",
        "Dynamic payment QR code generator with pre-filled account number and reference notes",
        "Bidirectional sync with Google Sheets API and spreadsheet export to Excel (.xlsx)",
      ],
      technologies: ["Next.js App Router", "React 19", "TypeScript", "Tailwind CSS", "Google Sheets API", "VietQR", "XLSX"],
      images: [
        "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "https://football-pay.vercel.app/",
      githubUrl: "https://github.com/quangsang28102/footballPay",
      results: "Saved club managers 80% of calculation time and streamlined weekly expense settlements.",
    },
    {
      id: "proj-4",
      title: "3D Chibi Girl Model — Three.js Low-Poly Stylized",
      category: "3D & WebGL",
      featured: true,
      summary:
        "Interactive browser-based 3D WebGL application: Procedural BufferGeometry generator (<300KB), fluid 360° orbital rotation, real-time shaders, and glTF/OBJ file export.",
      role: "3D WebGL & Frontend Developer",
      problem:
        "Heavy 3D model assets severely slow down web performance and cannot easily be procedurally modified at runtime.",
      solution:
        "Generated 3D geometries mathematically in code via Three.js BufferGeometry without static assets, added custom lighting/shaders, OrbitControls, and client-side glTF/OBJ export.",
      features: [
        "100% procedural 3D modeling using mathematics and Three.js BufferGeometry",
        "Fluid 360° orbit rotation, zoom, and panning via OrbitControls",
        "Real-time Fresnel glow shader materials and dynamic studio lighting",
        "Direct export to .GLB and .OBJ formats for Blender/game engine pipelines",
      ],
      technologies: ["Three.js", "WebGL", "BufferGeometry", "OrbitControls", "glTF/OBJ Export", "Vite", "Tailwind CSS"],
      images: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "https://avatar-three-rouge.vercel.app/",
      githubUrl: "https://github.com/quangsang28102/AVATAR",
      results: "Sub-100ms load time with asset payload under 250KB, maintaining consistent 60 FPS across browsers.",
    },
    {
      id: "proj-5",
      title: "NightHowler — 3D Multiplayer Werewolf Arena",
      category: "Fullstack",
      featured: false,
      summary:
        "Realtime multiplayer 3D Werewolf gaming platform built with Monorepo architecture, WebGL/Three.js, Colyseus WebSockets authoritative state sync, and LiveKit partitioned spatial voice chat.",
      role: "Lead 3D & Fullstack Developer",
      problem:
        "Traditional web games lacked immersion and spatial voice segregation between factions.",
      solution:
        "Monorepo architecture combining React 19, Three.js, Colyseus WebSockets, and LiveKit WebRTC SDK for spatial audio communication partitioned by game phase (Day/Night/Lobby).",
      features: [
        "Stylized Low-Poly 3D graphics with dynamic orbit camera control",
        "Dynamic partitioned voice chat & text channels toggling permissions per phase",
        "Low-latency authoritative state sync over WebSockets",
        "Monorepo architecture cleanly modularizing client, server, and shared schemas",
      ],
      technologies: ["React 19", "Three.js", "Colyseus WebSockets", "LiveKit SDK", "TypeScript Monorepo", "Node.js"],
      images: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "",
      githubUrl: "https://github.com/quangsang28102/NightHowler",
      results: "Demonstrates mastery of cutting-edge technologies: WebSockets, WebRTC spatial voice, and 3D graphics.",
    },
  ],
  education: [
    {
      id: "edu-1",
      institution: "HCMC University of Foreign Languages & Information Technology (HUFLIT)",
      degree: "Bachelor of Software Engineering",
      major: "Information Technology — Software Engineering",
      startDate: "09/2020",
      endDate: "04/2024",
      score: "GPA: 8.3 / 10 (Graduated with Honors)",
      description:
        "Formal academic training in Software Engineering, Web Application Development, Data Structures & Algorithms, UI/UX Design, and Software Project Management.",
    },
  ],
  certifications: [
    {
      id: "cert-1",
      title: "TOEIC 590 International English Certificate",
      issuer: "Educational Testing Service (ETS)",
      issuedAt: "2024",
      credentialUrl: "",
    },
  ],
};

export function getPortfolioData(lang: "vi" | "en" = "vi"): PortfolioData {
  return lang === "en" ? portfolioDataEn : portfolioDataVi;
}

// Default export for backward compatibility
export const portfolioData = portfolioDataVi;
