import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Design System v1.0 — ${portfolioData.personal.fullName} Portfolio`,
  description: `Hệ thống thiết kế chuẩn cho Portfolio: Tokens màu, Typography, Component Showcase, Motion & Hand-off Guide.`,
};

export default function DesignSystemLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
