"use client";

import { MotionDiv } from "@/components/Framer";
import { vision } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const VisionMission = () => {
  return (
    <section
      id="about"
      aria-label="Vision and Mission Section"
      className="relative w-full py-24 md:py-40 px-6 overflow-hidden border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-20">
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-start w-full md:w-[45%]"
        >
          <MotionDiv variants={fadeInUp} className="mb-8">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">
              01 / VISION
            </span>
          </MotionDiv>

          <MotionDiv variants={fadeInUp}>
            <h2 className="mb-10 lg:text-7xl">Our {vision.vision.title}</h2>
          </MotionDiv>

          <MotionDiv variants={fadeInUp}>
            <p className="md:text-xl text-secondary-foreground leading-relaxed italic border-l-2 border-primary/30 pl-8">
              {vision.vision.text}
            </p>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-start md:items-end w-full md:w-[45%] md:text-right md:mt-40"
        >
          <MotionDiv variants={fadeInUp} className="mb-8">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">
              02 / MISSION
            </span>
          </MotionDiv>

          <MotionDiv variants={fadeInUp}>
            <h2 className="mb-10 lg:text-7xl">Our {vision.mission.title}</h2>
          </MotionDiv>

          <MotionDiv variants={fadeInUp}>
            <p className="md:text-xl text-secondary-foreground leading-relaxed md:ml-auto">
              {vision.mission.text}
            </p>
          </MotionDiv>
        </MotionDiv>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
        <span className="text-[30vw] font-black leading-none uppercase tracking-tighter">
          ABOUT
        </span>
      </div>
    </section>
  );
};
