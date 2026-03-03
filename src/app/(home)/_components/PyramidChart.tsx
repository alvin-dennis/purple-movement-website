"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { MotionDiv, MotionPath } from "@/components/Framer";
import { Button } from "@/components/ui/button";
import { levels } from "@/data/home";
import { fadeInUp, viewportConfig } from "@/lib/animations";

const PyramidChart = () => {
  const [activeLevel, setActiveLevel] = useState<number>(3);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 py-32 md:py-48 px-6">
      <div className="relative w-full lg:w-1/2 aspect-square max-w-[550px] flex items-center justify-center">
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full overflow-visible"
          role="img"
          aria-labelledby="pyramid-interactive-title"
        >
          <title id="pyramid-interactive-title">Pyramid</title>
          <defs>
            <linearGradient id="pyr-active-grad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#8E00FF" />
              <stop offset="100%" stopColor="#4c008a" />
            </linearGradient>
            <filter id="glow-effect" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="20" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <g
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => scrollToSection("syllabus")}
            onMouseEnter={() => setActiveLevel(3)}
            onKeyDown={(e) => e.key === "Enter" && scrollToSection("syllabus")}
          >
            <MotionPath
              d="M300 50 L420 220 L180 220 Z"
              fill={activeLevel === 3 ? "url(#pyr-active-grad)" : "transparent"}
              stroke="violet"
              strokeWidth="2"
              initial={false}
              animate={{
                opacity: activeLevel === 3 ? 1 : 0.3,
                y: activeLevel === 3 ? -10 : 0,
              }}
              filter={activeLevel === 3 ? "url(#glow-effect)" : "none"}
            />
            <text
              x="300"
              y="170"
              textAnchor="middle"
              className="fill-foreground text-[14px] font-bold tracking-wider uppercase pointer-events-none"
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
              stroke="violet"
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
              className="fill-foreground text-[25px] font-bold tracking-wider uppercase pointer-events-none"
            >
              Beyond Gatekeepers
            </text>
          </g>

          <g
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => scrollToSection("borders")}
            onMouseEnter={() => setActiveLevel(1)}
            onKeyDown={(e) => e.key === "Enter" && scrollToSection("borders")}
          >
            <MotionPath
              d="M90 385 L510 385 L580 540 L20 540 Z"
              fill={activeLevel === 1 ? "url(#pyr-active-grad)" : "transparent"}
              stroke="violet"
              strokeWidth="2"
              initial={false}
              animate={{
                opacity: activeLevel === 1 ? 1 : 0.3,
                y: activeLevel === 1 ? 0 : 0,
              }}
              filter={activeLevel === 1 ? "url(#glow-effect)" : "none"}
            />
            <text
              x="300"
              y="485"
              textAnchor="middle"
              className="fill-foreground text-[40px] font-bold tracking-wider uppercase pointer-events-none"
            >
              Beyond Syllabus
            </text>
          </g>
        </svg>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center lg:items-start min-h-[400px]">
        <AnimatePresence mode="wait">
          {levels.map(
            (level) =>
              level.id === activeLevel && (
                <MotionDiv
                  key={level.id}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  viewport={viewportConfig}
                  className="max-w-xl w-full flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-8 block text-center lg:text-left">
                    PHASE 0{level.id}
                  </span>
                  <h2 className="text-5xl md:text-6xl mb-8 text-center lg:text-left">
                    {level.title}
                  </h2>
                  <p className="mb-12">{level.description}</p>
                  <Link
                    key={level.id}
                    href={level.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 font-bold tracking-widest text-xs"
                  >
                    <Button variant={"default"}>Explore {level.title}</Button>
                  </Link>
                </MotionDiv>
              ),
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PyramidChart;
