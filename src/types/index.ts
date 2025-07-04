// Shared types and interfaces for the portfolio

export interface ResumeItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  subtitle: string;
  company?: string;
  location: string;
  period: string;
  description: string[];
  skills?: string[];
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: string; icon: string }[];
}

export interface Hobby {
  key: string;
  label: string;
  icon: React.ReactNode;
  desc: string;
  accent: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ThemeMode {
  mode: 'light' | 'dark';
}

export interface AnimationVariants {
  hidden: object;
  visible: object;
  hover?: object;
  tap?: object;
} 