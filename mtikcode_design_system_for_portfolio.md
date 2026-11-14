# 🎨 Design System: Lập Trình Web Fullstack (Next.js & NestJS)
**Dành cho Portfolio Project (Powered by Antigravity)**

Hệ thống thiết kế này mang âm hưởng của môi trường lập trình chuyên nghiệp (Developer-centric), tập trung vào sự tối giản, độ tương phản cao (chủ đạo là Dark Mode), điểm nhấn màu Đỏ/Hồng (NestJS) và các vi-tương-tác (micro-interactions) mượt mà.

---

## 1. 🌈 Bảng Màu (Color Palette)

Hệ thống sử dụng CSS Variables để dễ dàng quản lý chủ đề Sáng/Tối. Áp dụng đoạn code sau vào `globals.css`.

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    
    /* Primary: Đỏ hồng Crimson của NestJS */
    --primary: 346 87% 43%; 
    --primary-foreground: 355.7 100% 97.3%;
    
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 346 87% 43%;
    --radius: 0.75rem; /* Bo góc mềm mại hơn cho portfolio */
  }
 
  .dark {
    --background: 240 10% 3.9%; /* Nền đen sâu (Deep Black) */
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    
    --primary: 346 87% 43%;
    --primary-foreground: 0 0% 100%;
    
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 346 87% 43%;
  }
}
```

---

## 2. ✍️ Typography (Kiểu Chữ)

Kết hợp giữa font chữ hiện đại, rõ ràng cho nội dung và font monospace cho các yếu tố liên quan đến code.

*   **Heading/Body:** `Inter`, `Geist Sans`, hoặc `Plus Jakarta Sans`.
*   **Code/Tech Labels:** `JetBrains Mono` hoặc `Fira Code`.

**Cấu trúc Class Tailwind chuẩn:**
*   **Hero Title (H1):** `text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60` (Hiệu ứng chữ Gradient chìm).
*   **Section Title (H2):** `text-3xl md:text-4xl font-bold tracking-tight mb-8`
*   **Mô tả (Subtitle):** `text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl`
*   **Code Snippet:** `font-mono text-sm text-primary/80`

---

## 3. 🧩 Các Thành Phần UI Cốt Lõi (Core Components)

### Buttons
*   **Primary (CTA):**
    `bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] hover:-translate-y-1 active:scale-95` (Hiệu ứng đổ bóng sáng và nảy).
*   **Secondary/Outline:**
    `border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1`

### Project/Course Cards
Thiết kế theo phong cách Glassmorphism nhẹ.
*   **Card Wrapper:**
    `group relative overflow-hidden rounded-2xl bg-card border border-border/50 p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2`
*   **Mũi tên tương tác (Bên trong Card):**
    `inline-block transition-transform duration-300 group-hover:translate-x-2 group-hover:text-primary`

---

## 4. ✨ Các Hiệu Ứng Bắt Mắt (Advanced Animations & Effects)

Để làm cho Portfolio của bạn thực sự khác biệt, hãy cấu hình các hiệu ứng sau vào `tailwind.config.js` hoặc sử dụng thư viện bên thứ ba (như Framer Motion).

### A. Hiệu ứng Nền (Background Effects)
1.  **Animated Grid Background (Lưới không gian):**
    Tạo cảm giác không gian mạng lưới kỹ thuật số. Thêm class này vào thẻ `body` hoặc `div` bao ngoài cùng:
    `bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]`
2.  **Glow Orbs (Quả cầu ánh sáng mờ):**
    Tạo hai thẻ div đặt ở góc màn hình (Absolute) với class:
    `absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/20 blur-[100px] -z-10 animate-pulse`

### B. Hiệu ứng Hover Đặc Biệt (Mouse Interactions)
1.  **Spotlight Card (Đèn pin chiếu theo chuột):**
    *Cần một chút JavaScript để lấy toạ độ chuột*. Khi di chuột qua Card, một vệt sáng Gradient (Glow) sẽ bám theo trỏ chuột, chiếu sáng viền và nền của Card. Rất phù hợp để show các Projects.
2.  **Magnetic Button (Nút bấm từ tính):**
    Sử dụng Framer Motion để khi chuột tiến lại gần nút CTA (Liên hệ, Xem CV), nút sẽ hơi bị hút về phía con trỏ chuột, tạo cảm giác vật lý sống động.

### C. Text & Scroll Animations
Cấu hình vào `tailwind.config.js`:
```javascript
theme: {
  extend: {
    keyframes: {
      "fade-in-up": {
        "0%": { opacity: 0, transform: "translateY(30px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
      "shimmer": {
        "100%": { transform: "translateX(100%)" },
      },
      "typewriter": {
        to: { left: "100%" }
      },
      "blink": {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0 }
      }
    },
    animation: {
      "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      "shimmer": "shimmer 2s infinite",
    },
  },
}
```

*   **Hiệu ứng Loading Skeleton (Shimmer):** Dùng class `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent` cho các khối chờ load.
*   **Text Typing (Dành cho Hero Section):** Kết hợp CSS steps() hoặc thư viện `Typewriter.js` để tạo hiệu ứng gõ chữ "I am a Fullstack Developer...".

### D. Glitch Effect (Cho tên thương hiệu/Logo)
Tạo hiệu ứng nhiễu sóng kỹ thuật số khi hover vào tên bạn trên thanh Navbar.
*Sử dụng CSS thuần:* Thêm class `hover:animate-glitch` (Cần định nghĩa keyframe glitch với các `clip-path` cắt xén chữ ngẫu nhiên).