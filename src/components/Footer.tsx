"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import FeedbackPopup from "./FeedbackPopup";

const links = [
  { name: "Home", href: "/#" },
  { name: "About", href: "/#about" },
  { name: "Events", href: "/#events" },
];

const supportLinks = [
  { name: "Term of Use", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Feedback", action: "feedback" },
];

export const Footer = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "/#") {
      if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
      else router.push("/");
      return;
    }
    const targetId = href.replace("/#", "");
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="w-full px-4 overflow-hidden pb-10">
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-12 mb-16">
          {/* Brand Col */}
          <div className="sm:col-span-2 md:col-span-5 space-y-8 md:space-y-12 flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/logos/logo_pm.png"
              width={160}
              height={60}
              alt="Purple Movement Logo"
              className="brightness-125 saturate-150 w-auto h-10 md:h-auto"
            />
            <div className="space-y-4 md:space-y-6">
              <p className="text-sm md:text-base lg:text-lg text-white/50">
                Beyond Syllabus, Beyond Gatekeepers, Beyond Borders. <br />
                Rise Together.
              </p>
            </div>
            <div className="flex gap-4 md:gap-6">
              {[
                { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/tpm.live/" },
                { icon: <BsTwitterX size={18} />, href: "https://x.com/ThePurpleMVMT" },
                { icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/company/the-purple-movement/posts/?feedView=all" },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-primary hover:border-primary transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Col */}
          <div className="md:col-span-3 space-y-6 md:space-y-8 flex flex-col items-center md:items-start">
            <h4 className="text-xs font-bold tracking-[0.5em] text-white/20 uppercase text-center md:text-left">Navigation</h4>
            <nav className="flex flex-col gap-4 md:gap-6">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={(e) => handleLinkClick(e, l.href)}
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white/40 hover:text-white transition-colors text-center md:text-left"
                >
                  {l.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Support Col */}
          <div className="md:col-span-4 space-y-6 md:space-y-8 flex flex-col items-center md:items-start">
            <h4 className="text-xs font-bold tracking-[0.5em] text-white/20 uppercase text-center md:text-left">Access</h4>
            <nav className="flex flex-col gap-4 md:gap-6">
              {supportLinks.map((l) =>
                l.action === "feedback" ? (
                  <button
                    key={l.name}
                    onClick={() => setIsFeedbackOpen(true)}
                    className="text-center md:text-left text-lg sm:text-xl md:text-2xl font-bold text-white/40 hover:text-white transition-colors uppercase"
                  >
                    {l.name}
                  </button>
                ) : (
                  <a
                    key={l.name}
                    href={l.href}
                    className="text-lg sm:text-xl md:text-2xl font-bold text-white/40 hover:text-white transition-colors uppercase text-center md:text-left"
                  >
                    {l.name}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-8">
          <span className="text-[10px] text-foreground tracking-widest text-center sm:text-left">
            © 2025 THE PURPLE MOVEMENT.
          </span>
          <div className="flex gap-6 md:gap-12 text-[10px] text-foreground tracking-widest font-bold">
            <span>RECLAIM YOUR LIMITS</span>
            <span>RISE BEYOND</span>
          </div>
        </div>
      </div>

      <FeedbackPopup isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
    </footer>
  );
};