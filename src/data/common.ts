import { NavLink, SupportLink } from "@/lib/types";

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Events", href: "/#events" },
];

export const supportLinks: SupportLink[] = [
  { name: "Term of Use", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Feedback", action: "feedback" },
];
