"use client";

import { MotionDiv, MotionSection } from "@/components/Framer";
import { TimelineClient } from "@/components/ui/timeline";
import { timeline } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const Timeline = ({ forceVisible = false }: { forceVisible?: boolean }) => {
  return (
    <MotionSection
      variants={staggerContainer}
      initial={forceVisible ? "visible" : "hidden"}
      {...(forceVisible ? {} : { whileInView: "visible", viewport: viewportConfig })}
      className="w-full px-4 relative overflow-hidden"
      id="timeline"
    >
      <div className="max-w-7xl mx-auto relative mb-8 flex flex-col items-center text-center">
        <MotionDiv
          variants={fadeInUp}
          {...(forceVisible ? { animate: "visible", initial: "visible" } : {})}
        >
          <h2 className="text-foreground leading-tight">
            THE <span className="text-tpm">RISE</span>
          </h2>
        </MotionDiv>
        <MotionDiv
          variants={fadeInUp}
          {...(forceVisible ? { animate: "visible", initial: "visible" } : {})}
          className="w-full text-left"
        >
          <TimelineClient data={timeline} forceVisible={forceVisible} />
        </MotionDiv>
      </div>
    </MotionSection>
  );
};
