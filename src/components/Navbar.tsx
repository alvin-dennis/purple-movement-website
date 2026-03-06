"use client";

import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/common";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { MotionDiv } from "./Framer";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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
    <nav className="absolute top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-[100]">
      <div className="flex items-center justify-between px-6 md:px-10 py-3 rounded-[3rem] border borderforeground/5 shadow-2xl bg-black/60 backdrop-blur-2xl border-primary/20">
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

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className={`font-bold text-xs uppercase tracking-[0.3em] relative group py-2 hover:text-primary transition-colors`}
            >
              {link.name}
            </Link>
          ))}

          <Link href="/join">
            <Button variant={"default"} className="ml-2 uppercase">
              Connect
            </Button>
          </Link>
        </div>

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

      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            exit="hidden"
            viewport={viewportConfig}
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
                className={`text-2xl sm:text-3xl transition-colors hover:text-primary`}
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
          </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  );
};
