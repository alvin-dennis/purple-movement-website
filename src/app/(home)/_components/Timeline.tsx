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
      className="w-full py-20 px-4 relative overflow-hidden"
      id="timeline"
    >
      <div className="max-w-7xl mx-auto relative mb-8 md:mb-12 flex flex-col items-center text-center">
        <MotionDiv variants={fadeInUp}>
          <h2 className="text-foreground leading-tight">
            THE <span className="text-tpm">RISE</span>
          </h2>
        </MotionDiv>
        <MotionDiv variants={fadeInUp} className="w-full text-left">
          <TimelineClient data={timeline} />
        </MotionDiv>
      </div>
    </MotionSection>
  );
};
