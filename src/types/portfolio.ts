export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps & Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  category: "Fullstack" | "Web" | "Backend" | "Mobile" | "3D & WebGL" | "Other";
  featured: boolean;
  summary: string;
  role: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  images?: string[];
  demoUrl?: string;
  githubUrl?: string;
  results?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
  description?: string;
  score?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuedAt: string;
  credentialUrl?: string;
}

export interface PersonalInfo {
  fullName: string;
  role: string;
  headline: string;
  shortBio: string;
  aboutParagraphs: string[];
  strengths: {
    title: string;
    description: string;
    icon: string;
  }[];
  location: string;
  email: string;
  phone?: string;
  avatar?: string;
  availableForWork: boolean;
  cvPath?: string;
  social: {
    github?: string;
    linkedin?: string;
    facebook?: string;
    website?: string;
  };
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}
