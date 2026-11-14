import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";
import { AppProviders } from "@/components/providers/AppProviders";

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
    "Frontend Developer",
    "React",
    "Next.js",
    "Three.js",
    "TypeScript",
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
    <html lang="vi" suppressHydrationWarning className="dark scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('portfolio-theme');
                if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-zinc-50 text-zinc-900 dark:bg-[#09090b] dark:text-[#f4f4f5] transition-colors duration-300 selection:bg-rose-500/25 selection:text-rose-900 dark:selection:text-rose-200 relative`}
      >
        {/* Ambient Grid Background */}
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none -z-20 opacity-30 dark:opacity-40" />

        {/* Ambient Glow Orbs */}
        <div className="fixed top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-rose-500/5 dark:bg-rose-600/10 blur-[130px] -z-10 pointer-events-none animate-pulse-glow" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-amber-500/5 dark:bg-rose-900/10 blur-[140px] -z-10 pointer-events-none animate-pulse-glow" />

        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
