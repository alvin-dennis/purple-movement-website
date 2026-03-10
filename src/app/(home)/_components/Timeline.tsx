"use client";

import { MotionDiv, MotionSection } from "@/components/Framer";
import { TimelineClient } from "@/components/ui/timeline";
import { timeline } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const Timeline = () => {
  return (
    <MotionSection
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full py-24 sm:py-32 md:py-48 px-6 relative overflow-hidden bg-background"
      id="timeline"
    >
      <div className="max-w-7xl mx-auto relative mb-8 md:mb-12 flex flex-col items-center sm:items-start text-center sm:text-left">
        <MotionDiv
          variants={fadeInUp}
          className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-4 md:mb-6 block"
        >
          OUR EVOLUTION
        </MotionDiv>
        <MotionDiv variants={fadeInUp}>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-tight">
            THE <span className="text-tpm">RISE</span>
          </h2>
        </MotionDiv>
        <MotionDiv variants={fadeInUp} className="w-full mt-12 md:mt-24 text-left">
          <TimelineClient data={timeline} />
        </MotionDiv>
      </div>
    </MotionSection>
  );
};
