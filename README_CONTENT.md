# 📝 HƯỚNG DẪN CẬP NHẬT DỮ LIỆU CÁ NHÂN (PORTFOLIO CONTENT)

Tất cả thông tin hiển thị trên trang web được tập trung hoàn toàn trong **duy nhất một file**:
👉 **`src/data/portfolio.ts`**

Bạn không cần sửa mã nguồn JSX/HTML! Chỉ cần cập nhật các trường dữ liệu dưới đây:

---

## 1. Thông tin cá nhân & Giới thiệu (`personal`)

```ts
personal: {
  fullName: "Họ và Tên Của Bạn",
  role: "Fullstack Web Developer", // Chức danh / Vị trí
  headline: "Câu tuyên ngôn ngắn về thế mạnh hoặc phương châm",
  shortBio: "Mô tả ngắn 2-3 câu xuất hiện tại phần Hero",
  aboutParagraphs: [
    "Đoạn giới thiệu 1: Kinh nghiệm và niềm đam mê...",
    "Đoạn giới thiệu 2: Các kỹ năng trọng tâm và cách tiếp cận...",
    "Đoạn giới thiệu 3: Định hướng nghề nghiệp..."
  ],
  strengths: [
    {
      title: "Frontend Engineering",
      description: "Mô tả thế mạnh frontend của bạn...",
      icon: "Layout"
    },
    // ...
  ],
  location: "TP. Hồ Chí Minh, Việt Nam",
  email: "your.email@gmail.com",
  phone: "+84 987 654 321",
  availableForWork: true, // true: hiển thị badge "Sẵn sàng nhận việc", false: ẩn
  cvPath: "/files/cv.pdf", // Đường dẫn file CV trong thư mục public
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    facebook: "https://facebook.com/your-profile",
    website: "https://yourdomain.com",
  }
}
```

---

## 2. Kỹ năng & Công nghệ (`skills`)

Thêm hoặc bớt các công nghệ bạn thành thạo:

```ts
{
  name: "Next.js",
  category: "Frontend", // Phân loại: "Languages" | "Frontend" | "Backend" | "Database" | "DevOps & Tools"
  featured: true // true: có chấm đỏ nổi bật
}
```

---

## 3. Kinh nghiệm làm việc (`experiences`)

Liệt kê các mốc thời gian làm việc:

```ts
{
  id: "exp-1",
  role: "Senior Fullstack Developer",
  organization: "Tên Công Ty",
  location: "TP. Hồ Chí Minh",
  startDate: "01/2024",
  endDate: "Hiện tại",
  isCurrent: true, // Đang làm việc tại đây
  description: "Mô tả trách nhiệm chính...",
  achievements: [
    "Thành tựu 1 (kèm số liệu cụ thể nếu có)...",
    "Thành tựu 2..."
  ],
  technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL"]
}
```

---

## 4. Dự án & Sản phẩm (`projects`)

Dự án là phần quan trọng nhất trong CV IT:

```ts
{
  id: "proj-1",
  title: "Tên Dự Án",
  category: "Fullstack", // "Fullstack" | "Web" | "Backend" | "Mobile" | "Other"
  featured: true, // Hiển thị nhãn 'Featured'
  summary: "Tóm tắt ngắn gọn dự án...",
  role: "Lead Developer / Solo Developer",
  problem: "Vấn đề / Thách thức khách hàng hoặc hệ thống gặp phải",
  solution: "Giải pháp công nghệ bạn đã đưa ra để giải quyết",
  features: [
    "Tính năng 1",
    "Tính năng 2"
  ],
  technologies: ["Next.js", "NestJS", "Tailwind CSS"],
  images: [
    "/images/project-1.png" // Đặt ảnh trong public/images/ hoặc dùng link ảnh online
  ],
  demoUrl: "https://your-demo-url.com", // Để trống "" nếu không có
  githubUrl: "https://github.com/your-username/project", // Để trống "" nếu dự án bảo mật
  results: "Kết quả định lượng: Giảm 40% chi phí, chịu tải 10k CCU..."
}
```

---

## 5. Thêm File CV & Hình Ảnh Của Bạn

1. **File CV:** Đặt file PDF của bạn vào thư mục `public/files/cv.pdf`. Nút "Tải CV" trên thanh điều hướng và Hero sẽ tự động tải file này về máy người dùng.
2. **Hình ảnh:** Đặt ảnh chụp màn hình dự án hoặc ảnh đại diện vào thư mục `public/images/`. Sau đó tham chiếu trong `src/data/portfolio.ts` dạng `/images/ten-file.png`.

