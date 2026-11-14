import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `CV ${portfolioData.personal.fullName} — ${portfolioData.personal.role} (Bản In A4)`,
  description: `Hồ sơ năng lực & CV kỹ thuật số của ${portfolioData.personal.fullName} - ${portfolioData.personal.role}.`,
};

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

