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
      href: "/beyond-syllabus",
    },
    {
      label: "Beyond Gatekeepers",
      href: "/beyond-gatekeepers",
    },
    {
      label: "Beyond Borders",
      href: "/beyond-borders",
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
    { name: "Feedback", href: "/feedback" },
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
    copyright: "© 2025 THE PURPLE MOVEMENT.",
    slogans: ["RECLAIM YOUR LIMITS", "RISE BEYOND"],
  },
};
