"use client";

import { Globe, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MotionDiv } from "@/components/Framer";
import { Separator } from "@/components/ui/separator";
import { footer } from "@/data/common";
import { fadeIn, slideUp, staggerSlideUp, viewportConfig } from "@/lib/animations";

export const Footer = () => {
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
    <footer className="relative z-10 w-full border-t border-foreground/10 bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <MotionDiv
          variants={staggerSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-12 text-center md:text-left"
        >
          <div className="md:col-span-3 flex flex-col gap-6 items-center md:items-start">
            <MotionDiv variants={slideUp}>
              <div className="space-y-4">
                <Image
                  src="/logo.png"
                  width={160}
                  height={60}
                  alt="Purple Movement Logo"
                  className="w-auto h-10 mx-auto md:mx-0"
                />
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                  Empowering individuals and organizations to rise beyond their limits.
                </p>
              </div>
            </MotionDiv>
            <MotionDiv variants={slideUp} className="flex gap-2 justify-center md:justify-start">
              {footer.socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-foreground/15 text-foreground/60 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                  >
                    <Icon size={16} />
                  </Link>
                );
              })}
            </MotionDiv>
          </div>

          <MotionDiv variants={slideUp} className="md:col-span-3 space-y-4">
            <h4 className="tracking-[0.15em] text-foreground/50 uppercase text-xs font-semibold">
              Our Verticals
            </h4>
            <nav className="flex flex-col gap-3 items-center md:items-start">
              {footer.verticals.map((v) => (
                <Link
                  key={v.label}
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-foreground/60 hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  {v.label}
                </Link>
              ))}
            </nav>
          </MotionDiv>

          <MotionDiv variants={slideUp} className="md:col-span-3 space-y-4">
            <h4 className="tracking-[0.15em] text-foreground/50 uppercase text-xs font-semibold">
              Navigate
            </h4>
            <nav className="flex flex-col gap-3 items-center md:items-start">
              {footer.navLinks.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  onClick={(e) => handleLinkClick(e, l.href)}
                  className="text-base font-medium text-foreground/60 hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  {l.name}
                </Link>
              ))}
            </nav>
          </MotionDiv>

          <MotionDiv variants={slideUp} className="md:col-span-3 space-y-4">
            <h4 className="tracking-[0.15em] text-foreground/50 uppercase text-xs font-semibold">
              Support
            </h4>
            <nav className="flex flex-col gap-3 items-center md:items-start">
              {footer.supportLinks.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  className="text-base font-medium text-foreground/60 hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  {l.name}
                </Link>
              ))}
            </nav>
          </MotionDiv>
        </MotionDiv>

        <Separator className="bg-foreground/10 mb-8" />

        <MotionDiv
          variants={fadeIn}
          className="flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-4"
        >
          <p className="text-xs font-semibold tracking-[0.1em] text-foreground/40 uppercase">
            {footer.bottomBar.copyright}
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <Link
              href={footer.bottomBar.email.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors cursor-pointer"
            >
              <Mail className="text-primary w-4 h-4" />
              <span className="font-medium">{footer.bottomBar.email.label}</span>
            </Link>
            <Link
              href={footer.bottomBar.site.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors cursor-pointer"
            >
              <Globe className="text-primary w-4 h-4" />
              <span className="font-medium">{footer.bottomBar.site.label}</span>
            </Link>
          </div>
        </MotionDiv>
      </div>
    </footer>
  );
};
