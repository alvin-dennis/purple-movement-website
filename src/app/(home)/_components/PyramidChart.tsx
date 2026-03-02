"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface LevelData {
  id: number;
  title: string;
  description: string;
  slug: string;
}

const levels: LevelData[] = [
  {
    id: 3,
    title: "Beyond Syllabus",
    slug: "syllabus",
    description: "Learning is a starting point, not a rulebook. Real growth happens outside the lines and prescribed paths.",
  },
  {
    id: 2,
    title: "Beyond Gatekeepers",
    slug: "gatekeepers",
    description: "We don't hold opportunities; we share them. Ensuring success is open, fair, and accessible to every dreamer.",
  },
  {
    id: 1,
    title: "Beyond Borders",
    slug: "borders",
    description: "Removing the artificial barriers that separate talent from opportunity. Connecting the world through purpose.",
  },
];

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
        <svg viewBox="0 0 600 600" className="w-full h-full overflow-visible" role="img" aria-labelledby="pyramid-interactive-title">
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

          {/* Level 3: Syllabus (Top Triangle) */}
          <g
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => scrollToSection("syllabus")}
            onMouseEnter={() => setActiveLevel(3)}
            onKeyDown={(e) => e.key === 'Enter' && scrollToSection("syllabus")}
          >
            <motion.path
              d="M300 50 L420 220 L180 220 Z"
              fill={activeLevel === 3 ? "url(#pyr-active-grad)" : "transparent"}
              stroke="#8E00FF"
              strokeWidth="1.5"
              initial={false}
              animate={{
                opacity: activeLevel === 3 ? 1 : 0.3,
                y: activeLevel === 3 ? -10 : 0
              }}
              filter={activeLevel === 3 ? "url(#glow-effect)" : "none"}
            />
            <text x="300" y="170" textAnchor="middle" className="fill-white text-[12px] font-bold tracking-widest uppercase pointer-events-none">
              SYLLABUS
            </text>
          </g>

          {/* Level 2: Gatekeepers (Middle Trapezoid) */}
          <g
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => scrollToSection("gatekeepers")}
            onMouseEnter={() => setActiveLevel(2)}
            onKeyDown={(e) => e.key === 'Enter' && scrollToSection("gatekeepers")}
          >
            <motion.path
              d="M170 235 L430 235 L500 370 L100 370 Z"
              fill={activeLevel === 2 ? "url(#pyr-active-grad)" : "transparent"}
              stroke="#8E00FF"
              strokeWidth="1.5"
              initial={false}
              animate={{
                opacity: activeLevel === 2 ? 1 : 0.3,
                y: activeLevel === 2 ? -5 : 0
              }}
              filter={activeLevel === 2 ? "url(#glow-effect)" : "none"}
            />
            <text x="300" y="315" textAnchor="middle" className="fill-white text-[14px] font-bold tracking-widest uppercase pointer-events-none">
              GATEKEEPERS
            </text>
          </g>

          {/* Level 1: Borders (Base Trapezoid) */}
          <g
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => scrollToSection("borders")}
            onMouseEnter={() => setActiveLevel(1)}
            onKeyDown={(e) => e.key === 'Enter' && scrollToSection("borders")}
          >
            <motion.path
              d="M90 385 L510 385 L580 540 L20 540 Z"
              fill={activeLevel === 1 ? "url(#pyr-active-grad)" : "transparent"}
              stroke="#8E00FF"
              strokeWidth="1.5"
              initial={false}
              animate={{
                opacity: activeLevel === 1 ? 1 : 0.3,
                y: activeLevel === 1 ? 0 : 0
              }}
              filter={activeLevel === 1 ? "url(#glow-effect)" : "none"}
            />
            <text x="300" y="475" textAnchor="middle" className="fill-white text-[16px] font-bold tracking-widest uppercase pointer-events-none">
              BORDERS
            </text>
          </g>
        </svg>
      </div>

      {/* Content Side: Narrative Focus */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start min-h-[400px]">
        <AnimatePresence mode="wait">
          {levels.map((level) => level.id === activeLevel && (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, scale: 0.98, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl w-full flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <span className="text-purple-500 font-bold tracking-[0.5em] uppercase text-xs mb-8 block">
                PHASE 0{level.id}
              </span>
              <h2 className="text-5xl md:text-7xl text-white mb-8">
                {level.title}
              </h2>
              <p className="mb-12">
                {level.description}
              </p>
              <button
                type="button"
                onClick={() => scrollToSection(level.slug)}
                className="group flex items-center gap-4 text-white font-bold tracking-widest text-xs"
              >
                RECLAIM THIS
                <div className="w-12 h-[1px] bg-purple-600 group-hover:w-20 transition-all duration-500" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PyramidChart;
