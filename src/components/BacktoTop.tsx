"use client";

import { MoveUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MotionDiv } from "@/components/Framer";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showButton) return null;

  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        className="p-2.5 flex justify-center bg-primary rounded-full fixed bottom-5 right-5 md:bottom-8 md:right-8 cursor-pointer hover:bg-primary/90 transition-colors z-50 shadow-lg shadow-primary/30"
        href="#home"
        aria-label="Back to top"
      >
        <MoveUp className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
      </Link>
    </MotionDiv>
  );
}
