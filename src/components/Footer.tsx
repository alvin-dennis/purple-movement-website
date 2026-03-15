"use client";

import { Globe, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { footer } from "@/data/common";

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
    <footer className="relative z-10 w-full bg-background border-t border-foreground/10">
      <div className="mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-14 text-center md:text-left">
          <div className="md:col-span-3 flex flex-col gap-8 items-center md:items-start">
            <div className="space-y-6">
              <Image
                src="/logo.png"
                width={160}
                height={60}
                alt="Purple Movement Logo"
                className="brightness-125 w-auto h-12 mx-auto md:mx-0"
              />
              <p className="text-sm text-foreground leading-relaxed">
                Empowering individuals and organizations to rise beyond their limits.
              </p>
            </div>
            <div className="flex gap-3 justify-center md:justify-start">
              {footer.socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-foreground/20 text-foreground/70 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="md:col-span-3 space-y-6">
            <h4 className="tracking-[0.15em] text-foreground/50 uppercase">Our Verticals</h4>
            <nav className="flex flex-col gap-4 items-center md:items-start">
              {footer.verticals.map((v) => (
                <Link
                  key={v.label}
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  {v.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="md:col-span-3 space-y-6">
            <h4 className="tracking-[0.15em] text-foreground/50 uppercase">Navigate</h4>
            <nav className="flex flex-col gap-4 items-center md:items-start">
              {footer.navLinks.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  onClick={(e) => handleLinkClick(e, l.href)}
                  className="text-xl font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  {l.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="md:col-span-3 space-y-6">
            <h4 className="tracking-[0.15em] text-foreground/50 uppercase">Support</h4>
            <nav className="flex flex-col gap-4 items-center md:items-start">
              {footer.supportLinks.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  className="text-xl font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  {l.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="bg-foreground/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-6">
          <p className="text-xs font-semibold tracking-[0.1em] text-foreground/40 uppercase">
            {footer.bottomBar.copyright}
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition">
              <Mail className="text-primary" />
              <Link href={footer.bottomBar.email.href} target="_blank" rel="noopener noreferrer">
                <span className="font-medium">{footer.bottomBar.email.label}</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition">
              <Globe className="text-primary" />
              <Link href={footer.bottomBar.site.href} target="_blank" rel="noopener noreferrer">
                <span className="font-medium">{footer.bottomBar.site.label}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
