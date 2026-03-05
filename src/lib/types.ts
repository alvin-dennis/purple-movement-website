import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export interface FAQItem {
  question: string;
  answer: string | ReactNode;
}

export interface EventItem {
  image: string;
  title: string;
  description: string;
}

export interface ArticleItem {
  title: string;
  source: string;
  category: string;
  link: string;
  description: string;
  date: string;
}

export interface Timeline {
  year: string;
  title: string;
  description: string;
  status: string;
}

export interface LevelData {
  id: number;
  title: string;
  description: string;
  slug: string;
  link: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  icon: IconType;
  href: string;
}

export interface SupportLink {
  name: string;
  href: string;
  action?: "feedback";
}

export interface VerticalItem {
  label: string;
  href: string;
}

export interface FooterData {
  verticals: VerticalItem[];
  navLinks: NavLink[];
  supportLinks: SupportLink[];
  socialLinks: SocialLink[];
  bottomBar: {
    copyright: string;
    email: {
      label: string;
      href: string;
    };
    site: {
      label: string;
      href: string;
    };
  };
}

export type StepTwoFormData = {
  selectedRole: string;
  whyHere: string;
  portfolioLink: string;
};

export type StepThreeFormData = {
  name: string;
  email: string;
  phone: string;
  interested: boolean;
  notInterested: boolean;
};
