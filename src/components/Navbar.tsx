"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

import { navLinks } from "@/data/common";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (window.scrollY < 100) {
        setActiveSection("/");
        return;
      }

      const sections = ["about", "events"];
      let currentActive = "";

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            currentActive = `/#${sectionId}`;
          }
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = async (href: string) => {
    setIsOpen(false);

    if (href === "/") {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/");
      }
      return;
    }

    if (pathname !== "/") {
      router.push(href);
      return;
    }

    const targetId = href.replace("/#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 w-[95%] max-w-[1400px] ${isScrolled ? "top-4" : "top-8"
        }`}
    >
      <div
        className={`flex items-center justify-between px-6 md:px-10 py-3 md:py-5 transition-all duration-500 rounded-[3rem] border borderforeground/5 shadow-2xl ${isScrolled
          ? "bg-black/60 backdrop-blur-2xl border-primary/20"
          : "bg-transparent border-transparent"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="relative z-10 cursor-pointer flex-shrink-0">
          <Image
            src="/logos/logo_pm.png"
            width={120}
            height={48}
            alt="Purple Movement Logo"
            priority
            className="w-auto h-10 md:h-12 brightness-125"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className={`font-bold text-xs uppercase tracking-[0.3em] relative group py-2 hover:text-primary transition-colors ${activeSection === link.href ? "text-primary" : "textforeground/60"
                }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full ${activeSection === link.href ? "w-full" : "w-0"
                  }`}
              />
            </Link>
          ))}

          <Link
            href="/join"
            className="ml-2 px-6 lg:px-8 py-3 text-[10px] tracking-[0.2em] uppercase whitespace-nowrap"
          >
            <Button variant={"default"}>
              Connect
            </Button>
          </Link>
        </div>

        {/* Hamburger (Mobile) */}
        <Button
          variant={"default"}
          size={"icon"}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-10 p-2.5 rounded-full flex-shrink-0"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={18} className="textforeground" />
          ) : (
            <Menu size={18} className="textforeground" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[calc(100%+12px)] left-0 w-full md:hidden bg-black/80 backdrop-blur-3xl rounded-[2rem] border borderforeground/10 p-8 flex flex-col items-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`text-2xl sm:text-3xl transition-colors ${activeSection === link.href ? "text-primary" : "hover:text-primary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/join"
              onClick={() => setIsOpen(false)}
              className="px-10 py-4 bg-primary rounded-full font-bold text-sm tracking-widest uppercase shadow-xl hover:bg-primary transition-all active:scale-95 mt-2"
            >
              Start Rising
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};