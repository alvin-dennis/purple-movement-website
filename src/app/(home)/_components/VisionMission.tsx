"use client";

import { MotionDiv } from "@/components/Framer";
import { vision } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const VisionMission = () => {
  return (
    <section
      id="about"
      aria-label="Vision and Mission Section"
      className="relative w-full py-20 md:py-40 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-16 md:gap-20 text-center md:text-left">
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-center md:items-start w-full md:w-[45%]"
        >
          <MotionDiv variants={fadeInUp} className="mb-6">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">
              01 / VISION
            </span>
          </MotionDiv>

          <MotionDiv variants={fadeInUp}>
            <h2 className="mb-8 text-4xl sm:text-5xl lg:text-7xl">Our {vision.vision.title}</h2>
          </MotionDiv>
          <MotionDiv variants={fadeInUp}>
            <p className="text-base md:text-xl text-secondary-foreground leading-relaxed italic border-l-0 md:border-l-2 md:border-primary/30 border-primary/30 md:pl-8 max-w-xl">
              {vision.vision.text}
            </p>
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-center md:items-end w-full md:w-[45%] md:text-right md:mt-40"
        >
          <MotionDiv variants={fadeInUp} className="mb-6">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">
              02 / MISSION
            </span>
          </MotionDiv>
          <MotionDiv variants={fadeInUp}>
            <h2 className="mb-8 text-4xl sm:text-5xl lg:text-7xl">Our {vision.mission.title}</h2>
          </MotionDiv>
          <MotionDiv variants={fadeInUp}>
            <p className="text-base md:text-xl text-secondary-foreground italic leading-relaxed max-w-xl border-r-0 md:border-r-2 md:border-primary/30 border-primary/30 md:pr-8">
              {vision.mission.text}
            </p>
          </MotionDiv>
        </MotionDiv>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <span className="text-[28vw] md:text-[30vw] font-black leading-none uppercase tracking-tighter">
          ABOUT
        </span>
      </div>
    </section>
  );
};
