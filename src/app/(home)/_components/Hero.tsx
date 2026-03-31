"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { type TouchEvent, useEffect, useRef, useState, type WheelEvent } from "react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { hero } from "@/data/home";

export function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobileState, setIsMobileState] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("wheel", handleWheel as unknown as EventListener, { passive: false });
    window.addEventListener("scroll", handleScroll as EventListener);
    window.addEventListener("touchstart", handleTouchStart as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener("touchmove", handleTouchMove as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener("touchend", handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener("wheel", handleWheel as unknown as EventListener);
      window.removeEventListener("scroll", handleScroll as EventListener);
      window.removeEventListener("touchstart", handleTouchStart as unknown as EventListener);
      window.removeEventListener("touchmove", handleTouchMove as unknown as EventListener);
      window.removeEventListener("touchend", handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen transition-colors duration-700 ease-in-out overflow-x-hidden"
      id="home"
    >
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            {!videoLoaded && (
              <Image
                src="/assets/home/hero.webp"
                alt="Hero fallback"
                width={1280}
                height={1220}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <video
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                videoLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <source src="/assets/home/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/home/hero.webp"
                    alt="We Are the Purple Movement"
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/50 rounded-xl"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col mix-blend-difference">
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-tpm transition-none"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  We Are the
                </motion.h2>
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-tpm transition-none"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  Purple Movement
                </motion.h2>
                <motion.p
                  className="max-w-4xl text-2xl font-bold text-secondary transition-none"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {hero.subtext}
                </motion.p>
                <motion.div
                  className="max-w-4xl mx-auto flex flex-col items-center md:items-start text-center md:text-left"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  <Link href="/join">
                    <InteractiveHoverButton className="group relative">
                      Join Us
                    </InteractiveHoverButton>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
