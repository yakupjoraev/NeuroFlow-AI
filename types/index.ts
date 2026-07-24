import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface MegaMenuItem {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
}

export interface MegaMenuGroup {
  label: string;
  items: MegaMenuItem[];
}

export interface NavItem {
  label: string;
  href: string;
  menu?: MegaMenuGroup[];
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BentoFeature extends Feature {
  span: "sm" | "md" | "lg";
  accent: string;
}

export interface Stat {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

export interface PricingTier {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface UseCase {
  title: string;
  description: string;
  icon: LucideIcon;
  metric: string;
  metricLabel: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  author: string;
  content: string[];
}

export interface Logo {
  name: string;
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}
