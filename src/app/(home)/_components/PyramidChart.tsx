"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { MotionDiv, MotionPath, MotionSection } from "@/components/Framer";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { levels } from "@/data/home";
import {
  fadeIn,
  fadeInDown,
  slideUp,
  staggerContainer,
  staggerSlideUp,
  viewportConfig,
} from "@/lib/animations";

export function PyramidClient() {
  const [activeLevel, setActiveLevel] = useState<number>(3);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <MotionSection
      variants={staggerSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 py-12 md:py-16 px-4"
    >
      <MotionDiv
        variants={slideUp}
        className="relative w-full lg:w-1/2 aspect-square max-w-[480px] flex items-center justify-center"
      >
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full overflow-visible"
          role="img"
          aria-labelledby="pyramid-interactive-title"
        >
          <title id="pyramid-interactive-title">Pyramid - Three Pillars</title>
          <defs>
            <linearGradient id="pyr-active-grad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <filter id="glow-effect" x="-50%" y="-50%" width="200%" height="200%">
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <g
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => scrollToSection("borders")}
            onMouseEnter={() => setActiveLevel(1)}
            onKeyDown={(e) => e.key === "Enter" && scrollToSection("borders")}
          >
            <MotionPath
              d="M300 50 L420 220 L180 220 Z"
              fill={activeLevel === 1 ? "url(#pyr-active-grad)" : "transparent"}
              stroke="#A855F7"
              strokeWidth="2"
              initial={false}
              animate={{
                opacity: activeLevel === 1 ? 1 : 0.3,
                y: activeLevel === 1 ? -10 : 0,
              }}
              filter={activeLevel === 1 ? "url(#glow-effect)" : "none"}
            />
            <text
              x="300"
              y="170"
              textAnchor="middle"
              className={`${
                activeLevel === 1 ? "fill-white" : "fill-foreground/60"
              } text-[14px] font-bold tracking-wider uppercase pointer-events-none transition-colors duration-300`}
            >
              Beyond Borders
            </text>
          </g>

          <g
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => scrollToSection("gatekeepers")}
            onMouseEnter={() => setActiveLevel(2)}
            onKeyDown={(e) => e.key === "Enter" && scrollToSection("gatekeepers")}
          >
            <MotionPath
              d="M170 235 L430 235 L500 370 L100 370 Z"
              fill={activeLevel === 2 ? "url(#pyr-active-grad)" : "transparent"}
              stroke="#A855F7"
              strokeWidth="2"
              initial={false}
              animate={{
                opacity: activeLevel === 2 ? 1 : 0.3,
                y: activeLevel === 2 ? -5 : 0,
              }}
              filter={activeLevel === 2 ? "url(#glow-effect)" : "none"}
            />
            <text
              x="300"
              y="320"
              textAnchor="middle"
              className={`${
                activeLevel === 2 ? "fill-white" : "fill-foreground/60"
              } text-[22px] font-bold tracking-wider uppercase pointer-events-none transition-colors duration-300`}
            >
              Beyond Gatekeepers
            </text>
          </g>

          <g
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => scrollToSection("syllabus")}
            onMouseEnter={() => setActiveLevel(3)}
            onKeyDown={(e) => e.key === "Enter" && scrollToSection("syllabus")}
          >
            <MotionPath
              d="M90 385 L510 385 L580 540 L20 540 Z"
              fill={activeLevel === 3 ? "url(#pyr-active-grad)" : "transparent"}
              stroke="#A855F7"
              strokeWidth="2"
              initial={false}
              animate={{
                opacity: activeLevel === 3 ? 1 : 0.3,
                y: activeLevel === 3 ? 0 : 0,
              }}
              filter={activeLevel === 3 ? "url(#glow-effect)" : "none"}
            />
            <text
              x="300"
              y="485"
              textAnchor="middle"
              className={`${
                activeLevel === 3 ? "fill-white" : "fill-foreground/60"
              } text-[36px] font-bold tracking-wider uppercase pointer-events-none transition-colors duration-300`}
            >
              Beyond Syllabus
            </text>
          </g>
        </svg>
      </MotionDiv>

      <MotionDiv
        variants={fadeIn}
        className="flex-1 flex flex-col justify-center items-center lg:items-start min-h-[360px]"
      >
        <AnimatePresence mode="wait">
          {levels.map(
            (level) =>
              level.id === activeLevel && (
                <MotionDiv
                  key={level.id}
                  variants={slideUp}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="max-w-xl w-full flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
                    PHASE 0{level.id}
                  </span>
                  <h2 className="mb-6 leading-tight text-3xl md:text-4xl">{level.title}</h2>
                  <p className="mb-10 text-base md:text-lg text-muted-foreground leading-relaxed">
                    {level.description}
                  </p>
                  <Link
                    key={level.id}
                    href={level.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center cursor-pointer"
                  >
                    <InteractiveHoverButton>Explore {level.title}</InteractiveHoverButton>
                  </Link>
                </MotionDiv>
              ),
          )}
        </AnimatePresence>
      </MotionDiv>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <span className="text-[22vw] md:text-[26vw] lg:text-[28vw] font-black leading-none uppercase tracking-tighter">
          PILLARS
        </span>
      </div>
    </MotionSection>
  );
}
