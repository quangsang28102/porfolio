import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    fullName: "Quang Sáng",
    role: "Fullstack Web Developer",
    headline: "Kiến tạo các sản phẩm web hiệu năng cao, tối giản và bền vững.",
    shortBio:
      "Lập trình viên chuyên sâu hệ sinh thái TypeScript: Next.js ở Frontend và NestJS ở Backend. Đam mê thiết kế giao diện tinh tế, trải nghiệm vi-tương-tác mượt mà và kiến trúc backend mở rộng linh hoạt.",
    aboutParagraphs: [
      "Xin chào! Tôi là một lập trình viên Fullstack với niềm đam mê sâu sắc trong việc biến các ý tưởng phức tạp thành những giao diện trực quan và hệ thống backend ổn định, bảo mật.",
      "Thế mạnh của tôi nằm ở việc làm chủ toàn diện chu trình phát triển sản phẩm: từ việc lên cấu trúc giao diện theo tiêu chuẩn Design System hiện đại với Next.js & Tailwind CSS, cho đến thiết kế RESTful/GraphQL API, chuẩn hóa cơ sở dữ liệu và quản lý microservices bằng NestJS.",
      "Tôi luôn đề cao nguyên tắc Clean Code, tối ưu Core Web Vitals và hướng tới trải nghiệm người dùng tự nhiên nhất.",
    ],
    strengths: [
      {
        title: "Frontend Engineering",
        description:
          "Thành thạo Next.js App Router, React Server Components, Tailwind CSS, tối ưu SEO và Micro-animations mượt mà.",
        icon: "Layout",
      },
      {
        title: "Backend & Microservices",
        description:
          "Thiết kế kiến trúc module với NestJS, xác thực JWT/OAuth2, caching Redis, ORM Prisma/TypeORM và xử lý hàng đợi BullMQ.",
        icon: "Server",
      },
      {
        title: "Clean Architecture & DevOps",
        description:
          "Áp dụng DDD, CI/CD tự động hóa, container hóa Docker và tối ưu triển khai trên các nền tảng đám mây hiện đại.",
        icon: "ShieldCheck",
      },
    ],
    location: "Hồ Chí Minh, Việt Nam",
    email: "quangsang.dev@gmail.com",
    phone: "+84 987 654 321",
    availableForWork: true,
    cvPath: "/files/cv.pdf",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
      website: "https://quangsang.dev",
    },
  },
  skills: [
    // Languages
    { name: "TypeScript", category: "Languages", featured: true },
    { name: "JavaScript (ES6+)", category: "Languages", featured: true },
    { name: "HTML5 & CSS3", category: "Languages", featured: false },
    { name: "SQL", category: "Languages", featured: false },

    // Frontend
    { name: "Next.js (App Router)", category: "Frontend", featured: true },
    { name: "React.js", category: "Frontend", featured: true },
    { name: "Tailwind CSS", category: "Frontend", featured: true },
    { name: "Framer Motion", category: "Frontend", featured: true },
    { name: "Zustand / Redux", category: "Frontend", featured: false },
    { name: "Shadcn UI", category: "Frontend", featured: false },

    // Backend
    { name: "NestJS", category: "Backend", featured: true },
    { name: "Node.js & Express", category: "Backend", featured: true },
    { name: "RESTful API", category: "Backend", featured: true },
    { name: "GraphQL", category: "Backend", featured: false },
    { name: "Socket.io", category: "Backend", featured: false },

    // Database
    { name: "PostgreSQL", category: "Database", featured: true },
    { name: "MongoDB", category: "Database", featured: true },
    { name: "Redis", category: "Database", featured: true },
    { name: "Prisma ORM", category: "Database", featured: true },

    // DevOps & Tools
    { name: "Docker", category: "DevOps & Tools", featured: true },
    { name: "Git & GitHub", category: "DevOps & Tools", featured: true },
    { name: "Postman", category: "DevOps & Tools", featured: false },
    { name: "Vercel / Cloudflare", category: "DevOps & Tools", featured: false },
    { name: "Linux / Bash", category: "DevOps & Tools", featured: false },
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Senior Fullstack Developer",
      organization: "Tech Innovation Corp",
      location: "TP. Hồ Chí Minh",
      startDate: "01/2024",
      endDate: "Hiện tại",
      isCurrent: true,
      description:
        "Chịu trách nhiệm kiến trúc và phát triển nền tảng quản trị và bán hàng đa kênh B2B/B2C quy mô lớn.",
      achievements: [
        "Chuyển đổi giao diện sang Next.js App Router, giúp cải thiện 40% điểm Core Web Vitals và tăng tốc độ tải trang lần đầu.",
        "Xây dựng hệ thống Backend Microservices với NestJS, tích hợp Redis Caching giảm 50% thời gian phản hồi của API.",
        "Thiết lập pipeline CI/CD với GitHub Actions và Docker tự động triển khai môi trường staging/production.",
      ],
      technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    },
    {
      id: "exp-2",
      role: "Fullstack Web Developer",
      organization: "Digital Solutions Studio",
      location: "TP. Hồ Chí Minh",
      startDate: "06/2022",
      endDate: "12/2023",
      isCurrent: false,
      description:
        "Tham gia phát triển các ứng dụng Web SaaS và hệ thống quản trị dữ liệu cho khách hàng quốc tế.",
      achievements: [
        "Phát triển hơn 15 modules giao diện phức tạp bằng React và Tailwind CSS theo đúng tiêu chuẩn Figma pixel-perfect.",
        "Thiết kế cơ sở dữ liệu quan hệ với PostgreSQL và Prisma ORM, đảm bảo tính toàn vẹn dữ liệu cho hàng triệu giao dịch.",
        "Tích hợp cổng thanh toán trực tuyến (Stripe, VNPay) và hệ thống gửi thông báo thời gian thực.",
      ],
      technologies: ["React", "Node.js", "NestJS", "Tailwind CSS", "MongoDB", "Prisma"],
    },
    {
      id: "exp-3",
      role: "Frontend Developer Intern / Junior",
      organization: "Creative Tech Lab",
      location: "TP. Hồ Chí Minh",
      startDate: "08/2021",
      endDate: "05/2022",
      isCurrent: false,
      description:
        "Bắt đầu hành trình lập trình web chuyên nghiệp bằng việc xây dựng các landing page và dashboard quản trị.",
      achievements: [
        "Xây dựng thư viện reusable UI components giúp đội ngũ lập trình tiết kiệm 30% thời gian code trang mới.",
        "Tối ưu hóa hình ảnh và mã JavaScript để đạt điểm Lighthouse trên 90 điểm.",
      ],
      technologies: ["JavaScript", "React", "HTML/CSS", "Bootstrap", "Git"],
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "OmniStore — Nền tảng Thương mại Điện tử Đa Kênh",
      category: "Fullstack",
      featured: true,
      summary:
        "Hệ thống E-Commerce cao cấp hỗ trợ giỏ hàng realtime, thanh toán bảo mật, quản trị kho và thống kê doanh thu đa chiều.",
      role: "Lead Fullstack Developer",
      problem:
        "Hệ thống cũ xử lý thanh toán chậm, thiếu đồng bộ tồn kho tức thời khi có flash sale gây ra tình trạng quá tải server.",
      solution:
        "Tái cấu trúc sang Next.js 15 kết hợp NestJS Microservices, áp dụng Redis Lock để chống race condition khi đặt hàng và BullMQ xử lý tác vụ nền.",
      features: [
        "Giao diện hiện đại tối ưu trải nghiệm mua sắm trên thiết bị di động",
        "Đồng bộ giỏ hàng và thông báo đơn hàng realtime với WebSockets",
        "Hệ thống phân quyền RBAC đa cấp (Admin, Quản lý kho, Nhân viên, Khách hàng)",
        "Tích hợp cổng thanh toán Stripe & VNPay bảo mật cao",
      ],
      technologies: ["Next.js 15", "NestJS", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis", "Docker"],
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "https://demo-ecommerce.example.com",
      githubUrl: "https://github.com/example/omnistore-platform",
      results: "Giảm 65% độ trễ API, chịu tải ổn định 10.000+ người dùng đồng thời trong sự kiện mua sắm.",
    },
    {
      id: "proj-2",
      title: "TaskFlow — Hệ Quản Trị Tác Vụ & Dự Án Theo Thời Gian Thực",
      category: "Web",
      featured: true,
      summary:
        "Ứng dụng quản lý dự án phong cách Kanban tương tác cao, cho phép các nhóm làm việc cộng tác tức thì mà không cần reload trang.",
      role: "Frontend & Fullstack Contributor",
      problem:
        "Nhóm làm việc từ xa gặp khó khăn trong việc cập nhật tiến độ công việc và trao đổi tài liệu tập trung.",
      solution:
        "Xây dựng bảng Kanban kéo thả mượt mà với dnd-kit, đồng bộ trạng thái thẻ tức thời qua Socket.io và thiết kế giao diện Dark Mode cao cấp.",
      features: [
        "Bảng Kanban kéo thả mượt mà, hỗ trợ swimlanes và tags đa sắc",
        "Trò chuyện, nhắc tên (@mention) và bình luận trực tiếp trong từng task",
        "Bộ lọc thông minh theo người phụ trách, độ ưu tiên và deadline",
        "Biểu đồ Gantt trực quan hóa tiến độ dự án",
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "NestJS", "MongoDB", "Socket.io"],
      images: [
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "https://taskflow.example.com",
      githubUrl: "https://github.com/example/taskflow-app",
      results: "Được áp dụng tại 3 startup công nghệ nội bộ với hơn 500 thành viên hoạt động hàng ngày.",
    },
    {
      id: "proj-3",
      title: "DevPulse — API Gateway & Centralized Logging Service",
      category: "Backend",
      featured: false,
      summary:
        "Hệ thống giám sát hiệu năng, quản lý log tập trung và điều phối yêu cầu mạng cho cụm microservices nội bộ.",
      role: "Backend Architect",
      problem:
        "Khó khăn trong việc truy vết lỗi liên dịch vụ và giám sát thời gian phản hồi của từng microservice riêng lẻ.",
      solution:
        "Xây dựng API Gateway với NestJS, áp dụng Correlation ID trên từng request và tích hợp OpenTelemetry cùng Elasticsearch.",
      features: [
        "Rate limiting và IP throttling bảo vệ backend khỏi tấn công brute-force",
        "Tự động chuyển đổi và mã hóa payload nhạy cảm",
        "Dashboard theo dõi độ trễ p95, p99 và tỉ lệ lỗi trực quan",
      ],
      technologies: ["NestJS", "Node.js", "TypeScript", "Redis", "Elasticsearch", "Docker"],
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "",
      githubUrl: "https://github.com/example/devpulse-gateway",
      results: "Rút ngắn thời gian debug sự cố hệ thống từ vài giờ xuống dưới 5 phút.",
    },
    {
      id: "proj-4",
      title: "AiCoder Studio — Nền tảng Trợ Lý Lập Trình & Tài Liệu API",
      category: "Fullstack",
      featured: true,
      summary:
        "Công cụ hỗ trợ nhà phát triển tự động sinh mã boilerplate, tài liệu hóa OpenAPI và giải thích logic mã nguồn thông qua LLMs.",
      role: "Sole Developer",
      problem:
        "Lập trình viên mất quá nhiều thời gian viết tài liệu Swagger và các đoạn mã mẫu lặp đi lặp lại.",
      solution:
        "Tích hợp mô hình ngôn ngữ lớn (Gemini API) với giao diện tương tác code editor trực quan, hỗ trợ Markdown & Syntax Highlighting.",
      features: [
        "Code Editor hỗ trợ highlight đa ngôn ngữ với theme Obsidian Dark",
        "Streaming response thời gian thực cho cảm giác tương tác phản hồi tức thì",
        "Xuất tài liệu API chuẩn Markdown hoặc HTML chỉ với một click",
      ],
      technologies: ["Next.js", "Tailwind CSS", "NestJS", "TypeScript", "OpenAI / Gemini SDK"],
      images: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
      ],
      demoUrl: "https://aicoder-studio.example.com",
      githubUrl: "https://github.com/example/aicoder-studio",
      results: "Thu hút hơn 1.200 lượt trải nghiệm trong tuần đầu ra mắt trên GitHub.",
    },
  ],
  education: [
    {
      id: "edu-1",
      institution: "Đại học Công Nghệ Thông Tin (UIT / Bách Khoa)",
      degree: "Kỹ sư",
      major: "Kỹ thuật Phần mềm (Software Engineering)",
      startDate: "2019",
      endDate: "2023",
      score: "GPA: 3.5 / 4.0",
      description:
        "Chuyên sâu về Cấu trúc dữ liệu và giải thuật, Lập trình hướng đối tượng, Kiến trúc phần mềm và Mạng máy tính.",
    },
  ],
  certifications: [
    {
      id: "cert-1",
      title: "NestJS Masterclass & Microservices Architecture",
      issuer: "Trilon (Official NestJS Core Team)",
      issuedAt: "2024",
      credentialUrl: "https://trilon.io/certificates/verify/example",
    },
    {
      id: "cert-2",
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      issuedAt: "2023",
      credentialUrl: "https://aws.amazon.com/verification",
    },
  ],
};
