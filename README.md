# 🎨 Developer Portfolio Website

Trang Portfolio cá nhân chuyên nghiệp dành cho **Fullstack Web Developer (Next.js & NestJS)**, tuân thủ theo Design System chuẩn developer-centric, giao diện Dark Theme hiện đại, điểm nhấn màu đỏ hồng Crimson của NestJS và các vi-tương-tác (micro-interactions) tinh tế.

---

## 🚀 Công Nghệ Sử Dụng

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Ngôn ngữ:** [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation & Micro-interactions:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** `Inter` (sans) & `JetBrains Mono` (code / tech stack)

---

## ✨ Điểm Nhấn Thiết Kế

1. **Dark Premium Theme:** Nền đen sâu (`#09090b`), điểm nhấn Crimson Red (`#e11d48`) mang phong cách công nghệ NestJS.
2. **Background Effects:** Animated Grid Background, Glow Orbs mờ phía sau.
3. **Spotlight Cards:** Vệt sáng toả theo vị trí con trỏ chuột khi hover vào các thẻ dự án và thế mạnh.
4. **Magnetic Button:** Lực hút từ tính nhẹ bám theo con trỏ chuột trên các nút CTA chính.
5. **Interactive Terminal Hero:** Khối mô phỏng IDE/Terminal với cấu hình developer sống động.
6. **Continuous Tech Marquee:** Dải công nghệ chạy ngang liên tục, tự động dừng khi hover.
7. **Project Detail Modal:** Xem chi tiết bài toán, giải pháp kỹ thuật, tính năng và kết quả đạt được của từng dự án.
8. **Dữ liệu hoàn toàn độc lập:** Toàn bộ nội dung nằm trong `src/data/portfolio.ts`, cực kỳ dễ cập nhật.

---

## 🛠 Hướng Dẫn Cài Đặt & Chạy Local

### 1. Khởi chạy môi trường phát triển

```bash
npm run dev
```

Mở trình duyệt tại: [http://localhost:3000](http://localhost:3000)

### 2. Kiểm tra kiểu dữ liệu & Xây dựng bản dựng sản xuất

```bash
# Kiểm tra TypeScript
npx tsc --noEmit

# Tạo bản build tối ưu
npm run build

# Chạy bản dựng sản xuất
npm run start
```

---

## ✏️ Cập Nhật Nội Dung Của Bạn

Xem hướng dẫn chi tiết tại [README_CONTENT.md](./README_CONTENT.md). Mọi dữ liệu về thông tin cá nhân, kinh nghiệm, kỹ năng và dự án đều được cấu hình trong:
`src/data/portfolio.ts`

---

## 🌐 Hướng Dẫn Triển Khai Lên Vercel

1. Đưa mã nguồn lên GitHub của bạn:
   ```bash
   git init
   git add .
   git commit -m "feat: initial developer portfolio"
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Truy cập [vercel.com](https://vercel.com) và chọn **Add New Project**.
3. Import repository từ GitHub.
4. Giữ nguyên các thông số mặc định (Framework Preset: **Next.js**).
5. Nhấn **Deploy** và nhận ngay đường link website hoạt động 24/7!

