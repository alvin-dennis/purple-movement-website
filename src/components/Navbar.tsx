"use client";

import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/common";
import { slideUp, viewportConfig } from "@/lib/animations";
import { MotionDiv } from "./Framer";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-[100] transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div
        className={`flex items-center justify-between px-5 md:px-8 rounded-[2.5rem] border transition-all duration-300 ${
          scrolled
            ? "border-primary/30 bg-background/90 backdrop-blur-xl shadow-lg shadow-primary/10"
            : "border-primary/40 bg-background/80 backdrop-blur-2xl shadow-2xl"
        }`}
      >
        <Link
          href="/"
          className="relative z-10 cursor-pointer flex-shrink-0 transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/logo.png"
            width={120}
            height={48}
            alt="Purple Movement Logo"
            priority
            className="w-auto h-9 md:h-10"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="font-bold text-xs uppercase tracking-[0.25em] relative group py-2 hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <Link href="/join" className="cursor-pointer">
            <Button variant={"default"} className="ml-2 uppercase text-xs tracking-wider">
              Connect
            </Button>
          </Link>
        </div>

        <Button
          variant={"default"}
          size={"icon"}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-10 p-2 rounded-full flex-shrink-0 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            variants={slideUp}
            initial="hidden"
            animate="visible"
            exit="hidden"
            viewport={viewportConfig}
            className="absolute top-[calc(100%+12px)] left-0 w-full md:hidden backdrop-blur-3xl rounded-[2rem] border border-foreground/10 p-6 flex flex-col items-center gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-xl sm:text-2xl transition-colors hover:text-primary cursor-pointer"
              >
                {link.name}
              </Link>
            ))}

            <Link href="/join" onClick={() => setIsOpen(false)} className="cursor-pointer">
              <Button variant={"default"} className="ml-2 uppercase">
                Connect
              </Button>
            </Link>
          </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  );
};
