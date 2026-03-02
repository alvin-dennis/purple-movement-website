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
    <footer className="w-full bg-background border-t border-white/5 pt-16 sm:pt-24 md:pt-40 pb-10 md:pb-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-12 mb-16 md:mb-40">
          {/* Brand Col */}
          <div className="sm:col-span-2 md:col-span-5 space-y-8 md:space-y-12">
            <Image
              src="/logos/logo_pm.png"
              width={160}
              height={60}
              alt="Purple Movement Logo"
              className="brightness-125 saturate-150 w-auto h-10 md:h-auto"
              unoptimized
            />
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl movement-title text-white">THE PURPLE <br />MOVEMENT.</h3>
              <p className="movement-subtitle text-sm md:text-base lg:text-lg text-white/50">
                Beyond Syllabus, Beyond Gatekeepers, Beyond Borders. <br />
                Rise Together.
              </p>
            </div>
            <div className="flex gap-4 md:gap-6">
              {[
                { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/tpm.live/" },
                { icon: <BsTwitterX size={18} />, href: "https://x.com/ThePurpleMVMT" },
                { icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/company/the-purple-movement/posts/?feedView=all" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-purple-500 hover:border-purple-600 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Col */}
          <div className="md:col-span-3 space-y-6 md:space-y-8">
            <h4 className="text-xs font-bold tracking-[0.5em] text-white/20 uppercase">Navigation</h4>
            <nav className="flex flex-col gap-4 md:gap-6">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={(e) => handleLinkClick(e, l.href)}
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white/40 hover:text-white transition-colors"
                >
                  {l.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Support Col */}
          <div className="md:col-span-4 space-y-6 md:space-y-8">
            <h4 className="text-xs font-bold tracking-[0.5em] text-white/20 uppercase">Access</h4>
            <nav className="flex flex-col gap-4 md:gap-6">
              {supportLinks.map((l) =>
                l.action === "feedback" ? (
                  <button
                    key={l.name}
                    onClick={() => setIsFeedbackOpen(true)}
                    className="text-left text-lg sm:text-xl md:text-2xl font-bold text-white/40 hover:text-white transition-colors uppercase italic"
                  >
                    {l.name}
                  </button>
                ) : (
                  <a
                    key={l.name}
                    href={l.href}
                    className="text-lg sm:text-xl md:text-2xl font-bold text-white/40 hover:text-white transition-colors uppercase italic"
                  >
                    {l.name}
                  </a>
                )
              )}
            </nav>
            <div className="pt-8 md:pt-20">
              <p className="text-[10px] text-white/10 font-bold tracking-[0.3em] uppercase leading-relaxed">
                Designed for collective evolution. <br />
                Engineered for purpose.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-8">
          <span className="text-[10px] text-white/20 tracking-widest text-center sm:text-left">
            © 2025 THE PURPLE MOVEMENT.
          </span>
          <div className="flex gap-6 md:gap-12 text-[10px] text-white/10 tracking-widest font-bold">
            <span>RECLAIM YOUR LIMITS</span>
            <span>RISE BEYOND</span>
          </div>
        </div>
      </div>

      <FeedbackPopup isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
    </footer>
  );
};