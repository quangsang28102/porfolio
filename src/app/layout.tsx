import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.fullName} — ${portfolioData.personal.role}`,
  description: portfolioData.personal.shortBio,
  keywords: [
    "Fullstack Developer",
    "Next.js",
    "NestJS",
    "TypeScript",
    "React",
    "Portfolio",
    portfolioData.personal.fullName,
  ],
  authors: [{ name: portfolioData.personal.fullName }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-rose-500/30 selection:text-rose-200 relative`}
      >
        {/* Ambient Grid Background */}
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none -z-20 opacity-40" />

        {/* Ambient Glow Orbs */}
        <div className="fixed top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-rose-600/10 blur-[130px] -z-10 pointer-events-none animate-pulse-glow" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-rose-900/10 blur-[140px] -z-10 pointer-events-none animate-pulse-glow" />

        {children}
      </body>
    </html>
  );
}
