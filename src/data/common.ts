import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import type { FooterData, NavLink } from "@/lib/types";

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Events", href: "/#events" },
];

export const footer: FooterData = {
  verticals: [
    {
      label: "Beyond Syllabus",
      href: "https://beyondsyllabus.in",
    },
    {
      label: "Beyond Gatekeepers",
      href: "https://beyondport80.com",
    },
    {
      label: "Beyond Borders",
      href: "https://https://ai-compassion.com/",
    },
  ],
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Events", href: "/#events" },
  ],
  supportLinks: [
    { name: "Terms of Use", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Feedback", href: "/feedback", action: "feedback" },
  ],

  socialLinks: [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/tpm.live/",
    },
    {
      icon: BsTwitterX,
      href: "https://x.com/ThePurpleMVMT",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/the-purple-movement/posts/?feedView=all",
    },
  ],

  bottomBar: {
    copyright: "©2025 THE PURPLE MOVEMENT.",
    email: {
      label: "contact@purple-movement.com",
      href: "mailto:contact@purple-movement.com",
    },
    site: {
      label: "purple-movement.com",
      href: "https://purple-movement.com",
    },
  },
};
