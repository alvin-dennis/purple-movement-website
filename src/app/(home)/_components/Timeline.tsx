"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { MotionDiv } from "@/components/Framer";
import { timeline } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="w-full py-24 sm:py-32 md:py-48 px-6 relative overflow-hidden bg-background"
      id="timeline"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="relative mb-24 md:mb-40">
          <MotionDiv
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-4 md:mb-6 block"
          >
            OUR EVOLUTION
          </MotionDiv>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground">
            THE <span className="text-tpm">RISE</span>
          </h2>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Desktop Wavy Path */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
            <svg
              viewBox="0 0 1000 400"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-full opacity-20"
            >
              <path
                d="M 0 200 C 150 50, 350 350, 500 200 C 650 50, 850 350, 1000 200"
                stroke="url(#gradient-line)"
                strokeWidth="4"
                strokeDasharray="12 12"
              />
              <motion.path
                d="M 0 200 C 150 50, 350 350, 500 200 C 650 50, 850 350, 1000 200"
                stroke="url(#gradient-line)"
                strokeWidth="6"
                style={{ pathLength }}
              />
              <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="var(--chart-4)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Mobile Vertical Path */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-[2px] pointer-events-none z-0">
            <div className="h-full w-full bg-primary/20 relative">
              <motion.div
                className="absolute top-0 left-0 w-full bg-primary origin-top shadow-[0_0_15px_var(--primary)]"
                style={{ scaleY: scrollYProgress }}
              />
            </div>
          </div>

          {/* Timeline Items */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0">
            {timeline.map((item, idx) => (
              <TimelineItem key={item.title} item={item} index={idx} total={timeline.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index, total }: { item: any; index: number; total: number }) => {
  // Manual offsets for the wavy effect on desktop
  const yOffset = index % 2 === 0 ? "-20%" : "20%";

  return (
    <MotionDiv
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`relative p-4 flex flex-col items-center md:items-start transition-all duration-700 ${
        index % 2 === 0 ? "md:-translate-y-12" : "md:translate-y-12"
      }`}
    >
      {/* Connector Point */}
      <div className="absolute top-0 left-8 md:left-0 md:top-1/2 md:-translate-y-1/2 z-20">
        <div className="w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(152,16,250,0.4)]">
          <div className="w-2 h-2 rounded-full bg-primary" />
        </div>
      </div>

      {/* Content Card */}
      <div className="ml-16 md:ml-0 md:mt-16 w-full group">
        <div className="relative p-6 sm:p-8 border border-white/5 bg-card/40 backdrop-blur-xl rounded-2xl hover:border-primary/40 transition-all duration-500 group-hover:-translate-y-2">
          {/* Year/Badge */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              {item.status}
            </span>
            <span className="text-xs font-bold text-foreground/30 uppercase tracking-widest">
              {item.year}
            </span>
          </div>

          <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors">
            {item.title}
          </h3>

          <p className="text-sm sm:text-base text-foreground/50 leading-relaxed font-medium">
            {item.description}
          </p>

          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-2xl pointer-events-none">
            <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-primary/5 rotate-45 group-hover:bg-primary/10 transition-colors" />
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};
